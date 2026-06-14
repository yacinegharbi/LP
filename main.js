/* ===========================================================
   WorkDZ - Main JS
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburger menu toggle
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
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

  // Announcement bar close
  const announceBar = document.getElementById('announce-bar');
  const announceCloseBtn = document.getElementById('announceClose');
  announceCloseBtn.addEventListener('click', () => {
    announceBar.classList.add('hidden');
  });

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
    document.querySelector('.hero-inner').classList.add('ready');
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
      laptopMockup.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(0deg)`;
      phoneMockup.style.transform = `perspective(1000px) rotateX(${rotateX * 0.8}deg) rotateY(${rotateY * 0.8}deg) rotateZ(0deg)`;
    });

    devicesCenter.addEventListener('mouseleave', () => {
      laptopMockup.style.transform = 'perspective(1100px) rotateX(0) rotateY(0)';
      phoneMockup.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  }

  // Floating icons in hero
  const floatingIcons = document.querySelectorAll('.floating-icon');
  floatingIcons.forEach(icon => {
    icon.style.animationDelay = `${Math.random() * 20}s`;
    icon.style.animationDuration = `${10 + Math.random() * 10}s`;
    icon.style.left = `${Math.random() * 100}%`;
  });

  // Handle announcement form submission
  window.handleAnnounce = function(event) {
    event.preventDefault();
    // Add form submission logic here
    console.log('Announcement form submitted');
    return false;
  }

  // Handle CTA form submission
  window.handleCtaEmail = function(event) {
    event.preventDefault();
    // Add form submission logic here
    console.log('CTA form submitted');
    return false;
  }
});
