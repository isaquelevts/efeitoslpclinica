// só em telas com mouse (no toque não existe "hover")
if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.querySelectorAll('.mag-zone').forEach((zone) => {
    const el = zone.querySelector('.mag');

    // quickTo cria UMA animação reaproveitável (bem mais leve que criar um tween a cada movimento)
    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' });

    zone.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * 0.35);   // segue 35% da distância até o centro
      yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
    });

    zone.addEventListener('pointerleave', () => { xTo(0); yTo(0); });   // volta suave
  });
}
