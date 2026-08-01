/* SkyRanger US — main JS */
(function () {
  'use strict';

  /* Mobile nav toggle */
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  /* Mobile dropdown toggle */
  document.querySelectorAll('.dropdown > span, .dropdown > a').forEach(function (el) {
    el.addEventListener('click', function (e) {
      if (window.matchMedia('(max-width: 900px)').matches) {
        e.preventDefault();
        el.parentElement.classList.toggle('open');
      }
    });
  });

  /* Active nav link */
  const path = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href && href === path) a.classList.add('active');
    if (path === '' && href === 'index.html') a.classList.add('active');
  });
})();
