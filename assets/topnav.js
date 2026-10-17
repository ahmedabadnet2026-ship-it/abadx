(function(){
  if (window.__axTopnav) return; window.__axTopnav = true;
  const page = (document.body.getAttribute('data-ax-page') || '').toLowerCase()
    || (location.pathname.split('/').pop() || 'portal.html').replace(/\.html.*/,'') || 'portal';

  const I = {
    academy:'<svg viewBox="0 0 24 24"><path d="M3 9l9-5 9 5-9 5-9-5z"/><path d="M5 11v5l7 4 7-4v-5"/><path d="M12 14v6"/></svg>',
    ctf:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18"/><path d="m7 12 2 2-2 2"/><path d="M13 16h4"/></svg>',
    labs:'<svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="5" rx="1.5"/><rect x="4" y="10" width="16" height="5" rx="1.5"/><path d="M8 18v-3h8v3"/><path d="M6 21h12"/></svg>',
    library:'<svg viewBox="0 0 24 24"><path d="M5 4h5a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H5z"/><path d="M19 4h-5a3 3 0 0 0-3 3v13a3 3 0 0 1 3-3h5z"/></svg>',
    self:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6"/></svg>',
    burger:'<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'
  };

  function tab(id, href, ar, en, active){
    return `<a class="ax-tab${active?' active':''}" href="${href}" data-tab="${id}">${I[id]||''}<span class="i18n-ar">${ar}</span><span class="en i18n-en">${en}</span></a>`;
  }

  const labsDrop = `
    <div class="ax-drop" role="menu">
      <div>
        <h4><span class="i18n-ar">مختبر INE</span><span class="i18n-en">INE Lab</span></h4>
        <p class="i18n-ar">مسارات عملية بأسلوب شهادات INE</p>
        <p class="i18n-en en" style="direction:ltr;text-align:left">Hands-on tracks in the style of INE certs</p>
      </div>
      <div class="ax-drop-side">
        <a href="labs.html?open=1">
          <div class="path">INE → eJPT Labs → Exam Lab</div>
          <strong>Exam Lab</strong>
          <p class="i18n-ar">بيئة كاملة + Kali في المتصفح + أسئلة تدريب</p>
          <p class="i18n-en en" style="direction:ltr;text-align:left">Full environment + browser Kali + practice Qs</p>
        </a>
        <a href="labs.html?open=dc1">
          <div class="path">INE → VulnHub Labs → DC-1</div>
          <strong>DC-1</strong>
          <p class="i18n-ar">هدف VulnHub على 172.16.10.40 — هجوم من Kali</p>
          <p class="i18n-en en" style="direction:ltr;text-align:left">VulnHub target at 172.16.10.40 — attack from Kali</p>
        </a>
        <a href="labs.html"><span class="i18n-ar">كل المختبرات</span><span class="i18n-en">All labs</span></a>
      </div>
    </div>`;

  const el = document.createElement('header');
  el.className = 'ax-topnav';
  el.id = 'axTopnav';
  el.innerHTML = `
    <div class="ax-topnav-inner">
      <a class="ax-logo" href="portal.html"><img src="assets/brand/abadx-logo.png" alt="Abad X"><span>Abad <b>X</b></span></a>
      <nav class="ax-tabs" aria-label="Main">
        ${tab('academy','academy.html','الأكاديمية','Academy', page==='academy'||page==='specialty'||page==='vendor')}
        ${tab('ctf','ctf.html','تحديات CTF','CTF', page==='ctf')}
        <div class="ax-tab has-drop${page==='labs'?' active':''}" data-tab="labs">
          <a href="labs.html" style="display:flex;flex-direction:column;align-items:center;gap:3px;color:inherit;text-decoration:none">
            ${I.labs}<span class="i18n-ar">المختبر</span><span class="en i18n-en">Labs</span>
          </a>
          ${labsDrop}
        </div>
        ${tab('library','library.html','المكتبة','Library', page==='library')}
        ${tab('self','self-learning.html','تعلّم ذاتي','Self-Learning', page==='self-learning'||page==='room')}
      </nav>
      <div class="ax-actions">
        <button type="button" class="ax-lang" id="axLangBtn" aria-label="Language">EN</button>
        <a class="ax-btn login" href="login.html"><span class="i18n-ar">تسجيل الدخول</span><span class="i18n-en">Login</span></a>
        <a class="ax-btn signup" href="signup.html"><span class="i18n-ar">إنشاء حساب</span><span class="i18n-en">Sign up</span></a>
        <button type="button" class="ax-burger" id="axBurger" aria-label="Menu" aria-expanded="false">${I.burger}</button>
      </div>
    </div>
    <div class="ax-mobile" id="axMobile">
      <a class="${page.match(/academy|specialty|vendor/)?'active':''}" href="academy.html">${I.academy} <span class="i18n-ar">الأكاديمية</span><span class="i18n-en">Academy</span></a>
      <a class="${page==='ctf'?'active':''}" href="ctf.html">${I.ctf} <span class="i18n-ar">تحديات CTF</span><span class="i18n-en">CTF</span></a>
      <a class="${page==='labs'?'active':''}" href="labs.html">${I.labs} <span class="i18n-ar">المختبر</span><span class="i18n-en">Labs</span></a>
      <a class="ax-msub" href="labs.html?open=1">INE → eJPT → Exam Lab</a>
      <a class="ax-msub" href="labs.html?open=dc1">INE → VulnHub → DC-1</a>
      <a class="${page==='library'?'active':''}" href="library.html">${I.library} <span class="i18n-ar">المكتبة</span><span class="i18n-en">Library</span></a>
      <a class="${page.match(/self-learning|room/)?'active':''}" href="self-learning.html">${I.self} <span class="i18n-ar">تعلّم ذاتي</span><span class="i18n-en">Self-Learning</span></a>
      <div class="ax-mactions">
        <a class="ax-btn login" href="login.html"><span class="i18n-ar">تسجيل الدخول</span><span class="i18n-en">Login</span></a>
        <a class="ax-btn signup" href="signup.html"><span class="i18n-ar">إنشاء حساب</span><span class="i18n-en">Sign up</span></a>
      </div>
    </div>`;

  document.body.prepend(el);
  document.body.classList.add('has-ax-nav');
  // hide legacy floaters
  document.querySelectorAll('body > a.out, .lang-fab, #langToggle, button[aria-label="Language"]').forEach(n=>{ if(!n.closest('#axTopnav')) n.style.display='none'; });

  // Lang toggle (reuse abadx-lang)
  const langBtn = el.querySelector('#axLangBtn');
  function syncLangBtn(){
    const l = document.documentElement.getAttribute('data-lang') || 'ar';
    langBtn.textContent = l === 'en' ? 'AR' : 'EN';
  }
  syncLangBtn();
  langBtn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-lang') || 'ar';
    const next = cur === 'en' ? 'ar' : 'en';
    try { localStorage.setItem('abadx-lang', next); } catch(e){}
    document.documentElement.lang = next;
    document.documentElement.dir = next === 'en' ? 'ltr' : 'rtl';
    document.documentElement.setAttribute('data-lang', next);
    syncLangBtn();
    // trigger existing i18n if present
    window.dispatchEvent(new Event('abadx-lang-change'));
    if (window.applyAbadXi18n) try { window.applyAbadXi18n(); } catch(e){}
  });

  // Labs dropdown hover/click
  const labsTab = el.querySelector('.ax-tab.has-drop');
  if (labsTab) {
    let tmr;
    labsTab.addEventListener('mouseenter', () => { clearTimeout(tmr); labsTab.classList.add('open'); });
    labsTab.addEventListener('mouseleave', () => { tmr = setTimeout(() => labsTab.classList.remove('open'), 180); });
    labsTab.addEventListener('click', (e) => {
      if (window.matchMedia('(max-width:900px)').matches) return;
      if (e.target.closest('.ax-drop')) return;
      // allow navigation via inner <a href=labs.html>
    });
  }

  const burger = el.querySelector('#axBurger');
  burger.addEventListener('click', () => {
    const open = el.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
