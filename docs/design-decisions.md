# Design Decisions & Rationale

This document logs the design philosophy and rationales behind the changes in layout, visual metrics, typography, and density inside the TGB Enterprise project.

---

## 1. Visual Card Spacing & Density
- **Decision**: Reduce card densities and use generous padding scales on mobile/tablet viewports.
- **Why**: The original sections suffered from tight text boundaries and heavy borders which caused visual noise. Standardizing cards using a strict spacing grid allows elements to breathe and improves user readability.

---

## 2. Typography Scale Standardization
- **Decision**: Restrict heading levels to a clear hierarchy (Display, H1, H2, H3, Body, Metadata) and enforce absolute clamp variables.
- **Why**: Ad-hoc size specifications in custom CSS modules led to visual inconsistencies. Mapping all sizes to CSS variables (`--font-size-xs` to `--font-size-3xl`) ensures typography adapts to all viewports.

---

## 3. High-Contrast Focus States & Accessibility
- **Decision**: Standardize keyboard focus styling to a thick outline (`2px solid var(--color-red)`) with outline offset padding.
- **Why**: Keyboard tab navigation was previously invisible. Enforcing visible focus indicators allows keyboard and screen reader users to safely navigate form fields, links, and buttons, maintaining WCAG AA compliance.

---

## 4. Reusable Component Consolidation
- **Decision**: Convert individual form inputs into a shared layout component structure.
- **Why**: Warranty and Contact pages implemented inputs separately, resulting in inconsistent border radii and alert alignments. Unifying forms reduces codebase maintainability overhead.

---

## 5. CTA Position and Prominence
- **Decision**: Keep the primary "Get a Quote" conversion CTA permanently visible (via header, footer, and section blocks).
- **Why**: Signage procurement is a high-consideration purchase. Providing clear conversion entry points throughout the user's reading flow increases lead capture without interrupting content reading.
