import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import PageHero from '../components/sections/PageHero';
import Identity from '../components/sections/Identity';
import ContactCTA from '../components/sections/ContactCTA';

const Industries = lazy(() => import('../components/sections/Industries'));
const Process = lazy(() => import('../components/sections/Process'));
const Testimonials = lazy(() => import('../components/sections/Testimonials'));

const SectionFallback = () => <div style={{ minHeight: '400px' }} aria-hidden="true" />;

export const About: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <PageHero
        eyebrow="OUR STORY"
        title="Built on Precision. Driven by Craft."
        subtitle="TGB Enterprise is Ahmedabad's trusted sign board manufacturer, delivering premium custom signage solutions that help brands create lasting impressions across India."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'About Us' },
        ]}
      />

      {/* Full Identity block (About, Who We Are, Trust standards, and Leadership — hiding services grid) */}
      <Identity showServices={false} />

      {/* Industries We Serve */}
      <Suspense fallback={<SectionFallback />}>
        <Industries />
      </Suspense>

      {/* Manufacturing Process */}
      <Suspense fallback={<SectionFallback />}>
        <Process />
      </Suspense>

      {/* Client Testimonials */}
      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>

      {/* Page-end CTA */}
      <ContactCTA />
    </motion.div>
  );
};

export default About;
