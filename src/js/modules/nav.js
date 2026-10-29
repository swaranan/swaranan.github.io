// Mobile menu
export function initNav() {
  const toggle = document.querySelector('.nav__toggle');
  const list = document.getElementById('nav-list');
  if (!toggle || !list) return;

  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', open);
    list.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
  };

  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  list.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));
}
