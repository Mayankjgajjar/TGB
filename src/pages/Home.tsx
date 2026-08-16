import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import Hero from '../components/sections/Hero';
import ProductionTicker from '../components/sections/ProductionTicker';
import ProductCatalogGrid from '../components/sections/ProductCatalogGrid';
import ManufacturingPillars from '../components/sections/ManufacturingPillars';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Industries from '../components/sections/Industries';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import ContactCTA from '../components/sections/ContactCTA';

export const Home: React.FC = () => {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
      {/* 1. Clean High-Impact Hero Banner */}
      <Hero />

      {/* 2. Factory Capabilities Ticker Bar */}
      <ProductionTicker />

      {/* 3. Product Range Showcase (Clean 3-Column Cards) */}
      <ProductCatalogGrid />

      {/* 4. The 4 Manufacturing Excellence Pillars */}
      <ManufacturingPillars />

      {/* 5. Landmark Projects & Client Installations */}
      <FeaturedProjects />

      {/* 6. Industry Specific Solutions */}
      <Industries />

      {/* 7. Client Testimonials */}
      <Testimonials />

      {/* 8. Procurement FAQs */}
      <FAQ />

      {/* 9. Direct Quote & Contact Consultation */}
      <ContactCTA />
    </motion.div>
  );
};

export default Home;
