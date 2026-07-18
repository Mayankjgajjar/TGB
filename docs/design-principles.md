# Design Principles

This document defines the core product design philosophies for TGB Enterprise to ensure future updates remain unified, professional, and consistent.

---

## The Core Philosophies

### 1. Minimalism
- Eliminate decorative noise. Every layout block, line, shadow, and color must serve a purpose.
- Maintain ample whitespace (negative space) to draw focus to content and typography.

### 2. Progressive Disclosure
- Avoid hitting users with massive technical tables or walls of text initially.
- Show essential details first (e.g. summary description, highlight stats) and allow deep-diving (e.g. technical specs tables, specification drop-downs) when the user expresses intent.

### 3. Consistency
- Elements must behave identically across all views.
- Colors must be mapped exclusively to design tokens (no hardcoded color codes).
- Spacing margins and padding values must follow the defined spacing scale.

### 4. Accessibility (WCAG AA)
- The site must be completely navigable by keyboard alone.
- Visible focus outlines must be clean, clear, and high-contrast.
- Color contrast for body text and overlays must satisfy minimum contrast limits (4.5:1 ratio).

### 5. Visual Rhythm
- Establish visual patterns using grid systems and container widths.
- Ensure transitions between sections feel natural by standardizing scroll animations and transition timing functions.

### 6. Information Hierarchy
- Users must understand the primary message of a page in less than 2 seconds.
- Use font weight, size, and layout positions to guide the eye from the most important headline to supporting copy, and finally to call-to-actions.

### 7. Establishing Trust
- Showcase actual project photos, physical address locations, clear contact pathways, and detailed warranty processing steps.
- Avoid generic mockups and stock copy.

### 8. Performance-First
- Design for rapid page loading and low latency.
- Optimize images, lazy-load assets, limit client-side scripts, and structure DOM components cleanly.
