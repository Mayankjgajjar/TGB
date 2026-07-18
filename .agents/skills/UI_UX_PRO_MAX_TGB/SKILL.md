---
name: UI_UX_PRO_MAX_TGB
description: Reusable workspace skill acting as the permanent UI/UX brain for the TGB Enterprise project, containing modular engines for auditing, design systems, a11y, form optimization, responsive checking, and final visual review QA.
---

# UI_UX_PRO_MAX_TGB – Workspace Design & Review Engine

This internal skill standardizes all layout, interaction, design token usage, responsiveness, and accessibility compliance rules across TGB Enterprise. It operates as the permanent UI/UX brain for the product.

---

## 1. Audit Engine
- Inspect page structures and identify layout shifts, alignment errors, and redundant visual layers.
- Check margins and paddings against the spacing scale defined in `docs/design-tokens.md`.
- Report deviations and assign severity scores (Critical, High, Medium, Low) to visual problems.

---

## 2. Design System Engine
- Verify color usage against standard tokens:
  - Background panels: `var(--color-black-soft)`
  - Active brand actions: `var(--color-red)`
- Enforce strict border-radius values (`var(--radius-card)` and `var(--radius-input)`).
- Prevent any hardcoded colors or sizing in CSS modules.

---

## 3. Accessibility (a11y) Engine
- Verify visible high-contrast focus states are applied to every link, button, and input (`2px solid var(--color-red)`).
- Ensure modal dialogs declare `role="dialog"`, `aria-modal="true"`, and lock keyboard focus when active.
- Verify alternative (`alt`) descriptions exist on all image tags.

---

## 4. Responsive Engine
- Test layout adaptions across viewports from `320px` to `1920px`.
- Enforce flexible flex layouts and CSS grid column transitions on mobile targets.
- Ensure touch targets are at least `44px` tall and have clear margins.

---

## 5. Component Reviewer
- Detect duplicate UI layout markup. If found, abstract the code into a shared reusable component under `/src/components/ui/` first before continuing.
- Enforce clean separation of style declarations from JSX code (no inline styling).

---

## 6. Layout Optimizer
- Limit container nesting to a maximum of 3 levels to maintain render efficiency.
- Establish standard visual rhythms using CSS variables for grids and gutter spaces.

---

## 7. Navigation Optimizer
- Streamline header link interactions. Navigation paths must prioritize the primary conversion pathway ("Get a Quote" Consultation) and require fewer clicks.

---

## 8. Typography Optimizer
- Restrict typography to `var(--font-display)` (Montserrat headings) and `var(--font-body)` (Google Sans/Roboto paragraphs).
- Check that heading hierarchies flow sequentially without gaps.

---

## 9. Form Optimizer
- Validate that all text areas and inputs display top labels, clear input boundaries, error highlight borders, and user-friendly validation alerts.

---

## 10. Performance Visual Reviewer
- Verify that large image assets use optimized extensions (`.webp`) and display appropriate fallback loader states.

---

## 11. Consistency Checker
- Check that hover animations, active states, elevations, and rounded borders align across all route views.

---

## 12. Final QA Gate
- A page is complete only if it achieves:
  - 100% WCAG AA compliance.
  - Zero hardcoded visual attributes.
  - Fluid responsiveness across all viewports.
