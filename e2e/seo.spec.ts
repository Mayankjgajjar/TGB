import { test, expect } from '@playwright/test';

test.describe('SEO', () => {
  test('robots.txt is accessible', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    expect(response?.status()).toBe(200);
    const text = await response?.text();
    expect(text).toContain('User-agent: *');
    expect(text).toContain('Sitemap');
  });

  test('sitemap.xml is accessible', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    expect(response?.status()).toBe(200);
    const text = await response?.text();
    expect(text).toContain('urlset');
    expect(text).toContain('tgbsign.com');
  });

  test('homepage has correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/TGB Enterprise/);
  });

  test('homepage has meta description', async ({ page }) => {
    await page.goto('/');
    const metaDesc = page.locator('meta[name="description"]');
    await expect(metaDesc).toHaveAttribute('content', /.+/);
  });

  test('homepage has canonical URL', async ({ page }) => {
    await page.goto('/');
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', /tgbsign\.com/);
  });

  test('homepage has Open Graph tags', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', /tgbsign\.com/);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /http/);
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content', 'website');
  });

  test('homepage has Twitter Card tags', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image');
    await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('meta[name="twitter:description"]')).toHaveAttribute('content', /.+/);
  });

  test('JSON-LD structured data exists', async ({ page }) => {
    await page.goto('/');
    const scripts = page.locator('script[type="application/ld+json"]');
    const count = await scripts.count();
    expect(count).toBeGreaterThanOrEqual(1);
    for (let i = 0; i < count; i++) {
      const json = JSON.parse(await scripts.nth(i).innerHTML());
      expect(json['@context']).toBe('https://schema.org');
    }
  });

  test('LocalBusiness schema has correct details', async ({ page }) => {
    await page.goto('/');
    const scripts = page.locator('script[type="application/ld+json"]');
    const count = await scripts.count();
    let foundLocalBusiness = false;
    for (let i = 0; i < count; i++) {
      const json = JSON.parse(await scripts.nth(i).innerHTML());
      if (json['@type'] === 'LocalBusiness') {
        foundLocalBusiness = true;
        expect(json.name).toContain('TGB Enterprise');
        expect(json.telephone).toBeTruthy();
        expect(json.address).toBeTruthy();
        expect(json.address.addressLocality).toBe('Ahmedabad');
        break;
      }
    }
    expect(foundLocalBusiness).toBeTruthy();
  });

  test('service detail page has correct OG image', async ({ page }) => {
    await page.goto('/services/led-sign-boards');
    await page.waitForLoadState('networkidle');
    const ogImage = page.locator('meta[property="og:image"]');
    await expect(ogImage).toHaveAttribute('content', /tgbsign\.com/);
  });
});
