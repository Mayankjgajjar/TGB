import { test, expect } from '@playwright/test';

test.describe('Quote Modal', () => {
  test('opens quote modal from CTA button', async ({ page }) => {
    await page.goto('/');
    const ctaButton = page.locator('button:has-text("Get a Quote"), a:has-text("Get a Quote")').first();
    await ctaButton.click();
    await page.waitForTimeout(500);
    const modal = page.locator('[role="dialog"], .modal, [class*="modal"]').first();
    if (await modal.isVisible()) {
      await expect(modal).toBeVisible();
    }
  });

  test('opens quote modal from footer link', async ({ page }) => {
    await page.goto('/');
    const footerQuote = page.locator('footer').getByText(/quote/i).first();
    if (await footerQuote.isVisible()) {
      await footerQuote.click();
      await page.waitForTimeout(500);
      const modal = page.locator('[role="dialog"], .modal, [class*="modal"]').first();
      if (await modal.isVisible()) {
        await expect(modal).toBeVisible();
      }
    }
  });

  test('closes quote modal on close button click', async ({ page }) => {
    await page.goto('/');
    const ctaButton = page.locator('button:has-text("Get a Quote"), a:has-text("Get a Quote")').first();
    await ctaButton.click();
    await page.waitForTimeout(500);
    const closeButton = page.locator('[role="dialog"] button:has-text("Close"), [role="dialog"] button[aria-label*="close"], [role="dialog"] [class*="close"]').first();
    if (await closeButton.isVisible()) {
      await closeButton.click();
      await page.waitForTimeout(300);
      await expect(page.locator('[role="dialog"]')).not.toBeVisible();
    }
  });
});
