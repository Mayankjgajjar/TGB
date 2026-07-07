import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import ServicesOverview from '../components/sections/ServicesOverview';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Grid from '../components/ui/Grid';
import Card from '../components/ui/Card';
import SectionEyebrow from '../components/ui/SectionEyebrow';
import { servicesHubContent, ICON_MAP } from '../content/servicesHub';
import servicesOverviewStyles from '../components/sections/ServicesOverview.module.css';

import Industries from '../components/sections/Industries';
import FAQ from '../components/sections/FAQ';
import ContactCTA from '../components/sections/ContactCTA';

export const Services: React.FC = () => {
  // Ensure page starts at top on transition
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      style={{ paddingTop: 'var(--space-xl)' }}
    >
      {/* 1. Page Introduction & 2. Service Categories (Grid) */}
      <ServicesOverview
        eyebrow={servicesHubContent.introduction.eyebrow}
        title={servicesHubContent.introduction.title}
        subtitle={servicesHubContent.introduction.subtitle}
        introParagraph={servicesHubContent.introduction.extendedIntro}
      />

      {/* 3. Which Service Is Right for You? (Concise Recommendation Cards) */}
      <Section spacing="large" id="recommendations">
        <Container>
          <div className={servicesOverviewStyles.headerBlock} style={{ marginBottom: '48px' }}>
            <SectionEyebrow>{servicesHubContent.recommendations.header.eyebrow}</SectionEyebrow>
            <h2 className={servicesOverviewStyles.mainTitle}>
              {servicesHubContent.recommendations.header.title}
            </h2>
            <p className={servicesOverviewStyles.subtitle}>
              {servicesHubContent.recommendations.header.subtitle}
            </p>
          </div>

          <Grid cols={3} gap="normal">
            {servicesHubContent.recommendations.items.map((item, idx) => (
              <Card
                key={idx}
                icon={ICON_MAP[item.icon]}
                category={item.category}
                title={item.title}
                description={item.description}
                footerPill={item.tag}
                to={item.to}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* 4. Industries We Serve (With Custom Copy) */}
      <Industries
        title="Signage Engineering Tailored for Your Industry."
        subtitle={servicesHubContent.industriesIntro}
      />

      {/* 5. Why Choose TGB Enterprise (Service Delivery Standards) */}
      <Section spacing="large" id="why-choose-us" style={{ background: 'rgba(10, 10, 10, 0.4)' }}>
        <Container>
          <div className={servicesOverviewStyles.headerBlock} style={{ marginBottom: '48px' }}>
            <SectionEyebrow>{servicesHubContent.whyChooseUs.header.eyebrow}</SectionEyebrow>
            <h2 className={servicesOverviewStyles.mainTitle}>
              {servicesHubContent.whyChooseUs.header.title}
            </h2>
            <p className={servicesOverviewStyles.subtitle}>
              {servicesHubContent.whyChooseUs.header.subtitle}
            </p>
          </div>

          <Grid cols={3} gap="normal">
            {servicesHubContent.whyChooseUs.items.map((item, idx) => (
              <Card
                key={idx}
                icon={ICON_MAP[item.icon]}
                title={item.title}
                description={item.description}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* 6. Frequently Asked Questions (Service-Selection FAQs) */}
      <FAQ
        title={servicesHubContent.faq.header.title}
        subtitle={servicesHubContent.faq.header.subtitle}
        items={servicesHubContent.faq.items}
      />

      {/* 7. Contact CTA */}
      <ContactCTA />
    </motion.div>
  );
};

export default Services;
