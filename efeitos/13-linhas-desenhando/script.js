gsap.registerPlugin(ScrollTrigger);

const rows = gsap.utils.toArray('.row');

const tl = gsap.timeline({
  scrollTrigger: { trigger: '.rows', start: 'top 85%', once: true }
});

tl
  // o GSAP anima a variável CSS --rule de 0 até 1 em cada linha
  .fromTo(rows, { '--rule': 0 }, { '--rule': 1, duration: 1.2, stagger: 0.12, ease: 'expo.inOut' }, 0)
  // e o texto sobe logo depois
  .from(rows.flatMap((r) => [...r.children]), { y: 18, autoAlpha: 0, duration: 0.9, stagger: 0.06 }, 0.2);

window.replay = () => tl.restart();
