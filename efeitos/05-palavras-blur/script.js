gsap.registerPlugin(ScrollTrigger, SplitText);

let anim;

document.fonts.ready.then(() => {
  SplitText.create('.blur-title', {
    type: 'words',
    autoSplit: true,            // divide de novo se a fonte carregar ou a largura mudar
    onSplit(self) {
      anim = gsap.fromTo(self.words,
        { autoAlpha: 0, filter: 'blur(10px)', yPercent: 30 },
        {
          autoAlpha: 1, filter: 'blur(0px)', yPercent: 0,
          duration: 1.2, stagger: 0.06, ease: 'power3.out',
          scrollTrigger: { trigger: '.blur-title', start: 'top 85%', once: true }
        }
      );
      return anim;              // devolver a animação deixa o SplitText sincronizá-la
    }
  });
});

window.replay = () => anim && anim.restart();
