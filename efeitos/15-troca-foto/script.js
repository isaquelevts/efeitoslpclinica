const picks = [...document.querySelectorAll('[data-pick]')];
const shots = [...document.querySelectorAll('[data-shot]')];
const bios = [...document.querySelectorAll('[data-bio]')];
let now = 0;

function pick(next) {
  if (next === now) return;
  const out = shots[now];
  const inn = shots[next];

  // a foto que sai: desfoca e dá zoom
  gsap.fromTo(out, { scale: 1, filter: 'blur(0px)' }, {
    scale: 1.15, filter: 'blur(10px)', duration: 0.7, ease: 'power3.out', overwrite: true,
    onComplete: () => gsap.set(out, { clearProps: 'transform,filter' })
  });

  // a foto que entra: começa desfocada e com zoom, e "assenta" nítida
  gsap.fromTo(inn, { scale: 1.2, filter: 'blur(10px)' }, {
    scale: 1, filter: 'blur(0px)', duration: 1.1, ease: 'expo.out', delay: 0.1, overwrite: true,
    onComplete: () => gsap.set(inn, { clearProps: 'transform,filter' })
  });

  // o texto também entra com um leve desfoque
  gsap.fromTo(bios[next], { y: 12, filter: 'blur(4px)' }, {
    y: 0, filter: 'blur(0px)', duration: 0.8, clearProps: 'transform,filter'
  });

  // a visibilidade em si é controlada por aria-hidden (e o CSS faz o fade)
  picks.forEach((b, i) => b.setAttribute('aria-pressed', String(i === next)));
  shots.forEach((s, i) => s.setAttribute('aria-hidden', String(i !== next)));
  bios.forEach((p, i) => p.setAttribute('aria-hidden', String(i !== next)));
  now = next;
}

picks.forEach((b, i) => b.addEventListener('click', () => pick(i)));

window.replay = () => pick((now + 1) % picks.length);
