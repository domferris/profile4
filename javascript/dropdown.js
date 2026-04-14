// EXPERIENCE DROPDOWNS
document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.dropdown-trigger');

  const animationTimeInMs = 750;

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const parentDropdown = trigger.closest('.dropdown');
      const currentWrapper = parentDropdown.querySelector('.dropdown-wrapper');
      const isOpen = currentWrapper.classList.contains('is-open');

      document
        .querySelectorAll('.dropdown-wrapper.is-open')
        .forEach((wrapper) => {
          wrapper.classList.remove('is-open');
          wrapper.classList.add('is-closing');

          setTimeout(() => {
            wrapper.classList.remove('is-closing');
          }, animationTimeInMs);
        });

      document.querySelectorAll('.dropdown-trigger').forEach((btn) => {
        btn.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        currentWrapper.classList.remove('is-closing');
        currentWrapper.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
