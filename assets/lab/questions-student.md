# eJPT-style Lab Questions / أسئلة اللاب بأسلوب eJPT
**Original questions only — not from the real exam (NDA).**  
~35 practice questions (answers omitted). Verified against the built lab.

**Domains:** AM = Assessment Methodologies · HNA = Host & Network Auditing · HNP = Host & Network Pentesting · WAP = Web App Pentesting

---

## Q1 — DMZ host discovery
| | |
|--|--|
| **EN** | From Kali (`10.10.0.10`), run an ICMP/host discovery scan of `172.16.10.0/24`. How many hosts respond as up (excluding your gateway if you prefer to count only targets)? List their IPs. |
| **AR** | من Kali (`10.10.0.10`)، اعمل host discovery على `172.16.10.0/24`. كام جهاز ظاهر؟ اكتب الـ IPs. |
| **Machine** | lab-kali → DMZ | **Domain** | AM / HNA |

## Q2 — Metasploitable SSH
| | |
|--|--|
| **EN** | On `172.16.10.20`, which TCP port is open for remote shell access, and what is the default username commonly used on Metasploitable2? |
| **AR** | على `172.16.10.20`، أنهي بورت مفتوح للـ SSH؟ وإيه اليوزر الافتراضي الشائع لـ Metasploitable2؟ |
| **Machine** | lab-ms2 | **Domain** | HNA |

## Q3 — Metasploitable HTTP
| | |
|--|--|
| **EN** | Confirm with nmap that `172.16.10.20` serves HTTP. Which port is open for HTTP? |
| **AR** | تأكد بـ nmap إن `172.16.10.20` فيه HTTP. على أنهي بورت؟ |
| **Machine** | lab-ms2 | **Domain** | HNA |

## Q4 — WordPress identification
| | |
|--|--|
| **EN** | Browse `http://172.16.10.30/`. What is the site title, and which CMS is in use? |
| **AR** | افتح `http://172.16.10.30/`. إيه عنوان الموقع؟ وإيه الـ CMS؟ |
| **Machine** | lab-www | **Domain** | WAP / HNA |

## Q5 — Weak WordPress admin
| | |
|--|--|
| **EN** | Log in to `http://172.16.10.30/wp-login.php` using a weak administrator password commonly tried in labs. What username/password works? |
| **AR** | ادخل على `wp-login.php` بكلمة مرور ضعيفة. إيه اليوزر/الباسورد؟ |
| **Machine** | lab-www | **Domain** | WAP |

## Q6 — Vulnerable plugin
| | |
|--|--|
| **EN** | Which installed WordPress plugin (name + version) is known for unauthenticated RCE and is active on the lab web host? (Hint: check `/wp-content/plugins/`.) |
| **AR** | أنهي بلجن WordPress (اسم + إصدار) معروف بـ RCE بدون مصادقة ومفعّل على السيرفر؟ |
| **Machine** | lab-www | **Domain** | WAP |

## Q7 — Web flag after RCE
| | |
|--|--|
| **EN** | After gaining code execution as the web user (e.g. via the vulnerable plugin), read the flag under the uploads directory. What is the flag string? |
| **AR** | بعد ما تاخد RCE كـ web user، اقرأ الفلاج من مجلد الـ uploads. إيه نص الفلاج؟ |
| **Machine** | lab-www | **Domain** | WAP / HNP |

## Q8 — Credential discovery on www
| | |
|--|--|
| **EN** | A deployment notes file was left web-accessible under uploads. What is its URL path (from web root), and which SSH username/password does it reveal for the pivot host? |
| **AR** | فيه ملف notes متاح من الويب تحت uploads. إيه المسار؟ وإيه يوزر/باسورد الـ SSH للـ pivot؟ |
| **Machine** | lab-www → lab-pivot | **Domain** | AM / WAP |

## Q9 — Pivot SSH flag
| | |
|--|--|
| **EN** | SSH to `172.16.10.50` with the credentials found on the web server. What is the contents of `/home/deploy/flag.txt`? |
| **AR** | اعمل SSH على `172.16.10.50` بالـ credentials من الويب. إيه محتوى `/home/deploy/flag.txt`؟ |
| **Machine** | lab-pivot | **Domain** | HNP |

## Q10 — Dual-homed interface
| | |
|--|--|
| **EN** | On the pivot host, what is the IPv4 address of the second (internal) interface? |
| **AR** | على جهاز الـ pivot، إيه عنوان الـ IP للكارت الداخلي (التاني)؟ |
| **Machine** | lab-pivot | **Domain** | HNA / HNP |

## Q11 — Internal not directly reachable
| | |
|--|--|
| **EN** | From Kali on the ATTACK network, try to ping `10.20.20.20` directly (no tunnel). Does it succeed? |
| **AR** | من Kali على شبكة ATTACK، جرب ping مباشرة لـ `10.20.20.20` من غير tunnel. بينجح؟ |
| **Machine** | lab-kali / isolation | **Domain** | AM / HNA |

## Q12 — Reach internal via pivot
| | |
|--|--|
| **EN** | After SSH access to the pivot, fetch `http://10.20.20.20:8080/admin/flag.txt` (from the pivot or via LocalForward). What flag do you get? |
| **AR** | بعد SSH على الـ pivot، اجلب `http://10.20.20.20:8080/admin/flag.txt`. إيه الفلاج؟ |
| **Machine** | lab-int-linux via lab-pivot | **Domain** | HNP |

## Q13 — Internal service port
| | |
|--|--|
| **EN** | Which TCP port does the internal inventory HTTP service listen on? |
| **AR** | خدمة الـ HTTP الداخلية بتسمع على أنهي بورت؟ |
| **Machine** | lab-int-linux | **Domain** | HNA |

## Q14 — Routing policy on lab-gw
| | |
|--|--|
| **EN** | lab-gw forwards traffic between which two lab segments only? Name the segments (or networks). |
| **AR** | lab-gw بيسمح بالتمرير بين أنهي شبكتين بس في اللاب؟ |
| **Machine** | lab-gw | **Domain** | HNA |

## Q15 — Attacker IP
| | |
|--|--|
| **EN** | What is the static IPv4 address assigned to the student Kali machine on LAB-ATTACK? |
| **AR** | إيه الـ IP الثابت لجهاز Kali بتاع الطالب على LAB-ATTACK؟ |
| **Machine** | lab-kali | **Domain** | AM |

## Q16 — ATTACK gateway
| | |
|--|--|
| **EN** | What is the default gateway IPv4 for hosts on LAB-ATTACK? |
| **AR** | إيه الـ default gateway لشبكة LAB-ATTACK؟ |
| **Machine** | lab-gw / lab-kali | **Domain** | HNA |

## Q17 — DMZ gateway / lab-gw DMZ IP
| | |
|--|--|
| **EN** | What IPv4 does lab-gw use on the DMZ segment? |
| **AR** | إيه IP بتاع lab-gw على شبكة الـ DMZ؟ |
| **Machine** | lab-gw | **Domain** | HNA |

## Q18 — Metasploitable default password
| | |
|--|--|
| **EN** | After identifying SSH on `172.16.10.20`, what is the well-known default password for user `msfadmin` on Metasploitable2? |
| **AR** | بعد ما تلاقي SSH على `172.16.10.20`، إيه الباسورد الافتراضي المعروف لليوزر `msfadmin`؟ |
| **Machine** | lab-ms2 | **Domain** | HNP / HNA |

## Q19 — WordPress login URL
| | |
|--|--|
| **EN** | What is the URL path for the WordPress admin login page on `172.16.10.30`? |
| **AR** | إيه مسار صفحة تسجيل دخول الأدمن لـ WordPress على `172.16.10.30`؟ |
| **Machine** | lab-www | **Domain** | WAP |

## Q20 — Low-priv WordPress editor
| | |
|--|--|
| **EN** | Besides `admin`, a low-privilege WordPress account exists for practice. What is the username/password? |
| **AR** | غير `admin`، فيه حساب WordPress بصلاحيات أقل. إيه اليوزر/الباسورد؟ |
| **Machine** | lab-www | **Domain** | WAP |

## Q21 — www root flag (post-priv-esc)
| | |
|--|--|
| **EN** | If you escalate to root on the WordPress host, what flag is in `/root/flag.txt`? |
| **AR** | لو وصلت root على سيرفر الـ WordPress، إيه الفلاج في `/root/flag.txt`؟ |
| **Machine** | lab-www | **Domain** | HNP |

## Q22 — Pivot root flag
| | |
|--|--|
| **EN** | On the pivot host, what is the contents of `/root/pivot_flag.txt` (requires root)? |
| **AR** | على جهاز الـ pivot، إيه محتوى `/root/pivot_flag.txt` (محتاج root)؟ |
| **Machine** | lab-pivot | **Domain** | HNP |

## Q23 — Internal root flag
| | |
|--|--|
| **EN** | On the internal Linux host, what flag is stored at `/root/internal_flag.txt`? |
| **AR** | على الجهاز الداخلي، إيه الفلاج في `/root/internal_flag.txt`؟ |
| **Machine** | lab-int-linux | **Domain** | HNP |

## Q24 — Pivot SSH target IP
| | |
|--|--|
| **EN** | Which DMZ IPv4 should you SSH to using the credentials from `deploy-notes.txt`? |
| **AR** | أنهي IP في الـ DMZ تعمله SSH بالـ credentials من `deploy-notes.txt`؟ |
| **Machine** | lab-pivot | **Domain** | AM / HNP |

## Q25 — Internal host IP
| | |
|--|--|
| **EN** | What is the IPv4 address of the internal inventory host? |
| **AR** | إيه عنوان IP للجهاز الداخلي (inventory)؟ |
| **Machine** | lab-int-linux | **Domain** | HNA |

## Q26 — SSH LocalForward to internal
| | |
|--|--|
| **EN** | From Kali, after you have pivot SSH, you can use `ssh -L 18080:10.20.20.20:8080 deploy@172.16.10.50` then browse which local URL to reach the internal flag page? |
| **AR** | من Kali بعد SSH للـ pivot بـ LocalForward لـ 18080، أنهي URL محلي يوصّلك لصفحة الفلاج الداخلية؟ |
| **Machine** | lab-kali → lab-pivot → lab-int-linux | **Domain** | HNP |

## Q27 — Pivot hint file
| | |
|--|--|
| **EN** | On the pivot as user `deploy`, which file under the home directory points you to the internal service? |
| **AR** | على الـ pivot كـ `deploy`، أنهي ملف في الـ home يوجّهك للخدمة الداخلية؟ |
| **Machine** | lab-pivot | **Domain** | AM |

## Q28 — Plugin Metasploit module (knowledge)
| | |
|--|--|
| **EN** | Which Metasploit module name is commonly used against the lab’s vulnerable `simple-file-list` plugin? |
| **AR** | أنهي موديول Metasploit الشائع ضد بلجن `simple-file-list` في اللاب؟ |
| **Machine** | lab-www | **Domain** | WAP / HNP |

## Q29 — WordPress version installed
| | |
|--|--|
| **EN** | What WordPress core version was installed on the lab web host? (Hint: generator meta / readme.) |
| **AR** | أنهي إصدار WordPress core المتثبت على سيرفر الويب؟ |
| **Machine** | lab-www | **Domain** | WAP / HNA |

## Q30 — Lab segment CIDRs
| | |
|--|--|
| **EN** | List the three lab IPv4 networks (ATTACK, DMZ, INTERNAL) used in this lab. |
| **AR** | اكتب الشبكات الثلاث (ATTACK و DMZ و INTERNAL) المستخدمة في اللاب. |
| **Machine** | topology | **Domain** | AM / HNA |

## Q31 — Why INTERNAL is isolated from Kali
| | |
|--|--|
| **EN** | Why can Kali on ATTACK not route to `10.20.20.0/24` through lab-gw? |
| **AR** | ليه Kali على ATTACK مش يقدر يوصل `10.20.20.0/24` عن طريق lab-gw؟ |
| **Machine** | lab-gw | **Domain** | HNA / AM |

## Q32 — nmap www open ports (verified)
| | |
|--|--|
| **EN** | From Kali, which TCP ports were confirmed open on `172.16.10.30` during lab verification? |
| **AR** | من Kali، أنهي بورتات TCP كانت مفتوحة على `172.16.10.30` وقت التحقق من اللاب؟ |
| **Machine** | lab-www | **Domain** | HNA |

## Q33 — nmap pivot open ports (verified)
| | |
|--|--|
| **EN** | From Kali, which TCP port was confirmed open on `172.16.10.50`, and was HTTP (80) open? |
| **AR** | من Kali، أنهي بورت كان مفتوح على `172.16.10.50`؟ وهل 80 مفتوح؟ |
| **Machine** | lab-pivot | **Domain** | HNA |

## Q34 — Internal flag URL path
| | |
|--|--|
| **EN** | On the internal HTTP service, what path returns the service flag? |
| **AR** | على خدمة الـ HTTP الداخلية، أنهي مسار بيرجع فلاج الخدمة؟ |
| **Machine** | lab-int-linux | **Domain** | HNP / WAP |

## Q35 — End-to-end kill chain order
| | |
|--|--|
| **EN** | Order these steps for the intended path: (A) SSH pivot with deploy creds (B) DMZ discovery (C) WordPress RCE / read deploy-notes (D) fetch internal flag via pivot. |
| **AR** | رتّب خطوات المسار المقصود: (A) SSH للـ pivot (B) اكتشاف الـ DMZ (C) WordPress RCE / قراءة deploy-notes (D) جلب فلاج الداخلي عبر الـ pivot. |
| **Machine** | full path | **Domain** | AM / HNP |

---

## Optional later (not in this lab build)
- **lab-win-dmz** (clone of windows-*): SMB / RDP / weak user — deferred.

