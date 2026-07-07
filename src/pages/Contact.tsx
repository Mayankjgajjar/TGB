import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import PageHero from '../components/sections/PageHero';
import ContactCTA from '../components/sections/ContactCTA';

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

      {/* Full contact form with Turnstile, consent, and all validation */}
      <ContactCTA />
    </motion.div>
  );
};

export default Contact;
