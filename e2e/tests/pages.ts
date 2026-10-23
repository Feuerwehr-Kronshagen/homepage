// Alle Seiten, deren Struktur per ARIA-Snapshot abgenommen ist.
// Neue dauerhafte Seite → hier eintragen, `make 06-e2e-update-snapshots` ausführen, Snapshot im PR prüfen.
export const pages = [
  { name: 'startseite', path: './' },
  { name: 'kontakt', path: 'pages/contact/' },
  { name: 'impressum', path: 'pages/impressum/' },
  { name: 'datenschutz', path: 'pages/privacy/' },
  { name: 'barrierefreiheit', path: 'pages/accessibility/' },
] as const;
