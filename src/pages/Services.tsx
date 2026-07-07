import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import PageHero from '../components/sections/PageHero';
import ServicesOverview from '../components/sections/ServicesOverview';
import ContactCTA from '../components/sections/ContactCTA';

const Industries = lazy(() => import('../components/sections/Industries'));
const Process = lazy(() => import('../components/sections/Process'));
const FAQ = lazy(() => import('../components/sections/FAQ'));

const SectionFallback = () => <div style={{ minHeight: '400px' }} aria-hidden="true" />;

// ── Inline styling definitions keeping styling identical to About/Identity ──
const sectionWrap: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 24px',
};

const sectionBlock: React.CSSProperties = {
  padding: '80px 0',
};

const eyebrowStyle: React.CSSProperties = {
  fontFamily: 'var(--font-technical, monospace)',
  fontSize: '0.625rem',
  letterSpacing: '0.18em',
  textTransform: 'uppercase' as const,
  color: 'var(--color-accent, #c8a96e)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '16px',
};

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-display, Montserrat, sans-serif)',
  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
  fontWeight: 700,
  color: '#ffffff',
  margin: '0 0 16px',
  letterSpacing: '-0.02em',
};

const bodyStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body, Roboto, sans-serif)',
  fontSize: '1rem',
  lineHeight: 1.75,
  color: 'rgba(255,255,255,0.6)',
  margin: '0 0 16px',
};

const cardGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2px',
  marginTop: '40px',
};

const cardStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.06)',
  padding: '32px 28px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const cardTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display, Montserrat, sans-serif)',
  fontSize: '1.125rem',
  fontWeight: 700,
  color: '#ffffff',
  margin: 0,
};

const cardDescStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body, Roboto, sans-serif)',
  fontSize: '0.875rem',
  lineHeight: 1.6,
  color: 'rgba(255,255,255,0.45)',
  margin: 0,
};

export const Services: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <PageHero
        eyebrow="OUR EXPERTISE"
        title="Premium Signage Solutions for Every Business."
        subtitle="From iconic storefronts to corporate environments, we design, manufacture, and install signage solutions that make businesses impossible to ignore."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services' },
        ]}
      />

      {/* ── Services Introduction ── */}
      <section style={{ ...sectionBlock, paddingBottom: '0' }} aria-label="Services Introduction">
        <div style={sectionWrap}>
          <div style={{ maxWidth: '800px' }}>
            <span style={eyebrowStyle}>Capabilities Overview</span>
            <h2 style={h2Style}>Architectural Signboards Engineered for Impact.</h2>
            <p style={bodyStyle}>
              At TGB Enterprise, we believe a signboard is more than just a nameplate; it is an architectural identity system that represents your business's values and status. Our custom-engineered signage solutions bridge high-end brand aesthetics with rugged mechanical engineering.
            </p>
            <p style={bodyStyle}>
              We provide comprehensive signage solutions, including LED boards, ACP facade cladding, 3D letter installations, SS precision work, and pylon monoliths across Ahmedabad and major Indian markets. Every product undergoes strict quality control and structural safety review before installation.
            </p>
          </div>
        </div>
      </section>

      {/* Full 6-card service grid */}
      <ServicesOverview />

      {/* ── Materials We Use ── */}
      <section style={sectionBlock} aria-label="Materials We Use">
        <div style={sectionWrap}>
          <div>
            <span style={eyebrowStyle}>Material Integrity</span>
            <h2 style={h2Style}>Premium Materials Built to Endure.</h2>
            <p style={{ ...bodyStyle, maxWidth: '600px' }}>
              We select materials based on structural requirements, application type, and exposure to weather. We never compromise on raw materials, ensuring long-term durability.
            </p>
          </div>

          <div style={cardGridStyle}>
            <div style={cardStyle}>
              <span style={{ ...eyebrowStyle, color: 'rgba(255,255,255,0.45)' }}>01 / ILLUMINATION</span>
              <h3 style={cardTitleStyle}>IP67 Weather-Sealed LED Modules</h3>
              <p style={cardDescStyle}>
                High-lumen, energy-efficient modules powered by Mean Well transformers for 24/7 exterior brand visibility under monsoon and heat conditions.
              </p>
            </div>

            <div style={cardStyle}>
              <span style={{ ...eyebrowStyle, color: 'rgba(255,255,255,0.45)' }}>02 / FACADES</span>
              <h3 style={cardTitleStyle}>Architectural-Grade ACP</h3>
              <p style={cardDescStyle}>
                Durable Aluminum Composite Panels (4mm or 5mm thickness) with PVDF coating for robust, fade-resistant exterior facade cladding panels.
              </p>
            </div>

            <div style={cardStyle}>
              <span style={{ ...eyebrowStyle, color: 'rgba(255,255,255,0.45)' }}>03 / LETTERS</span>
              <h3 style={cardTitleStyle}>Stainless Steel (SS 304/316)</h3>
              <p style={cardDescStyle}>
                High-tensile, corrosion-resistant steel in gold titanium, mirror, or brushed finishes for luxury corporate identity markers and letters.
              </p>
            </div>

            <div style={cardStyle}>
              <span style={{ ...eyebrowStyle, color: 'rgba(255,255,255,0.45)' }}>04 / ILLUMINATION DIFFUSION</span>
              <h3 style={cardTitleStyle}>Cast Acrylic Sheets</h3>
              <p style={cardDescStyle}>
                High-transmission, UV-stabilized cast acrylic sheets for uniform lighting diffusion and zero visible hot-spots in backlit 3D letters.
              </p>
            </div>

            <div style={cardStyle}>
              <span style={{ ...eyebrowStyle, color: 'rgba(255,255,255,0.45)' }}>05 / CREATIVE BRANDING</span>
              <h3 style={cardTitleStyle}>Flexible Silicone Neon</h3>
              <p style={cardDescStyle}>
                Advanced energy-saving LED neon flex replacing fragile glass neon for safe, vibrant custom interior branding and creative shop displays.
              </p>
            </div>

            <div style={cardStyle}>
              <span style={{ ...eyebrowStyle, color: 'rgba(255,255,255,0.45)' }}>06 / STRUCTURAL SUB-FRAMES</span>
              <h3 style={cardTitleStyle}>Galvanized Iron (GI)</h3>
              <p style={cardDescStyle}>
                Hot-dip galvanized iron structural members designed to withstand local wind loads up to 150 km/h, preventing facade deformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries we serve */}
      <Suspense fallback={<SectionFallback />}>
        <Industries />
      </Suspense>

      {/* Manufacturing process */}
      <Suspense fallback={<SectionFallback />}>
        <Process />
      </Suspense>

      {/* FAQ */}
      <Suspense fallback={<SectionFallback />}>
        <FAQ />
      </Suspense>

      {/* CTA */}
      <ContactCTA />
    </motion.div>
  );
};

export default Services;
