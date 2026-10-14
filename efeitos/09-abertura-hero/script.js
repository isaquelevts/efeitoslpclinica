gsap.registerPlugin(SplitText);

let intro;

document.fonts.ready.then(() => {
  const panel = document.querySelector('.hero__panel');
  const title = SplitText.create('.hero__title', { type: 'words' });
  const body = SplitText.create('.hero__body', { type: 'lines', mask: 'lines', linesClass: 'line' });

  intro = gsap.timeline({ defaults: { ease: 'expo.out' } });

  intro
    .set(panel, { autoAlpha: 1 }, 0)
    // 1) o painel abre do centro da tela
    .fromTo(panel,
      { clipPath: 'inset(50% 50% 50% 50% round 200px)' },
      { clipPath: 'inset(0% 0% 0% 0% round 28px)', duration: 1.6, ease: 'expo.inOut' }, 0)
    // 2) a foto "assenta" (zoom out) enquanto abre
    .from('.hero__bg', { scale: 1.25, duration: 2.2 }, 0)
    // 3) o menu desce
    .from('.nav', { yPercent: -160, autoAlpha: 0, duration: 1.2 }, 0.9)
    // 4) palavras do título saem do desfoque
    .fromTo(title.words,
      { autoAlpha: 0, filter: 'blur(12px)', yPercent: 40 },
      { autoAlpha: 1, filter: 'blur(0px)', yPercent: 0, duration: 1.3, stagger: 0.07, ease: 'power3.out' }, 1)
    // 5) linhas do texto sobem por trás da máscara
    .from(body.lines, { yPercent: 110, duration: 1, stagger: 0.08 }, 1.6)
    // 6) botão
    .from('.hero__cta', { y: 24, autoAlpha: 0, duration: 1 }, 1.8);
});

window.replay = () => intro && intro.restart();
