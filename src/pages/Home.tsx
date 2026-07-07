import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';

// ── Eager sections (above-the-fold or near-fold) ─────────────────────────────
import Hero from '../components/sections/Hero';
import Identity from '../components/sections/Identity';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import ContactCTA from '../components/sections/ContactCTA';

// ── Lazy sections (below-the-fold) ───────────────────────────────────────────
// These are deferred so the first paint isn't blocked by Framer Motion setup
// for sections the user hasn't yet scrolled to.
const Industries = lazy(() => import('../components/sections/Industries'));
const Process = lazy(() => import('../components/sections/Process'));
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
      <Hero />
      <Identity />
      <FeaturedProjects />
      <Suspense fallback={<SectionFallback />}>
        <Industries />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Process />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FAQ />
      </Suspense>
      <ContactCTA />
    </motion.div>
  );
};

export default Home;
