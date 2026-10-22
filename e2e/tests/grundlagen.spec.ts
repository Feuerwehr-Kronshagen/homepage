import { expect, test } from '@playwright/test';
import { pages } from './pages';

// Grundregeln aus AGENTS.md (SEO, Barrierefreiheit nach LBGG SH), die für jede Seite gelten.

for (const { name, path } of pages) {
  test.describe(name, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(path);
    });

    test('Sprache, Titel und Meta-Description sind gesetzt', async ({ page }) => {
      await expect(page.locator('html')).toHaveAttribute('lang', 'de');
      await expect(page).toHaveTitle(/Feuerwehr Kronshagen$/);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /\S{10,}/);
    });

    test('Testumgebung wird nicht indexiert', async ({ page }) => {
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
    });

    test('genau eine Überschrift der Ebene 1', async ({ page }) => {
      // Bekannter Mangel: Die Startseite hat keine h1 (Hero-Titel ist ein <div>).
      // Sobald das behoben ist, schlägt dieser Test fehl – dann die Zeile entfernen.
      test.fail(name === 'startseite', 'Startseite hat noch keine h1');
      await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
    });

    test('alle Bilder haben einen Alternativtext', async ({ page }) => {
      // alt="" ist erlaubt (dekorative Bilder), ein fehlendes alt-Attribut nicht.
      await expect(page.locator('img:not([alt])')).toHaveCount(0);
    });
  });
}
