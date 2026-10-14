/* Barra das demos: botão "Repetir", painel de código com abas e botão copiar.
   Se a demo definir window.replay(), o botão chama essa função; senão recarrega a página. */
(() => {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  const drawer = document.querySelector('.drawer');
  const codeBtn = document.querySelector('[data-code]');
  const replayBtn = document.querySelector('[data-replay]');
  if (!drawer || !codeBtn) return;

  const tabs = [...drawer.querySelectorAll('[data-tab]')];
  const panes = [...drawer.querySelectorAll('[data-pane]')];

  const show = (name) => {
    tabs.forEach((t) => t.setAttribute('aria-selected', String(t.dataset.tab === name)));
    panes.forEach((p) => { p.hidden = p.dataset.pane !== name; });
  };
  const toggle = (open = !drawer.hasAttribute('data-open')) => {
    drawer.toggleAttribute('data-open', open);
    codeBtn.setAttribute('aria-expanded', String(open));
  };

  tabs.forEach((t) => t.addEventListener('click', () => show(t.dataset.tab)));
  codeBtn.addEventListener('click', () => toggle());
  drawer.querySelector('[data-close]')?.addEventListener('click', () => toggle(false));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggle(false); });

  drawer.querySelector('[data-copy]')?.addEventListener('click', async (e) => {
    const pane = panes.find((p) => !p.hidden);
    try { await navigator.clipboard.writeText(pane.textContent); e.target.textContent = 'Copiado ✓'; }
    catch { e.target.textContent = 'Selecione e copie'; }
    setTimeout(() => { e.target.textContent = 'Copiar'; }, 1600);
  });

  replayBtn?.addEventListener('click', () => {
    toggle(false);
    if (typeof window.replay === 'function') window.replay();
    else location.reload();
  });

  show(tabs[0]?.dataset.tab);
})();
