gsap.registerPlugin(ScrollTrigger, SplitText);

let anim;

document.fonts.ready.then(() => {
  SplitText.create('.mask-text', {
    type: 'lines',
    mask: 'lines',              // cada linha ganha um "recorte" (overflow: clip)
    linesClass: 'line',         // o recorte recebe a classe "line-mask" (usada no CSS)
    autoSplit: true,
    onSplit(self) {
      anim = gsap.from(self.lines, {
        yPercent: 110,          // começa abaixo da máscara, escondida
        duration: 1.1, stagger: 0.09, ease: 'expo.out',
        scrollTrigger: { trigger: '.mask-text', start: 'top 88%', once: true }
      });
      return anim;
    }
  });
});

window.replay = () => anim && anim.restart();
