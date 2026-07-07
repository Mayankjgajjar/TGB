/**
 * scripts/generate-sitemap.cjs
 *
 * Generates public/sitemap.xml before every build.
 * Follows Google's latest SEO recommendations:
 * 1. Removes deprecated fields (priority, changefreq).
 * 2. Uses accurate lastmod values based on file system last modified timestamps.
 * 3. Includes indexable static and dynamic routes.
 * 4. Adds image sitemap metadata for service and project pages.
 * 5. Sorts URLs alphabetically and prevents duplicates.
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

// Helper to escape XML special characters
function escapeXml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Helper to check file modification times
function getLatestModifiedDate(filePaths) {
  let latestTime = 0;
  for (const fp of filePaths) {
    if (fs.existsSync(fp)) {
      const stats = fs.statSync(fp);
      if (stats.mtimeMs > latestTime) {
        latestTime = stats.mtimeMs;
      }
    }
  }
  if (latestTime === 0) {
    return new Date().toISOString().split('T')[0]; // fallback
  }
  return new Date(latestTime).toISOString().split('T')[0];
}

// File paths
const projectsFile = path.join(__dirname, '..', 'src', 'content', 'projects.ts');
const servicesFile = path.join(__dirname, '..', 'src', 'content', 'services.ts');

const srcHome = path.join(__dirname, '..', 'src', 'pages', 'Home.tsx');
const srcHomeContent = path.join(__dirname, '..', 'src', 'content', 'home.ts');
const srcAbout = path.join(__dirname, '..', 'src', 'pages', 'About.tsx');
const srcServices = path.join(__dirname, '..', 'src', 'pages', 'Services.tsx');
const srcContact = path.join(__dirname, '..', 'src', 'pages', 'Contact.tsx');
const srcGallery = path.join(__dirname, '..', 'src', 'pages', 'Gallery.tsx');
const srcGalleryContent = path.join(__dirname, '..', 'src', 'content', 'gallery.ts');
const srcWarranty = path.join(__dirname, '..', 'src', 'pages', 'Warranty.tsx');
const srcPrivacy = path.join(__dirname, '..', 'src', 'pages', 'Privacy.tsx');
const srcTerms = path.join(__dirname, '..', 'src', 'pages', 'Terms.tsx');
const srcServiceDetail = path.join(__dirname, '..', 'src', 'pages', 'ServiceDetail.tsx');
const srcProjectDetail = path.join(__dirname, '..', 'src', 'pages', 'ProjectDetail.tsx');

// ── 1. Parse Project Data ───────────────────────────────────────────────────
const projectsSrc = fs.readFileSync(projectsFile, 'utf-8');
const projectItems = [];
const parts = projectsSrc.split(/\bid:\s*["']/);
for (let i = 1; i < parts.length; i++) {
  const part = parts[i];
  const id = part.split(/["']/)[0];
  const nameMatch = /name:\s*["']([^"']+)["']/.exec(part);
  const categoryMatch = /category:\s*["']([^"']+)["']/.exec(part);
  const imagePathMatch = /imagePath:\s*["']([^"']+)["']/.exec(part);
  if (id && nameMatch && imagePathMatch) {
    projectItems.push({
      id,
      name: nameMatch[1],
      category: categoryMatch ? categoryMatch[1] : '',
      imagePath: imagePathMatch[1]
    });
  }
}

// ── 2. Parse Service Data ───────────────────────────────────────────────────
const servicesSrc = fs.readFileSync(servicesFile, 'utf-8');
const serviceItems = [];
const serviceBlockPattern = /["']([^"']+)["']:\s*\{\s*slug:\s*["']([^"']+)["'][\s\S]*?seoMetadata/g;
let sMatch;
while ((sMatch = serviceBlockPattern.exec(servicesSrc)) !== null) {
  const block = sMatch[0];
  const slug = sMatch[2];
  const nameMatch = /name:\s*["']([^"']+)["']/.exec(block);
  const heroImageMatch = /heroImage:\s*["']([^"']+)["']/.exec(block);
  
  if (slug && nameMatch && heroImageMatch) {
    serviceItems.push({
      slug,
      name: nameMatch[1],
      heroImage: heroImageMatch[1]
    });
  }
}

// ── 3. Build Routes with Lastmod & Optional Image Data ────────────────────────
const allRoutes = [];

// Home route
allRoutes.push({
  loc: '/',
  lastmod: getLatestModifiedDate([srcHome, srcHomeContent]),
});

// Static routes
allRoutes.push({
  loc: '/about',
  lastmod: getLatestModifiedDate([srcAbout, srcHomeContent]),
});

allRoutes.push({
  loc: '/services',
  lastmod: getLatestModifiedDate([srcServices, servicesFile]),
});

allRoutes.push({
  loc: '/contact',
  lastmod: getLatestModifiedDate([srcContact]),
});

allRoutes.push({
  loc: '/gallery',
  lastmod: getLatestModifiedDate([srcGallery, srcGalleryContent]),
});

allRoutes.push({
  loc: '/claim-warranty',
  lastmod: getLatestModifiedDate([srcWarranty]),
});

allRoutes.push({
  loc: '/privacy',
  lastmod: getLatestModifiedDate([srcPrivacy]),
});

allRoutes.push({
  loc: '/terms',
  lastmod: getLatestModifiedDate([srcTerms]),
});

// Dynamic Service routes
serviceItems.forEach(service => {
  allRoutes.push({
    loc: `/services/${service.slug}`,
    lastmod: getLatestModifiedDate([servicesFile, srcServiceDetail]),
    image: {
      loc: service.heroImage,
      title: service.name,
      caption: `TGB Enterprise ${service.name} Design & Installation Ahmedabad`
    }
  });
});

// Dynamic Project routes
projectItems.forEach(project => {
  allRoutes.push({
    loc: `/projects/${project.id}`,
    lastmod: getLatestModifiedDate([projectsFile, srcProjectDetail]),
    image: {
      loc: project.imagePath,
      title: project.name,
      caption: `${project.name} - ${project.category} landmark project by TGB Enterprise`
    }
  });
});

// ── 4. Remove Duplicates & Sort Alphabetically ─────────────────────────────
const uniqueRoutesMap = new Map();
allRoutes.forEach(route => {
  uniqueRoutesMap.set(route.loc, route);
});

const sortedRoutes = Array.from(uniqueRoutesMap.values()).sort((a, b) => {
  return a.loc.localeCompare(b.loc);
});

// ── 5. Generate XML Output ────────────────────────────────────────────────────
function renderUrl(route) {
  let imgMarkup = '';
  if (route.image) {
    // Ensure image loc uses the canonical origin if it's relative
    const imgLoc = route.image.loc.startsWith('http') 
      ? route.image.loc 
      : `${CANONICAL_ORIGIN}${route.image.loc}`;
      
    imgMarkup = `\n    <image:image>
      <image:loc>${escapeXml(imgLoc)}</image:loc>
      <image:title>${escapeXml(route.image.title)}</image:title>
      <image:caption>${escapeXml(route.image.caption)}</image:caption>
    </image:image>`;
  }

  return `  <url>
    <loc>${CANONICAL_ORIGIN}${route.loc}</loc>
    <lastmod>${route.lastmod}</lastmod>${imgMarkup}
  </url>`;
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sortedRoutes.map(renderUrl).join('\n')}
</urlset>
`;

fs.writeFileSync(SITEMAP_PATH, xml, 'utf-8');

console.log(`[generate-sitemap] ✓ Optimized and wrote ${sortedRoutes.length} URLs to ${SITEMAP_PATH}`);
sortedRoutes.forEach(route => {
  console.log(`  ${route.loc} (lastmod: ${route.lastmod}${route.image ? ' + Image' : ''})`);
});
