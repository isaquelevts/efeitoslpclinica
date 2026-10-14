/* Os cards ficam numa faixa que desliza sem parar. Uma cópia da faixa vem logo atrás:
   quando a primeira sai pela esquerda, a posição volta uma "volta" inteira (setW)
   e o movimento nunca tem emenda. */
(() => {
  const deck = document.querySelector('.deck');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const SPEED = 60;                                    // px por segundo

  // monta a faixa: cards originais + uma cópia (escondida do leitor de tela e do teclado)
  const originals = [...deck.querySelectorAll('.card')];
  const track = document.createElement('div');
  track.className = 'track';
  originals.forEach((c) => track.appendChild(c));
  originals.forEach((c) => {
    const k = c.cloneNode(true);
    k.setAttribute('aria-hidden', 'true');
    k.tabIndex = -1;
    track.appendChild(k);
  });
  deck.appendChild(track);

  let visible = false, dragging = false;
  let x = 0, setW = 0, velocity = 0, last = 0, lastX = 0, moved = 0;

  // largura de UMA volta = soma dos cards originais + espaços entre eles
  const measure = () => {
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    setW = originals.reduce((sum, c) => sum + c.offsetWidth + gap, 0);
  };
  const wrap = () => {                                  // mantém x sempre dentro de uma volta
    if (!setW) return;
    while (x <= -setW) x += setW;
    while (x > 0) x -= setW;
  };
  const apply = () => { track.style.transform = `translate3d(${x}px, 0, 0)`; };

  const loop = (now) => {
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
    last = now;
    const target = reduce.matches || !visible || dragging ? 0 : SPEED;
    velocity += (target - velocity) * Math.min(1, dt * 3);   // acelera / desacelera suave
    if (velocity > 0.01 && !dragging) { x -= velocity * dt; wrap(); apply(); }
    requestAnimationFrame(loop);
  };

  /* ---------- arrasto (mouse e dedo) ---------- */
  deck.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    dragging = true; moved = 0; lastX = e.clientX;
  });
  window.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    lastX = e.clientX; moved += Math.abs(dx);
    x += dx; wrap(); apply();
  });
  const end = () => { dragging = false; };                // ao soltar, o giro retoma suave
  window.addEventListener('pointerup', end);
  window.addEventListener('pointercancel', end);
  // se arrastou, não abre o link do card ao soltar
  deck.addEventListener('click', (e) => { if (moved > 6) { e.preventDefault(); e.stopPropagation(); } moved = 0; }, true);
  deck.addEventListener('dragstart', (e) => e.preventDefault());

  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0.05 }).observe(deck);
  new ResizeObserver(() => { measure(); wrap(); apply(); }).observe(deck);

  measure();
  requestAnimationFrame(loop);
})();
