gsap.registerPlugin(SplitText);

const items = [...document.querySelectorAll('.q')];
const count = document.getElementById('count');
let now = 0;

document.fonts.ready.then(() => {
  // divide cada citação em linhas com máscara (uma vez)
  items.forEach((el) => SplitText.create(el.querySelector('.q__text'), {
    type: 'lines', mask: 'lines', linesClass: 'line', autoSplit: true
  }));
  show(0);
});

function show(n) {
  now = (n + items.length) % items.length;
  items.forEach((el, i) => el.setAttribute('aria-hidden', String(i !== now)));
  count.textContent = `${now + 1} / ${items.length}`;

  const item = items[now];
  // as linhas sobem de dentro da máscara...
  gsap.fromTo(item.querySelectorAll('.line'),
    { yPercent: 110 },
    { yPercent: 0, duration: 1, stagger: 0.07, ease: 'expo.out', overwrite: true });
  // ...e o nome aparece logo depois
  gsap.fromTo(item.querySelector('.q__by'),
    { y: 16, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 0.8, delay: 0.2 });
}

document.querySelectorAll('[data-step]').forEach((b) =>
  b.addEventListener('click', () => show(now + Number(b.dataset.step))));

window.replay = () => show(now + 1);
