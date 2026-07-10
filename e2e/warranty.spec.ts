import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Warranty Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/claim-warranty');
    await page.waitForLoadState('networkidle');
  });

  test('shows warranty section on page', async ({ page }) => {
    await page.waitForTimeout(3000);
    const heading = page.locator('h1, h2').filter({ hasText: /warranty/i }).first();
    await expect(heading).toBeVisible({ timeout: 15000 });
  });

  test('allows file upload for issue photo', async ({ page }) => {
    await page.waitForTimeout(3000);
    const fileInput = page.locator('input[type="file"]').first();
    await fileInput.waitFor({ state: 'visible', timeout: 15000 });
    const testImage = path.resolve(process.cwd(), 'public', 'assets', 'logos', 'tgb-logo.svg');
    await fileInput.setInputFiles(testImage);
    await page.waitForTimeout(500);
    await expect(page.locator('img[alt="Preview of issue"]')).toBeVisible();
  });

  test('submits warranty successfully with valid data and mock API', async ({ page }) => {
    await page.route('**/api/warranty', async (route) => {
      await route.fulfill({ status: 200, body: JSON.stringify({ success: true }) });
    });

    await page.waitForTimeout(3000);
    const allInputs = page.locator('input');
    const textareas = page.locator('textarea');
    const selects = page.locator('select');

    await allInputs.first().waitFor({ state: 'visible', timeout: 15000 });
    const inputs = await allInputs.all();

    // Input order: customerName(text), email, phone(tel), invoiceNumber(text), warrantyNumber(text), purchaseDate(date), issuePhoto(file), consent(checkbox)
    const values = ['Test Customer', 'customer@example.com', '9876543210', 'INV-001', 'WRN-001', '2026-06-15'];
    let valueIdx = 0;
    for (const input of inputs) {
      const type = await input.getAttribute('type');
      if (type === 'checkbox') {
        await input.check();
      } else if (type === 'file') {
        // skip
      } else if (valueIdx < values.length) {
        await input.fill(values[valueIdx++]);
      }
    }

    // Select signage type
    const signageSelect = selects.first();
    if (await signageSelect.isVisible()) {
      await signageSelect.selectOption({ index: 1 });
    }

    if (await textareas.first().isVisible()) {
      await textareas.first().fill('Test issue description for warranty claim.');
    }

    const submitBtn = page.locator('button[type="submit"]').first();
    await submitBtn.click();

    const successEl = page.locator('[role="status"]').first();
    await expect(successEl).toBeVisible({ timeout: 15000 });
  });

  test('handles warranty API error gracefully', async ({ page }) => {
    await page.route('**/api/warranty', async (route) => {
      await route.fulfill({ status: 500, body: JSON.stringify({ error: 'Server error' }) });
    });

    await page.waitForTimeout(3000);
    const allInputs = page.locator('input');
    const textareas = page.locator('textarea');
    const selects = page.locator('select');

    await allInputs.first().waitFor({ state: 'visible', timeout: 15000 });
    const inputs = await allInputs.all();

    const values = ['Test Customer', 'customer@example.com', '9876543210', 'INV-001', 'WRN-001', '2026-06-15'];
    let valueIdx = 0;
    for (const input of inputs) {
      const type = await input.getAttribute('type');
      if (type === 'checkbox') {
        await input.check();
      } else if (type === 'file') {
        // skip
      } else if (valueIdx < values.length) {
        await input.fill(values[valueIdx++]);
      }
    }

    // Select signage type
    const signageSelect = selects.first();
    if (await signageSelect.isVisible()) {
      await signageSelect.selectOption({ index: 1 });
    }

    if (await textareas.first().isVisible()) {
      await textareas.first().fill('Test issue description for warranty claim.');
    }

    const submitBtn = page.locator('button[type="submit"]').first();
    await submitBtn.click();

    const errorEl = page.locator('[role="alert"]').first();
    await expect(errorEl).toBeVisible({ timeout: 15000 });
  });
});
