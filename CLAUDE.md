# LDC Project — Claude Work Log

## Project: London Dermatology Centre Homepage
**Files:** `index.html`, `css/style.css`

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
