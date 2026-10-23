import { defineConfig, devices } from '@playwright/test';

// Getestet wird immer der lokal gebaute Stand (Hugo-Environment "test", Wurzelpfad "/").
// So sind die Snapshots deterministisch und unabhängig davon, unter welchem Pfad ein Branch deployt wird.
const port = 1313;
const baseURL = `http://localhost:${port}/`;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : [['list'], ['html', { open: 'on-failure' }]],

  // Alle Snapshots liegen gesammelt in tests/__snapshots__/. Sie sind die abgenommenen Stände der Seiten und
  // werden nur nach menschlichem Review geändert (siehe AGENTS.md und ADR 0026).
  // Ohne {projectName} im Pfad: Desktop und Mobil müssen dieselbe Struktur liefern.
  snapshotPathTemplate: '{testDir}/__snapshots__/{arg}{ext}',
  expect: {
    toMatchAriaSnapshot: { pathTemplate: '{testDir}/__snapshots__/{arg}{ext}' },
  },

  use: {
    baseURL,
    locale: 'de-DE',
    timezoneId: 'Europe/Berlin',
    trace: 'retain-on-failure',
  },

  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobil', use: { ...devices['Pixel 7'] } },
  ],

  webServer: {
    command: `hugo server -e test --port ${port} --baseURL ${baseURL} --disableLiveReload --renderToMemory`,
    cwd: '..',
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
