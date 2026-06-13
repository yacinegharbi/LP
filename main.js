/* ============================================================
   WorkDZ — main.js
   No scroll-pinning. Pure CSS animations + IntersectionObserver.
   ============================================================ */

'use strict';

/* ── 0. ALGERIA MAP INJECTION ─────────────────────────── */
// Simplified Algeria outline coordinates (WGS84 to SVG projection)
function getAlgeriaSVGPath() {
  return `
    M 20,35
    L 22,32 L 25,30 L 28,31 L 30,28 L 33,26 L 35,28 L 37,25 L 40,26 L 42,24 L 45,25 L 48,22 L 50,24 L 52,22 L 54,23 L 56,21 L 58,22 L 60,20 L 62,21 L 63,18 L 65,19 L 66,17 L 68,18 L 70,15 L 72,16 L 73,14 L 75,15 L 76,13 L 78,14 L 80,12 L 82,13 L 85,12 L 88,13 L 90,12 L 92,13 L 94,12 L 95,14 L 96,16 L 95,18 L 96,20 L 95,22 L 96,24 L 95,26 L 96,28 L 94,30 L 95,32 L 93,34 L 94,36 L 92,38 L 93,40 L 91,42 L 92,44 L 90,46 L 89,48 L 87,50 L 85,52 L 83,54 L 81,55 L 79,56 L 77,57 L 75,58 L 73,59 L 71,60 L 69,61 L 67,62 L 65,63 L 63,64 L 61,65 L 59,66 L 57,67 L 55,68 L 53,69 L 51,70 L 49,71 L 47,72 L 45,73 L 43,74 L 41,75 L 39,76 L 37,77 L 35,76 L 33,77 L 31,78 L 29,79 L 27,80 L 25,79 L 23,80 L 21,79 L 19,78 L 18,76 L 17,74 L 16,72 L 15,70 L 14,68 L 13,66 L 12,64 L 11,62 L 10,60 L 9,58 L 8,56 L 7,54 L 6,52 L 5,50 L 4,48 L 3,46 L 2,44 L 1,42 L 0,40 L 0,38 L 1,36 L 2,34 L 3,32 L 4,30 L 5,28 L 6,26 L 7,24 L 8,22 L 9,20 L 10,18 L 11,16 L 12,14 L 13,12 L 15,10 L 17,8 L 19,6 L 21,4 L 23,2 L 25,1 L 27,0 L 30,0 L 32,1 L 35,0 L 38,1 L 40,2 L 43,1 L 46,2 L 49,1 L 52,2 L 55,1 L 58,2 L 61,1 L 64,2 L 67,1 L 70,2 L 73,1 L 76,2 L 79,1 L 82,2 L 85,1 L 88,2 L 91,1 L 94,0 L 97,1 L 98,3 L 99,5 L 100,8 L 99,10 L 100,12 L 99,14 L 100,16 L 99,18 L 100,20 L 99,22 L 100,24 L 99,26 L 100,28 L 99,30 L 100,32 L 99,34 L 100,36 L 99,38 L 100,40 L 99,42 L 100,44 L 99,46 L 100,48 L 99,50 L 100,52 L 98,54 L 96,55 L 94,56 L 92,57 L 90,58 L 88,59 L 86,60 L 84,61 L 82,62 L 80,63 L 78,64 L 76,65 L 74,64 L 72,65 L 70,66 L 68,65 L 66,66 L 64,67 L 62,68 L 60,67 L 58,68 L 56,69 L 54,68 L 52,69 L 50,70 L 48,69 L 46,70 L 44,71 L 42,70 L 40,71 L 38,72 L 36,71 L 34,72 L 32,73 L 30,72 L 28,73 L 26,74 L 24,73 L 22,74 L 20,35 Z
  `;
}

const pinLocations = [
  { x: 25, y: 35, label: 'Freelance' },
  { x: 45, y: 40, label: 'Full-Time' },
  { x: 65, y: 45, label: 'Part-Time' },
  { x: 80, y: 50, label: 'Internship' },
  { x: 55, y: 65, label: 'Seasonal Work' },
];

const connectionLines = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 1, to: 4 },
];

function createAlgeriaSVG() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 100 80');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

  const mapGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  mapGroup.setAttribute('class', 'map-container');

  // Algeria outline
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', getAlgeriaSVGPath());
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', 'url(#mapGradient)');
  path.setAttribute('stroke-width', '0.8');
  path.setAttribute('opacity', '0.8');
  mapGroup.appendChild(path);

  // Connection lines
  connectionLines.forEach(({ from, to }) => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', pinLocations[from].x);
    line.setAttribute('y1', pinLocations[from].y);
    line.setAttribute('x2', pinLocations[to].x);
    line.setAttribute('y2', pinLocations[to].y);
    line.setAttribute('stroke', 'rgba(124,58,237,0.3)');
    line.setAttribute('stroke-width', '0.3');
    line.setAttribute('class', 'connection-line');
    mapGroup.appendChild(line);
  });

  // Pins with labels
  pinLocations.forEach(({ x, y, label }, idx) => {
    // Pin circle
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', '1.2');
    circle.setAttribute('fill', '#EC4899');
    circle.setAttribute('opacity', '0.8');
    circle.setAttribute('class', 'map-pin');
    mapGroup.appendChild(circle);

    // Pin glow
    const glow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    glow.setAttribute('cx', x);
    glow.setAttribute('cy', y);
    glow.setAttribute('r', '2.5');
    glow.setAttribute('fill', 'none');
    glow.setAttribute('stroke', '#EC4899');
    glow.setAttribute('stroke-width', '0.15');
    glow.setAttribute('opacity', '0.4');
    glow.setAttribute('class', 'map-pin');
    mapGroup.appendChild(glow);

    // Labels for only some pins
    if (idx === 0 || idx === 1 || idx === 2 || idx === 3 || idx === 4) {
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', x + 3.5);
      text.setAttribute('y', y - 1.8);
      text.setAttribute('font-size', '1.2');
      text.setAttribute('fill', '#EC4899');
      text.setAttribute('opacity', '0.7');
      text.setAttribute('font-weight', '600');
      text.setAttribute('class', 'map-pin-label');
      text.textContent = label;
      mapGroup.appendChild(text);
    }
  });

  // Add gradient definition
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
  gradient.setAttribute('id', 'mapGradient');
  gradient.setAttribute('x1', '0%');
  gradient.setAttribute('y1', '0%');
  gradient.setAttribute('x2', '100%');
  gradient.setAttribute('y2', '100%');

  const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
  stop1.setAttribute('offset', '0%');
  stop1.setAttribute('stop-color', '#7C3AED');
  gradient.appendChild(stop1);

  const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
  stop2.setAttribute('offset', '100%');
  stop2.setAttribute('stop-color', '#EC4899');
  gradient.appendChild(stop2);

  defs.appendChild(gradient);
  svg.appendChild(defs);
  svg.appendChild(mapGroup);

  return svg;
}

// Inject maps on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  const heroMapBg = document.getElementById('algeriaMapBg');
  const ctaMapBg = document.getElementById('algeriaMapCta');
  
  if (heroMapBg && !heroMapBg.querySelector('svg')) {
    heroMapBg.appendChild(createAlgeriaSVG());
  }
  if (ctaMapBg && !ctaMapBg.querySelector('svg')) {
    ctaMapBg.appendChild(createAlgeriaSVG());
  }
});

/* ── 1. ANNOUNCE BAR ──────────────────────────────────────── */
const announceBar   = document.getElementById('announce-bar');
const announceClose = document.getElementById('announceClose');

function updateNavbarOffset() {
  const barH = (announceBar && !announceBar.classList.contains('hidden'))
    ? announceBar.offsetHeight : 0;
  const nav = document.getElementById('navbar');
  if (nav) nav.style.top = barH + 'px';
  document.body.style.paddingTop = (barH + 68) + 'px';
}

if (announceClose) {
  announceClose.addEventListener('click', () => {
    announceBar.classList.add('hidden');
    updateNavbarOffset();
    try { sessionStorage.setItem('announce-closed', '1'); } catch (e) {}
  });
}

try {
  if (sessionStorage.getItem('announce-closed')) announceBar?.classList.add('hidden');
} catch (e) {}

updateNavbarOffset();
window.addEventListener('resize', updateNavbarOffset, { passive: true });

function handleAnnounce(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '✓ You\'re on the list!';
  btn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)';
  e.target.querySelector('input').value = '';
  setTimeout(() => { announceBar.classList.add('hidden'); updateNavbarOffset(); }, 1800);
  return false;
}

function handleCtaEmail(e) {
  e.preventDefault();
  const btn  = e.target.querySelector('button');
  const orig = btn.innerHTML;
  btn.textContent = '✓ You\'re on the list!';
  btn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)';
  e.target.querySelector('input').value = '';
  setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; }, 3000);
  return false;
}

/* ── 1. LAMP BEAM ─────────────────────────────────────────── */
setTimeout(() => {
  document.getElementById('hero')?.classList.add('lamp-ready');
}, 150);

/* ── 2. NAVBAR ────────────────────────────────────────────── */
const navbar       = document.getElementById('navbar');
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu      = document.getElementById('nav-menu');

if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = navbar.classList.toggle('nav-open');
    hamburgerBtn.setAttribute('aria-expanded', String(open));
    hamburgerBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (open) navMenu.querySelector('a')?.focus();
  });
  document.addEventListener('click', (e) => {
    if (navbar.classList.contains('nav-open') && !navbar.contains(e.target)) {
      navbar.classList.remove('nav-open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      hamburgerBtn.setAttribute('aria-label', 'Open menu');
    }
  });
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navbar.classList.remove('nav-open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      hamburgerBtn.setAttribute('aria-label', 'Open menu');
    });
  });
}

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── 3. HERO CSS ENTRANCE (triggered by class) ────────────── */
// All hero children use CSS animations via .hero-inner.ready
window.addEventListener('DOMContentLoaded', () => {
  // Tiny delay so browser paints before animation starts
  requestAnimationFrame(() => {
    document.querySelector('.hero-inner')?.classList.add('ready');
  });
});

/* ── 4. INTERSECTION OBSERVER — fade-in all .fade-in sections  */
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    // stagger cards inside the section
    entry.target.querySelectorAll(
      '.problem-card, .feature-card, .value-col, .floating-badge-static'
    ).forEach((el, i) => {
      el.style.transitionDelay = (i * 90) + 'ms';
    });
    io.unobserve(entry.target);
  });
}, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => {
  if (prefersReduced) el.classList.add('visible');
  else io.observe(el);
});

/* ── 5. MOUSE PARALLAX — lerp RAF, no GSAP needed ────────── */
const phoneMock  = document.getElementById('phoneMockup');
const laptopMock = document.getElementById('laptopMockup');

let tX = 0, tY = 0, cX = 0, cY = 0, rafGoing = false;

function lerpTick() {
  const f = 0.08;
  cX += (tX - cX) * f;
  cY += (tY - cY) * f;

  if (phoneMock) {
    phoneMock.style.transform =
      `perspective(900px) rotateY(${cY * 7}deg) rotateX(${-cX * 7}deg)`;
  }
  if (laptopMock) {
    laptopMock.style.transform =
      `perspective(1100px) rotateY(${cY * 4 + 5}deg) rotateX(${-cX * 3 + 1}deg)`;
  }

  if (Math.abs(tX - cX) + Math.abs(tY - cY) > 0.002) {
    requestAnimationFrame(lerpTick);
  } else {
    rafGoing = false;
  }
}

// Only tilt when the devices section is in view
const devicesEl = document.getElementById('devices');
let devicesVisible = false;
new IntersectionObserver(([e]) => { devicesVisible = e.isIntersecting; }, { threshold: 0.1 })
  .observe(devicesEl || document.body);

window.addEventListener('mousemove', (e) => {
  if (!devicesVisible) return;
  tX = (e.clientY / window.innerHeight - 0.5) * 2;
  tY = (e.clientX / window.innerWidth  - 0.5) * 2;
  if (!rafGoing) { rafGoing = true; requestAnimationFrame(lerpTick); }
}, { passive: true });

// Reset tilt when mouse leaves the window
document.addEventListener('mouseleave', () => { tX = 0; tY = 0; });

/* ── 6. CARD SHEEN (mouse glow inside devices card) ────────── */
const devCard = document.querySelector('.devices-card');
if (devCard) {
  devCard.addEventListener('mousemove', (e) => {
    const r = devCard.getBoundingClientRect();
    devCard.style.setProperty('--mx', `${e.clientX - r.left}px`);
    devCard.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, { passive: true });
}
