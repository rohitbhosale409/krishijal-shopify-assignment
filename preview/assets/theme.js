
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('[data-menu]');
  const toggle = document.querySelector('[data-menu-toggle]');
  if (menu && toggle) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  document.querySelectorAll('[data-faq]').forEach(item => {
    const button = item.querySelector('[data-faq-button]');
    if (!button) return;
    button.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('[data-faq]').forEach(other => other.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
