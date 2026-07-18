# Design System Proposal

This proposal details the UI building blocks, layouts, and semantic components that define the visual language of TGB Enterprise.

---

## 1. Grid & Containers
- **Main Container Width**: `1440px` max-width.
- **Section Inner Width**: `1320px` max-width.
- **Grid Scale**: 12-column layouts for desktop, collapsing to 1-column layouts on mobile viewports.
- **Gutter Widths**: `32px` on desktop, `24px` on tablet, `16px` on mobile.

---

## 2. Spacing Scale (Modular Architectural Scale)
- **`--space-xs` (8px)**: Tight text paddings, metadata margins.
- **`--space-sm` (16px)**: Card inner padding, input fields gap.
- **`--space-md` (24px)**: Standard element separation, component grid gaps.
- **`--space-lg` (48px)**: Core section padding, spacing between subheadings.
- **`--space-xl` (96px)**: Major editorial section separations.

---

## 3. Component Systems

### Button System
Buttons have three primary visual states:
1. **Primary Button**: Filled background (`--color-red`), white text. Focus outline: `2px solid var(--color-red)`.
2. **Secondary Button**: Outlined border (`1px solid var(--color-white-muted)`), transition fill on hover.
3. **Technical Button**: Monospace label variant with indicator dot decoration.

*States:*
- Default, Hover, Focus, Active, and Disabled.

### Form & Input System
- **Layout**: Stacked labels on top of input fields.
- **Borders**: Standardized `1px solid var(--color-steel-dark)` border, border-radius of `6px`.
- **States**:
  - *Default*: Soft border.
  - *Focus*: Red highlight border, focus ring offset.
  - *Error*: Red warning text, alert background fill.

### Card System
- **Border Radius**: Standardized `12px` rounded corners.
- **Background**: Rich black panels with soft border outlines.
- **Interactive hover**: Subtle elevation scale transitions.
