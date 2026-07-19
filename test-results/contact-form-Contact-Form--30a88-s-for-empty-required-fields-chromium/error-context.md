# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact-form.spec.ts >> Contact Form >> shows validation errors for empty required fields
- Location: e2e\contact-form.spec.ts:15:3

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "http://localhost:5199/contact", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Contact Form', () => {
  4  |   test.beforeEach(async ({ page }) => {
> 5  |     await page.goto('/contact');
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  6  |     await page.waitForLoadState('networkidle');
  7  |   });
  8  | 
  9  |   test('displays contact form with all fields', async ({ page }) => {
  10 |     await page.waitForTimeout(3000);
  11 |     const nameInput = page.locator('input').first();
  12 |     await expect(nameInput).toBeVisible({ timeout: 15000 });
  13 |   });
  14 | 
  15 |   test('shows validation errors for empty required fields', async ({ page }) => {
  16 |     await page.waitForTimeout(3000);
  17 |     const submitBtn = page.locator('button[type="submit"]').first();
  18 |     await submitBtn.waitFor({ state: 'visible', timeout: 15000 });
  19 |     await submitBtn.click();
  20 |     await page.waitForTimeout(500);
  21 |     const errorMessages = page.locator('[role="alert"], .error, [class*="error"]');
  22 |     const count = await errorMessages.count();
  23 |     expect(count).toBeGreaterThanOrEqual(1);
  24 |   });
  25 | 
  26 |   test('submits form with valid data and shows success message', async ({ page }) => {
  27 |     await page.route('**/api/contact', async (route) => {
  28 |       await route.fulfill({ status: 200, body: JSON.stringify({ success: true }) });
  29 |     });
  30 | 
  31 |     await page.waitForTimeout(3000);
  32 |     const allInputs = page.locator('input');
  33 |     const textareas = page.locator('textarea');
  34 | 
  35 |     await allInputs.first().waitFor({ state: 'visible', timeout: 15000 });
  36 |     const inputs = await allInputs.all();
  37 | 
  38 |     // Input order: 0=firstName(text), 1=lastName(text), 2=phone(tel), 3=email, 4=company(text), 5=consent(checkbox)
  39 |     const values = ['John', 'Doe', '+919876543210', 'john@example.com', 'Test Corp'];
  40 |     for (let i = 0; i < inputs.length; i++) {
  41 |       const type = await inputs[i].getAttribute('type');
  42 |       if (type === 'checkbox') {
  43 |         await inputs[i].check();
  44 |       } else if (type !== 'file' && values[i] !== undefined) {
  45 |         await inputs[i].fill(values[i]);
  46 |       }
  47 |     }
  48 |     if (await textareas.first().isVisible()) await textareas.first().fill('This is a test inquiry from E2E tests.');
  49 | 
  50 |     const submitBtn = page.locator('button[type="submit"]').first();
  51 |     await submitBtn.click();
  52 | 
  53 |     // Wait for either success or error alert, then assert success
  54 |     const successEl = page.locator('[role="status"]').first();
  55 |     await expect(successEl).toBeVisible({ timeout: 15000 });
  56 |   });
  57 | 
  58 |   test('handles API failure gracefully', async ({ page }) => {
  59 |     await page.route('**/api/contact', async (route) => {
  60 |       await route.fulfill({ status: 500, body: JSON.stringify({ error: 'Server error' }) });
  61 |     });
  62 | 
  63 |     await page.waitForTimeout(3000);
  64 |     const allInputs = page.locator('input');
  65 |     const textareas = page.locator('textarea');
  66 | 
  67 |     await allInputs.first().waitFor({ state: 'visible', timeout: 15000 });
  68 |     const inputs = await allInputs.all();
  69 |     for (let i = 0; i < inputs.length; i++) {
  70 |       const type = await inputs[i].getAttribute('type');
  71 |       if (type === 'checkbox') {
  72 |         await inputs[i].check();
  73 |       } else if (type === 'text' || type === 'email' || type === 'tel') {
  74 |         const names = ['firstName', 'lastName', 'email', 'phone'];
  75 |         if (i < names.length) await inputs[i].fill(names[i] === 'email' ? 'test@example.com' : 'Test');
  76 |       }
  77 |     }
  78 |     if (await textareas.first().isVisible()) await textareas.first().fill('This is a test message.');
  79 | 
  80 |     const submitBtn = page.locator('button[type="submit"]').first();
  81 |     await submitBtn.click();
  82 | 
  83 |     await expect(page.locator('[role="alert"]').first()).toBeVisible({ timeout: 15000 });
  84 |   });
  85 | });
  86 | 
```