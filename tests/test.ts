import { expect, test } from '@playwright/test';

test('start page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Wir suchen Dich!' })).toBeVisible();
});
