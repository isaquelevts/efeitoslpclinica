gsap.registerPlugin(ScrollTrigger, SplitText);

let tl;

document.fonts.ready.then(() => {
  SplitText.create('.foot__word', {
    type: 'chars',
    onSplit(self) {
      tl = gsap.timeline({
        scrollTrigger: { trigger: '.foot', start: 'top 70%', once: true }
      });

      tl
        // letras sobem de baixo, girando um pouco
        .from(self.chars, { yPercent: 110, rotation: 8, duration: 1.4, stagger: 0.06, ease: 'expo.out' }, 0)
        // o leque sobe e cada card gira para sua posição final (definida no CSS)
        .from('.fan__card', {
          y: 260, rotation: (i) => [16, 8, -6][i], autoAlpha: 0,
          duration: 1.4, stagger: 0.12, ease: 'expo.out'
        }, 0.2);

      return tl;
    }
  });
});
