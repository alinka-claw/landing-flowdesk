/* ===== Smooth Scroll for Safari ===== */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      // Close mobile nav if open
      navLinks.classList.remove('open');
    }
  });
});

/* ===== Navbar Scroll Effect ===== */
const navbar = document.getElementById('navbar');

function handleNavbar() {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}

window.addEventListener('scroll', handleNavbar, { passive: true });
handleNavbar();

/* ===== Mobile Nav Toggle ===== */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* ===== Scroll Animations (Intersection Observer) ===== */
const animatedElements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, parseInt(delay, 10));
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px',
  }
);

animatedElements.forEach((el) => observer.observe(el));

/* ===== CTA Form ===== */
const ctaForm = document.getElementById('ctaForm');

ctaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = ctaForm.querySelector('input[type="email"]').value;
  if (email) {
    ctaForm.innerHTML =
      '<p style="font-size:1.1rem;font-weight:600;">🎉 You\'re in! Check your inbox.</p>';
  }
});
