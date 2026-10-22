import { expect, test } from '@playwright/test';
import { pages } from './pages';

// Haupttreiber der Suite: ARIA-Snapshots.
// Sie halten fest, was Screenreader und Suchmaschinen von jeder Seite "sehen" (Überschriften, Links, Listen,
// Landmarks) – unabhängig von Farben, Schriften und Pixeln. Die YAML-Dateien in __snapshots__/ sind die
// abgenommenen Stände. Ändert sich die Struktur, schlägt der Test fehl und der Diff zeigt genau, was anders ist.

for (const { name, path } of pages) {
  test.describe(name, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(path);
    });

    test('Inhalt entspricht dem abgenommenen Stand', async ({ page }) => {
      await expect(page.getByRole('main')).toMatchAriaSnapshot({ name: `${name}.aria.yml` });
    });

    // Kopf- und Fußbereich teilen sich je einen Snapshot für alle Seiten:
    // Weicht eine Seite ab, ist das Layout inkonsistent.
    test('Kopfbereich ist auf allen Seiten gleich', async ({ page }) => {
      await expect(page.getByRole('banner')).toMatchAriaSnapshot({ name: 'kopfbereich.aria.yml' });
    });

    test('Fußbereich ist auf allen Seiten gleich', async ({ page }) => {
      await expect(page.getByRole('contentinfo')).toMatchAriaSnapshot({ name: 'fussbereich.aria.yml' });
    });
  });
}
