# Component Standards

This document outlines implementation rules for buttons, inputs, modals, cards, and page elements.

---

## 1. Shared Component Specifications

### Buttons
- Must import and utilize the React Router `Link` component when mapping internal pages, or render standard HTML `<button>` elements for overlay triggers (like the Quote Modal).
- Must implement dynamic loading indicators (`aria-busy="true"`) during submission operations.

### Inputs & Text Areas
- Every form input must have a corresponding, distinct `<label>` linked with an `htmlFor` property.
- Input elements must declare an explicit `placeholder` and `aria-required="true"` if mandatory.
- Inputs must trigger error border highlights when validation errors are present.

### Modal Overlays
- Modal triggers must focus on the close button or first input field once opened.
- Hitting the `Escape` key must automatically dismiss the active modal.
- Background scroll must be locked (`overflow: hidden` on `body`) while overlays are displayed.

---

## 2. Component Layout & Nesting Rules

- Card components must map dimensions dynamically (using CSS grids or percentage flex basis). Do not set hardcoded widths in pixels.
- Padding inside cards must scale down on mobile screens (typically from `32px` to `16px`).
- Hover scales must limit movement to soft transforms (`transform: translateY(-4px)`) to maintain stability.
