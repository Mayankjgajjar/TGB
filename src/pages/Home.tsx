import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';

// Import homepage sections
import Hero from '../components/sections/Hero';
import Identity from '../components/sections/Identity';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Industries from '../components/sections/Industries';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import ContactCTA from '../components/sections/ContactCTA';

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
      <Industries />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </motion.div>
  );
};

export default Home;
