# LDC Project — Claude Work Log

## Project: London Dermatology Centre Homepage
**Files:** `index.html`, `css/style.css`

---

## 13 March 2026 — Button Padding & Inline Fixes

### ১. সব Button Padding → `10px 40px` (Global)
- আগে ছিল `20px 70px` — সব button selector-এ `10px 40px` করা হয়েছে
- Affected: `.top-links a`, `.phone-header a`, `.submit-button input` (সব variants), `.need-help-btn`, `.layer-805-cta a`, `.btn-viewmore a`, `.contact-box/.contact-form/.contact-footer/.inner-form submit`

### ২. Remaining `15px 50px` → `10px 40px`
- `.book-consultation .btn-viewmore a` সহ আরো কিছু selector-এ `15px 50px` বাকি ছিল
- সব `padding: 15px 50px` এবং `padding: 15px 50px !important` → `10px 40px` করা হয়েছে

### ৩. "Consultant Dermatologists in London" — Inline Fix
- **সমস্যা:** Global rule `h1 span, h2 span { display:block; }` (line 18) span-কে block করে দিচ্ছিল, ফলে text দুই লাইনে ভেঙে যাচ্ছিল
- **সমাধান:** `.image-text-section h1 span { display: inline; }` global CSS-এ যোগ (line 392)

### ৪. Mobile UI Tweaks — Header, Hero & Content
- Navbar logo mobile source update → `images/mobile-logo.png` (`<picture>` source change in `header .logo`).
- Language flags (`.ct-topbar`) mobile positioning fine-tuned (right/top values) এবং ফ্ল্যাগ icon size mobile/tablet এ adjust (`height: 12px`).
- `"Consultant Dermatologists in London"` ব্লকের পরে CQC badge-মত `Layer-49.png` image শুধুমাত্র mobile-এ দেখানো হয়েছে (`.mobile-only` utility class যোগ + CSS).
- Mobile typography: `.it-content h3` এর bottom gap কমানোর জন্য `margin-bottom: -12px` (`@media (max-width: 767.98px)`).
- `.it-content p` mobile-এ paragraph গ্যাপ কমানোর জন্য `margin-bottom: 0` override করা হয়েছে।

### ৫. Dermatologists Care Section — Mobile Spacing
- `images/dermatologists-care.jpg` image-এর wrapper-এ (`.dermatologists-care-img`) generic mobile `margin-bottom` override করে only এই image-এর উপরে ও নিচের gap টার্গেট করা হয়েছে।
- Image element-এ আলাদা class (`.dermatologists-care-photo`) যোগ করে mobile-এ `margin-top: -10px` দিয়ে text-এর সাথে vertical balance ঠিক করা হয়েছে।

### ৬. Media Appearances — As Featured (Mobile)
- "Media Appearances" সেকশনে desktop-এর existing `emrassing-body.png` রাখা হয়েছে, কিন্তু mobile-এ text badge replace করে নতুন `Layer42.png` image badge দেখানো হয়েছে (`.as-featured-mobile-img`).
- CSS: `@media (max-width: 767.98px)` এ `.as-featured-img` hide, `.embarrassing-bodies-text` ভিতরে image block হিসেবে render.

### ৭. Finance & Medical Insurance — Desktop Slider + Mobile Logos
- Desktop behavior restore: `#insurance-slider` আবার সব larger breakpoint-এ normal bxSlider মত কাজ করছে।
- Mobile-only layout: slider + arrows সম্পূর্ণ hide (`#insurance-slider` + `.bx-prev/.bx-next` display none) এবং নতুন `.finance-logos-mobile` wrapper-এ তিনটি logo vertically stack:
  - `images/aviva2-v2.png`
  - `images/Cigna-Logo.png`
  - `images/Layer43.png`
- Mobile logo গুলোর size ছোট রাখা হয়েছে (`max-width ~100px`), column gap ও উপরে/নিচে extra spacing (`margin-top: -80px; margin-bottom: 30px`).

### ৮. Aesthetic (Layer-805) Section — Mobile Height & Padding
- Mobile background image এখন `aesthetic-mobile.png` থেকে load হচ্ছে, side padding `0` করা হয়েছে (`padding: 40px 0`) যাতে design edge-to-edge লাগে।
- Height control: `min-height: 100vh` → `min-height: 600px` করা হয়েছে mobile-এ, যাতে very-tall ডিভাইসে section অতিরিক্ত লম্বা না হয় কিন্তু consistent hero-height feel থাকে।

### ৯. Need Help Section — Mobile Padding
- Mobile-এ `.need-help-section` left/right padding `15px` থেকে `0` করা হয়েছে (`padding: 40px 0 !important;`) যাতে content container full-width use করে।
- Existing typography overrides (`.need-help-title`, `.need-help-content p`, button alignment) অপরিবর্তিত রেখে শুধু spacing টিউন করা হয়েছে।

### ১০. Initial Consultation Copy — Mobile Readability
- `Initial Dermatologist Consultation` সেকশনের main paragraph-এ নতুন class `initial-consultation-text` যোগ।
- `@media (max-width: 767.98px)` এ `margin-top: 15px` দিয়ে heading আর paragraph-এর মাঝে breathing space বাড়ানো হয়েছে।

---

## 12 March 2026 — Typography & Button Fixes (1366px)

### ১. `p` tag font-size 18px → 16px (`@media max-width: 1366px`)
- Global `p` rule line 25 → `16px`
- সমস্যা: `.it-content p { font-size: 18px }` (line 367) globally set ছিল, media query override করছিল না (CSS ordering issue)
- সমাধান: `@media (max-width: 1366px)` block-এ সব `.it-content p` variants-এ `font-size: 16px !important` যোগ

### ২. Why Choose Section — Card Title & Paragraph
- `.wc-box .wc-content h4` → `24px !important` (ছিল globally 30px)
- `.wc-box .wc-content p` → `16px !important` (ছিল globally 18px, `.wc-box .wc-content p` থেকে apply হচ্ছিল)
- উভয়ই `@media (max-width: 1366px)` block-এ যোগ করা হয়েছে

### ৩. সব Button Padding → `15px 50px` (`@media max-width: 1366px`)
নিচের সব selectors-এ `padding: 15px 50px !important`:
- `.top-links a`, `.phone-header a`
- `.btn-viewmore a`, `.btn-primary-cta a`
- `.need-help-btn`, `.layer-805-cta a`
- `.about-owner-content .btn-viewmore a`
- `.dark-form .form-section-content .btn-viewmore a`
- `.submit-button input` (all variants)
- `.marketing-area-contact .submit-button input`

### ৪. Paediatric Section (Mobile)
- `.it-image` div-এ `paediatric-img` class যোগ
- `.paediatric-section .paediatric-img img` → `height: 320px !important` (mobile only)
- `.paediatric-section .paediatric-text-col .it-content h3` → `42px !important; text-align: left !important` (2 conflicting rules fixed)
- `text-align: center` → `text-align: left` for `.it-content` wrapper

### ৫. Dermatology Lectures Section (Mobile)
- `<br class="mobile-br">` যোগ after "Dermatology" (before `<em>Lectures</em>`)
- `.lectures-section .lectures-row` → `flex-direction: column-reverse !important` (image উপরে, text নিচে)
- `.it-content` → `text-align: left`
- Title → `42px !important; text-align: left !important` (2 conflicting rules fixed: ছিল 22px ও 20px)

### ৬. Our Location Section (Mobile)
- `.our-location-title` → `42px !important; text-align: center !important` (4 conflicting rules fixed)
- `.our-location-content p` → `text-align: left !important`
- `.our-location-info-box h3` → `24px !important` (ছিল 16px conflict)

### ৭. Need Help Section (Mobile)
- `.need-help-title` → `42px !important; text-align: center !important` (4 conflicting rules fixed)
- `.need-help-content p` → `text-align: left !important`

### ৮. Hero Form (marketing-area-contact) Overflow Fix (Mobile)
- **সমস্যা:** `.marketing-area-contact { width: 530px }` globally fixed — mobile-এ right side দিয়ে overflow হচ্ছিল
- **সমাধান:** `width: 100% !important; max-width: 100%; box-sizing: border-box` mobile block-এ যোগ
- `.row` → `margin-left/right: 0`, `.col-md-6/.col-md-12` → `padding: 0` (Bootstrap negative margin fix)
- Input/textarea → `width: 100% !important; box-sizing: border-box`
- "Get in Touch Now" h3 → `text-align: left`
- "Private Dermatologists" h1 → `text-align: left`

### ৯. Header Button Area (Mobile)
- `.header-right` → `background: #dae3ff` (mobile only)
- `.header-top` → `padding-bottom: 0` (extra bottom padding সরানো)
- `.col-md-12.col-lg-7` → `padding-left/right: 0` (Bootstrap 15px side padding সরানো, full width)
- `.header-right` → `margin-top: 20px` (logo থেকে space)
- Tel button → `color: #394a7b !important; border-color: #394a7b !important`

### ১০. Mobile Header — Logo | Flags | Hamburger Inline (CSS-only, Desktop Untouched)
- **লক্ষ্য:** mobile-এ `[Logo] [🇬🇧🇸🇦] [☰]` একই row-এ, নিচে `[Book] [Tel]` dae3ff bg-তে
- **Approach:** HTML পরিবর্তন না করে CSS-only
- `header { position: relative }` → hamburger-এর absolute positioning anchor
- `header-top { position: relative; overflow: visible }` → ct-topbar-এর absolute anchor
- `.ct-topbar { position: absolute; right: 55px; top: -19px; display: flex !important }` → logo row-এ ভাসে
- `.navbar-toggler { top: 22px !important; right: 15px !important }` → logo row-এর একদম ডানে
- `.header-right { background: #dae3ff; margin-top: 30px }` → buttons নিচে, dae3ff bg
- `.ct-topbar ul li a` padding removed from mobile block (was `6px 10px`)
- **Trade-off:** magic number (`top: -19px`) — logo height বদলালে adjust লাগবে। Right way হতো HTML restructure, কিন্তু desktop untouched রাখতে এই approach নেওয়া হয়েছে

### ১১. সব `p` tag Mobile → 16px
- `@media (max-width: 767.98px)` ও `@media (max-width: 575.98px)` — সব p selectors `14px`/`15px` → `16px !important`
- Affected: `p`, `.it-content p`, `.faq-box p`, `.our-location-content p`, `.our-location-info-box p`, `.need-help-content p`, `.about-owner-left-bg .about-owner-content p`, `.lectures-section ... p`, `.finance-section ... p`, `.layer-805-content p`

---

## 11 March 2026 — Session 2 (Fixes & Optimizations)

### ১. Doctify Widget Replace (দুটো জায়গায়)
- **coverfold-এর নিচে** (line ~230) ও **Need Help section-এর পরে** (line ~1193) — দুটো widget-ই replace করা হয়েছে
- পরিবর্তন: `containerId` → `0ojno8x7`, `theme` → `lightBlue`

### ২. Book Consultation Card Centering Fix (Image-LDC.webp section)
- **সমস্যা:** 1366px-এর নিচে card নিচের দিকে চলে যাচ্ছিল — image shorter হলে min-height (450px) section-এ blank space তৈরি হতো
- **সমাধান:** `.book-consultation.no-margin picture` কে `position: absolute` করা হয়েছে, `height: 100%; object-fit: cover` দিয়ে সবসময় section fill করে

### ৩. banner-badge.jpg Fix
- **সমস্যা:** `desktop-visible` class এর কারণে 991px থেকেই image হারিয়ে যাচ্ছিল
- **সমাধান:** HTML থেকে `desktop-visible` class সরানো হয়েছে
- Tablet ও Mobile-এ badge column-এর জন্য CSS যোগ — padding parent col-এ দেওয়া হয়েছে, image centered, `width: 80%` (tablet) / `75%` (mobile)

### ৪. Mobile Typography Optimization (<768px)
`/* MOBILE TYPOGRAPHY — OPTIMIZED */` section সম্পূর্ণ rewrite করা হয়েছে:

| Element | আগে | এখন |
|---|---|---|
| h1, h2 | 26px / 1.3 | 26px / **1.35** + margin-bottom |
| section-title | 24px | **26px** |
| it-content h3 | 24px | **22px** |
| h3 global | 18px | **19px** |
| h4 | 16px | **17px** |
| p line-height | 1.6 | **1.7** |

নতুন additions:
- `notice-banner` mobile font-size: 13px
- `wc-box`, `faq-box`, `our-location-info-box` — better internal padding
- `it-content .btn-viewmore` — margin-top: 20px
- `marketing-area-contact` form — consistent padding + input sizing
- `btn-viewmore` — `padding: 13px 35px` (touch-friendly)
- `image-text-section .container` → `padding: 35px` (consistent)

### ৫. Marketing Area Contact Form — Mobile Width
- `input:not([type="submit"])` → `width: 92%` only mobile
- `textarea` → `width: 92%` only mobile

### ६. Header Mobile Optimization
- `ct-topbar` (language flags) → `display: none !important` on mobile
- `header-right` → `flex-direction: column`, buttons stack উপর-নিচে
- `top-links a` ও `phone-header a` → same padding (`11px 40px`), `min-width: 200px`, centered
- `header-right` top/bottom padding → `20px`, gap → `0`

---

## 11 March 2026 — Full Responsive + Mobile Design Match

### কাজের সারসংক্ষেপ
Homepage (`index.html`) কে সব ডিভাইসে সম্পূর্ণ responsive করা হয়েছে এবং mobile design reference-এর সাথে মিলিয়ে দেওয়া হয়েছে।

---

### ১. Hero Section h1 Overflow Fix (1440px)
- **সমস্যা:** "Private Dermatologists in London" text 1440px-এ screen-এর বাইরে চলে যাচ্ছিল।
- **সমাধান:** `@media (min-width: 1367px) and (max-width: 1440px)` — `font-size: 32px; white-space: nowrap;`

### ২. 1366px-এর নিচে 50px দেখাচ্ছিল
- **সমাধান:** `@media (min-width: 992px) and (max-width: 1366px)` — `font-size: 32px; white-space: nowrap;`

### ৩. 1107px-এর নিচে Navbar + Form Spacing
- **Navbar buttons:** padding ও font-size কমানো হয়েছে
- **"Get in Touch Now" form:** input padding, margin, textarea height কমানো হয়েছে
- **Submit button:** আলাদা `input:not([type="submit"])` selector ব্যবহার করে general input rule থেকে আলাদা করা হয়েছে
- **CSS location:** `@media (max-width: 1107px)` block — style.css line ~1395

### ৪. Full Responsive Layout (~450 lines CSS যোগ করা হয়েছে)
style.css-এ `/* FULL RESPONSIVE — ALL DEVICES */` section যোগ করা হয়েছে (line ~1649 থেকে শেষ পর্যন্ত)। এতে cover করা হয়েছে:

| Section | Tablet (768–991px) | Mobile (<768px) | Small Mobile (<576px) |
|---|---|---|---|
| Header | columns wrap, logo ছোট | buttons ছোট | — |
| Marketing Area/Hero | image height 380px | image height 260px, columns stack | image height 220px |
| IT-Image (doctor profiles) | height 360px | height 260px | height 220px |
| Book Consultation | card sizing | full width card | — |
| About Owner (award) | image hidden, text full width | same | — |
| Our Team | image top, text below | same | — |
| Doctify Badge | — | full width stack | — |
| Why Choose | 2 per row | — | 1 per row |
| Video Section | — | — | 1 per row |
| Finance Section | padding fix | text center | — |
| Pain-Free Section | padding adjust | text center, cta center | — |
| Surgical Section | — | text center | — |
| Paediatric Section | — | text center | — |
| Aesthetic (Layer-805) | scroll bg | text center | — |
| Lectures Section | height auto | column stack | — |
| Need Help Section | height auto | padding fix | — |
| Our Location | — | text center, margin fix | — |
| FAQ Section | — | font size adjust | — |
| Footer | padding, logo size | full stack | — |

### ৫. Mobile Typography (Reference Design Match)
`/* MOBILE TYPOGRAPHY — REFERENCE DESIGN MATCH */` section যোগ করা হয়েছে:
- `<768px`: h1/h2 → 26px, section-title → 24px, h3 → 18px, p → 15px
- `<576px`: h1/h2 → 22px, section-title → 20px, p → 14px
- `<375px`: h1/h2 → 20px, section-title → 18px

### ৬. Marketing Area h1 — White-space: normal (Reference Design)
**সমস্যা:** Reference design-এ "Private Dermatologists / in London" দুই লাইনে দেখায়, কিন্তু `white-space: nowrap !important` দিয়ে force করা ছিল এক লাইনে।

**সমাধান:** Mobile breakpoints-এ `white-space: normal !important` করা হয়েছে এবং font-size বাড়ানো হয়েছে:

| Breakpoint | Font Size | White-space |
|---|---|---|
| Tablet (768–991px) | 26px | `nowrap` (এক লাইনে ঠিক আছে) |
| Mobile (<768px) | 28px | `normal` (দুই লাইনে wrap হয়) |
| Small Mobile (<576px) | 26px | `normal` |
| Very Small (<375px) | 22px | `normal` |

---

### Breakpoints Summary
```
1441px+       → desktop large
1367–1440px   → desktop (hero font 32px)
992–1366px    → desktop small (hero font 32px)
768–991px     → tablet
575–767px     → mobile
375–575px     → small mobile
<375px        → very small mobile
```

---

### Global CSS যোগ করা হয়েছে (style.css শুরুর দিকে/শেষের দিকে)
```css
html, body { overflow-x: hidden; }
*, *::before, *::after { box-sizing: border-box; }
img { max-width: 100%; }
```

---

### Known Issues / Notes
- `index.html`-এ ৩টি `<h1>` tag আছে (SEO issue) — ঠিক করা হয়নি
- Hero form submit button আসলে একটি `<input type="submit">`, link নয়
- `marketing-area-contact .col-md-6` (Name/Phone row) Bootstrap-এর default-এ mobile-এ stack হয় (<768px)
- Tablet (768-991px)-এ hero columns `flex: 0 0 100%` করা হয়েছে, image উপরে + form নিচে

---

### Reference Design
- Screenshot দেখা হয়েছে (prnt.sc link থেকে download করা)
- Mobile design: White header → Book/Tel buttons (blue area) → Doctor image → Dark navy form section
- h1 serif italic font (mencken-std), দুই লাইনে wrap
- Submit button: pink, centered, full-width rounded
