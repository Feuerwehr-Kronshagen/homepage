import { expect, test } from '@playwright/test';
import { pages } from './pages';

// Nutzerwege: Was Besucher tatsächlich tun. Ergänzt die Struktur-Snapshots um Verhalten.

test('Startseite: "Mitmachen" führt zur Kontaktseite', async ({ page }) => {
  await page.goto('./');
  await page.getByRole('button', { name: 'Mitmachen' }).click();

  await expect(page).toHaveURL(/\/pages\/contact\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Werde Teil unseres Teams!');
});

test('Seitentitel im Kopfbereich führt zur Startseite', async ({ page }) => {
  await page.goto('pages/impressum/');
  await page.getByRole('banner').getByRole('link', { name: 'Feuerwehr Kronshagen' }).click();

  await expect(page).toHaveURL(/localhost:\d+\/$/);
  await expect(page.getByRole('button', { name: 'Mitmachen' })).toBeVisible();
});

for (const [linkName, slug] of [
  ['Kontakt', 'contact'],
  ['Impressum', 'impressum'],
  ['Barrierefreiheit', 'accessibility'],
  ['Datenschutz', 'privacy'],
] as const) {
  test(`Fußbereich: "${linkName}" öffnet die Seite und markiert sie als aktuell`, async ({ page }) => {
    await page.goto('./');
    const footer = page.getByRole('contentinfo');
    await footer.getByRole('link', { name: linkName }).click();

    await expect(page).toHaveURL(new RegExp(`/pages/${slug}/$`));
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(footer.getByRole('link', { name: linkName })).toHaveAttribute('aria-current', 'page');
  });
}

test('Alle internen Links sind erreichbar', async ({ page, request }) => {
  const internal = new Set<string>();

  for (const { path } of pages) {
    await page.goto(path);
    const hrefs = await page.locator('a[href]').evaluateAll((links) =>
      links.map((a) => (a as HTMLAnchorElement).href),
    );
    const origin = new URL(page.url()).origin;
    hrefs.filter((href) => href.startsWith(origin)).forEach((href) => internal.add(href.split('#')[0]));
  }

  expect(internal.size).toBeGreaterThan(0);
  for (const url of internal) {
    const response = await request.get(url);
    expect.soft(response.status(), url).toBe(200);
  }
});
