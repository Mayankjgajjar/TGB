import { test, expect } from '@playwright/test';

test.describe('Services', () => {
  test('services page displays service links', async ({ page }) => {
    await page.goto('/services');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(3000);
    const serviceLinks = page.locator('a[href*="/services/"]');
    await expect(serviceLinks.first()).toBeVisible({ timeout: 15000 });
    const count = await serviceLinks.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('navigates to service detail page', async ({ page }) => {
    await page.goto('/services');
    const firstService = page.locator('a[href*="/services/"]').first();
    await firstService.click();
    await page.waitForURL('**/services/**');
    await expect(page.locator('main')).toBeVisible();
  });

  test('service detail page has structured content', async ({ page }) => {
    await page.goto('/services/led-sign-boards');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('main')).toBeVisible();
  });
});
