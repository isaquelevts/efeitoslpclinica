gsap.registerPlugin(ScrollTrigger);

const steps = gsap.utils.toArray('.step');
const css = getComputedStyle(document.documentElement);
const accent = css.getPropertyValue('--accent').trim();
const paper = css.getPropertyValue('--paper').trim();
const texts = (step) => step.querySelectorAll('.step__title, .step__body, .step__tag');

// estado inicial: etapas "apagadas", esperando a linha chegar
gsap.set('.steps__fill', { '--p': 0 });
steps.forEach((step) => {
  gsap.set(step.querySelector('.step__dot'), { backgroundColor: paper, color: 'rgba(22,20,18,.35)' });
  gsap.set(texts(step), { autoAlpha: 0.15, y: 24 });
});

// a seção fica fixa (pin) enquanto a linha percorre as etapas (scrub)
const tl = gsap.timeline({
  defaults: { ease: 'none' },
  scrollTrigger: { trigger: '.steps', start: 'center center', end: '+=140%', pin: true, scrub: 1 }
});

tl.to('.steps__fill', { '--p': 1, duration: steps.length }, 0);   // a linha avança

steps.forEach((step, i) => {
  const at = i * 0.92;                                            // cada etapa acende quando a linha passa
  const dot = step.querySelector('.step__dot');
  tl.to(dot, { backgroundColor: accent, color: '#161412', duration: 0.3 }, at)
    .fromTo(dot, { scale: 0.85 }, { scale: 1, duration: 0.5, ease: 'back.out(3)' }, at)
    .to(texts(step), { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' }, at);
});

window.replay = () => scrollTo({ top: 0 });
