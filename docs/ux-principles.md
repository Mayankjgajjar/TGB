# UX Principles & Interaction Guidelines

This document provides guidelines for interaction curves, cognitive load reduction, and navigation pathways across the TGB Enterprise project.

---

## 1. Cognitive Load Reduction

### Form Simplicity
- Group related fields together and use logical autocomplete attributes (`name`, `email`, `tel`).
- Keep validation error alerts close to the relevant field. Avoid listing errors in a single top alert banner.
- Form submissions must show loading indicators immediately upon click to prevent double clicks.

### Content Scan-ability
- Highlight critical words and tags in body text.
- Break long descriptive paragraphs into bullet points with bold keywords.
- Limit services overview descriptors to a maximum of 3 sentences, linking to deep-dive pages.

---

## 2. Interaction & Easing Guidelines

- All hover and active interactions must transition cleanly:
  - Transition speed: `--transition-fast` (200ms ease) for color changes and border highlight fades.
  - Transition speed: `--transition-base` (400ms ease) for card movement translations and backdrop fade-ins.
- Do not animate complex structural layout metrics (like grid-gap, margins, or dimensions) as it causes browser reflow calculations. Only animate opacity and transform properties.
- Respect accessibility settings: disabled animations must automatically trigger when media settings check `prefers-reduced-motion` is true.
