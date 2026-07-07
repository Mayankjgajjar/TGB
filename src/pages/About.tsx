import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { pageTransition } from '../animations/variants';
import PageHero from '../components/sections/PageHero';
import Identity from '../components/sections/Identity';
import ContactCTA from '../components/sections/ContactCTA';

const Industries = lazy(() => import('../components/sections/Industries'));
const Process = lazy(() => import('../components/sections/Process'));
const Testimonials = lazy(() => import('../components/sections/Testimonials'));

const SectionFallback = () => <div style={{ minHeight: '400px' }} aria-hidden="true" />;

// ── Inline reusable card style ────────────────────────────────────────────────
const cardBase: React.CSSProperties = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.07)',
  padding: '32px 28px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const eyebrowStyle: React.CSSProperties = {
  fontFamily: 'var(--font-technical, monospace)',
  fontSize: '0.625rem',
  letterSpacing: '0.18em',
  textTransform: 'uppercase' as const,
  color: 'var(--color-accent, #c8a96e)',
};

const h3Style: React.CSSProperties = {
  fontFamily: 'var(--font-display, Montserrat, sans-serif)',
  fontSize: '1.125rem',
  fontWeight: 700,
  color: '#ffffff',
  margin: 0,
};

const pStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body, Roboto, sans-serif)',
  fontSize: '0.9375rem',
  lineHeight: 1.7,
  color: 'rgba(255,255,255,0.55)',
  margin: 0,
};

// ── Section wrapper style ─────────────────────────────────────────────────────
const sectionWrap: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 24px',
};

const sectionBlock: React.CSSProperties = {
  padding: '80px 0',
};

export const About: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <PageHero
        eyebrow="OUR COMPANY"
        title="Built on Precision. Driven by Craft."
        subtitle="TGB Enterprise is Ahmedabad's trusted sign board manufacturer, delivering premium custom signage solutions that help brands create lasting impressions across India."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'About Us' },
        ]}
      />

      {/* ── Who We Are + Trust Cards (existing Identity component) ── */}
      <Identity />

      {/* ── Mission, Vision, Values ── */}
      <section style={sectionBlock} aria-label="Mission, Vision and Values">
        <div style={sectionWrap}>
          <div style={{ marginBottom: '40px' }}>
            <p style={{ ...eyebrowStyle, marginBottom: '14px' }}>OUR FOUNDATION</p>
            <h2 style={{ fontFamily: 'var(--font-display, Montserrat, sans-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#ffffff', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
              Mission, Vision & Core Values.
            </h2>
            <p style={{ ...pStyle, maxWidth: '600px' }}>
              Our principles guide every project, every material choice, and every client relationship — from the first consultation to long after installation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px' }}>
            <div style={cardBase}>
              <span style={eyebrowStyle}>MISSION</span>
              <h3 style={h3Style}>Engineer Signage That Endures</h3>
              <p style={pStyle}>
                To design, fabricate, and install signage systems of exceptional quality that strengthen brands, serve businesses, and stand the test of time — using premium materials, precision engineering, and professional installation.
              </p>
            </div>
            <div style={cardBase}>
              <span style={eyebrowStyle}>VISION</span>
              <h3 style={h3Style}>India's Most Trusted Signage Partner</h3>
              <p style={pStyle}>
                To become the foremost architectural identity systems company in India — known for uncompromising quality, technical expertise, and partnerships that last for decades, not just projects.
              </p>
            </div>
            <div style={cardBase}>
              <span style={eyebrowStyle}>VALUES</span>
              <h3 style={h3Style}>Craft, Integrity & Reliability</h3>
              <p style={pStyle}>
                We believe great signage begins with great craftsmanship. We are honest in our quoting, precise in our manufacturing, and dependable in our delivery — for every client, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Company Milestones ── */}
      <section style={{ ...sectionBlock, paddingTop: '0' }} aria-label="Company Milestones">
        <div style={sectionWrap}>
          <div style={{ marginBottom: '40px' }}>
            <p style={{ ...eyebrowStyle, marginBottom: '14px' }}>BY THE NUMBERS</p>
            <h2 style={{ fontFamily: 'var(--font-display, Montserrat, sans-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#ffffff', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
              A Decade of Craftsmanship.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2px' }}>
            {[
              { num: '10+', label: 'Years in Business', desc: 'Serving Ahmedabad & all of India' },
              { num: '500+', label: 'Projects Delivered', desc: 'Across Gujarat, Maharashtra & beyond' },
              { num: '9', label: 'Signage Categories', desc: 'LED, ACP, Neon, 3D, SS & more' },
              { num: '5yr', label: 'LED Module Warranty', desc: 'Backed by Meanwell transformers' },
              { num: '100%', label: 'In-House Fabrication', desc: 'Zero outsourcing, full quality control' },
              { num: '24hr', label: 'Warranty Response', desc: 'Fast after-sales support commitment' },
            ].map(({ num, label, desc }) => (
              <div key={num} style={{ ...cardBase, gap: '8px' }}>
                <div style={{ fontFamily: 'var(--font-display, Montserrat, sans-serif)', fontSize: '2.25rem', fontWeight: 700, color: 'var(--color-accent, #c8a96e)', letterSpacing: '-0.03em' }}>{num}</div>
                <div style={{ fontFamily: 'var(--font-technical, monospace)', fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#ffffff' }}>{label}</div>
                <div style={{ ...pStyle, fontSize: '0.8125rem' }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries We Serve ── */}
      <Suspense fallback={<SectionFallback />}>
        <Industries />
      </Suspense>

      {/* ── Manufacturing Process ── */}
      <Suspense fallback={<SectionFallback />}>
        <Process />
      </Suspense>

      {/* ── Client Testimonials ── */}
      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>

      {/* ── Internal Navigation ── */}
      <div style={{ padding: '40px 0 0', textAlign: 'center' }}>
        <div style={sectionWrap}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', marginBottom: '64px' }}>
            {[
              { to: '/services', label: 'Explore Our Services' },
              { to: '/projects', label: 'View Our Projects' },
              { to: '/contact', label: 'Start a Project' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-technical, monospace)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', transition: 'color 0.2s ease, border-color 0.2s ease' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-accent, #c8a96e)'; e.currentTarget.style.borderColor = 'var(--color-accent, #c8a96e)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              >
                {label} <ArrowRight size={13} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Page-end CTA ── */}
      <ContactCTA />
    </motion.div>
  );
};

export default About;
