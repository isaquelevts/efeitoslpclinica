gsap.registerPlugin(ScrollTrigger);

// o painel começa "encolhido" (recortado) e abre conforme a rolagem
gsap.fromTo('.cta__panel',
  { clipPath: 'inset(12% 6% 12% 6% round 60px)' },
  {
    clipPath: 'inset(0% 0% 0% 0% round 28px)', ease: 'none',
    scrollTrigger: { trigger: '.cta', start: 'top bottom', end: 'top 30%', scrub: true }
  }
);

// a foto desce mais devagar que a página (parallax)
gsap.fromTo('.cta__photo',
  { yPercent: 2 },
  {
    yPercent: 10, ease: 'none',
    scrollTrigger: { trigger: '.cta', start: 'top bottom', end: 'bottom top', scrub: true }
  }
);

window.replay = () => scrollTo({ top: 0 });
