/* ============================================================
   WorkDZ - Main JS
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const announceBar = document.getElementById('announce-bar');
  const navbar = document.getElementById('navbar');
  const body = document.body;
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const announceCloseBtn = document.getElementById('announceClose');

  // Layout adjustment for fixed headers
  const adjustLayoutHeight = () => {
    let topOffset = 0;
    if (announceBar && !announceBar.classList.contains('hidden')) {
      topOffset = announceBar.offsetHeight;
    }
    navbar.style.top = `${topOffset}px`;
    body.style.paddingTop = `${topOffset}px`;
  };

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburger menu toggle
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isNavOpen = navbar.classList.toggle('nav-open');
      hamburgerBtn.setAttribute('aria-expanded', isNavOpen);
    });

    // Close mobile nav when a link is clicked
    navMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navbar.classList.remove('nav-open');
        hamburgerBtn.setAttribute('aria-expanded', false);
      }
    });
  }

  // Announcement bar close
  if (announceCloseBtn && announceBar) {
    announceCloseBtn.addEventListener('click', () => {
      announceBar.classList.add('hidden');
      adjustLayoutHeight(); // Re-adjust layout
    });
  }

  // Fade-in sections
  const fadeInSections = document.querySelectorAll('.fade-in');
  const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeInSections.forEach(section => {
    fadeInObserver.observe(section);
  });

  // Hero animations
  setTimeout(() => {
    const heroInner = document.querySelector('.hero-inner');
    if (heroInner) {
      heroInner.classList.add('ready');
    }
  }, 200);

  // Mockup device mouse interaction
  const devicesCenter = document.getElementById('devicesCenter');
  const laptopMockup = document.getElementById('laptopMockup');
  const phoneMockup = document.getElementById('phoneMockup');
  if (devicesCenter && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    devicesCenter.addEventListener('mousemove', (e) => {
      const rect = devicesCenter.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 35;
      const rotateY = (x - centerX) / -35;
      if(laptopMockup) laptopMockup.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(0deg)`;
      if(phoneMockup) phoneMockup.style.transform = `perspective(1000px) rotateX(${rotateX * 0.8}deg) rotateY(${rotateY * 0.8}deg) rotateZ(0deg)`;
    });

    devicesCenter.addEventListener('mouseleave', () => {
      if(laptopMockup) laptopMockup.style.transform = 'perspective(1100px) rotateX(0) rotateY(0)';
      if(phoneMockup) phoneMockup.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  }

  // Floating icons in hero
  const floatingIcons = document.querySelectorAll('.floating-icon');
  floatingIcons.forEach(icon => {
    icon.style.animationDelay = `${Math.random() * 20}s`;
    icon.style.animationDuration = `${10 + Math.random() * 10}s`;
    icon.style.left = `${Math.random() * 100}%`;
  });

  // Handle form submissions
  window.handleAnnounce = function(event) {
    event.preventDefault();
    console.log('Announcement form submitted');
    return false;
  }
  window.handleCtaEmail = function(event) {
    event.preventDefault();
    console.log('CTA form submitted');
    return false;
  }

  // Initial and resize adjustment
  window.addEventListener('resize', adjustLayoutHeight);
  adjustLayoutHeight();
});