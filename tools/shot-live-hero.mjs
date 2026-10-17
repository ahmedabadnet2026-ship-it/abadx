import puppeteer from '/home/box/.local/lib/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js';
const [,, URL, PREFIX] = process.argv;
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new',
  args: ['--no-sandbox','--disable-setuid-sandbox','--hide-scrollbars'] });
for (const [tag, w, h] of [['desktop',1280,800],['mobile',390,844]]) {
  const page = await browser.newPage();
  const errs = [];
  page.on('pageerror', e => errs.push(String(e)));
  page.on('console', m => { if (m.type()==='error') errs.push(m.text()); });
  await page.setViewport({ width: w, height: h, deviceScaleFactor: 2 });
  await page.goto(URL, { waitUntil: 'networkidle0', timeout: 45000 });
  await new Promise(r => setTimeout(r, 11000));
  const info = await page.evaluate(() => {
    const img = document.querySelector('.ax-topnav .ax-logo img');
    const inner = document.querySelector('.ax-topnav-inner');
    return {
      h1: document.getElementById('arTyped')?.textContent,
      sub: document.getElementById('subTyped')?.textContent,
      en: document.getElementById('enTyped')?.textContent,
      mockup: /MOCKUP|NOT LIVE/.test(document.body.innerText), replay: !!document.getElementById('replay'),
      tabs: [...document.querySelectorAll('#tabs span')].map(s=>s.textContent).join('/'),
      demo: document.querySelector('#term .bar em')?.textContent,
      logoH: img && img.getBoundingClientRect().height, logoSrc: img && getComputedStyle(img).content,
      navH: inner && inner.getBoundingClientRect().height,
      logoText: document.querySelector('.ax-topnav .ax-logo span')?.innerText,
      hOverflow: document.documentElement.scrollWidth > innerWidth,
    };
  });
  console.log(tag, JSON.stringify(info), 'errors:', JSON.stringify(errs));
  await page.screenshot({ path: `${PREFIX}-${tag}.png` });
  await page.close();
}
await browser.close();
