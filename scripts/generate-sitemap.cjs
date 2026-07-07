/**
 * scripts/generate-sitemap.cjs
 *
 * Generates public/sitemap.xml before every build.
 * Reads actual slug/ID data from the compiled TS source files
 * using a simple but robust extraction approach that parses real
 * quoted string values (not arbitrary regex on source text).
 *
 * Run: node scripts/generate-sitemap.cjs
 * Triggered automatically via: "prebuild" in package.json
 */

'use strict';

const fs = require('fs');
const path = require('path');

const CANONICAL_ORIGIN = 'https://www.tgbsign.com';
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');

// ── Extract slugs/IDs from TypeScript source files ─────────────────────────
// This uses a targeted regex on known patterns (id: "...", slug: "...") rather
// than arbitrary text parsing. Safe because the field names are unique in context.

function extractQuotedValues(filePath, fieldName) {
  const src = fs.readFileSync(filePath, 'utf-8');
  const pattern = new RegExp(`${fieldName}:\\s*["']([^"']+)["']`, 'g');
  const results = [];
  let match;
  while ((match = pattern.exec(src)) !== null) {
    results.push(match[1]);
  }
  return results;
}

// ── Collect data ─────────────────────────────────────────────────────────────

const projectsFile = path.join(__dirname, '..', 'src', 'content', 'projects.ts');
const servicesFile = path.join(__dirname, '..', 'src', 'content', 'services.ts');

// Project IDs from projects.ts
const projectIds = extractQuotedValues(projectsFile, 'id');

// Service slugs from services.ts — they use the `slug` field
const serviceSlugs = extractQuotedValues(servicesFile, 'slug');

// ── Build URL list ────────────────────────────────────────────────────────────

const today = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { loc: '/',                 changefreq: 'weekly',  priority: '1.0' },
  { loc: '/projects',         changefreq: 'weekly',  priority: '0.9' },
  { loc: '/claim-warranty',   changefreq: 'monthly', priority: '0.6' },
  { loc: '/privacy',          changefreq: 'yearly',  priority: '0.3' },
  { loc: '/terms',            changefreq: 'yearly',  priority: '0.3' },
];

const projectRoutes = projectIds.map(id => ({
  loc: `/projects/${id}`,
  changefreq: 'monthly',
  priority: '0.8',
}));

const serviceRoutes = serviceSlugs.map(slug => ({
  loc: `/services/${slug}`,
  changefreq: 'monthly',
  priority: '0.8',
}));

const allRoutes = [...staticRoutes, ...projectRoutes, ...serviceRoutes];

// ── Render XML ────────────────────────────────────────────────────────────────

function renderUrl({ loc, changefreq, priority }) {
  return `  <url>
    <loc>${CANONICAL_ORIGIN}${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(renderUrl).join('\n')}
</urlset>
`;

fs.writeFileSync(SITEMAP_PATH, xml, 'utf-8');

console.log(`[generate-sitemap] ✓ Wrote ${allRoutes.length} URLs to ${SITEMAP_PATH}`);
projectIds.forEach(id => console.log(`  /projects/${id}`));
serviceSlugs.forEach(slug => console.log(`  /services/${slug}`));
