gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: { trigger: '.reveals', start: 'top 85%', once: true }
});

tl
  // de baixo para cima: recorta tudo e vai liberando a parte de cima
  .fromTo('.reveal--up',
    { clipPath: 'inset(100% 0% 0% 0% round 16px)' },
    { clipPath: 'inset(0% 0% 0% 0% round 16px)', duration: 1.4, ease: 'expo.inOut' }, 0)
  // de cima para baixo
  .fromTo('.reveal--down',
    { clipPath: 'inset(0% 0% 100% 0% round 16px)' },
    { clipPath: 'inset(0% 0% 0% 0% round 16px)', duration: 1.4, ease: 'expo.inOut' }, 0.15)
  // círculo que abre do centro
  .fromTo('.reveal--circle',
    { clipPath: 'circle(0% at 50% 50%)' },
    { clipPath: 'circle(75% at 50% 50%)', duration: 1.6, ease: 'expo.inOut' }, 0.3)
  // a foto assenta com um zoom out
  .from('.reveal .ph', { scale: 1.3, duration: 2, ease: 'expo.out' }, 0);

window.replay = () => tl.restart();
