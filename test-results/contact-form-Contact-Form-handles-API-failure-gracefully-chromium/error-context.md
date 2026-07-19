# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact-form.spec.ts >> Contact Form >> handles API failure gracefully
- Location: e2e\contact-form.spec.ts:58:3

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - link "Skip to main content":
    - /url: "#main-content"
  - generic [ref=e3]:
    - banner [ref=e4]:
      - generic [ref=e6]:
        - link "TGB Enterprise - Sign Board Manufacturer in Nikol, Ahmedabad" [ref=e7] [cursor=pointer]:
          - /url: /
          - img "TGB Enterprise - Sign Board Manufacturer in Nikol, Ahmedabad" [ref=e8]
        - navigation "Primary navigation" [ref=e9]:
          - link "Home" [ref=e10] [cursor=pointer]:
            - /url: /
          - link "About" [ref=e11] [cursor=pointer]:
            - /url: /about
          - link "Services" [ref=e12] [cursor=pointer]:
            - /url: /services
          - link "Gallery" [ref=e13] [cursor=pointer]:
            - /url: /gallery
          - link "Contact" [ref=e14] [cursor=pointer]:
            - /url: /contact
        - button "Get a Quote →" [ref=e16] [cursor=pointer]:
          - text: Get a Quote
          - generic [ref=e17]: →
    - main [ref=e18]:
      - generic [ref=e19]:
        - generic [ref=e21]:
          - generic [ref=e22]:
            - generic [ref=e23]: GET IN TOUCH
            - heading "Start Your Signage Project Today" [level=2] [ref=e24]
            - paragraph [ref=e25]: Ready to elevate your brand? Contact our team for a free consultation and customised quotation tailored to your requirements.
          - generic [ref=e26]:
            - generic [ref=e27]:
              - paragraph [ref=e28]: Tell us about your project, ask a question, or request a consultation. Our team will get back to you as soon as possible.
              - generic [ref=e29]:
                - generic [ref=e30]:
                  - generic [ref=e31]:
                    - generic [ref=e32]: First Name *
                    - textbox "First Name *" [ref=e33]:
                      - /placeholder: John
                  - generic [ref=e34]:
                    - generic [ref=e35]: Last Name *
                    - textbox "Last Name *" [ref=e36]:
                      - /placeholder: Doe
                - generic [ref=e37]:
                  - generic [ref=e38]:
                    - generic [ref=e39]: Phone Number *
                    - textbox "Phone Number *" [ref=e40]:
                      - /placeholder: +91 XXXXX XXXXX
                  - generic [ref=e41]:
                    - generic [ref=e42]: Email Address *
                    - textbox "Email Address *" [ref=e43]:
                      - /placeholder: tgbsign@proton.me
                - generic [ref=e44]:
                  - generic [ref=e45]:
                    - generic [ref=e46]: Company Name
                    - textbox "Company Name" [ref=e47]:
                      - /placeholder: Enter company name
                  - generic [ref=e48]:
                    - generic [ref=e49]: Project Location
                    - generic [ref=e50]:
                      - combobox "Project Location" [ref=e51] [cursor=pointer]:
                        - option "Select project location" [selected]
                        - option "Ahmedabad"
                        - option "Surat"
                        - option "Rajkot"
                        - option "Vadodara"
                        - option "Gandhinagar"
                        - option "Mumbai"
                        - option "Bengaluru"
                        - option "Delhi"
                        - option "Other (Gujarat & Pan India)"
                      - text: ▼
                - generic [ref=e52]:
                  - generic [ref=e53]: Type of Signage
                  - generic [ref=e54]:
                    - combobox "Type of Signage" [ref=e55] [cursor=pointer]:
                      - option "Select type of signage" [selected]
                      - option "LED Sign Boards"
                      - option "ACP Sign Boards"
                      - option "Acrylic & 3D Letter Signages"
                      - option "Corporate Signages"
                      - option "Neon Signages"
                      - option "Wayfinding Signages"
                      - option "Retail Signages"
                      - option "Custom Signages"
                      - option "Not Sure Yet"
                    - text: ▼
                - generic [ref=e56]:
                  - generic [ref=e57]: Tell Us About Your Project *
                  - textbox "Tell Us About Your Project *" [ref=e58]:
                    - /placeholder: Please share your requirements, project location, timeline, or any specific ideas you have in mind.
                - generic [ref=e59]:
                  - checkbox "I agree to TGB Enterprise collecting and using my information to respond to this enquiry, in accordance with the Privacy Policy." [ref=e60] [cursor=pointer]
                  - generic [ref=e61] [cursor=pointer]:
                    - text: I agree to TGB Enterprise collecting and using my information to respond to this enquiry, in accordance with the
                    - link "Privacy Policy" [ref=e62]:
                      - /url: /privacy
                    - text: .
                - button "Request A Consultation" [ref=e63] [cursor=pointer]:
                  - generic [ref=e64]: Request A Consultation
                  - img [ref=e65]
                - generic [ref=e67]:
                  - generic [ref=e68]: Prefer to talk directly?
                  - link "Call us at +91 97271 36137" [ref=e69] [cursor=pointer]:
                    - /url: tel:+919727136137
            - generic [ref=e70]:
              - generic [ref=e71]:
                - heading "Visit Our Studio" [level=3] [ref=e72]
                - paragraph [ref=e73]: Proudly serving Ahmedabad and businesses across Gujarat and India.
              - link "TGB Enterprise Ahmedabad Studio Map" [ref=e74] [cursor=pointer]:
                - /url: https://maps.app.goo.gl/Uo3hdVGb74ZTquZ69
                - iframe [ref=e76]:
                  - generic [active] [ref=f1e1]:
                    - link "Open in Maps (opens in new tab)" [ref=f1e4] [cursor=pointer]:
                      - /url: about:invalid#zClosurez
                      - text: Open in Maps
                      - img [ref=f1e6]
                    - generic [ref=f1e9]:
                      - region "Map" [ref=f1e10]
                      - iframe [ref=f1e24]:
                        
              - generic [ref=e77]:
                - generic [ref=e78]:
                  - img [ref=e80]
                  - generic [ref=e83]:
                    - generic [ref=e84]: Office & Studio
                    - generic [ref=e85]: TGB Enterprise
                    - link "Shop No. 7/1, First Floor, Shukan Shopping Centre, opp. Chanakya school, Sukan Cross Rd, New India Colony, Nikol, Ahmedabad, Gujarat 382345" [ref=e86] [cursor=pointer]:
                      - /url: https://maps.app.goo.gl/Uo3hdVGb74ZTquZ69
                      - text: Shop No. 7/1, First Floor, Shukan Shopping Centre,
                      - text: opp. Chanakya school, Sukan Cross Rd,
                      - text: New India Colony, Nikol,
                      - text: Ahmedabad, Gujarat 382345
                - generic [ref=e87]:
                  - img [ref=e89]
                  - generic [ref=e91]:
                    - generic [ref=e92]: Phone Inquiry Desk
                    - link "+91 97271 36137" [ref=e93] [cursor=pointer]:
                      - /url: tel:+919727136137
                - generic [ref=e94]:
                  - img [ref=e96]
                  - generic [ref=e99]:
                    - generic [ref=e100]: Email Communications
                    - link "tgbsign@proton.me" [ref=e101] [cursor=pointer]:
                      - /url: mailto:tgbsign@proton.me
                - generic [ref=e102]:
                  - img [ref=e104]
                  - generic [ref=e107]:
                    - generic [ref=e108]: Business Hours
                    - generic [ref=e109]: Monday – Saturday
                    - generic [ref=e110]: 9:30 AM – 7:00 PM
                - generic [ref=e111]:
                  - img [ref=e113]
                  - generic [ref=e116]:
                    - generic [ref=e117]: Service Area Coverage
                    - generic [ref=e118]: Proudly serving Ahmedabad and businesses across Gujarat and India.
          - generic [ref=e119]:
            - generic [ref=e120]: Built to be Seen.
            - paragraph [ref=e121]: Let's build something remarkable together.
        - generic [ref=e123]:
          - generic [ref=e124]:
            - generic [ref=e125]: FREQUENTLY ASKED QUESTIONS
            - heading "Everything You Need to Know." [level=2] [ref=e126]
            - paragraph [ref=e127]: Have questions about our signage solutions, process, or services? Here are answers to the most common questions we receive.
          - generic [ref=e128]:
            - generic [ref=e129]:
              - generic [ref=e130]:
                - button "What types of signages do you manufacture?" [ref=e131] [cursor=pointer]:
                  - generic [ref=e132]: What types of signages do you manufacture?
                  - img [ref=e134]
                - generic [ref=e135]: We manufacture a wide range of custom signage solutions including LED sign boards, ACP sign boards, acrylic signages, 3D letter signages, neon signages, corporate signages, retail signages, wayfinding systems, safety signages, and custom indoor and outdoor signage solutions.
              - generic [ref=e136]:
                - button "Do you only work in Ahmedabad?" [ref=e137] [cursor=pointer]:
                  - generic [ref=e138]: Do you only work in Ahmedabad?
                  - img [ref=e140]
                - generic [ref=e141]: No. While we are based in Ahmedabad, Gujarat, we design, manufacture, and deliver professional signage installation solutions for businesses across India, including key projects in Surat, Rajkot, Mumbai, Bengaluru, Delhi, and other major cities.
              - generic [ref=e142]:
                - button "What materials do you use for your signages?" [ref=e143] [cursor=pointer]:
                  - generic [ref=e144]: What materials do you use for your signages?
                  - img [ref=e146]
                - generic [ref=e147]: We select premium materials based on application, including architectural ACP cladding, high-grade acrylic, stainless steel, structural aluminum, energy-efficient LED modules, and weatherproof vinyl to guarantee long-term outdoor performance.
              - generic [ref=e148]:
                - button "Do you provide after-sales service?" [ref=e149] [cursor=pointer]:
                  - generic [ref=e150]: Do you provide after-sales service?
                  - img [ref=e152]
                - generic [ref=e153]: Yes. Dependable after-sales service is a core pillar of TGB Enterprise. Our responsibility extends past installation to provide active support, electrical checkups, and maintenance assistance whenever clients need us.
              - generic [ref=e154]:
                - button "How can I get a quotation for my project?" [ref=e155] [cursor=pointer]:
                  - generic [ref=e156]: How can I get a quotation for my project?
                  - img [ref=e158]
                - generic [ref=e159]: You can reach out via our website, phone, or email to share project files or design drafts. Our estimators will schedule a call to understand details and render a comprehensive quotation tailored to your requirements.
            - generic [ref=e160]:
              - generic [ref=e161]:
                - button "Do you provide design and installation services?" [ref=e162] [cursor=pointer]:
                  - generic [ref=e163]: Do you provide design and installation services?
                  - img [ref=e165]
                - generic [ref=e166]: Yes. TGB Enterprise offers complete end-to-end custom signage solutions including consultation, design and visualization, high-precision manufacturing, professional signage installation, and dedicated after-sales support.
              - generic [ref=e167]:
                - button "Can you create completely customized signages?" [ref=e168] [cursor=pointer]:
                  - generic [ref=e169]: Can you create completely customized signages?
                  - img [ref=e171]
                - generic [ref=e172]: Absolutely. Every business has unique architectural and branding requirements. We specialize in engineering and fabricating custom signage solutions tailored to your exact brand guidelines and dimensions.
              - generic [ref=e173]:
                - button "How long does a signage project take?" [ref=e174] [cursor=pointer]:
                  - generic [ref=e175]: How long does a signage project take?
                  - img [ref=e177]
                - generic [ref=e178]: Timelines vary based on scale, engineering complexity, and installation scope. After assessing your requirements, our design and estimating team will provide a clear project schedule and deliver regular execution updates.
              - generic [ref=e179]:
                - button "Which industries do you serve?" [ref=e180] [cursor=pointer]:
                  - generic [ref=e181]: Which industries do you serve?
                  - img [ref=e183]
                - generic [ref=e184]: We deliver custom signage solutions to diverse sectors including retail showrooms, corporate offices, restaurants, hotels, healthcare spaces, educational campuses, real estate sites, and heavy industrial facilities.
          - generic [ref=e185]:
            - text: Still have questions? Our team is here to help.
            - button "Let's Discuss Your Project →" [ref=e186] [cursor=pointer]
    - contentinfo [ref=e187]:
      - generic [ref=e188]:
        - generic [ref=e189]:
          - generic [ref=e190]:
            - generic [ref=e191]:
              - img "TGB Enterprise - Premium Signage & Branding Solutions in Ahmedabad" [ref=e192]
              - generic [ref=e193]: Built to be Seen.
            - paragraph [ref=e194]: TGB Enterprise is a premium sign board manufacturer in Ahmedabad, delivering custom signage solutions. Proudly serving Ahmedabad and businesses across Gujarat and India, we help brands create lasting impressions.
            - generic [ref=e195]:
              - link "Follow us on Instagram (opens in new tab)" [ref=e196] [cursor=pointer]:
                - /url: https://www.instagram.com/tgbsign
                - text: Instagram
              - link "Follow us on Facebook (opens in new tab)" [ref=e197] [cursor=pointer]:
                - /url: https://www.facebook.com/tgbenterprise
                - text: Facebook
          - generic [ref=e198]:
            - heading "Quick Links" [level=4] [ref=e199]
            - list [ref=e200]:
              - listitem [ref=e201]:
                - link "Home" [ref=e202] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e203]:
                - link "About Us" [ref=e204] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e205]:
                - link "Services" [ref=e206] [cursor=pointer]:
                  - /url: /services
              - listitem [ref=e207]:
                - link "Gallery" [ref=e208] [cursor=pointer]:
                  - /url: /gallery
              - listitem [ref=e209]:
                - link "Contact" [ref=e210] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e211]:
                - link "Claim Warranty" [ref=e212] [cursor=pointer]:
                  - /url: /claim-warranty
          - generic [ref=e213]:
            - heading "Our Services" [level=4] [ref=e214]
            - list [ref=e215]:
              - listitem [ref=e216]:
                - link "LED Sign Boards" [ref=e217] [cursor=pointer]:
                  - /url: /services/led-sign-boards
              - listitem [ref=e218]:
                - link "ACP Sign Boards" [ref=e219] [cursor=pointer]:
                  - /url: /services/acp-sign-boards
              - listitem [ref=e220]:
                - link "Acrylic & 3D Letter Signages" [ref=e221] [cursor=pointer]:
                  - /url: /services/acrylic-letters
              - listitem [ref=e222]:
                - link "SS Letters" [ref=e223] [cursor=pointer]:
                  - /url: /services/ss-letters
              - listitem [ref=e224]:
                - link "Neon & Custom Signages" [ref=e225] [cursor=pointer]:
                  - /url: /services/neon-sign-boards
              - listitem [ref=e226]:
                - link "Pylon Signs" [ref=e227] [cursor=pointer]:
                  - /url: /services/pylon-signs
            - link "View All Services →" [ref=e228] [cursor=pointer]:
              - /url: /services
          - generic [ref=e229]:
            - heading "Industries We Serve" [level=4] [ref=e230]
            - list [ref=e231]:
              - listitem [ref=e232]:
                - link "Retail & Showrooms" [ref=e233] [cursor=pointer]:
                  - /url: /about#industries
              - listitem [ref=e234]:
                - link "Corporate Offices" [ref=e235] [cursor=pointer]:
                  - /url: /about#industries
              - listitem [ref=e236]:
                - link "Restaurants & Cafés" [ref=e237] [cursor=pointer]:
                  - /url: /about#industries
              - listitem [ref=e238]:
                - link "Hospitals & Healthcare" [ref=e239] [cursor=pointer]:
                  - /url: /about#industries
              - listitem [ref=e240]:
                - link "Hotels & Hospitality" [ref=e241] [cursor=pointer]:
                  - /url: /about#industries
              - listitem [ref=e242]:
                - link "Industrial & Manufacturing" [ref=e243] [cursor=pointer]:
                  - /url: /about#industries
              - listitem [ref=e244]:
                - link "Commercial Spaces" [ref=e245] [cursor=pointer]:
                  - /url: /about#industries
          - generic [ref=e246]:
            - heading "Get In Touch" [level=4] [ref=e247]
            - generic [ref=e248]:
              - paragraph [ref=e249]:
                - strong [ref=e250]: "Address:"
                - text: Shop No. 7/1, First Floor, Shukan Shopping Centre,
                - text: opp. Chanakya school, Sukan Cross Rd,
                - text: New India Colony, Nikol,
                - text: Ahmedabad, Gujarat 382345
              - paragraph [ref=e251]:
                - strong [ref=e252]: "Phone:"
                - link "+91 97271 36137" [ref=e253] [cursor=pointer]:
                  - /url: tel:+919727136137
              - paragraph [ref=e254]:
                - strong [ref=e255]: "Email:"
                - link "tgbsign@proton.me" [ref=e256] [cursor=pointer]:
                  - /url: mailto:tgbsign@proton.me
              - paragraph [ref=e257]: Proudly serving Ahmedabad and businesses across Gujarat and India.
              - button "REQUEST A CONSULTATION →" [ref=e258] [cursor=pointer]
        - generic [ref=e260]:
          - generic [ref=e261]: © 2026 TGB Enterprise. All Rights Reserved.
          - generic [ref=e262]:
            - link "Privacy Policy" [ref=e263] [cursor=pointer]:
              - /url: /privacy
            - link "Terms & Conditions" [ref=e264] [cursor=pointer]:
              - /url: /terms
    - link "Contact us on WhatsApp" [ref=e265] [cursor=pointer]:
      - /url: https://wa.me/919727136137?text=Hi%20TGB%20Enterprise!%20I'd%20like%20to%20know%20more%20about%20your%20signage%20services%20and%20get%20a%20quote.
      - img [ref=e267]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Contact Form', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto('/contact');
> 6  |     await page.waitForLoadState('networkidle');
     |                ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
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