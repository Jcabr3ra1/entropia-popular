// Pestañas accesibles (patrón WAI-ARIA con activación automática).
// Marcado esperado: [data-tabs] > [role=tablist] > [role=tab][aria-controls]
// y paneles [role=tabpanel]. Sin JavaScript todos los paneles quedan visibles.

type Tabs = { root: HTMLElement; tabs: HTMLButtonElement[] };

const instancias: Tabs[] = [];

function seleccionar({ root, tabs }: Tabs, index: number, enfocar = false) {
  tabs.forEach((tab, i) => {
    const activa = i === index;
    tab.setAttribute('aria-selected', String(activa));
    tab.tabIndex = activa ? 0 : -1;
    const panel = document.getElementById(tab.getAttribute('aria-controls') ?? '');
    if (panel) panel.hidden = !activa;
  });
  if (enfocar) tabs[index].focus();
  root.dispatchEvent(new CustomEvent('tabs:change', { detail: tabs[index].dataset.tab, bubbles: true }));
}

document.querySelectorAll<HTMLElement>('[data-tabs]').forEach((root) => {
  const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  if (!tabs.length) return;
  const instancia = { root, tabs };
  instancias.push(instancia);

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => seleccionar(instancia, index));
    tab.addEventListener('keydown', (event) => {
      const ultimo = tabs.length - 1;
      const destino = {
        ArrowRight: index === ultimo ? 0 : index + 1,
        ArrowLeft: index === 0 ? ultimo : index - 1,
        Home: 0,
        End: ultimo,
      }[event.key];
      if (destino === undefined) return;
      event.preventDefault();
      seleccionar(instancia, destino, true);
    });
  });

  const solicitado = new URLSearchParams(window.location.search).get('ver');
  const inicial = Math.max(0, tabs.findIndex((tab) => tab.dataset.tab === solicitado || (!solicitado && tab.getAttribute('aria-selected') === 'true')));
  seleccionar(instancia, inicial);
});

// Enlaces como <a href="#ofrecemos" data-tab-target="vivero"> abren esa pestaña.
document.addEventListener('click', (event) => {
  const link = (event.target as Element | null)?.closest<HTMLElement>('[data-tab-target]');
  if (!link) return;
  for (const instancia of instancias) {
    const index = instancia.tabs.findIndex((tab) => tab.dataset.tab === link.dataset.tabTarget);
    if (index >= 0) seleccionar(instancia, index);
  }
});
