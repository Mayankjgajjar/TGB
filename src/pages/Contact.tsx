import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import ContactCTA from '../components/sections/ContactCTA';
import FAQ from '../components/sections/FAQ';

export const Contact: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      style={{ paddingTop: 'var(--space-xl)' }}
    >
      {/* Contact form and details with Page Hero content integrated directly inside the top header of ContactCTA */}
      <ContactCTA
        eyebrow="GET IN TOUCH"
        title="Start Your Signage Project Today."
        subtitle="Ready to elevate your brand? Contact our team for a free consultation and customised quotation tailored to your requirements."
      />

      {/* FAQs regarding consultations, site audits, and delivery timelines */}
      <FAQ />
    </motion.div>
  );
};

export default Contact;
