# Requirements Document

## Introduction

WorkDZ is Algeria's first end-to-end recruitment platform landing page. The landing page serves as the primary marketing and conversion surface, targeting both job seekers and recruiters across all 48 Algerian wilayas. It communicates the platform's value proposition, highlights key features, and drives user sign-ups. The page must be a high-fidelity clone of the reference design at https://algeria-hire-hub.lovable.app/ with a dark neon aesthetic, smooth animations, and full responsiveness.

## Glossary

- **Landing_Page**: The single-page marketing website for the WorkDZ recruitment platform
- **Navbar**: The fixed top navigation bar containing the logo, navigation links, and CTA button
- **Hero_Section**: The first visible content section of the Landing_Page containing the primary headline, subtitle, CTAs, and stats
- **Ticker**: The animated horizontal marquee/scrolling text strip below the stats row in the Hero_Section
- **Problem_Section**: The section communicating the fragmentation problem in the Algerian job market
- **Problem_Card**: An individual card within the Problem_Section displaying a problem with an emoji icon and description
- **Value_Prop_Section**: The section displaying side-by-side benefits for job seekers and recruiters
- **Comparison_Table**: The table comparing WorkDZ features against competitor platforms
- **Features_Section**: The section displaying the six feature cards of the platform
- **Feature_Card**: An individual card within the Features_Section displaying a platform feature
- **CTA_Section**: The final call-to-action section before the footer
- **Footer**: The bottom section containing logo, tagline, link columns, and copyright
- **Neon_Gradient**: The visual style using purple (#8B5CF6), pink (#EC4899), and magenta gradient colors with CSS glow effects
- **Wilaya**: An administrative division of Algeria; there are 48 wilayas total
- **Primary_CTA**: A filled/solid button using the Neon_Gradient style (purple-to-pink gradient background)
- **Secondary_CTA**: An outline/ghost button with a 1px Neon_Gradient border and transparent background

---

## Requirements

### Requirement 1: Page Shell and Global Styles

**User Story:** As a visitor, I want to see a visually cohesive dark neon-styled page, so that I immediately understand the platform's modern, professional identity.

#### Acceptance Criteria

1. THE Landing_Page SHALL render with a background color of `#000000`
2. THE Landing_Page SHALL apply the font stack `Inter, ui-sans-serif, system-ui, sans-serif` as the global typeface
3. THE Landing_Page SHALL implement smooth scroll behavior via `scroll-behavior: smooth` with a scroll duration between 400ms and 800ms when navigating between sections via anchor links
4. THE Landing_Page SHALL be fully responsive across mobile (≥320px), tablet (≥768px), and desktop (≥1280px) viewport widths
5. WHEN a user views the Landing_Page on a viewport width less than 768px, THE Landing_Page SHALL reflow all multi-column layouts into single-column stacked layouts
6. THE Landing_Page SHALL apply gradient text rendering using `background: linear-gradient(to right, #8B5CF6, #EC4899)` with `-webkit-background-clip: text` and `color: transparent` to all `<h2>` and `<h3>` section headings

---

### Requirement 2: Navbar

**User Story:** As a visitor, I want a clear and accessible navigation bar, so that I can quickly jump to any section of the page or start using the platform.

#### Acceptance Criteria

1. THE Navbar SHALL be fixed to the top of the viewport (`position: fixed; top: 0`) and remain visible during page scroll
2. THE Navbar SHALL display the "WorkDZ" logo text on the left side rendered with Neon_Gradient text styling
3. THE Navbar SHALL display four navigation links in the following order: "Features" (anchors to `#features`), "For Seekers" (anchors to `#seekers`), "For Recruiters" (anchors to `#recruiters`), "Compare" (anchors to `#compare`)
4. WHEN a visitor clicks a navigation link, THE Navbar SHALL scroll the viewport smoothly to the corresponding section as defined in criterion 3
5. THE Navbar SHALL display a "Get Started" Primary_CTA button on the right side that anchors to `#cta`
6. WHEN a visitor hovers over a navigation link, THE Navbar SHALL apply a Neon_Gradient color transition on the link text within 150ms
7. IF the viewport width is less than 768px, THE Navbar SHALL collapse navigation links into a hamburger menu icon and hide the inline link list
8. WHEN a visitor clicks the hamburger menu icon, THE Navbar SHALL toggle a dropdown or slide-out panel displaying all four navigation links; clicking the icon again or clicking outside the panel SHALL dismiss the panel
9. THE Navbar SHALL apply a background of `rgba(0, 0, 0, 0.85)` with `backdrop-filter: blur(12px)` to maintain readability over page content

---

### Requirement 3: Hero Section

**User Story:** As a visitor, I want an impactful hero section that immediately communicates the platform's purpose, so that I understand what WorkDZ offers and am motivated to take action.

#### Acceptance Criteria

1. THE Hero_Section SHALL display a badge element with the exact text "Built in Algeria · For Algeria" styled as a pill with a 1px border using Neon_Gradient colors
2. THE Hero_Section SHALL display an `<h1>` heading with the exact text "Algeria's First End-to-End Recruitment Platform" using Neon_Gradient text styling
3. THE Hero_Section SHALL display a subtitle `<p>` element with the exact text: "From job discovery to hire — search, apply, chat, and track. One platform for every wilaya, every role, every language."
4. THE Hero_Section SHALL display a "Find a Job" Primary_CTA button and a "Post a Job" Secondary_CTA button; on viewports ≥768px both buttons SHALL be displayed side by side in a horizontal row; on viewports <768px both buttons SHALL stack vertically
5. WHEN a visitor hovers over either CTA button, THE Hero_Section SHALL apply a box-shadow glow using Neon_Gradient colors and a `scale(1.05)` transform within 150ms
6. THE Hero_Section SHALL display a stats row containing three items in order: "48 Wilayas", "FR · AR · EN", and "Web & Mobile", each separated by a vertical pipe (`|`) or equivalent visual divider element
7. THE Hero_Section SHALL render the Ticker below the stats row displaying the repeating text: "48 WILAYAS COVERED | 3 LANGUAGES | 100% ALGERIAN-BUILT"
8. WHILE the Landing_Page is loaded, THE Ticker SHALL animate continuously from right to left in a horizontal scroll loop at a consistent speed without gaps or visible restarts using a CSS `@keyframes` translateX animation
9. THE Hero_Section SHALL apply a minimum top and bottom padding of 120px on desktop viewports (≥1280px) and a minimum of 80px on mobile viewports (<768px)

---

### Requirement 4: Problem Section

**User Story:** As a visitor, I want to understand the problems WorkDZ solves, so that I can relate to the pain points and appreciate the platform's value.

#### Acceptance Criteria

1. THE Problem_Section SHALL display a section heading: "The Algerian job market is fragmented" using Neon_Gradient text styling
2. WHEN the viewport width is ≥1280px, THE Problem_Section SHALL display the three Problem_Cards in a horizontal three-column row
3. THE Problem_Card for "Functional Fragmentation" SHALL display the emoji icon 🧩 and a description of 10–30 words explaining fragmented job tools across disconnected platforms
4. THE Problem_Card for "Market Segmentation" SHALL display the emoji icon 📊 and a description of 10–30 words explaining how full-time and part-time work are handled in isolation
5. THE Problem_Card for "No Unified Lifecycle" SHALL display the emoji icon 🔗 and a description of 10–30 words explaining the absence of end-to-end discovery-to-hire tracking
6. WHEN a visitor hovers over a Problem_Card, THE Problem_Card SHALL apply a glowing Neon_Gradient border effect within 150ms
7. THE Problem_Section SHALL display a bridge statement below the cards with the exact text: "WorkDZ bridges all three gaps in one unified platform."
8. THE bridge statement SHALL be rendered using Neon_Gradient text styling
9. WHEN the viewport width is <768px, THE Problem_Section SHALL display the three Problem_Cards in a single-column stacked layout

---

### Requirement 5: Value Proposition Section

**User Story:** As a visitor, I want to see specific benefits tailored to my role, so that I can quickly determine whether WorkDZ is relevant to me as a job seeker or recruiter.

#### Acceptance Criteria

1. THE Value_Prop_Section SHALL display a section heading: "Built for both sides of hiring" using Neon_Gradient text styling
2. WHEN the viewport width is ≥1280px, THE Value_Prop_Section SHALL display two equal-width columns side by side: "For Job Seekers" on the left and "For Recruiters" on the right
3. THE "For Job Seekers" column SHALL display exactly four benefit bullet points covering: (1) browsing and applying to jobs across all 48 wilayas, (2) showcasing skills, CV, and portfolio, (3) receiving smart personalized recommendations, (4) real-time messaging with recruiters
4. THE "For Recruiters" column SHALL display exactly four benefit bullet points covering: (1) posting job offers in minutes, (2) managing applications in one inbox, (3) browsing a nationwide talent pool, (4) cold-messaging matching candidates
5. WHEN the viewport width is <768px, THE Value_Prop_Section SHALL stack the two columns vertically with "For Job Seekers" displayed above "For Recruiters"
6. EACH bullet point SHALL be preceded by a checkmark icon styled with the Neon_Gradient (purple #8B5CF6 to pink #EC4899) color

---

### Requirement 6: Comparison Table Section

**User Story:** As a visitor evaluating alternatives, I want to see how WorkDZ compares to other platforms, so that I can make an informed decision.

#### Acceptance Criteria

1. THE Comparison_Table SHALL be preceded by a section heading: "Why not LinkedIn or other platforms?" using Neon_Gradient text styling
2. THE Comparison_Table SHALL display WorkDZ as the final column, showing ✓ for all six feature rows
3. THE Comparison_Table SHALL include the following four competitor columns in addition to WorkDZ: "LinkedIn", "Emploitic", "Rekrute", "Indeed"
4. THE Comparison_Table SHALL evaluate the following six feature rows in order: "Part-Time Work", "Application Tracking", "Real-time Messaging", "Smart Recommendations", "Algerian Localization", "End-to-end Lifecycle"
5. THE Comparison_Table SHALL use ✓ to indicate feature availability and — (em dash) to indicate absence for each cell
6. THE WorkDZ column header SHALL be visually distinguished from competitor column headers using a Neon_Gradient border on the column
7. IF the viewport width is less than 768px, THE Comparison_Table SHALL be wrapped in a horizontally scrollable container

---

### Requirement 7: Features Section

**User Story:** As a visitor, I want to see a clear summary of platform features, so that I understand what tools are available before signing up.

#### Acceptance Criteria

1. THE Features_Section SHALL display a section heading: "Everything you need, nothing you don't" using Neon_Gradient text styling
2. WHEN the viewport width is ≥768px, THE Features_Section SHALL display the six Feature_Cards in a 3-column × 2-row grid
3. EACH Feature_Card SHALL display exactly one emoji icon, a feature title, and a description of no more than 30 words
4. THE six Feature_Cards SHALL cover the following functional areas in order: (1) Wilaya-based search 📍, (2) Smart recommendations ⭐, (3) Real-time messaging 💬, (4) Application tracking 📊, (5) Trilingual experience 🌐, (6) Web & Mobile 📱
5. WHEN a visitor hovers over a Feature_Card, THE Feature_Card SHALL apply a glowing Neon_Gradient border animation with a transition duration between 200ms and 400ms
6. WHEN the viewport width is less than 768px, THE Features_Section SHALL reflow the grid to a single-column layout

---

### Requirement 8: Call-to-Action Section

**User Story:** As a visitor who has reviewed the page, I want a final clear invitation to act, so that I can easily start using WorkDZ.

#### Acceptance Criteria

1. THE CTA_Section SHALL display a heading: "Ready to work smarter in Algeria?" using Neon_Gradient text styling
2. THE CTA_Section SHALL display a subtitle: "Join thousands of seekers and recruiters already using WorkDZ."
3. THE CTA_Section SHALL display a "Create Account" Primary_CTA button that anchors to or opens the sign-up flow, and a "Learn More" Secondary_CTA button that anchors to `#features`, displayed side by side on viewports ≥768px
4. WHILE a visitor hovers over the "Create Account" button, THE CTA_Section SHALL apply a `box-shadow` glow using Neon_Gradient colors and a `scale(1.05)` transform, initiating within 150ms of hover start
5. THE CTA_Section SHALL apply a radial or linear Neon_Gradient glow as a background decorative element that visually distinguishes it from the Features_Section above and the Footer below

---

### Requirement 9: Footer

**User Story:** As a visitor, I want a well-organized footer with relevant links and information, so that I can navigate to company information and social channels.

#### Acceptance Criteria

1. THE Footer SHALL display the "WorkDZ" logo text with Neon_Gradient styling and the tagline "Algeria's first end-to-end recruitment platform — connecting talent and opportunity across all 48 wilayas." in the left column on desktop (≥768px) or at the top on mobile (<768px)
2. THE Footer SHALL display the attribution text "Built at USTHB, Algiers" below the tagline
3. THE Footer SHALL display exactly three link columns with the labels "Product", "Company", and "Social"
4. THE "Product" column SHALL contain at least the following links: "Features", "For Seekers", "For Recruiters", "Compare"
5. THE "Company" column SHALL contain at least the following links: "About", "FAQ", "Contact", "Privacy", "Terms"
6. THE "Social" column SHALL contain links to at least the following platforms: Twitter, LinkedIn, Instagram
7. THE Footer SHALL display the copyright notice "© 2025 WorkDZ — All rights reserved." followed by "Made with care in Algeria" at the bottom of the footer
8. WHEN a visitor hovers over a footer link, THE Footer SHALL apply a Neon_Gradient color transition on the link text within 150ms

---

### Requirement 10: Animations and Interactions

**User Story:** As a visitor, I want subtle animations and micro-interactions throughout the page, so that the experience feels polished and engaging.

#### Acceptance Criteria

1. WHEN a section enters the viewport during scroll, THE Landing_Page SHALL apply a fade-in entrance animation with a duration of 400ms and an initial vertical offset of 24px (translateY) to that section's content using an IntersectionObserver
2. WHEN a visitor hovers over any interactive card (Problem_Card, Feature_Card), THE Landing_Page SHALL apply a Neon_Gradient border glow and a `scale(1.02)` transform with a CSS transition of 150ms
3. WHEN a visitor hovers over any CTA button, THE Landing_Page SHALL apply a `box-shadow` glow using Neon_Gradient colors with a CSS transition initiating within 150ms
4. THE Ticker animation SHALL use a `@keyframes translateX` animation running at a constant speed with `animation-iteration-count: infinite` and `animation-timing-function: linear` to prevent flickering or layout shift
5. WHILE the `prefers-reduced-motion: reduce` media query is active, THE Landing_Page SHALL set `animation-duration: 0ms` and `transition-duration: 0ms` for all non-essential animations while preserving all layout and visibility of content

---

### Requirement 11: Accessibility

**User Story:** As a visitor using assistive technologies, I want the landing page to be accessible, so that I can navigate and understand the content regardless of my abilities.

#### Acceptance Criteria

1. THE Landing_Page SHALL achieve a color contrast ratio of at least 4.5:1 between all body text colors and their direct background colors, per WCAG 2.1 AA guidelines
2. THE Landing_Page SHALL provide a non-empty, descriptive `alt` attribute on all `<img>` elements; the WorkDZ logo image SHALL use `alt="WorkDZ logo"`; decorative images SHALL use `alt=""`
3. THE Navbar SHALL be fully operable using the keyboard alone; all interactive elements SHALL display a visible focus indicator with a minimum 2px outline in a color distinct from the background
4. THE Landing_Page SHALL use semantic HTML elements — `<nav>` for the Navbar, `<main>` wrapping all primary content, `<section>` for each named section, `<footer>` for the Footer, and `<h1>`–`<h6>` in a non-skipping hierarchy
5. IF a visitor activates the hamburger menu via keyboard (Enter or Space on the menu button), THEN THE Navbar SHALL open the menu panel and move focus to the first navigation link; WHEN the menu is closed, focus SHALL return to the hamburger menu button
6. THE hamburger menu button and any icon-only interactive controls SHALL have an accessible name provided via `aria-label` or visually hidden text
