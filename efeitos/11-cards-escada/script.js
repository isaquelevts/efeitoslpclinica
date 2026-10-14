gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray('.card');

cards.forEach((card, i) => {
  // entrada: sobe girando levemente e assenta
  gsap.from(card, {
    yPercent: 40, rotation: (i - 1) * -5, autoAlpha: 0,
    duration: 1.4, ease: 'expo.out',
    scrollTrigger: { trigger: card, start: 'top 95%', once: true }
  });

  // profundidade: cada card anda num ritmo diferente enquanto o bloco cruza a tela
  gsap.fromTo(card,
    { y: 40 * i },
    {
      y: -40 * i, ease: 'none',
      scrollTrigger: { trigger: '.deck', start: 'top bottom', end: 'bottom top', scrub: 1 }
    }
  );
});
