import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';

// ── Eager sections (above-the-fold) ──────────────────────────────────────────
import Hero from '../components/sections/Hero';
import HomeAboutPreview from '../components/sections/HomeAboutPreview';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import ContactCTA from '../components/sections/ContactCTA';

// ── Lazy sections (below-the-fold) ───────────────────────────────────────────
const ServicesOverview = lazy(() => import('../components/sections/ServicesOverview'));
const Industries = lazy(() => import('../components/sections/Industries'));
const Testimonials = lazy(() => import('../components/sections/Testimonials'));

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

      {/* Company introduction + 4 key stats → links to /about */}
      <HomeAboutPreview />

      {/* Service teaser grid — 6 cards linking to /services/:slug */}
      <Suspense fallback={<SectionFallback />}>
        <ServicesOverview />
      </Suspense>

      {/* Featured case studies — 4 project cards → links to /projects */}
      <FeaturedProjects />

      {/* Industries overview — who we serve */}
      <Suspense fallback={<SectionFallback />}>
        <Industries />
      </Suspense>

      {/* Client testimonials — social proof */}
      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>

      {/* Lead generation form */}
      <ContactCTA />
    </motion.div>
  );
};

export default Home;
