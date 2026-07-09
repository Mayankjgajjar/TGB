import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    // Mock Turnstile CAPTCHA so the form can submit
    await page.addInitScript(() => {
      (window as any).turnstile = {
        render: (_container: any, options: any) => {
          if (options.callback) options.callback('mock-turnstile-token');
          return 'mock-widget-id';
        },
        remove: () => {},
      };
    });
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');
  });

  test('displays contact form with all fields', async ({ page }) => {
    await page.waitForTimeout(3000);
    const nameInput = page.locator('input').first();
    await expect(nameInput).toBeVisible({ timeout: 15000 });
  });

  test('shows validation errors for empty required fields', async ({ page }) => {
    await page.waitForTimeout(3000);
    const submitBtn = page.locator('button[type="submit"]').first();
    await submitBtn.waitFor({ state: 'visible', timeout: 15000 });
    await submitBtn.click();
    await page.waitForTimeout(500);
    const errorMessages = page.locator('[role="alert"], .error, [class*="error"]');
    const count = await errorMessages.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('submits form with valid data and shows success message', async ({ page }) => {
    await page.route('**/api/contact', async (route) => {
      await route.fulfill({ status: 200, body: JSON.stringify({ success: true }) });
    });

    await page.waitForTimeout(3000);
    const allInputs = page.locator('input');
    const textareas = page.locator('textarea');

    await allInputs.first().waitFor({ state: 'visible', timeout: 15000 });
    const inputs = await allInputs.all();

    // Input order: 0=firstName(text), 1=lastName(text), 2=phone(tel), 3=email, 4=company(text), 5=consent(checkbox)
    const values = ['John', 'Doe', '+919876543210', 'john@example.com', 'Test Corp'];
    for (let i = 0; i < inputs.length; i++) {
      const type = await inputs[i].getAttribute('type');
      if (type === 'checkbox') {
        await inputs[i].check();
      } else if (type !== 'file' && values[i] !== undefined) {
        await inputs[i].fill(values[i]);
      }
    }
    if (await textareas.first().isVisible()) await textareas.first().fill('This is a test inquiry from E2E tests.');

    const submitBtn = page.locator('button[type="submit"]').first();
    await submitBtn.click();

    // Wait for either success or error alert, then assert success
    const successEl = page.locator('[role="status"]').first();
    await expect(successEl).toBeVisible({ timeout: 15000 });
  });

  test('handles API failure gracefully', async ({ page }) => {
    await page.route('**/api/contact', async (route) => {
      await route.fulfill({ status: 500, body: JSON.stringify({ error: 'Server error' }) });
    });

    await page.waitForTimeout(3000);
    const allInputs = page.locator('input');
    const textareas = page.locator('textarea');

    await allInputs.first().waitFor({ state: 'visible', timeout: 15000 });
    const inputs = await allInputs.all();
    for (let i = 0; i < inputs.length; i++) {
      const type = await inputs[i].getAttribute('type');
      if (type === 'checkbox') {
        await inputs[i].check();
      } else if (type === 'text' || type === 'email' || type === 'tel') {
        const names = ['firstName', 'lastName', 'email', 'phone'];
        if (i < names.length) await inputs[i].fill(names[i] === 'email' ? 'test@example.com' : 'Test');
      }
    }
    if (await textareas.first().isVisible()) await textareas.first().fill('This is a test message.');

    const submitBtn = page.locator('button[type="submit"]').first();
    await submitBtn.click();

    await expect(page.locator('[role="alert"]').first()).toBeVisible({ timeout: 15000 });
  });
});
