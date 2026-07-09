import { test, expect } from '@playwright/test';

test.describe('Gallery', () => {
  test('gallery page displays images', async ({ page }) => {
    await page.goto('/gallery');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    const images = page.locator('img');
    await expect(images.first()).toBeVisible({ timeout: 15000 });
  });

  test('navigates to project detail from gallery', async ({ page }) => {
    await page.goto('/gallery');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    const projectLink = page.locator('a[href*="/projects/"]').first();
    if (await projectLink.isVisible()) {
      await projectLink.click();
      await page.waitForURL('**/projects/**');
      await expect(page.locator('main')).toBeVisible();
    }
  });
});
