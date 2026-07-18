# Page Layout Guidelines

This document provides standardized page templates and visual structures to maintain unified user journeys across all main routes.

---

## 1. Static Layout Page Template
- **Applicable Views**: Privacy Policy (`/privacy`), Terms & Conditions (`/terms`).
- **Structure**:
  1. Section Header: Breadcrumbs layout + Editorial H1 page title.
  2. Spacing separator: `--space-md` or `--space-lg`.
  3. Single-column body layout: clean typography layout with structured subheadings (`h2`, `h3`).
  4. Padding: bottom margin of `--space-xl` before footer.

---

## 2. Dynamic Landing Page Template
- **Applicable Views**: Home (`/`), Services list (`/services`), Gallery (`/gallery`).
- **Structure**:
  1. Hero Header Section: Large visual display with primary brand CTA.
  2. Spacing separator: `--space-xl`.
  3. Grid sections: Renders cards or project lists.
  4. Spacing separator: `--space-xl`.
  5. Closing section: Trust review Carousel or FAQ block.
  6. Final conversion layout: Contact CTA panel.

---

## 3. Interactive Forms Page Template
- **Applicable Views**: Contact (`/contact`), Claim Warranty (`/claim-warranty`).
- **Structure**:
  1. Header: Breadcrumbs + clear conversion header copy.
  2. Spacing separator: `--space-md`.
  3. Dual-column block (desktop): Technical contact metrics / instructions (left) + interactive form wrapper (right).
  4. CAPTCHA Check: Enforce loading/turnstile elements at the bottom.
  5. Action button: Primary full-width CTA (mobile) or aligned action link (desktop).
