// Les titres animés restent cachés jusqu'à leur découpe (pas de flash). Sans JavaScript, tout reste visible.
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js-motion');
  // Filet de sécurité : si le script d'animation n'arrive pas (réseau lent), les titres s'affichent quand même.
  setTimeout(() => document.documentElement.classList.remove('js-motion'), 4000);
}
