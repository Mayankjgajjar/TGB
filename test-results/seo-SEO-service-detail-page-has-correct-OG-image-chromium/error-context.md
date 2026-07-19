# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo.spec.ts >> SEO >> service detail page has correct OG image
- Location: e2e\seo.spec.ts:83:3

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator: locator('meta[property="og:image"]')
Expected pattern: /tgbsign\.com/
Received string:  "http://localhost:5199/assets/services/led-sign.png"
Timeout: 5000ms

Call log:
  - Expect "toHaveAttribute" with timeout 5000ms
  - waiting for locator('meta[property="og:image"]')
    10 × locator resolved to <meta property="og:image" content="http://localhost:5199/assets/services/led-sign.png"/>
       - unexpected value "http://localhost:5199/assets/services/led-sign.png"

```

```yaml
- link "Skip to main content":
  - /url: "#main-content"
- banner:
  - link "TGB Enterprise - Sign Board Manufacturer in Nikol, Ahmedabad":
    - /url: /
    - img "TGB Enterprise - Sign Board Manufacturer in Nikol, Ahmedabad"
  - navigation "Primary navigation":
    - link "Home":
      - /url: /
    - link "About":
      - /url: /about
    - link "Services":
      - /url: /services
    - link "Gallery":
      - /url: /gallery
    - link "Contact":
      - /url: /contact
  - button "Get a Quote →"
- main:
  - link "Home":
    - /url: /
  - text: ›
  - link "Services":
    - /url: /services
  - text: › LED Sign Boards SIGNAGE SOLUTIONS
  - heading "LED Sign Boards" [level=1]
  - paragraph: Engineered for 24/7 brand visibility. Precision illumination meets architectural permanence.
  - img "LED Sign Boards fabrication details - TGB Enterprise Ahmedabad"
  - heading "Service Overview" [level=2]
  - paragraph: Our LED sign boards are designed to deliver uncompromising brightness and perfect light distribution. We utilize high-efficiency LED modules enclosed in weather-sealed housing, ensuring your brand remains impossible to miss even in the harshest conditions.
  - heading "Why It Matters" [level=3]
  - paragraph: Visibility is the foundation of physical branding. A dim or failing sign degrades brand trust. Our LED systems guarantee even, intense illumination that commands authority.
  - heading "Fabrication & Delivery Process" [level=3]
  - text: "01"
  - heading "Consultation & Site Survey" [level=4]
  - paragraph: Technical evaluation of the site architecture, viewing angles, and structural requirements.
  - text: "02"
  - heading "Engineering & Design" [level=4]
  - paragraph: Creation of precision blueprints, material selection, and 3D mockups for approval.
  - text: "03"
  - heading "Manufacturing" [level=4]
  - paragraph: In-house fabrication using CNC routing, laser cutting, and premium architectural materials.
  - text: "04"
  - heading "Installation" [level=4]
  - paragraph: Secure, code-compliant structural mounting by our certified installation teams.
  - text: "05"
  - heading "Support & Maintenance" [level=4]
  - paragraph: Ongoing warranty support and scheduled maintenance to ensure decades of performance.
  - heading "Frequently Asked Questions" [level=3]
  - heading "How long do the LEDs last?" [level=4]
  - paragraph: We use premium modules rated for 50,000 to 100,000 hours of continuous operation.
  - heading "Is the lighting uneven or spotty?" [level=4]
  - paragraph: No. We calculate precise LED placement and use light-diffusing acrylics to guarantee zero hot-spots.
  - heading "Engineering & Fabrication Standards" [level=3]
  - paragraph: At TGB Enterprise, our manufacturing process in Nikol, Ahmedabad adheres to strict structural and electrical safety codes. Every LED Sign Boards is fabricated using state-of-the-art computer-controlled routers (CNC) and high-precision laser profiling machines to ensure exact alignment with design blueprints. We utilize premium architectural-grade materials (such as aluminum, structural acrylics, and stainless steel) treated with UV-resistant coatings to prevent fading, oxidation, or warping under severe weather conditions.
  - paragraph: Our LED assemblies are powered by industry-leading transformers (Meanwell) and energy-efficient IP67 weather-sealed modules, providing consistent luminous intensity with no visible hot-spots. Our certified installation crew manages structural mounting, anchor point calculation, and grid wiring, ensuring safety compliance for high-rise commercial facades and local retail zones across Ahmedabad, Gujarat, and broader India.
  - text: Technical Specifications Scale Range Fully custom scale. From 1m storefronts to 20m high-rise structural signs. Weathering IP67 rated. Withstands Category 4 hurricane winds and extreme UV exposure. Warranty 5-Year warranty on LEDs and Transformers. 10-Year structural guarantee. Certifications CE, RoHS, ISO 9001:2015 Maintenance Low. Annual inspection of transformers and sealed enclosures recommended. Manufacturing Capabilities Materials Extruded Aluminum Polycarbonate Cast Acrylic Stainless Steel Technology IP67 Rated LED Modules Meanwell Transformers Automated Light Sensors Finishes Matte Powder Coat Brushed Metal Automotive Grade Paint Primary Applications Retail Corporate Healthcare Hospitality Estimated Pricing ₹15,000 (Excl. GST — exact pricing on consultation)
  - list:
    - listitem: Overall dimensions and depth requirements
    - listitem: Number of LED modules required for uniform luminosity
    - listitem: Complexity of structural mounting and height
    - listitem: Material selections (Acrylic vs Polycarbonate)
  - link "Request A Quotation":
    - /url: /contact
  - heading "Other Signage Solutions" [level=3]
  - list:
    - listitem:
      - link "ACP Sign Boards →":
        - /url: /services/acp-sign-boards
    - listitem:
      - link "Neon Sign Boards →":
        - /url: /services/neon-sign-boards
    - listitem:
      - link "Acrylic Letters →":
        - /url: /services/acrylic-letters
  - heading "Completed Installations" [level=3]
  - list:
    - listitem:
      - link "INFRA CORP Headquarters (ACP Facade & Corporate Signage) →":
        - /url: /projects/infra-corp-installation
    - listitem:
      - link "The Gold Palace Showroom (3D Acrylic & Gold Letter Signage) →":
        - /url: /projects/gold-letter-signage
  - link "← Back to Home":
    - /url: /
  - link "Project Gallery":
    - /url: /gallery
  - link "Our Services":
    - /url: /services
  - text: GET IN TOUCH
  - heading "Let's Create Signage That Defines Your Brand" [level=2]
  - paragraph: Whether you're launching a new business, rebranding a storefront, or developing a commercial space, TGB Enterprise is ready to transform your vision into a signage solution that leaves a lasting impression.
  - paragraph: Tell us about your project, ask a question, or request a consultation. Our team will get back to you as soon as possible.
  - text: First Name *
  - textbox "First Name *":
    - /placeholder: John
  - text: Last Name *
  - textbox "Last Name *":
    - /placeholder: Doe
  - text: Phone Number *
  - textbox "Phone Number *":
    - /placeholder: +91 XXXXX XXXXX
  - text: Email Address *
  - textbox "Email Address *":
    - /placeholder: tgbsign@proton.me
  - text: Company Name
  - textbox "Company Name":
    - /placeholder: Enter company name
  - text: Project Location
  - combobox "Project Location":
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
  - text: ▼ Type of Signage
  - combobox "Type of Signage":
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
  - text: ▼ Tell Us About Your Project *
  - textbox "Tell Us About Your Project *":
    - /placeholder: Please share your requirements, project location, timeline, or any specific ideas you have in mind.
  - checkbox "I agree to TGB Enterprise collecting and using my information to respond to this enquiry, in accordance with the Privacy Policy."
  - text: I agree to TGB Enterprise collecting and using my information to respond to this enquiry, in accordance with the
  - link "Privacy Policy":
    - /url: /privacy
  - text: .
  - button "Request A Consultation":
    - text: Request A Consultation
    - img
  - text: Prefer to talk directly?
  - link "Call us at +91 97271 36137":
    - /url: tel:+919727136137
  - heading "Visit Our Studio" [level=3]
  - paragraph: Proudly serving Ahmedabad and businesses across Gujarat and India.
  - link "TGB Enterprise Ahmedabad Studio Map":
    - /url: https://maps.app.goo.gl/Uo3hdVGb74ZTquZ69
    - iframe
  - img
  - text: Office & Studio TGB Enterprise
  - link "Shop No. 7/1, First Floor, Shukan Shopping Centre, opp. Chanakya school, Sukan Cross Rd, New India Colony, Nikol, Ahmedabad, Gujarat 382345":
    - /url: https://maps.app.goo.gl/Uo3hdVGb74ZTquZ69
  - img
  - text: Phone Inquiry Desk
  - link "+91 97271 36137":
    - /url: tel:+919727136137
  - img
  - text: Email Communications
  - link "tgbsign@proton.me":
    - /url: mailto:tgbsign@proton.me
  - img
  - text: Business Hours Monday – Saturday 9:30 AM – 7:00 PM
  - img
  - text: Service Area Coverage Proudly serving Ahmedabad and businesses across Gujarat and India. Built to be Seen.
  - paragraph: Let's build something remarkable together.
- contentinfo:
  - img "TGB Enterprise - Premium Signage & Branding Solutions in Ahmedabad"
  - text: Built to be Seen.
  - paragraph: TGB Enterprise is a premium sign board manufacturer in Ahmedabad, delivering custom signage solutions. Proudly serving Ahmedabad and businesses across Gujarat and India, we help brands create lasting impressions.
  - link "Follow us on Instagram (opens in new tab)":
    - /url: https://www.instagram.com/tgbsign
    - text: Instagram
  - link "Follow us on Facebook (opens in new tab)":
    - /url: https://www.facebook.com/tgbenterprise
    - text: Facebook
  - heading "Quick Links" [level=4]
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link "About Us":
        - /url: /about
    - listitem:
      - link "Services":
        - /url: /services
    - listitem:
      - link "Gallery":
        - /url: /gallery
    - listitem:
      - link "Contact":
        - /url: /contact
    - listitem:
      - link "Claim Warranty":
        - /url: /claim-warranty
  - heading "Our Services" [level=4]
  - list:
    - listitem:
      - link "LED Sign Boards":
        - /url: /services/led-sign-boards
    - listitem:
      - link "ACP Sign Boards":
        - /url: /services/acp-sign-boards
    - listitem:
      - link "Acrylic & 3D Letter Signages":
        - /url: /services/acrylic-letters
    - listitem:
      - link "SS Letters":
        - /url: /services/ss-letters
    - listitem:
      - link "Neon & Custom Signages":
        - /url: /services/neon-sign-boards
    - listitem:
      - link "Pylon Signs":
        - /url: /services/pylon-signs
  - link "View All Services →":
    - /url: /services
  - heading "Industries We Serve" [level=4]
  - list:
    - listitem:
      - link "Retail & Showrooms":
        - /url: /about#industries
    - listitem:
      - link "Corporate Offices":
        - /url: /about#industries
    - listitem:
      - link "Restaurants & Cafés":
        - /url: /about#industries
    - listitem:
      - link "Hospitals & Healthcare":
        - /url: /about#industries
    - listitem:
      - link "Hotels & Hospitality":
        - /url: /about#industries
    - listitem:
      - link "Industrial & Manufacturing":
        - /url: /about#industries
    - listitem:
      - link "Commercial Spaces":
        - /url: /about#industries
  - heading "Get In Touch" [level=4]
  - paragraph:
    - strong: "Address:"
    - text: Shop No. 7/1, First Floor, Shukan Shopping Centre, opp. Chanakya school, Sukan Cross Rd, New India Colony, Nikol, Ahmedabad, Gujarat 382345
  - paragraph:
    - strong: "Phone:"
    - link "+91 97271 36137":
      - /url: tel:+919727136137
  - paragraph:
    - strong: "Email:"
    - link "tgbsign@proton.me":
      - /url: mailto:tgbsign@proton.me
  - paragraph: Proudly serving Ahmedabad and businesses across Gujarat and India.
  - button "REQUEST A CONSULTATION →"
  - text: © 2026 TGB Enterprise. All Rights Reserved.
  - link "Privacy Policy":
    - /url: /privacy
  - link "Terms & Conditions":
    - /url: /terms
- link "Contact us on WhatsApp":
  - /url: https://wa.me/919727136137?text=Hi%20TGB%20Enterprise!%20I'd%20like%20to%20know%20more%20about%20your%20signage%20services%20and%20get%20a%20quote.
  - img
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('SEO', () => {
  4  |   test('robots.txt is accessible', async ({ page }) => {
  5  |     const response = await page.goto('/robots.txt');
  6  |     expect(response?.status()).toBe(200);
  7  |     const text = await response?.text();
  8  |     expect(text).toContain('User-agent: *');
  9  |     expect(text).toContain('Sitemap');
  10 |   });
  11 | 
  12 |   test('sitemap.xml is accessible', async ({ page }) => {
  13 |     const response = await page.goto('/sitemap.xml');
  14 |     expect(response?.status()).toBe(200);
  15 |     const text = await response?.text();
  16 |     expect(text).toContain('urlset');
  17 |     expect(text).toContain('tgbsign.com');
  18 |   });
  19 | 
  20 |   test('homepage has correct title', async ({ page }) => {
  21 |     await page.goto('/');
  22 |     await expect(page).toHaveTitle(/TGB Enterprise/);
  23 |   });
  24 | 
  25 |   test('homepage has meta description', async ({ page }) => {
  26 |     await page.goto('/');
  27 |     const metaDesc = page.locator('meta[name="description"]');
  28 |     await expect(metaDesc).toHaveAttribute('content', /.+/);
  29 |   });
  30 | 
  31 |   test('homepage has canonical URL', async ({ page }) => {
  32 |     await page.goto('/');
  33 |     const canonical = page.locator('link[rel="canonical"]');
  34 |     await expect(canonical).toHaveAttribute('href', /tgbsign\.com/);
  35 |   });
  36 | 
  37 |   test('homepage has Open Graph tags', async ({ page }) => {
  38 |     await page.goto('/');
  39 |     await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
  40 |     await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /.+/);
  41 |     await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', /tgbsign\.com/);
  42 |     await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /http/);
  43 |     await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content', 'website');
  44 |   });
  45 | 
  46 |   test('homepage has Twitter Card tags', async ({ page }) => {
  47 |     await page.goto('/');
  48 |     await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image');
  49 |     await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute('content', /.+/);
  50 |     await expect(page.locator('meta[name="twitter:description"]')).toHaveAttribute('content', /.+/);
  51 |   });
  52 | 
  53 |   test('JSON-LD structured data exists', async ({ page }) => {
  54 |     await page.goto('/');
  55 |     const scripts = page.locator('script[type="application/ld+json"]');
  56 |     const count = await scripts.count();
  57 |     expect(count).toBeGreaterThanOrEqual(1);
  58 |     for (let i = 0; i < count; i++) {
  59 |       const json = JSON.parse(await scripts.nth(i).innerHTML());
  60 |       expect(json['@context']).toBe('https://schema.org');
  61 |     }
  62 |   });
  63 | 
  64 |   test('LocalBusiness schema has correct details', async ({ page }) => {
  65 |     await page.goto('/');
  66 |     const scripts = page.locator('script[type="application/ld+json"]');
  67 |     const count = await scripts.count();
  68 |     let foundLocalBusiness = false;
  69 |     for (let i = 0; i < count; i++) {
  70 |       const json = JSON.parse(await scripts.nth(i).innerHTML());
  71 |       if (json['@type'] === 'LocalBusiness') {
  72 |         foundLocalBusiness = true;
  73 |         expect(json.name).toContain('TGB Enterprise');
  74 |         expect(json.telephone).toBeTruthy();
  75 |         expect(json.address).toBeTruthy();
  76 |         expect(json.address.addressLocality).toBe('Ahmedabad');
  77 |         break;
  78 |       }
  79 |     }
  80 |     expect(foundLocalBusiness).toBeTruthy();
  81 |   });
  82 | 
  83 |   test('service detail page has correct OG image', async ({ page }) => {
  84 |     await page.goto('/services/led-sign-boards');
  85 |     await page.waitForLoadState('networkidle');
  86 |     const ogImage = page.locator('meta[property="og:image"]');
> 87 |     await expect(ogImage).toHaveAttribute('content', /tgbsign\.com/);
     |                           ^ Error: expect(locator).toHaveAttribute(expected) failed
  88 |   });
  89 | });
  90 | 
```