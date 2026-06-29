import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';

// Import homepage sections
import Hero from '../components/sections/Hero';
import Identity from '../components/sections/Identity';

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
    </motion.div>
  );
};

export default Home;
