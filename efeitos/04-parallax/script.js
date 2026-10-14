gsap.registerPlugin(ScrollTrigger);

// 1) a foto desliza dentro da moldura (a escala 1.2 evita mostrar a borda)
gsap.fromTo('[data-fx="slide"]',
  { yPercent: -8, scale: 1.2 },
  {
    yPercent: 8, scale: 1.2, ease: 'none',
    scrollTrigger: { trigger: '[data-fx="slide"]', start: 'top bottom', end: 'bottom top', scrub: true }
  }
);

// 2) a foto começa com zoom e assenta enquanto a moldura cruza a tela
gsap.fromTo('[data-fx="zoom"]',
  { scale: 1.3 },
  {
    scale: 1, ease: 'none',
    scrollTrigger: { trigger: '[data-fx="zoom"]', start: 'top bottom', end: 'bottom top', scrub: true }
  }
);

window.replay = () => scrollTo({ top: 0 });
