// um item aberto por vez
document.querySelectorAll('.faq__item button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq__item');
    const wasOpen = item.hasAttribute('data-open');

    document.querySelectorAll('.faq__item[data-open]').forEach((i) => {
      i.removeAttribute('data-open');
      i.querySelector('button').setAttribute('aria-expanded', 'false');
    });

    if (!wasOpen) {
      item.setAttribute('data-open', '');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});
