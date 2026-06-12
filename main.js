/* ============================================================
   WorkDZ — main.js
   No scroll-pinning. Pure CSS animations + IntersectionObserver.
   ============================================================ */

'use strict';

/* ── 0. ANNOUNCE BAR ──────────────────────────────────────── */
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
