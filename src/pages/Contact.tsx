import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import PageHero from '../components/sections/PageHero';
import ContactInfoPanel from '../components/sections/ContactInfoPanel';
import ContactCTA from '../components/sections/ContactCTA';

const FAQ = lazy(() => import('../components/sections/FAQ'));

const SectionFallback = () => <div style={{ minHeight: '400px' }} aria-hidden="true" />;

export const Contact: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Start Your Signage Project Today."
        subtitle="Ready to elevate your brand? Contact our team for a free consultation and customised quotation tailored to your requirements."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contact' },
        ]}
      />

      {/* Workshop address, phone, email, WhatsApp, business hours, map & service areas */}
      <ContactInfoPanel />

      {/* Main inquiry submission form with Turnstile validation */}
      <ContactCTA />

      {/* FAQs regarding consultations, site audits, and delivery timelines */}
      <Suspense fallback={<SectionFallback />}>
        <FAQ />
      </Suspense>
    </motion.div>
  );
};

export default Contact;
