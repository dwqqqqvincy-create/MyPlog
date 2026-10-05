document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-access-gate]').forEach((gate) => {
    const form = gate.querySelector('.access-form');
    const input = form?.elements.response;
    const error = gate.querySelector('[data-access-error]');
    const content = gate.nextElementSibling;

    if (!form || !input || !content?.matches('[data-gated-content]')) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const normalize = (value) => value.normalize('NFKC').trim().toLocaleLowerCase();
      const expected = gate.dataset.mode === 'question' ? gate.dataset.answer : gate.dataset.key;
      const accepted = Boolean(expected) && normalize(input.value) === normalize(expected);

      if (!accepted) {
        error.hidden = false;
        input.setAttribute('aria-invalid', 'true');
        input.focus();
        return;
      }

      error.hidden = true;
      gate.hidden = true;
      content.hidden = false;
      content.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
