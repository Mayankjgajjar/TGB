# Component Inventory

This document tracks all user interface elements and blocks across the codebase to identify duplication, cleanup opportunities, and merge actions before starting UI modifications.

---

## Shared UI Components

### 1. Buttons (`src/components/ui/Button.tsx`)
- **Description**: Standard brand button rendering as a link or HTML button.
- **Reused**: Yes (highly utilized across all pages).
- **Duplicate**: No.
- **Needs Merging**: No.
- **Needs Redesign**: No, but focus ring needs integration with design tokens.
- **Should be Removed**: No.

### 2. Cards (`src/components/ui/Card.tsx`)
- **Description**: Simple content wrapper with standard border-radius and background panel colors.
- **Reused**: Yes.
- **Duplicate**: No.
- **Needs Merging**: No.
- **Needs Redesign**: No.
- **Should be Removed**: No.

### 3. Modals (`src/components/ui/QuoteModal.tsx`)
- **Description**: Main popup for quick consultation requests, wired via React Context (`src/context/QuoteContext.tsx`).
- **Reused**: Yes (triggered from navbar and footer).
- **Duplicate**: No.
- **Needs Merging**: No.
- **Needs Redesign**: Yes, inputs and layout require spacing alignment.
- **Should be Removed**: No.

---

## Layout Components

### 4. Navigation (`src/components/layout/Navbar.tsx`)
- **Description**: Responsive header navigation with dynamic slide-out on scroll.
- **Reused**: Yes (placed on every page inside `AppLayout.tsx`).
- **Duplicate**: No.
- **Needs Merging**: No.
- **Needs Redesign**: No.
- **Should be Removed**: No.

### 5. Footer (`src/components/layout/Footer.tsx`)
- **Description**: Multi-column footer displaying links, details, and legal items.
- **Reused**: Yes.
- **Duplicate**: No.
- **Needs Merging**: No.
- **Needs Redesign**: No.
- **Should be Removed**: No.

---

## Page-Specific & Section Blocks

### 6. Hero Banner (`src/components/sections/Hero.tsx`)
- **Description**: Large top block showing background visuals and primary CTAs.
- **Reused**: Yes (homepage and layout baselines).
- **Duplicate**: No.
- **Needs Merging**: No.
- **Needs Redesign**: Yes, text contrast improvements.
- **Should be Removed**: No.

### 7. Services Grid (`src/components/sections/ServicesOverview.tsx`)
- **Description**: Renders list cards for services.
- **Reused**: Yes.
- **Duplicate**: No.
- **Needs Merging**: No.
- **Needs Redesign**: Yes (card padding and icon alignments on mobile need cleanup).
- **Should be Removed**: No.

### 8. Testimonials Section (`src/components/sections/Testimonials.tsx`)
- **Description**: Shows slider carousel of client testimonials.
- **Reused**: Yes.
- **Duplicate**: No.
- **Needs Merging**: No.
- **Needs Redesign**: No.
- **Should be Removed**: No.

### 9. FAQ Accordion (`src/components/sections/FAQ.tsx`)
- **Description**: Interactive slide-open list for general user queries.
- **Reused**: Yes.
- **Duplicate**: No.
- **Needs Merging**: No.
- **Needs Redesign**: No.
- **Should be Removed**: No.

---

## Duplicate & Missing Component Analysis

### Duplicate Form Logic
- **Issue**: Both `src/pages/Warranty.tsx` (Warranty form) and `src/pages/Contact.tsx` (Contact form) write input wrappers, labels, validation alerts, and loading spinners inline.
- **Recommendation**: Create a reusable form layout element or a shared `Input` component (`src/components/ui/Input.tsx`) to unify styling, error states, and focus states.

### Duplicate Icon Registry
- **Issue**: Individual section files (like `Identity.tsx` and `ServicesOverview.tsx`) import multiple separate icons from `lucide-react`.
- **Recommendation**: Standardize icon imports under the unified design system.
