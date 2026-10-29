// Reveal on scroll
const SELECTOR = '.section__label, .about__body, .card, .timeline__item, .toolkit__group, .contact__big';

export function initReveal() {
  if (!('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(SELECTOR).forEach((el) => {
    el.classList.add('reveal');
    io.observe(el);
  });
}
