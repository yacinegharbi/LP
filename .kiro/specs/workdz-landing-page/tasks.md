# Tasks

- [ ] 1. Project scaffolding and global styles
  - Create `index.html` with the root HTML5 shell: `<!DOCTYPE html>`, `<html lang="en">`, `<head>` (charset, viewport meta, title "WorkDZ — Algeria's First Recruitment Platform", Google Fonts Inter link, stylesheet link), and empty `<body>`.
  - Create `styles.css` and add: CSS reset (`*{box-sizing:border-box;margin:0;padding:0}`), all CSS custom properties (design tokens from design.md), `body` base styles (background #000, color #e5e5e5, font-family Inter stack), `html{scroll-behavior:smooth}`, `.gradient-text` utility, `.container` utility, `.section-hidden`/`.section-visible` animation classes, global `h2` and `h3` gradient text rules, `@media(prefers-reduced-motion:reduce)` block setting animation/transition to 0ms, `.btn`, `.btn-primary`, `.btn-secondary` button base styles.
  - Create `main.js` as an empty module file (will be populated in later tasks).
  - Link `main.js` with `<script src="main.js" defer>` in `<head>`.
  - _Requirements: 1_

- [ ] 2. Navbar
  - In `index.html` add `<nav id="navbar">` as the first child of `<body>`, containing: logo `<a href="#hero" class="nav-logo"><span class="gradient-text">WorkDZ</span></a>`, nav links `<ul id="nav-menu">` with four `<li><a>` items (Features/#features, For Seekers/#seekers, For Recruiters/#recruiters, Compare/#compare), "Get Started" `<a href="#cta" class="btn btn-primary">`, hamburger `<button id="hamburger-btn" aria-label="Open menu" aria-expanded="false">` with three `<span>` bars.
  - In `styles.css` add: `#navbar` fixed position, height 64px, flex space-between, background rgba(0,0,0,0.85) + backdrop-filter blur(12px), z-index 1000; nav link hover gradient text transition 150ms; hamburger bar styles; `@media(max-width:767px)` hiding inline links and showing hamburger; mobile dropdown panel styles.
  - In `main.js` add: hamburger click handler toggling `.nav-open` + `aria-expanded`, focus management (first link on open, button on close); click-outside-to-close handler.
  - Add `:focus-visible` outline styles (2px solid #8B5CF6, offset 2px) for all interactive elements.
  - _Requirements: 2, 11_

- [ ] 3. Hero Section
  - In `index.html` add `<main>` wrapping all sections, with first child `<section id="hero" class="section-hidden">` containing: badge `<span class="badge">Built in Algeria · For Algeria</span>`, `<h1 class="gradient-text">Algeria's First End-to-End Recruitment Platform</h1>`, subtitle `<p class="hero-subtitle">From job discovery to hire — search, apply, chat, and track. One platform for every wilaya, every role, every language.</p>`, `.cta-row` div with "Find a Job" `.btn-primary` and "Post a Job" `.btn-secondary`, `.stats-row` div with three stats and pipe dividers, ticker `<div class="ticker-wrap" aria-hidden="true"><div class="ticker-track">` with content repeated twice.
  - Ticker content (×2 for seamless loop): "48 WILAYAS COVERED | 3 LANGUAGES | 100% ALGERIAN-BUILT".
  - In `styles.css` add: `#hero` padding 120px desktop / 80px mobile, hero glow radial-gradient background; `.badge` pill styles; `h1` clamp font-size, font-weight 800; `.hero-subtitle` muted, max-width 640px; `.cta-row` flex gap wrap centered, mobile column; `.stats-row` flex muted; `.ticker-wrap` overflow hidden; `.ticker-track` flex nowrap; `@keyframes ticker-scroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }` 30s linear infinite.
  - _Requirements: 3, 10_

- [ ] 4. Problem Section
  - In `index.html` add `<section id="problems" class="section-hidden">` with: `<h2 class="gradient-text section-heading">The Algerian job market is fragmented</h2>`, `.problem-cards` grid with three `.problem-card` divs each containing `<span class="card-icon" aria-hidden="true">emoji</span>`, `<h3 class="gradient-text">Title</h3>`, `<p>description</p>`; bridge `<p class="bridge-statement gradient-text">WorkDZ bridges all three gaps in one unified platform.</p>`.
  - Cards: 🧩 Functional Fragmentation / 📊 Market Segmentation / 🔗 No Unified Lifecycle with 10-30 word descriptions per design.md.
  - In `styles.css` add: `.problem-cards` grid 3-col ≥1280px, 1-col <768px; `.problem-card` surface bg, border, border-radius 12px, padding, hover glow border (#8B5CF6 + box-shadow) within 150ms; `.bridge-statement` centered, xl, font-weight 600.
  - _Requirements: 4, 10_

- [ ] 5. Value Proposition Section
  - In `index.html` add `<section id="seekers" class="section-hidden">` with: `<h2 class="gradient-text section-heading">Built for both sides of hiring</h2>`, `.value-grid` with two `.value-col` divs (second has `id="recruiters"`), each with `<h3 class="gradient-text">` and `<ul class="benefit-list">` with four `<li>` items each starting with `<span class="check-icon" aria-hidden="true">✓</span>`.
  - Bullet text per design.md (4 seeker + 4 recruiter bullets).
  - In `styles.css` add: `.value-grid` 2-col grid ≥1280px, 1-col <768px; `.benefit-list` list-style none; `.benefit-list li` flex align-items start; `.check-icon` gradient text, font-weight 700.
  - _Requirements: 5_

- [ ] 6. Comparison Table Section
  - In `index.html` add `<section id="compare" class="section-hidden">` with: `<h2 class="gradient-text section-heading">Why not LinkedIn or other platforms?</h2>`, `<div class="table-scroll">` wrapping `<table class="comparison-table">` with `<thead>` (Feature | LinkedIn | Emploitic | Rekrute | Indeed | WorkDZ with `.workdz-col` class) and `<tbody>` with 6 rows per design.md data using ✓ and — values.
  - Use `scope="col"` on thead `<th>` and `scope="row"` on first `<th>` of each body row.
  - In `styles.css` add: `.table-scroll` overflow-x auto; `.comparison-table` full width border-collapse; `th,td` padding border-bottom text-align center; first col left-aligned; `.workdz-col` gradient left/right 2px border + background tint; `thead .workdz-col` gradient bg; `.check` color #8B5CF6 font-weight 700; `.miss` color muted.
  - _Requirements: 6_

- [ ] 7. Features Section
  - In `index.html` add `<section id="features" class="section-hidden">` with: `<h2 class="gradient-text section-heading">Everything you need, nothing you don't</h2>`, `.features-grid` with six `.feature-card` divs each containing `<span class="card-icon" aria-hidden="true">emoji</span>`, `<h3 class="gradient-text">Title</h3>`, `<p>description ≤30 words</p>`.
  - Cards: 📍 Wilaya-Based Search / ⭐ Smart Recommendations / 💬 Real-Time Messaging / 📊 Application Tracking / 🌐 Trilingual Experience / 📱 Web & Mobile per design.md.
  - In `styles.css` add: `.features-grid` 3-col grid ≥768px, 1-col <768px; `.feature-card` surface bg, border, border-radius 12px, padding, hover border #EC4899 + glow + scale(1.02), transition 300ms border/shadow 150ms transform.
  - _Requirements: 7, 10_

- [ ] 8. CTA Section
  - In `index.html` add `<section id="cta" class="section-hidden">` with: `<h2 class="gradient-text">Ready to work smarter in Algeria?</h2>`, `<p class="cta-subtitle">Join thousands of seekers and recruiters already using WorkDZ.</p>`, `.cta-row` with "Create Account" `.btn-primary` and `<a href="#features" class="btn btn-secondary">Learn More</a>`.
  - In `styles.css` add: `#cta` position relative overflow hidden; `#cta::before` radial-gradient glow pseudo-element (purple/pink, transparent); `.cta-inner` position relative z-index 1.
  - _Requirements: 8, 10_

- [ ] 9. Footer
  - In `index.html` close `</main>` after the CTA section, then add `<footer>` with `.footer-grid` (brand col + 3 link cols: Product, Company, Social) and `.footer-bottom` bar.
  - Brand col: `<span class="gradient-text">WorkDZ</span>` + tagline + "Built at USTHB, Algiers". Link cols per design.md. Bottom bar: "© 2025 WorkDZ — All rights reserved." left, "Made with care in Algeria" right.
  - In `styles.css` add: `footer` border-top padding; `.footer-grid` 4-col ≥768px, 1-col <768px; `.footer-col h4` uppercase sm letter-spacing muted; `.footer-col a` muted no-underline, hover gradient transition 150ms; `.footer-bottom` flex space-between wrap border-top muted sm.
  - _Requirements: 9_

- [ ] 10. Scroll animations and accessibility polish
  - In `main.js` implement: `IntersectionObserver` (threshold 0.1) on all `.section-hidden` elements adding `.section-visible` on intersect; when `prefers-reduced-motion` is active, immediately add `.section-visible` to all sections without waiting for intersection.
  - Verify in `index.html`: `<main>` correctly wraps all sections between nav and footer; all emoji icons have `aria-hidden="true"`; ticker has `aria-hidden="true"`; table `<th>` have correct `scope` attributes; hamburger has `aria-label` and `aria-expanded`; heading hierarchy is h1→h2→h3 non-skipping.
  - Verify in `styles.css`: `:focus-visible` outlines present on all interactive elements; `.section-hidden` initial state (opacity 0, translateY 24px); reduced-motion overrides in place.
  - _Requirements: 10, 11_
