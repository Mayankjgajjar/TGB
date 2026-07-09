import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('homepage loads and displays key elements', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/TGB Enterprise/);
    await expect(page.locator('header').or(page.locator('nav')).first()).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
  });

  test('navbar links navigate to correct pages', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav[aria-label="Primary navigation"]');
    const links = [
      { label: 'Home', path: '/' },
      { label: 'Services', path: '/services' },
      { label: 'About', path: '/about' },
      { label: 'Contact', path: '/contact' },
    ];

    for (const { label, path } of links) {
      const link = nav.getByRole('link', { name: label, exact: true });
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', path);
    }
  });

  test('clicking Services link navigates to services page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Services', exact: true }).first().click();
    await page.waitForURL('**/services');
    await expect(page.locator('main')).toBeVisible();
  });

  test('clicking logo navigates to home', async ({ page }) => {
    await page.goto('/about');
    await page.getByRole('link', { name: /TGB Enterprise/ }).first().click();
    await expect(page).toHaveURL('/');
  });

  test('footer contains business information', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer')).toContainText('TGB Enterprise');
    await expect(page.locator('footer')).toContainText('Ahmedabad');
  });

  test('mobile menu button is present on small viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    const menuButton = page.getByRole('button', { name: /open menu/i });
    await expect(menuButton).toBeVisible();
  });

  test('skip to main content link is accessible', async ({ page }) => {
    await page.goto('/');
    const skipLink = page.locator('a:has-text("Skip to main content")');
    await expect(skipLink).toBeVisible();
  });

  test('404 page shows for unknown route', async ({ page }) => {
    await page.goto('/this-page-does-not-exist');
    await expect(page.locator('main')).toBeVisible();
  });

  test('WhatsApp FAB button is present', async ({ page }) => {
    await page.goto('/');
    const whatsapp = page.locator('a[aria-label="Contact us on WhatsApp"]');
    await expect(whatsapp).toBeVisible();
    await expect(whatsapp).toHaveAttribute('href', /wa\.me/);
  });
});
