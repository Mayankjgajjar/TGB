# Accessibility (a11y) Checklist

This checklist tracks standard requirements to maintain WCAG AA compliance across the TGB Enterprise project.

---

## The Compliance Checklist

- [ ] **Contrast Verification**: Body copy text must maintain a contrast ratio of at least `4.5:1` against background panels.
- [ ] **Semantic Headings**: Maintain linear order of heading tags (`h1` ➔ `h2` ➔ `h3` ➔ `h4`). Never use raw text styling as a heading replacement.
- [ ] **Keyboard Navigation**:
  - All interactive elements must focus visibly.
  - Active elements must outline cleanly with `2px solid var(--color-red)` on tab focus.
- [ ] **Modal ARIA Compliance**:
  - Modal container must declare `role="dialog"`, `aria-modal="true"`.
  - Close button must declare an explicit `aria-label="Close modal"`.
  - Focus must lock inside the active modal overlay.
- [ ] **Screen Reader Support**:
  - Images must define non-empty `alt` text. Alt descriptions should specify actual information, not placeholder keywords.
  - Decorative icons must specify `aria-hidden="true"`.
- [ ] **Input Elements**:
  - Form fields must declare an `id` matching its label's `htmlFor`.
  - Error messages must set `aria-live="polite"` and link to inputs via `aria-describedby` when errors occur.
