import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import Hero from '../components/sections/Hero';
import Identity from '../components/sections/Identity';
import Industries from '../components/sections/Industries';
import Testimonials from '../components/sections/Testimonials';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import ContactCTA from '../components/sections/ContactCTA';

export const Home: React.FC = () => {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
      {/* Full-screen video hero with primary CTAs */}
      <Hero />

      {/* About Preview + Why Choose TGB (hiding Leadership and Services from Homepage) */}
      <Identity showAbout={true} showTrust={true} showLeadership={false} showServices={false} />

      {/* Featured case studies — 4 project cards */}
      <FeaturedProjects />

      {/* Industries overview — who we serve */}
      <Industries />

      {/* Client testimonials — social proof */}
      <Testimonials />

      {/* Lead generation form and contact details */}
      <ContactCTA />
    </motion.div>
  );
};

export default Home;
