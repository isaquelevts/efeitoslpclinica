gsap.registerPlugin(ScrollTrigger);

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
let lenis = null;

if (!reduce) {
  // 1) o Lenis cuida da rolagem suave
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });

  // 2) a cada passo da rolagem, avisa o ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  // 3) o relógio do GSAP move o Lenis (um único loop de animação)
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  // links âncora deslizam até a seção
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    e.preventDefault();
    const id = a.getAttribute('href');
    lenis.scrollTo(id === '#top' ? 0 : id, { offset: -80, duration: 1.4 });
  });
}

// barra de progresso da página, ligada à rolagem
gsap.to('.progress i', {
  scaleX: 1, ease: 'none',
  scrollTrigger: { start: 0, end: 'max', scrub: true }
});

window.replay = () => (lenis ? lenis.scrollTo(0, { duration: 1.6 }) : scrollTo(0, 0));
