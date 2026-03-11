# LDC Project — Claude Work Log

## Project: London Dermatology Centre Homepage
**Files:** `index.html`, `css/style.css`

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
