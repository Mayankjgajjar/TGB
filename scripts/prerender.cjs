/**
 * scripts/prerender.cjs
 *
 * Runs post-build to statically prerender all indexable routes.
 * This generates physical directory-based index.html files (e.g. dist/privacy/index.html)
 * pre-populated with unique title tags, meta descriptions, canonical URLs,
 * OG/Twitter cards, and semantic H1/H2 content blocks.
 *
 * This guarantees that crawlers without JavaScript execution see complete,
 * valid HTML, resolving search-console duplicate titles and H1 errors.
 *
 * Run: node scripts/prerender.cjs
 * Triggered automatically at the end of Vite production build.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const CANONICAL_ORIGIN = 'https://www.tgbsign.com';
const DIST_DIR = path.join(__dirname, '..', 'dist');
const INDEX_HTML_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(INDEX_HTML_PATH)) {
  console.error('[prerender] Error: dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');

// Helper to escape HTML characters
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// File paths
const projectsFile = path.join(__dirname, '..', 'src', 'content', 'projects.ts');
const servicesFile = path.join(__dirname, '..', 'src', 'content', 'services.ts');

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
  const descriptionMatch = /description:\s*["']([^"']+)["']/.exec(part);
  const locationMatch = /location:\s*["']([^"']+)["']/.exec(part);
  const clientMatch = /client:\s*["']([^"']+)["']/.exec(part);
  const yearMatch = /year:\s*["']([^"']+)["']/.exec(part);
  const highlightMatch = /engineeringHighlight:\s*["']([^"']+)["']/.exec(part);

  if (id && nameMatch && imagePathMatch) {
    projectItems.push({
      id,
      name: nameMatch[1],
      category: categoryMatch ? categoryMatch[1] : '',
      imagePath: imagePathMatch[1],
      description: descriptionMatch ? descriptionMatch[1] : '',
      location: locationMatch ? locationMatch[1] : '',
      client: clientMatch ? clientMatch[1] : '',
      year: yearMatch ? yearMatch[1] : '',
      engineeringHighlight: highlightMatch ? highlightMatch[1] : ''
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
  const positioningMatch = /positioning:\s*["']([^"']+)["']/.exec(block);
  const descriptionMatch = /description:\s*["']([^"']+)["']/.exec(block);
  const whyItMattersMatch = /whyItMatters:\s*["']([^"']+)["']/.exec(block);
  
  if (slug && nameMatch && heroImageMatch) {
    serviceItems.push({
      slug,
      name: nameMatch[1],
      heroImage: heroImageMatch[1],
      positioning: positioningMatch ? positioningMatch[1] : '',
      description: descriptionMatch ? descriptionMatch[1] : '',
      whyItMatters: whyItMattersMatch ? whyItMattersMatch[1] : ''
    });
  }
}

// ── 3. Define Pages to Prerender ─────────────────────────────────────────────
const pages = [];

// A. Home Page
pages.push({
  route: '/',
  title: 'TGB Enterprise | Sign Board & Signage Manufacturer in Ahmedabad',
  description: 'TGB Enterprise is a leading sign board manufacturer in Ahmedabad, specializing in premium LED, ACP, and acrylic signage. Contact us to elevate your brand.',
  h1: 'TGB Enterprise',
  h2: 'Architectural Identity Systems',
  image: 'https://www.tgbsign.com/assets/images/hero-poster.png',
  content: `
    <section>
      <h2>Premium Signboard & Facade Manufacturer in Ahmedabad</h2>
      <p>TGB Enterprise designs, manufactures, and installs premium architectural identity systems for commercial landmarks. Operating from our fabrication shop in Nikol, Ahmedabad, we offer custom-engineered LED sign boards, ACP cladding panels, 3D acrylic letters, and stainless steel signs across Gujarat and broader India. We bridge architectural blueprints and structural engineering standards to construct brands that are built to be seen.</p>
    </section>
    <section>
      <h2>Our Core Signage Solutions</h2>
      <ul>
        <li><strong><a href="/services/led-sign-boards">LED Sign Boards</a>:</strong> High-brightness, IP67 weather-sealed LED modules powered by Meanwell transformers for 24/7 exterior brand visibility.</li>
        <li><strong><a href="/services/acp-sign-boards">ACP Sign Boards</a>:</strong> Rigid aluminium composite panel facade cladding systems engineered in Nikol, Ahmedabad.</li>
        <li><strong><a href="/services/acrylic-letters">Acrylic &amp; 3D Letters</a>:</strong> Precision laser-cut high-density acrylic lettering with backlit halo lighting.</li>
        <li><strong><a href="/services/ss-letters">SS Letters</a>:</strong> Gold titanium and mirror-finish stainless steel letters with premium corporate branding.</li>
        <li><strong><a href="/services/neon-sign-boards">Neon &amp; Custom Signages</a>:</strong> Flexible custom neon boards handcrafted for stores, cafes, and showrooms.</li>
        <li><strong><a href="/services/pylon-signs">Pylon Signs</a>:</strong> Freestanding road-side monumental signs built on reinforced steel foundations.</li>
      </ul>
    </section>
    <section>
      <h2>Featured Landmark Installations</h2>
      <ul>
        <li><strong><a href="/projects/infra-corp-installation">INFRA CORP Headquarters</a>:</strong> ACP facade cladding and corporate signage in Ahmedabad.</li>
        <li><strong><a href="/projects/gold-letter-signage">The Gold Palace Showroom</a>:</strong> 3D Acrylic &amp; Gold Letter Signage in Nikol, Ahmedabad.</li>
        <li><strong><a href="/projects/custom-neon-signage">Glow &amp; Co. Creative Studio</a>:</strong> Handcrafted custom neon signs portfolio.</li>
        <li><strong><a href="/projects/acp-board-installation">Apex Commercial Hub</a>:</strong> ACP panel board and LED glow signage landmark.</li>
      </ul>
      <p>Browse our complete <a href="/projects">completed projects portfolio</a> or submit a <a href="/claim-warranty">warranty claim request</a>.</p>
    </section>
  `
});

// B. About Page
pages.push({
  route: '/about',
  title: 'About TGB Enterprise | Trusted Sign Board Company in Ahmedabad',
  description: 'Learn about TGB Enterprise, the trusted sign board company in Ahmedabad. We design, manufacture, and install high-quality signage for brands across India.',
  h1: 'About TGB Enterprise',
  h2: 'Our Story, Mission & Manufacturing Excellence',
  image: 'https://www.tgbsign.com/assets/images/hero-poster.png',
  content: `
    <section>
      <h2>Our Company Story</h2>
      <p>TGB Enterprise was founded in Ahmedabad, Gujarat, with a singular mission: to engineer signage that transforms the way businesses are perceived. Operating from our precision fabrication workshop in Nikol, Ahmedabad, we have grown into one of Gujarat's most trusted sign board manufacturers — serving retail showrooms, corporate headquarters, restaurants, hospitals, and industrial facilities across India.</p>
      <p>Our founders, Mayank and Ankit, bring deep expertise in architectural signage design and structural engineering. Every project is approached with technical rigour, aesthetic sensitivity, and a commitment to long-term quality.</p>
    </section>
    <section>
      <h2>Our Mission & Values</h2>
      <p>We believe that great signage is an extension of a brand's identity. Our mission is to fabricate signage that not only looks exceptional but performs reliably under real-world conditions — weather, wind loads, and time. We use premium materials: Aluminium Composite Panels (ACP), high-grade acrylic, stainless steel, and IP67-rated LED modules powered by Meanwell transformers.</p>
    </section>
    <section>
      <h2>Industries We Serve</h2>
      <ul>
        <li>Retail &amp; Showrooms — high-impact storefronts</li>
        <li>Corporate Offices — professional identity signage</li>
        <li>Restaurants &amp; Cafés — distinctive ambiance signs</li>
        <li>Hospitals &amp; Healthcare — wayfinding systems</li>
        <li>Hotels &amp; Hospitality — premium guest experience signs</li>
        <li>Real Estate &amp; Commercial Developments — project branding</li>
        <li>Industrial &amp; Manufacturing — durable operational signage</li>
        <li>Educational Institutions — campus identity signage</li>
      </ul>
    </section>
    <section>
      <h2>Our Manufacturing Process</h2>
      <p>From discovery to after-sales support, we follow a 5-stage structured process: Consultation &amp; Discovery → Design &amp; Visualization → Manufacturing &amp; Fabrication → Installation &amp; Execution → After-Sales Support. This ensures every project is delivered on time, on spec, and with lasting quality.</p>
      <p>Explore our <a href="/services">full range of signage services</a>, view our <a href="/projects">completed project portfolio</a>, or <a href="/contact">contact us</a> today.</p>
    </section>
  `
});

// C. Services Page
pages.push({
  route: '/services',
  title: 'Signage Services – LED, ACP, Neon & Acrylic Sign Boards | TGB Enterprise Ahmedabad',
  description: 'Explore custom signage services in Ahmedabad by TGB Enterprise, including durable LED boards, ACP panels, neon signs, and 3D letters. Request a free quote.',
  h1: 'Our Signage Services',
  h2: 'Custom Sign Board Design, Fabrication & Installation',
  image: 'https://www.tgbsign.com/assets/images/hero-poster.png',
  content: `
    <section>
      <h2>Premium Signage Solutions</h2>
      <p>TGB Enterprise offers a comprehensive range of custom signage solutions for businesses across Gujarat and India. Every sign is designed, fabricated, and installed by our expert team in Nikol, Ahmedabad — ensuring end-to-end quality control and structural reliability.</p>
      <ul>
        <li><strong><a href="/services/led-sign-boards">LED Sign Boards</a>:</strong> High-brightness illuminated sign boards for indoor and outdoor visibility.</li>
        <li><strong><a href="/services/acp-sign-boards">ACP Sign Boards</a>:</strong> Durable Aluminium Composite Panel facade cladding systems.</li>
        <li><strong><a href="/services/acrylic-letters">Acrylic &amp; 3D Letters</a>:</strong> Precision laser-cut dimensional lettering for premium brand identity.</li>
        <li><strong><a href="/services/ss-letters">SS Letters</a>:</strong> Stainless steel and gold titanium corporate identity letters.</li>
        <li><strong><a href="/services/neon-sign-boards">Neon &amp; Custom Signages</a>:</strong> Creative flex and LED neon signs for retail and lifestyle brands.</li>
        <li><strong><a href="/services/pylon-signs">Pylon Signs</a>:</strong> Roadside freestanding monumental signs for commercial visibility.</li>
      </ul>
    </section>
    <section>
      <h2>Industries Served</h2>
      <p>We serve retail showrooms, corporate offices, restaurants, hospitals, hotels, real estate developments, industrial facilities, and educational campuses. View our <a href="/projects">completed projects portfolio</a> for case studies, or <a href="/contact">contact us</a> to request a customised quotation.</p>
    </section>
  `
});

// D. Contact Page
pages.push({
  route: '/contact',
  title: 'Contact TGB Enterprise | Sign Board Manufacturer, Nikol, Ahmedabad',
  description: 'Contact TGB Enterprise, the leading sign board manufacturer in Nikol, Ahmedabad. Visit our workshop or call us today to start your custom signage project.',
  h1: 'Contact TGB Enterprise',
  h2: 'Start Your Signage Project Today',
  image: 'https://www.tgbsign.com/assets/images/hero-poster.png',
  content: `
    <section>
      <h2>Get in Touch with Our Team</h2>
      <p>Ready to elevate your brand with premium signage? Contact TGB Enterprise, Ahmedabad's trusted sign board manufacturer, for a free consultation and customised quotation tailored to your project requirements.</p>
      <ul>
        <li><strong>Address:</strong> Shop No. 7/1, First Floor, Shukan Shopping Centre, opp. Chanakya school, Sukan Cross Rd, New India Colony, Nikol, Ahmedabad, Gujarat 382345</li>
        <li><strong>Phone:</strong> <a href="tel:+919727136137">+91 97271 36137</a></li>
        <li><strong>Email:</strong> <a href="mailto:tgbsign@proton.me">tgbsign@proton.me</a></li>
        <li><strong>Office Hours:</strong> Monday – Saturday, 9:30 AM – 7:00 PM IST</li>
      </ul>
      <p>Browse our <a href="/services">signage services</a>, view our <a href="/projects">completed projects</a>, or return to the <a href="/">Homepage</a>.</p>
    </section>
  `
});

// E. Project Archive Page
pages.push({
  route: '/projects',
  title: 'Our Completed Projects Portfolio | TGB Enterprise Ahmedabad',
  description: 'View TGB Enterprise completed projects and landmarks across Ahmedabad and Gujarat, featuring premium LED sign boards, ACP cladding, and neon signs.',
  h1: 'Identity Landmarks',
  h2: 'Project Archive &amp; Select Works',
  image: 'https://www.tgbsign.com/assets/images/hero-poster.png',
  content: `
    <section>
      <h2>Architectural Signage Case Studies</h2>
      <p>Explore TGB Enterprise's portfolio of custom-engineered storefront signs, building facade claddings, and lobby letter boards completed for corporate headquarters, jewelry showrooms, and commercial hubs in Nikol, Ahmedabad, and other major cities of Gujarat.</p>
      <ul>
        ${projectItems.map(p => `
          <li>
            <h3><a href="/projects/${p.id}">${escapeHtml(p.name)}</a></h3>
            <p><strong>Category:</strong> ${escapeHtml(p.category)} in ${escapeHtml(p.location)} (Client: ${escapeHtml(p.client)} - Year ${escapeHtml(p.year)}). ${escapeHtml(p.description)}</p>
          </li>
        `).join('\n')}
      </ul>
      <p>Return to <a href="/">Home page</a>, browse our <a href="/services">signage services</a>, or <a href="/contact">contact us</a>.</p>
    </section>
  `
});


// C. Claim Warranty Page
pages.push({
  route: '/claim-warranty',
  title: 'Product Warranty Registration & Claim | TGB Enterprise Sign Boards',
  description: 'Register or submit a warranty claim for your TGB Enterprise sign boards. Follow our easy guide to file a claim for LED, ACP, and 3D letters.',
  h1: 'Warranty Claim',
  h2: 'Submit Warranty Request Online',
  image: 'https://www.tgbsign.com/assets/images/hero-poster.png',
  content: `
    <section>
      <h2>Warranty Claim Terms &amp; Support Guidelines</h2>
      <p>Every TGB Enterprise signboard undergoes strict QA before dispatch from our Ahmedabad facility. We offer a 5-year warranty on premium LED modules and transformers, and a 10-year structural warranty on steel frameworks. Use this warranty dashboard to file claims for components experiencing technical issues.</p>
      <p>Submit your customer details online. Our support team in Nikol will review the records and respond within 24-48 business hours. Return to the <a href="/">Homepage</a>, read our <a href="/privacy">Privacy Policy</a>, or read our <a href="/terms">Terms &amp; Conditions</a>.</p>
    </section>
  `
});

// D. Privacy Page
pages.push({
  route: '/privacy',
  title: 'Privacy Policy | TGB Enterprise – Sign Board Manufacturer in Ahmedabad',
  description: 'Privacy Policy for TGB Enterprise, sign board manufacturer in Ahmedabad. Learn how we handle your personal data and respect your online privacy.',
  h1: 'Privacy Policy',
  h2: 'Indian DPDP Act 2023 Data Protection Compliance',
  image: 'https://www.tgbsign.com/assets/images/hero-poster.png',
  content: `
    <section>
      <h2>Enterprise Data Protection &amp; Compliance Policy</h2>
      <p>TGB Enterprise (referred to as "the Company", "We", "Us", or "Our") is dedicated to protecting the privacy, confidentiality, and security of our clients, business partners, and website visitors. This Privacy Policy details how we collect, store, handle, and process personal and business data through our website (https://www.tgbsign.com) and associated operations. We process data strictly in compliance with applicable law, including India's Digital Personal Data Protection Act, 2023 (DPDP Act) and international data protection standards where appropriate.</p>
      
      <h3>1. Company &amp; Data Collection Details</h3>
      <p>TGB Enterprise is an architectural identity systems manufacturer based in Ahmedabad, India. We collect personal details and project specifications to quote and fabricate signs at our Nikol facility. Data collected includes:</p>
      <ul>
        <li>Personal Identity Details (First/Last Names)</li>
        <li>Contact Details (Phone Numbers, Email Addresses)</li>
        <li>Business Information (Company Names, Corporate Designations)</li>
        <li>Project Specifications (Signage dimensions, structural materials, site location, blueprints, and files)</li>
        <li>Warranty Information (Purchase history, invoice values, claim details, and uploaded product condition images)</li>
      </ul>
      <p>Automatically collected metadata includes connection parameters, operating systems, rate-limiting tokens, Sentry error logs, and Google Analytics 4 performance metrics.</p>

      <h3>2. Third-Party Integrations &amp; Storage</h3>
      <p>We restrict data transfers to trusted cloud platforms that comply with high security requirements. These integrations include Cloudflare Turnstile (spam defense tokens at challenges.cloudflare.com), Resend (transactional email routing), and Sentry (error diagnostic tracing). Data is stored in secure data centers. Retention periods match our long-term signage warranties (typically up to 10-15 years).</p>

      <h3>3. Your Rights &amp; Grievance Officer</h3>
      <p>Under the DPDP Act 2023, you have the right to request access to the personal data we process, request data corrections, request deletion, or withdraw your consent. To exercise these rights, please email tgbsign@proton.me or write to our Grievance Officer at our Nikol workshop address.</p>
      
      <p>Read our full <a href="/terms">Terms &amp; Conditions</a>, file a <a href="/claim-warranty">Product Warranty Claim</a>, or return to the <a href="/">Homepage</a>.</p>
    </section>
  `
});

// E. Terms Page
pages.push({
  route: '/terms',
  title: 'Terms & Conditions | TGB Enterprise – Sign Board Manufacturer in Ahmedabad',
  description: 'Terms and conditions for using the website and services of TGB Enterprise, premium sign board manufacturer in Ahmedabad. Read our terms of service.',
  h1: 'Terms &amp; Conditions',
  h2: 'Fabrication Milestones &amp; Structural Approvals',
  image: 'https://www.tgbsign.com/assets/images/hero-poster.png',
  content: `
    <section>
      <h2>Enterprise Terms &amp; Conditions</h2>
      <p>These Terms and Conditions constitute a legally binding agreement between TGB Enterprise and the Client for the procurement of custom-built interior and exterior sign boards, LED displays, ACP panels, and pylon monoliths. By requesting a quotation or placing an order, you agree to comply with and be bound by these terms.</p>
      
      <h3>1. Fabrication Milestones &amp; Bill of Quantities (BOQ)</h3>
      <p>All prices quoted represent baseline estimates valid for thirty (30) calendar days from the date of issue. Signage costs are subject to material tolerances, scale requirements, and electrical specifications. Our standard billing milestones consist of:
      <ul>
        <li><strong>50% Advance Payment:</strong> Cleared before design drafting, material allocation, and routing begin.</li>
        <li><strong>30% Progress Payment:</strong> Cleared upon completion of fabrication at Nikol workshop and before dispatch.</li>
        <li><strong>20% Final Balance:</strong> Due immediately upon installation sign-off or delivery.</li>
      </ul>
      Taxes (GST at 18%) and transit freight are added separately.</p>

      <h3>2. Sizing Approvals &amp; Facade Mounting Permissions</h3>
      <p>Clients must review and sign off technical design drawings. TGB Enterprise holds no liability for layout, spelling, or sizing errors after artwork approval. Clients are responsible for obtaining societal, society manager, landlord, and municipal licenses (e.g., from the Ahmedabad Municipal Corporation) required to mount signs, and providing safely terminated electrical supply near the signs.</p>

      <h3>3. Warranty Commitments &amp; Exclusions</h3>
      <p>We provide a 5-Year warranty on premium LED modules and transformers (like Meanwell) and a 10-Year structural guarantee on steel sub-frames. Exclusions apply for damage resulting from voltage spikes, unauthorized modifications by third parties, vandalism, or extreme cyclones and force majeure circumstances.</p>
      
      <p>Read our full <a href="/privacy">Privacy Policy</a>, file a <a href="/claim-warranty">Product Warranty Claim</a>, or return to the <a href="/">Homepage</a>.</p>
    </section>
  `
});

// F. Dynamic Service Pages
serviceItems.forEach(s => {
  const otherServices = serviceItems.filter(other => other.slug !== s.slug);
  const relatedProjects = projectItems.filter(proj => {
    const term = s.name
      .toLowerCase()
      .replace('boards', '')
      .replace('signage', '')
      .replace('signages', '')
      .replace('signs', '')
      .replace('letters', '')
      .trim();
    return proj.category.toLowerCase().includes(term) || proj.description.toLowerCase().includes(term);
  });

  pages.push({
    route: `/services/${s.slug}`,
    title: `Premium ${s.name} | TGB Enterprise – Nikol, Ahmedabad`,
    description: `High-impact, custom-engineered ${s.name.toLowerCase()} design & installation by TGB Enterprise in Ahmedabad. Spec sheet, IP67 weather rating, and 5-Year warranty.`,
    h1: s.name,
    h2: s.positioning || 'Precision Engineered Signage Solutions',
    image: s.heroImage.startsWith('http') ? s.heroImage : `${CANONICAL_ORIGIN}${s.heroImage}`,
    content: `
      <section>
        <h2>${escapeHtml(s.name)} Overview</h2>
        <p>${escapeHtml(s.description)}</p>
        <p>${escapeHtml(s.whyItMatters)}</p>
      </section>
      <section>
        <h2>Signage Fabrication &amp; Engineering Standards</h2>
        <p>At TGB Enterprise, our manufacturing process in Nikol, Ahmedabad adheres to strict structural and electrical safety codes. Every ${escapeHtml(s.name)} is fabricated using state-of-the-art computer-controlled routers (CNC) and high-precision laser profiling machines to ensure exact alignment with design blueprints. We utilize premium architectural-grade materials (such as aluminum, structural acrylics, and stainless steel) treated with UV-resistant coatings to prevent fading, oxidation, or warping under severe weather conditions.</p>
        <p>Our LED assemblies are powered by industry-leading transformers (Meanwell) and energy-efficient IP67 weather-sealed modules, providing consistent luminous intensity with no visible hot-spots. Our certified installation crew manages structural mounting, anchor point calculation, and grid wiring, ensuring safety compliance for high-rise commercial facades and local retail zones across Ahmedabad, Gujarat, and broader India.</p>
      </section>
      <section>
        <h2>Completed Installations</h2>
        <ul>
          ${(relatedProjects.length > 0 ? relatedProjects : projectItems).slice(0, 2).map(proj => `
            <li><a href="/projects/${proj.id}">${escapeHtml(proj.name)}</a> (${escapeHtml(proj.category)}) in ${escapeHtml(proj.location)}</li>
          `).join('')}
        </ul>
        <h2>Other Signage Solutions</h2>
        <ul>
          ${otherServices.slice(0, 3).map(other => `
            <li><a href="/services/${other.slug}">${escapeHtml(other.name)}</a> - ${escapeHtml(other.positioning)}</li>
          `).join('')}
        </ul>
        <p>Request a quote on our <a href="/contact">Contact Page</a> or browse the full <a href="/projects">Signage Portfolio</a>.</p>
      </section>
    `
  });
});

// G. Dynamic Project Pages
projectItems.forEach(p => {
  pages.push({
    route: `/projects/${p.id}`,
    title: `${p.name} case study | TGB Enterprise`,
    description: `Case study: ${p.name} (${p.category}) in ${p.location}. View materials and engineering details by TGB Enterprise.`,
    h1: p.name,
    h2: p.category,
    image: p.imagePath.startsWith('http') ? p.imagePath : `${CANONICAL_ORIGIN}${p.imagePath}`,
    content: `
      <section>
        <h2>Project Overview: ${escapeHtml(p.name)}</h2>
        <p><strong>Client:</strong> ${escapeHtml(p.client)} | <strong>Location:</strong> ${escapeHtml(p.location)} | <strong>Year:</strong> ${escapeHtml(p.year)}</p>
        <p>${escapeHtml(p.description)}</p>
      </section>
      <section>
        <h2>Engineering Specification &amp; Quality Execution</h2>
        <p>The fabrication of the ${escapeHtml(p.name)} installation showcases TGB Enterprise's structural engineering guidelines. By selecting premium raw materials and utilizing precision automated tooling, our Nikol-based fabrication shop achieved seamless joints and high-tolerance alignment. The structural sub-frames are hot-dip galvanized to resist corrosion in high-humidity local climates, while the illuminated modules are fully weather-sealed to guarantee longevity.</p>
        <p>During the deployment phase, our technical team executed site alignment surveys and wind-load calculations to ensure the signage stands robustly. This project case study demonstrates our capacity to translate architect-level blueprints into durable physical landmarks, providing Ahmedabad and Gujarat businesses with unmatched brand permanence.</p>
        <p><strong>Engineering Highlight:</strong> ${escapeHtml(p.engineeringHighlight)}</p>
      </section>
      <section>
        <h2>Browse More Landmark Signages &amp; Services</h2>
        <ul>
          <li>View the full <a href="/projects">All Projects Portfolio</a></li>
          <li>Learn more about our <a href="/services/led-sign-boards">LED Sign Board Services</a> or <a href="/services/acp-sign-boards">ACP Sign Boards</a></li>
          <li>Return to the <a href="/">Homepage</a> or submit a <a href="/claim-warranty">Warranty Registration Request</a></li>
        </ul>
      </section>
    `
  });
});

// ── 4. Execute Prerendering ──────────────────────────────────────────────────
console.log(`[prerender] Starting static HTML generation for ${pages.length} routes...`);

pages.forEach(p => {
  const canonicalUrl = `${CANONICAL_ORIGIN}${p.route === '/' ? '' : p.route}`;

  // Assemble dynamic SEO headers
  const seoHeaders = `
  <title>${p.title}</title>
  <meta name="description" content="${p.description}" />
  <link rel="canonical" href="${canonicalUrl}" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${p.title}" />
  <meta property="og:description" content="${p.description}" />
  <meta property="og:image" content="${p.image}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:site_name" content="TGB Enterprise" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${p.title}" />
  <meta name="twitter:description" content="${p.description}" />
  <meta name="twitter:image" content="${p.image}" />
  `;

  // Parse and replace header blocks
  let html = templateHtml;

  // 1. Replace existing title
  html = html.replace(/<title>.*?<\/title>/, '');

  // 2. Replace existing description meta
  html = html.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/, '');

  // 3. Inject new SEO tags right after charset/meta tags
  html = html.replace('<head>', `<head>${seoHeaders}`);

  // 4. Inject static content into root div (invisible to users but visible to simple bots)
  const prerenderedBody = `
    <header style="display:none">
      <h1>${p.h1}</h1>
      <h2>${p.h2}</h2>
    </header>
    <main style="display:none">
      ${p.content}
    </main>
  `;
  html = html.replace('<div id="root"></div>', `<div id="root">${prerenderedBody}</div>`);

  // 5. Determine save directory & path
  let dirPath = DIST_DIR;
  if (p.route !== '/') {
    dirPath = path.join(DIST_DIR, p.route);
  }
  const savePath = path.join(dirPath, 'index.html');

  // Create folder recursively
  fs.mkdirSync(dirPath, { recursive: true });

  // Write file
  fs.writeFileSync(savePath, html, 'utf-8');
  console.log(`  ✓ Prerendered: ${p.route} ➔ ${path.relative(DIST_DIR, savePath)} (${html.length} bytes)`);
});

console.log('[prerender] ✓ Successfully statically prerendered all SEO routes!');
