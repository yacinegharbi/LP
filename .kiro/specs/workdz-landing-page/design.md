# Design Document — WorkDZ Landing Page

## Overview

A single-page static marketing website built with plain HTML, CSS, and vanilla JavaScript (no build tool, no framework). The page targets Chrome, Firefox, Safari, and Edge (latest two major versions). All sections live in one `index.html` file; styles are in `styles.css`; interactive behaviour (hamburger menu, IntersectionObserver fade-ins) is in `main.js`.

---

## Technology Choices

| Concern | Choice | Rationale |
|---|---|---|
| Markup | Semantic HTML5 | Meets accessibility requirement; no framework overhead |
| Styling | Plain CSS (one file) | Full control over animations, gradients, and responsive layout |
| Scripting | Vanilla ES2020 JS | IntersectionObserver + hamburger toggle; no dependencies needed |
| Fonts | Google Fonts — Inter | Matches `Inter, ui-sans-serif, system-ui, sans-serif` stack |
| Icons | Unicode emoji / UTF-8 characters | Zero external icon dependency; matches reference design |

---

## File Structure

```
LP/
├── index.html
├── styles.css
└── main.js
```

---

## Design Tokens

```css
/* Colors */
--color-bg:          #000000;
--color-surface:     #0d0d0d;   /* card backgrounds */
--color-border:      #1a1a1a;   /* default borders */
--color-text:        #e5e5e5;   /* body text */
--color-muted:       #a3a3a3;   /* secondary text */
--color-purple:      #8B5CF6;
--color-pink:        #EC4899;

/* Gradients */
--gradient-neon:     linear-gradient(to right, #8B5CF6, #EC4899);
--gradient-glow-bg:  radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.15) 0%, transparent 70%);

/* Typography */
--font-family:       'Inter', ui-sans-serif, system-ui, sans-serif;
--font-size-xs:      0.75rem;
--font-size-sm:      0.875rem;
--font-size-base:    1rem;
--font-size-lg:      1.125rem;
--font-size-xl:      1.25rem;
--font-size-2xl:     1.5rem;
--font-size-3xl:     1.875rem;
--font-size-4xl:     2.25rem;
--font-size-5xl:     3rem;

/* Spacing */
--space-1:  0.25rem;
--space-2:  0.5rem;
--space-3:  0.75rem;
--space-4:  1rem;
--space-6:  1.5rem;
--space-8:  2rem;
--space-12: 3rem;
--space-16: 4rem;
--space-20: 5rem;
--space-24: 6rem;
--space-30: 7.5rem;

/* Breakpoints (used in media queries) */
--bp-mobile:  320px;
--bp-tablet:  768px;
--bp-desktop: 1280px;

/* Transitions */
--transition-fast:   150ms ease;
--transition-medium: 300ms ease;
--transition-slow:   400ms ease;
```

---

## Component Designs

### Global / Reset

- `*` box-sizing: border-box; margin: 0; padding: 0
- `html` scroll-behavior: smooth
- `body` background: `#000000`; color: `#e5e5e5`; font-family: var(--font-family)
- `@media (prefers-reduced-motion: reduce)` → `*, *::before, *::after { animation-duration: 0ms !important; transition-duration: 0ms !important; }`

### Gradient text utility

```css
.gradient-text {
  background: var(--gradient-neon);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

Applied to: logo, h1, all h2/h3 section headings, bridge statement.

---

### Navbar (`<nav id="navbar">`)

**Layout:** `display: flex; align-items: center; justify-content: space-between; padding: 0 var(--space-8); height: 64px;`

**Position:** `position: fixed; top: 0; left: 0; right: 0; z-index: 1000;`

**Background:** `background: rgba(0,0,0,0.85); backdrop-filter: blur(12px);`

**Logo:** `<a href="#hero">` containing span.gradient-text text "WorkDZ", font-size: var(--font-size-xl), font-weight: 700.

**Nav links** (desktop): `<ul>` with four `<li><a>` items — "Features" → `#features`, "For Seekers" → `#seekers`, "For Recruiters" → `#recruiters`, "Compare" → `#compare`. On hover: gradient text transition within 150ms.

**Get Started button:** `<a href="#cta" class="btn btn-primary">Get Started</a>` — right side.

**Hamburger** (mobile < 768px):
- Button `#hamburger-btn` with `aria-label="Open menu"`, `aria-expanded="false"`.
- Three `<span>` bars styled as hamburger icon.
- On click: toggles `.nav-open` class on `<nav>`, sets `aria-expanded`, moves focus to first link.
- Mobile dropdown: `#nav-menu` slides down, `display: flex; flex-direction: column;` below header bar.
- Click outside or second click dismisses; focus returns to button.

**Responsive:**
- `≥768px`: links visible inline, hamburger hidden (`display: none`).
- `<768px`: links hidden, hamburger shown.

---

### Buttons

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-3) var(--space-6);
  border-radius: 6px;
  font-size: var(--font-size-base);
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: transform var(--transition-fast),
              box-shadow var(--transition-fast);
  border: none;
}

.btn-primary {
  background: var(--gradient-neon);
  color: #fff;
}

.btn-secondary {
  background: transparent;
  color: #e5e5e5;
  border: 1px solid transparent;
  background-clip: padding-box;
  /* neon border via box-shadow or outline */
  box-shadow: inset 0 0 0 1px #8B5CF6;
}

.btn:hover,
.btn:focus-visible {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(139,92,246,0.6), 0 0 40px rgba(236,72,153,0.3);
}
```

---

### Hero Section (`<section id="hero">`)

**Layout:** `display: flex; flex-direction: column; align-items: center; text-align: center;`

**Padding:** `padding: 120px var(--space-8) 120px` on desktop; `padding: 80px var(--space-4) 80px` on mobile.

**Background decoration:** `var(--gradient-glow-bg)` behind hero content; does not affect text.

**Elements (top to bottom):**

1. **Badge** — `<span class="badge">Built in Algeria · For Algeria</span>`
   - Pill shape: `border-radius: 9999px; padding: var(--space-1) var(--space-4);`
   - Border: `1px solid #8B5CF6; background: rgba(139,92,246,0.1);`
   - Font: 0.875rem, color: #e5e5e5

2. **H1** — "Algeria's First End-to-End Recruitment Platform"
   - `.gradient-text`; font-size: clamp(2rem, 5vw, 3.75rem); font-weight: 800; line-height: 1.1

3. **Subtitle `<p>`** — exact copy from requirements
   - font-size: var(--font-size-lg); color: var(--color-muted); max-width: 640px; margin: auto

4. **CTA row** — `<div class="cta-row">`
   - `display: flex; gap: var(--space-4); flex-wrap: wrap; justify-content: center;`
   - "Find a Job" `.btn.btn-primary`, "Post a Job" `.btn.btn-secondary`
   - `<768px`: `flex-direction: column; align-items: center;`

5. **Stats row** — `<div class="stats-row">`
   - Three `<span>` elements: "48 Wilayas", "FR · AR · EN", "Web & Mobile"
   - Separated by `<span class="divider" aria-hidden="true">|</span>`
   - font-size: 0.875rem; color: var(--color-muted)

6. **Ticker** — `<div class="ticker-wrap" aria-hidden="true"><div class="ticker-track">…</div></div>`
   - `overflow: hidden; width: 100%;`
   - track: `display: flex; white-space: nowrap;`
   - Content duplicated twice to create seamless loop
   - Animation: `@keyframes ticker-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }` at 30s linear infinite
   - Text: "48 WILAYAS COVERED | 3 LANGUAGES | 100% ALGERIAN-BUILT " repeated

---

### Problem Section (`<section id="problems">`)

**Heading:** `<h2 class="gradient-text section-heading">The Algerian job market is fragmented</h2>`

**Cards container:** `display: grid; grid-template-columns: repeat(3,1fr); gap: var(--space-6);` on ≥1280px; `grid-template-columns: 1fr;` on <768px.

**Problem_Card** `.problem-card`:
```
background: var(--color-surface);
border: 1px solid var(--color-border);
border-radius: 12px;
padding: var(--space-6);
transition: border-color var(--transition-fast),
            box-shadow var(--transition-fast);
```
Hover:
```
border-color: #8B5CF6;
box-shadow: 0 0 16px rgba(139,92,246,0.4);
```

Each card structure:
```html
<div class="problem-card">
  <span class="card-icon" aria-hidden="true">🧩</span>
  <h3>Functional Fragmentation</h3>
  <p>…description…</p>
</div>
```
h3 inherits gradient text via global `h3.gradient-text` rule.

**Card content:**
- 🧩 "Functional Fragmentation" — "Job seekers juggle multiple disconnected tools and platforms just to search, apply, and follow up on a single role."
- 📊 "Market Segmentation" — "Full-time and part-time opportunities live in separate silos, forcing users to switch platforms depending on the work type."
- 🔗 "No Unified Lifecycle" — "No single platform follows a candidate from discovery to interview to hire, leaving critical steps untracked."

**Bridge statement:** `<p class="bridge-statement gradient-text">WorkDZ bridges all three gaps in one unified platform.</p>`
- `text-align: center; font-size: var(--font-size-xl); font-weight: 600; margin-top: var(--space-8);`

---

### Value Proposition Section (`<section id="seekers">` with nested `#recruiters` anchor)

**Heading:** `<h2 class="gradient-text section-heading">Built for both sides of hiring</h2>`

**Two-column layout:** `display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-8);` on ≥1280px; `grid-template-columns: 1fr;` on <768px.

Each column has `<h3>` ("For Job Seekers" / "For Recruiters") + `<ul>` with four `<li>` items.

**Checkmark icon:** Each `<li>` preceded by `<span class="check-icon" aria-hidden="true">✓</span>` styled with gradient:
```css
.check-icon {
  background: var(--gradient-neon);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 700;
  margin-right: var(--space-2);
}
```

**Bullet copy (For Job Seekers):**
1. Browse and apply to jobs across all 48 Algerian wilayas in one place
2. Showcase your skills, CV, and portfolio to top recruiters
3. Receive smart, personalized job recommendations tailored to your profile
4. Chat in real time with recruiters directly on the platform

**Bullet copy (For Recruiters):**
1. Post job offers in minutes and reach candidates nationwide
2. Manage all your applications from one unified inbox
3. Browse a nationwide talent pool filtered by wilaya, skill, and role
4. Cold-message matching candidates and start the conversation first

---

### Comparison Table Section (`<section id="compare">`)

**Heading:** `<h2 class="gradient-text section-heading">Why not LinkedIn or other platforms?</h2>`

**Scroll wrapper** (mobile): `<div class="table-scroll">` — `overflow-x: auto;`

**Table structure:**

```html
<table class="comparison-table">
  <thead>
    <tr>
      <th scope="col">Feature</th>
      <th scope="col">LinkedIn</th>
      <th scope="col">Emploitic</th>
      <th scope="col">Rekrute</th>
      <th scope="col">Indeed</th>
      <th scope="col" class="workdz-col">WorkDZ</th>
    </tr>
  </thead>
  <tbody>…6 rows…</tbody>
</table>
```

**`.workdz-col` styling:**
```css
.workdz-col {
  border-left: 2px solid #8B5CF6;
  border-right: 2px solid #8B5CF6;
  background: rgba(139,92,246,0.08);
}
thead .workdz-col {
  background: linear-gradient(to bottom, rgba(139,92,246,0.2), rgba(236,72,153,0.1));
  color: #fff;
  font-weight: 700;
}
```

**Feature rows (competitor data):**

| Feature | LinkedIn | Emploitic | Rekrute | Indeed | WorkDZ |
|---|---|---|---|---|---|
| Part-Time Work | — | — | — | ✓ | ✓ |
| Application Tracking | ✓ | — | — | — | ✓ |
| Real-time Messaging | ✓ | — | — | — | ✓ |
| Smart Recommendations | ✓ | — | — | ✓ | ✓ |
| Algerian Localization | — | ✓ | ✓ | — | ✓ |
| End-to-end Lifecycle | — | — | — | — | ✓ |

✓ cells: `color: #8B5CF6; font-weight: 700;`
— cells: `color: var(--color-muted);`

---

### Features Section (`<section id="features">`)

**Heading:** `<h2 class="gradient-text section-heading">Everything you need, nothing you don't</h2>`

**Grid:** `display: grid; grid-template-columns: repeat(3,1fr); gap: var(--space-6);` on ≥768px; `grid-template-columns: 1fr;` on <768px.

**Feature_Card** `.feature-card`:
```css
background: var(--color-surface);
border: 1px solid var(--color-border);
border-radius: 12px;
padding: var(--space-6);
transition: border-color 300ms ease,
            box-shadow 300ms ease,
            transform var(--transition-fast);
```
Hover:
```css
border-color: #EC4899;
box-shadow: 0 0 20px rgba(236,72,153,0.35);
transform: scale(1.02);
```

**Card data:**

| # | Emoji | Title | Description (≤30 words) |
|---|---|---|---|
| 1 | 📍 | Wilaya-Based Search | Filter jobs by any of Algeria's 48 wilayas, making local and remote opportunities easy to discover wherever you are. |
| 2 | ⭐ | Smart Recommendations | AI-powered suggestions match your profile to the right roles so you spend less time searching and more time applying. |
| 3 | 💬 | Real-Time Messaging | Chat directly with recruiters or candidates without leaving the platform, keeping every conversation organized and searchable. |
| 4 | 📊 | Application Tracking | Follow every application from submitted to hired with a clear status board, so nothing ever falls through the cracks. |
| 5 | 🌐 | Trilingual Experience | Switch seamlessly between French, Arabic, and English — the full platform works in all three languages, for all users. |
| 6 | 📱 | Web & Mobile | Access WorkDZ from any browser or mobile device with a consistent, fast experience optimized for all screen sizes. |

---

### CTA Section (`<section id="cta">`)

**Background:** `position: relative; overflow: hidden;` with `::before` pseudo-element applying `radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.2) 0%, rgba(236,72,153,0.1) 40%, transparent 70%)` as decorative glow.

**Layout:** `display: flex; flex-direction: column; align-items: center; text-align: center; padding: var(--space-24) var(--space-8);`

**Heading:** `<h2 class="gradient-text">Ready to work smarter in Algeria?</h2>`

**Subtitle:** `<p>Join thousands of seekers and recruiters already using WorkDZ.</p>`

**Buttons:** Same `.cta-row` pattern — "Create Account" `.btn-primary` + "Learn More" `.btn-secondary` (href="#features").

---

### Footer (`<footer>`)

**Layout (desktop ≥768px):** `display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: var(--space-8); padding: var(--space-16) var(--space-8) var(--space-8);`

**Layout (mobile):** `grid-template-columns: 1fr;`

**Left column:**
- Logo: `<span class="gradient-text">WorkDZ</span>` (font-size: xl, font-weight: 700)
- Tagline: "Algeria's first end-to-end recruitment platform — connecting talent and opportunity across all 48 wilayas."
- Attribution: "Built at USTHB, Algiers" — color: var(--color-muted); font-size: sm

**Link columns:** Each has a `<h4>` label + `<ul>` of `<li><a>` links. On hover: gradient text within 150ms.

**Bottom bar:** `border-top: 1px solid var(--color-border); margin-top: var(--space-8); padding-top: var(--space-6); display: flex; justify-content: space-between; flex-wrap: wrap;`
- Left: "© 2025 WorkDZ — All rights reserved."
- Right: "Made with care in Algeria"
- Both: `color: var(--color-muted); font-size: var(--font-size-sm);`

---

### Section Fade-In Animation (IntersectionObserver)

All `<section>` elements start with:
```css
.section-hidden {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 400ms ease, transform 400ms ease;
}
.section-visible {
  opacity: 1;
  transform: translateY(0);
}
```

`main.js` attaches an `IntersectionObserver` with `threshold: 0.1` to every section, adding `.section-visible` when it enters the viewport. The `prefers-reduced-motion` media query check disables this by skipping the class removal.

---

### Section Layout Utility

Each section uses a `.container` wrapper:
```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--space-16) var(--space-8);
}
@media (max-width: 767px) {
  .container { padding: var(--space-12) var(--space-4); }
}
```

---

## Accessibility Notes

- All `<section>` and `<nav>` use semantic HTML as required.
- `<main>` wraps all sections between Navbar and Footer.
- Hamburger button carries `aria-label="Open menu"` / `aria-expanded` toggle.
- Nav links and buttons have visible `:focus-visible` outlines: `outline: 2px solid #8B5CF6; outline-offset: 2px;`
- Ticker marked `aria-hidden="true"` (purely decorative).
- Table uses `scope="col"` / `scope="row"` on headers.
- Color contrast: white/light-gray (#e5e5e5) on black (#000) gives ~18:1 ratio, well above 4.5:1.
- Emoji icons inside cards carry `aria-hidden="true"`.

---

## Responsive Breakpoints Summary

| Viewport | Navbar | Hero CTAs | Problem Cards | Value Prop | Features Grid | Footer |
|---|---|---|---|---|---|---|
| ≥1280px | Inline links | Row | 3 cols | 2 cols | 3×2 grid | 4-col grid |
| 768–1279px | Inline links | Row | 3 cols | 2 cols | 3×2 grid | 4-col grid |
| <768px | Hamburger | Column | 1 col | 1 col | 1 col | 1 col |
