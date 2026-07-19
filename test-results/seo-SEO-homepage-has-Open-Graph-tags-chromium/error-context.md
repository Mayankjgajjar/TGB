# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo.spec.ts >> SEO >> homepage has Open Graph tags
- Location: e2e\seo.spec.ts:37:3

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator: locator('meta[property="og:url"]')
Expected pattern: /tgbsign\.com/
Received string:  "http://localhost:5199"
Timeout: 5000ms

Call log:
  - Expect "toHaveAttribute" with timeout 5000ms
  - waiting for locator('meta[property="og:url"]')
    10 × locator resolved to <meta property="og:url" content="http://localhost:5199"/>
       - unexpected value "http://localhost:5199"

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
  - region "Hero":
    - heading "Built to be Seen. Made to be Remembered." [level=1]
    - text: Ahmedabad's Trusted Signage Manufacturer.
    - link "Explore Services":
      - /url: /services
    - link "View Gallery":
      - /url: /gallery
      - text: View Gallery
      - img
  - text: OUR STORY
  - heading "We Build Visibility for Businesses Across Gujarat and India." [level=2]
  - paragraph: Designing, manufacturing, and installing premium signage solutions that transform spaces and strengthen brand identities.
  - text: WHO WE ARE
  - heading "More Than Signage. A Partner in Building Brand Presence." [level=2]
  - paragraph: As a trusted sign board manufacturer in Ahmedabad, we deliver premium custom signage solutions. We design, manufacture, and install durable, high-impact signage that commands attention and elevates your brand.
  - paragraph: Our custom capabilities span heavy-duty outdoor LED display boards, architectural ACP facade cladding panels, 3D acrylic letters, and custom indoor flex-neon signage—all built to standard specs and high tolerances.
  - paragraph: Operating from our Nikol Ahmedabad workshop, we manage both local and national projects. Our commitment extends far beyond delivery—providing long-term maintenance, warranty assurance, and dependable after-sales service.
  - text: 100+ Projects Delivered 5+ Major Cities Served Pan India Service Footprint 100% Customer Commitment
  - heading "WHY BUSINESSES TRUST TGB" [level=2]
  - paragraph: Built for the years that follow. Most signage looks good on day one, but we engineer for the long term. From premium materials to complete in-house manufacturing, everything we build is designed to endure.
  - img
  - text: QUALITY
  - heading "Built to Last" [level=3]
  - paragraph: Premium materials and engineering designed for long-term performance and lasting visual impact.
  - text: Premium Quality
  - img
  - text: MATERIALS
  - heading "Materials That Endure" [level=3]
  - paragraph: From ACP and acrylic to stainless steel and LED systems, every component is selected for durability and reliability.
  - text: Weather Resistant
  - img
  - text: EXECUTION
  - heading "End-to-End Execution" [level=3]
  - paragraph: From concept and manufacturing to installation and support, every project is managed with precision and complete quality control.
  - text: Complete Solutions
  - img
  - text: SUPPORT
  - heading "Relationships Beyond Delivery" [level=3]
  - paragraph: Reliable after-sales service and long-term partnerships are at the heart of everything we do.
  - text: Customer First OUR WORK
  - heading "Selected Projects That Define Visibility." [level=2]
  - paragraph: Every project is an opportunity to transform a space and strengthen a brand. As a leading sign board manufacturer Ahmedabad, we design and deliver custom signage Nikol Ahmedabad projects and premium signage solutions. Proudly serving Ahmedabad and businesses across Gujarat and India.
  - link "ACP Facade & Corporate Signage installation for INFRA CORP Headquarters - TGB Enterprise Ahmedabad Ahmedabad, Gujarat INFRA CORP Headquarters View Project →":
    - /url: /projects/infra-corp-installation
    - img "ACP Facade & Corporate Signage installation for INFRA CORP Headquarters - TGB Enterprise Ahmedabad"
    - text: Ahmedabad, Gujarat
    - heading "INFRA CORP Headquarters" [level=3]
    - text: View Project →
  - link "3D Acrylic & Gold Letter Signage installation for The Gold Palace Showroom - TGB Enterprise Ahmedabad Nikol, Ahmedabad The Gold Palace Showroom View Project →":
    - /url: /projects/gold-letter-signage
    - img "3D Acrylic & Gold Letter Signage installation for The Gold Palace Showroom - TGB Enterprise Ahmedabad"
    - text: Nikol, Ahmedabad
    - heading "The Gold Palace Showroom" [level=3]
    - text: View Project →
  - link "Custom Neon Signage installation for Glow & Co. Creative Studio - TGB Enterprise Ahmedabad Ahmedabad, Gujarat Glow & Co. Creative Studio View Project →":
    - /url: /projects/custom-neon-signage
    - img "Custom Neon Signage installation for Glow & Co. Creative Studio - TGB Enterprise Ahmedabad"
    - text: Ahmedabad, Gujarat
    - heading "Glow & Co. Creative Studio" [level=3]
    - text: View Project →
  - link "LED Glow Sign Board installation for Apex Commercial Hub - TGB Enterprise Ahmedabad Ahmedabad, Gujarat Apex Commercial Hub View Project →":
    - /url: /projects/acp-board-installation
    - img "LED Glow Sign Board installation for Apex Commercial Hub - TGB Enterprise Ahmedabad"
    - text: Ahmedabad, Gujarat
    - heading "Apex Commercial Hub" [level=3]
    - text: View Project →
  - link "View All Projects":
    - /url: /gallery
    - text: View All Projects
    - img
  - text: WHO WE SERVE
  - heading "Signage Solutions for Every Industry." [level=2]
  - paragraph: From retail storefronts to large commercial developments, we create signage solutions tailored to the unique needs of every industry we serve.
  - text: RETAIL
  - img
  - heading "Retail & Showrooms" [level=3]
  - paragraph: Creating high-impact storefronts and brand experiences that attract customers and drive visibility.
  - text: Retail Signage Solutions CORPORATE
  - img
  - heading "Corporate Offices" [level=3]
  - paragraph: Professional signage systems that strengthen brand identity and elevate workspaces.
  - text: Corporate Signage F&B
  - img
  - heading "Restaurants & Cafés" [level=3]
  - paragraph: Distinctive signage solutions that enhance ambiance and create memorable customer experiences.
  - text: Commercial Signage HEALTHCARE
  - img
  - heading "Hospitals & Healthcare" [level=3]
  - paragraph: Wayfinding and branding solutions designed for clarity, trust, and functionality.
  - text: Wayfinding Systems HOSPITALITY
  - img
  - heading "Hotels & Hospitality" [level=3]
  - paragraph: Premium signage experiences that complement architecture and elevate guest experiences.
  - text: Hospitality Signage REAL ESTATE
  - img
  - heading "Real Estate Projects" [level=3]
  - paragraph: Large-scale branding and signage solutions for residential and commercial developments.
  - text: Project Signage INDUSTRIAL
  - img
  - heading "Industrial & Manufacturing" [level=3]
  - paragraph: Durable indoor and outdoor signage solutions designed for operational environments.
  - text: Industrial Signage EDUCATION
  - img
  - heading "Educational Institutions" [level=3]
  - paragraph: Wayfinding and identity signage that supports learning environments and campus experiences.
  - text: Campus Signage COMMERCIAL
  - img
  - heading "Commercial Spaces" [level=3]
  - paragraph: Integrated signage systems that improve navigation, branding, and visitor experience.
  - text: Commercial Solutions CLIENT EXPERIENCES
  - heading "Trusted by Businesses Across India." [level=2]
  - paragraph: Every project is built on collaboration, craftsmanship, and long-term relationships. Here's what our clients have to say about working with TGB Enterprise.
  - text: ” ★★★★★
  - paragraph: "\"Exceptional service and top-notch quality! TGB Enterprise designed and installed our LED sign board in Ahmedabad. The finish is premium, and it has drastically improved our storefront visibility.\""
  - text: Rajesh Patel Apex Hub ” ★★★★★
  - paragraph: "\"Highly professional sign board manufacturer Ahmedabad. The 3D gold letter signage they made for our Nikol showroom looks extremely luxurious. Excellent communication and on-time delivery.\""
  - text: Amit Shah The Gold Palace ” ★★★★★
  - paragraph: "\"Superb craftsmanship! The custom neon sign board they designed for our studio is perfect. The team is very skilled and the installation was clean. Highly recommend TGB!\""
  - text: Neha Gupta Glow & Co. ” ★★★★★
  - paragraph: "\"We hired TGB Enterprise for the INFRA CORP facade branding. They did an outstanding job with the ACP board installation. Their structural engineering and wind-load calculations were highly professional.\""
  - text: Sanjay Mehta Infra Projects ” ★★★★★
  - paragraph: "\"Great experience working with Mayank and Ankit. They provide excellent after-sales support and premium materials. Easily the best sign board company in Nikol, Ahmedabad.\""
  - text: Vikram Rathod City Plaza Manager GET IN TOUCH
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
> 41 |     await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', /tgbsign\.com/);
     |                                                           ^ Error: expect(locator).toHaveAttribute(expected) failed
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
  87 |     await expect(ogImage).toHaveAttribute('content', /tgbsign\.com/);
  88 |   });
  89 | });
  90 | 
```