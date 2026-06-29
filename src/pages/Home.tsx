import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';

// Import homepage sections
import Hero from '../components/sections/Hero';
import Identity from '../components/sections/Identity';
import Services from '../components/sections/Services';
import Engineering from '../components/sections/Engineering';
import Materials from '../components/sections/Materials';
import Process from '../components/sections/Process';
import Projects from '../components/sections/Projects';
import Industries from '../components/sections/Industries';
import Trust from '../components/sections/Trust';
import QuoteBuilder from '../components/sections/QuoteBuilder';
import ContactCTA from '../components/sections/ContactCTA';

export const Home: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* 11 Homepage sections assembled in sequential order */}
      <Hero />
      <Identity />
      <Services />
      <Engineering />
      <Materials />
      <Process />
      <Projects />
      <Industries />
      <Trust />
      <QuoteBuilder />
      <ContactCTA />
    </motion.div>
  );
};

export default Home;
