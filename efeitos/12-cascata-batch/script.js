gsap.registerPlugin(ScrollTrigger);

const tiles = gsap.utils.toArray('.tile');

// começam escondidos (evita o "piscar" antes de animar)
gsap.set(tiles, { autoAlpha: 0, y: 50 });

const play = (items) => gsap.to(items, {
  autoAlpha: 1, y: 0, duration: 1, stagger: 0.09, ease: 'expo.out', overwrite: true
});

// o batch junta quem entra na tela ao mesmo tempo e entrega todos de uma vez
ScrollTrigger.batch(tiles, {
  start: 'top 92%',
  once: true,
  onEnter: (items) => play(items)
});

window.replay = () => {
  gsap.set(tiles, { autoAlpha: 0, y: 50 });
  play(tiles);
};
