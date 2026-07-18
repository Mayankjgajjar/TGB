# UI Refactor Roadmap & Queue

This document prioritizes the visual and interaction refactoring roadmap to ensure page improvements are executed systematically.

---

## The Refactor Queue

### 1. Form & Input Standardizations (Severity: Critical)
- **Estimated Effort**: Medium (1-2 days)
- **Dependencies**: None.
- **Expected UX Improvement**: Unified visual form layouts, clear validation errors, and accessibility-compliant input focus states across Quote Modal, Contact Page, and Claim Warranty.
- **Goal**: Consolidate form layouts and implement a shared standard style.

### 2. High-Contrast Overlay Backdrops (Severity: High)
- **Estimated Effort**: Low (0.5 day)
- **Dependencies**: None.
- **Expected UX Improvement**: Increases contrast and readability of hero paragraphs and detail headings.
- **Goal**: Add dark overlay gradients behind overlapping text copy.

### 3. Services List Progressive Disclosure (Severity: High)
- **Estimated Effort**: Medium (1 day)
- **Dependencies**: Form standardizations.
- **Expected UX Improvement**: Eliminates text clutter on Home Services and Catalog grids on mobile viewports.
- **Goal**: Standardize cards to show highlights, linking to specific detail views.

### 4. Interactive Carousel Easing (Severity: Medium)
- **Estimated Effort**: Low (0.5 day)
- **Dependencies**: Easing tokens verification.
- **Expected UX Improvement**: Smoother transitions and hover translations.
- **Goal**: Standardize easing properties inside stylesheets.
