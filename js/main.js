/**
 * main.js
 * Handles: navbar scroll shadow · mobile drawer · active nav on scroll
 */
(function () {
  'use strict';

  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const drawer    = document.getElementById('drawer');
  const overlay   = document.getElementById('overlay');
  const closeBtn  = document.getElementById('drawerClose');
  const mobLinks  = document.querySelectorAll('.mob-link');
  const navLinks  = document.querySelectorAll('.nav-link');

  /* ── Navbar shadow on scroll ── */
  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });

  /* ── Open drawer ── */
  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  /* ── Close drawer ── */
  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  mobLinks.forEach(function (l) { l.addEventListener('click', closeDrawer); });

  /* Close on Escape key */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
      hamburger.focus();
    }
  });

  /* ── Active nav link via IntersectionObserver ── */
  const sections = document.querySelectorAll('section[id], footer[id]');

  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach(function (l) {
        l.classList.toggle('active', l.getAttribute('href') === '#' + id);
      });
      mobLinks.forEach(function (l) {
        l.classList.toggle('active', l.getAttribute('href') === '#' + id);
      });
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  sections.forEach(function (s) { io.observe(s); });

}());
