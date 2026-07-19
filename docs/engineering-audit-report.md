# TGB Enterprise — Engineering Audit & Cleanup Report

**Date:** 2026-07-19  
**Scope:** Full repository production-readiness audit (`main` @ commit `6a5bc72` + Turnstile cleanup)  
**Mode:** Full Audit Report

---

## Executive Summary

**TGB Enterprise** is a React 19 + TypeScript + Vite 6 production web application for an architectural identity systems and sign board manufacturer in Nikol, Ahmedabad, Gujarat. The repository features strong technical fundamentals: strict TypeScript with zero compilation errors, a centralized CSS custom property design token system, 100% passing Vitest unit test suite (67/67 tests), automated pre-rendering for 18 indexable routes, and Vercel edge API deployment with rate limiting.

**Overall Production Readiness Score: 7.2/10**

| Category | Score | Status / Key Observation |
|----------|-------|--------------------------|
| Maintainability | 7.5/10 | Clean component hierarchy, structured layout/section/UI layers |
| Scalability | 7.5/10 | Modular routing and separated content schema files |
| Performance | 8.5/10 | Vite 6 + static HTML pre-rendering for 18 routes, optimized WebP assets |
| Developer Experience | 7.5/10 | Automated sitemap generator, image optimizer, Vitest + Playwright |
| Code Quality | 8/10 | Strict TypeScript, zero build/typecheck errors, 100% unit test pass rate |
| Technical Debt | **6/10** | Unused assets, test environment assertion mismatches, API security gaps |

---

## Top Findings & Action Items

### 1. 🔴 Security Gaps in Serverless API Handlers (`api/contact.ts`, `api/warranty.ts`)
- **HTML Injection in Email Templates:** User input (names, messages, issue descriptions) is directly interpolated into HTML email templates without HTML entity escaping (`& < > " '`).
- **Unsanitized Internal Error Messages:** On 500 error, raw `error.message` or `error.toString()` is returned to the client in JSON responses.
- **No File Upload Payload Size Limit:** `api/warranty.ts` accepts base64-encoded file attachments without enforcing a max payload size limit (e.g. 5 MB).
- **Turnstile Status:** Turnstile CAPTCHA keys have been completely removed from configuration (`.env.local`) and codebase per project requirements.

### 2. 🟡 Test Suite Execution & Environment Metrics
- **Unit Tests (100% PASS):** 67 passed out of 67 tests across 11 test files (`Vitest`).
- **E2E Test Suite (28 passed, 7 failed):**
  - **Contact Form (4 failures):** `e2e/contact-form.spec.ts` times out waiting for `networkidle` due to background network requests from the embedded Google Maps iframe. Switching to `domcontentloaded` resolves this timeout.
  - **SEO Assertions (3 failures):** `e2e/seo.spec.ts` asserts canonical and OG URLs contain `/tgbsign\.com/`, but local dev/test environment resolves `ORIGIN` to `http://localhost:5199`.

### 3. 🟡 Unused Texture Assets in `public/assets/` (~2.11 MB)
While `sign_wall.mp4` (4.13 MB) **is actively used** as the background video in `AppLayout.tsx`, the following texture and vector files have **zero references** in `src/`:
- `public/assets/textures/dark_architectural_texture.png` (1.02 MB) & `.webp` (273 KB)
- `public/assets/textures/neon_signs_bg.png` (713 KB) & `.webp` (105 KB)
- `public/assets/logos/2Asset 3.svg` (6.4 KB)

### 4. 🟡 Component Single Responsibility Principle (SRP) Violations
- `AppLayout.tsx` (404 lines): Handles smooth scroll (Lenis), LocalBusiness JSON-LD, Breadcrumb JSON-LD, dynamic page meta title/description tags, main layout shell, global background video, and WhatsApp floating action button.
- `ContactCTA.tsx` (769 lines): Combines contact form state, client-side Zod validation, base64 file upload, Google Maps embed, company address info, and submission handler.

### 5. 🟢 Design Tokens & CSS System
- `tokens.css` correctly defines the core brand identity tokens (`--color-black`, `--color-red`, `--color-white`, `--font-display`, `--font-body`, `--radius-small`, `--lh-h1`, `--lh-body`).
- Standard layout clearance variables (`--header-offset-desktop`, `--header-offset-mobile`) ensure clean top padding under sticky navigation across all views.

---

## Dependency & Build Audit

### Unused Dependencies in `package.json`
- `@testing-library/user-event` — Not imported in any unit test file.
- `happy-dom` — Vitest uses `jsdom` (`jsdom` 29.1.1 is configured).
- `cross-env` — Not referenced in any `package.json` scripts.
- `msw` — Tests mock requests using `vi.mock()` / Vitest native mocks.

### Active Production Build Pipeline
- Pre-build step automatically runs `generate-sitemap.cjs` (generates 18 canonical URLs with image metadata).
- Image optimizer `optimize-images.mjs` automatically checks and converts raw PNGs to WebP formats.
- Post-build step `prerender.cjs` statically renders HTML files for all 18 indexable routes into `dist/`.

---

## Architectural Health Summary

```
Component Modularity     ████████░░  7.5/10
Separation of Concerns   ██████░░░░  6/10
Accessibility            ███████░░░  7.5/10
TypeScript Quality       ████████░░  8/10
Design Token Usage       ████████░░  8/10
Code Duplication         ██████░░░░  6/10
Testability              ███████░░░  7/10   (100% unit tests pass)
Performance              █████████░  8.5/10
Security                 ██████░░░░  6/10
Documentation            ████████░░  8/10
Build Configuration      █████████░  9/10
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OVERALL                  7.2/10
```

---

## Priority Action Plan

### Immediate Fixes
1. **API Input Sanitization:** Wrap user input fields in `he.encode()` or manual entity escaping before building HTML email strings in `api/contact.ts` and `api/warranty.ts`.
2. **Server Error Masking:** Replace `error.message || error.toString()` in API catch blocks with generic user-friendly messages (`"Internal server error. Please try again later."`).
3. **E2E Test Fixes:** Change `page.waitForLoadState('networkidle')` to `page.waitForLoadState('domcontentloaded')` in `e2e/contact-form.spec.ts`. Update `e2e/seo.spec.ts` URL regex to accept localhost or canonical origin.
4. **Remove Unused Texture Assets:** Safely delete unused texture images (`dark_architectural_texture`, `neon_signs_bg`) and unreferenced SVGs to save ~2.11 MB.
5. **Clean `package.json`:** Remove unused devDependencies (`@testing-library/user-event`, `happy-dom`, `cross-env`, `msw`).

---

## End of Report
