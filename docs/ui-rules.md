# UI & Styling Rules

This document establishes constraints for typography, margins, padding alignments, and structural hierarchies across the TGB Enterprise project.

---

## The Styling Constraints

### 1. Spacing Constraints
- Do not mix custom margin values. Use the standard spacing scale variables only: `--space-xs`, `--space-sm`, `--space-md`, `--space-lg`, and `--space-xl`.
- Horizontal padding for pages must use container margins (`--space-md` or `--space-lg` depending on device viewport).

### 2. Nested Container Limits
- Do not nest layout containers deeper than **3 levels**:
  1. Section / Page Wrapper
  2. Grid / Flex Row Group
  3. Individual Card / Element block
- Excess nesting causes responsive calculation errors and breaks flex alignment rules.

### 3. Typography Constraints
- Heading levels must be strictly ordered (`h1` ➔ `h2` ➔ `h3`). Do not skip heading levels for visual styling.
- All fonts must resolve to CSS variables:
  - Display titles: `--font-display` (Montserrat)
  - Body text copy: `--font-body` (Google Sans/Roboto)

### 4. Button Hierarchy
- A section may only have **one primary CTA button** (filled color).
- Supporting links or secondary actions must use secondary (outline) or link button styling.

### 5. Color Enforcement
- **Zero hardcoded hex values** in CSS modules.
- All color mapping must utilize design tokens (`var(--color-black)`, `var(--color-red)`, etc.).
- Custom color extensions are forbidden unless explicitly declared inside `tokens.css`.
