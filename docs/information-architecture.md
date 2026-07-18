# Information Architecture (IA)

This document charts the structure, hierarchy, and purpose of every view inside TGB Enterprise to prevent arbitrary layouts and maintain clear conversion pathways.

---

## Page-by-Page Mapping

### 1. Home Page (`/`)
- **Purpose**: Brand introduction, establish credibility, direct traffic to key services.
- **Target User**: Local business owners, commercial developers, corporate branding leads.
- **Primary Action**: "Get a Quote" (Modal launch).
- **Secondary Action**: "View Gallery" (Link to `/gallery`).
- **Required Content**: Hero banner, Core Value propositions, Services grid, Featured projects, Testimonials.
- **Optional Content**: FAQ section.
- **User Flow**: Entry ➔ Value understanding ➔ Reviewing projects ➔ Call to action (Quote request).
- **Navigation Path**: Direct Entry (Root URL).

---

### 2. About Page (`/about`)
- **Purpose**: Detail TGB history, team expertise, manufacturing precision, and trust factors.
- **Target User**: High-value contract managers, corporate architects, architects.
- **Primary Action**: "Contact Us" (Link to `/contact`).
- **Secondary Action**: "Claim Warranty" (Link to `/claim-warranty`).
- **Required Content**: Mission/vision statements, manufacturing plant descriptors, leadership profiles.
- **Optional Content**: Brand video/visuals.
- **User Flow**: Entry ➔ Credibility check ➔ Contact form/Consultation scheduling.
- **Navigation Path**: Header ➔ About link.

---

### 3. Services Page (`/services`)
- **Purpose**: Index all signage categories and highlight engineering and manufacturing capabilities.
- **Target User**: Business developers and retail managers looking for high-quality custom signs.
- **Primary Action**: "Get a Quote" (Modal launch).
- **Secondary Action**: Navigate to specific service (e.g. Led sign boards detail page).
- **Required Content**: Index of all services (LED, SS, ACP, Acrylic, Neon, Pylon).
- **Optional Content**: Materials explanation sheet.
- **User Flow**: Entry ➔ Categorization scan ➔ Specific service detail ➔ Quote modal.
- **Navigation Path**: Header ➔ Services link.

---

### 4. Service Detail Pages (`/services/:slug`)
- **Purpose**: Comprehensive technical specs, layouts, material options, and samples for one sign category.
- **Target User**: Operations managers, technical architects.
- **Primary Action**: "Get a Quote" (Modal launch).
- **Secondary Action**: Back to services catalog page.
- **Required Content**: High-res product images, Technical specs table, Durability specifications, FAQs.
- **Optional Content**: Design layout templates.
- **User Flow**: Catalog ➔ Tech verification ➔ Intent validation ➔ Contact submission.
- **Navigation Path**: Services page ➔ Click card.

---

### 5. Gallery Page (`/gallery`)
- **Purpose**: Showcase high-resolution photos of successfully executed signage projects.
- **Target User**: Designers, architects, creative marketing teams.
- **Primary Action**: Click project to view details (`/projects/:id`).
- **Secondary Action**: "Get a Quote" (Modal launch).
- **Required Content**: Project category tags, High-quality photo grid, Location context.
- **Optional Content**: Before/after comparison images.
- **User Flow**: Entry ➔ Visual inspiration scan ➔ Project details review.
- **Navigation Path**: Header ➔ Gallery link.

---

### 6. Project Detail Pages (`/projects/:id`)
- **Purpose**: Detailed case studies showing manufacturing blueprints, site execution pictures, and technical scopes.
- **Target User**: Corporate buyers, building owners.
- **Primary Action**: "Get a Quote" (Modal launch).
- **Secondary Action**: Back to Gallery link.
- **Required Content**: Site dimensions, Materials sheet, Execution timeline description, Final photos.
- **Optional Content**: Client quote/review.
- **User Flow**: Gallery ➔ Study execution details ➔ Convert.
- **Navigation Path**: Gallery page ➔ Click project card.

---

### 7. Contact Page (`/contact`)
- **Purpose**: Direct email/phone details, interactive location map, and full contact form.
- **Target User**: General visitors, prospective clients.
- **Primary Action**: Complete contact form.
- **Secondary Action**: Direct phone or WhatsApp call.
- **Required Content**: Office address, Email, Maps location, Turnstile CAPTCHA protected form.
- **Optional Content**: Direct link to Claim Warranty page.
- **User Flow**: Entry ➔ Form fill or Direct call ➔ Submission ➔ Success message.
- **Navigation Path**: Header ➔ Contact link.

---

### 8. Claim Warranty Page (`/claim-warranty`)
- **Purpose**: Specialized form for registered clients to submit issues under warranty.
- **Target User**: Existing clients.
- **Primary Action**: Submit claims form (invoice details, issue details, upload photo).
- **Secondary Action**: General support contact.
- **Required Content**: Invoice fields, Warranty number validation, Issue description field, Consent checkbox.
- **Optional Content**: Help guidelines.
- **User Flow**: Entry ➔ Details entry ➔ Attachment upload ➔ Submit.
- **Navigation Path**: Footer ➔ Claim Warranty link.
