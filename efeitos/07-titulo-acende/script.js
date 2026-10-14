gsap.registerPlugin(ScrollTrigger, SplitText);

document.fonts.ready.then(() => {
  SplitText.create('.light-title', {
    type: 'words',
    autoSplit: true,
    onSplit(self) {
      return gsap.fromTo(self.words,
        { opacity: 0.12 },                  // palavras "apagadas"
        {
          opacity: 1, stagger: 0.1, ease: 'none',
          scrollTrigger: {
            trigger: '.light-title', start: 'top 80%', end: 'bottom 45%',
            scrub: true                     // o progresso segue a rolagem
          }
        }
      );
    }
  });
});

window.replay = () => scrollTo({ top: 0 });
