window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-delay]').forEach((element) => {
    element.addEventListener('click', (event) => {
      const href = element.getAttribute('href');
      const delay = Number(element.dataset.delay || 0);

      if (!href || href === '#') {
        return;
      }

      event.preventDefault();
      window.setTimeout(() => {
        window.location.href = href;
      }, delay);
    });
  });
});
