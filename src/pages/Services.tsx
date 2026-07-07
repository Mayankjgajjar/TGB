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

      {/* Full 6-card service grid */}
      <ServicesOverview />

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
