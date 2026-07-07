import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';

// ── Eager sections (above-the-fold) ──────────────────────────────────────────
import Hero from '../components/sections/Hero';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import ContactCTA from '../components/sections/ContactCTA';

// ── Lazy sections (below-the-fold) ───────────────────────────────────────────
const ServicesOverview = lazy(() => import('../components/sections/ServicesOverview'));
const Testimonials = lazy(() => import('../components/sections/Testimonials'));
const FAQ = lazy(() => import('../components/sections/FAQ'));

// Lightweight inline fallback — avoids layout shift
const SectionFallback = () => (
  <div style={{ minHeight: '400px' }} aria-hidden="true" />
);

export const Home: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* Full-screen video hero with primary CTAs */}
      <Hero />

      {/* Service teaser grid — 6 cards linking to /services/:slug */}
      <Suspense fallback={<SectionFallback />}>
        <ServicesOverview />
      </Suspense>

      {/* Featured case studies — 4 project cards */}
      <FeaturedProjects />

      {/* Social proof */}
      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>

      {/* FAQ preview */}
      <Suspense fallback={<SectionFallback />}>
        <FAQ />
      </Suspense>

      {/* Lead generation form */}
      <ContactCTA />
    </motion.div>
  );
};

export default Home;
