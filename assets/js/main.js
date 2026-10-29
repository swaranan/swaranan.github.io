(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav__toggle');
  const list = document.getElementById('nav-list');

  // Header bg on scroll
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', open);
    list.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  list.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Reveal on scroll
  const items = document.querySelectorAll('.section__label, .about__body, .card, .timeline__item, .toolkit__group, .contact__big');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach((el) => {
      el.classList.add('reveal');
      io.observe(el);
    });
  }
})();
