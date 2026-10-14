gsap.registerPlugin(ScrollTrigger);

const tweens = [];

document.querySelectorAll('[data-count]').forEach((el) => {
  const final = el.textContent.trim();            // texto que aparece no fim: "13+", "2k+"...
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const state = { v: 0 };                         // o GSAP anima este objeto...

  el.textContent = '0' + suffix;

  tweens.push(gsap.to(state, {
    v: target, duration: 2.2, ease: 'power2.out',
    scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    onUpdate: () => {                             // ...e a cada quadro o número é escrito na tela
      el.textContent = Math.round(state.v).toLocaleString('pt-BR') + suffix;
    },
    onComplete: () => { el.textContent = final; }
  }));
});

window.replay = () => tweens.forEach((t) => t.restart());
