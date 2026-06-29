import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import { contactContent } from '../content/contact';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Label from '../components/ui/Label';
import Grid from '../components/ui/Grid';

export const Contact: React.FC = () => {
  const { header, offices, departments } = contactContent;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* Header */}
      <Section spacing="large" style={{ borderBottom: '1px solid var(--color-steel-dark)', paddingTop: '120px' }}>
        <Container>
          <div style={{ maxWidth: '700px', display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
            <Label showMarker color="copper">{header.label}</Label>
            <Heading level={1}>{header.title}</Heading>
            <p style={{ color: 'var(--color-off-white-muted)', fontSize: 'var(--font-size-md)' }}>
              {header.subtitle}
            </p>
          </div>
        </Container>
      </Section>

      {/* Offices Grid */}
      <Section spacing="large" dividerBottom>
        <Container>
          <Grid cols={2} gap="xlarge">
            {offices.map((office, index) => (
              <div 
                key={index} 
                style={{ 
                  border: '1px solid var(--color-steel-dark)', 
                  padding: 'var(--space-48)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-24)',
                  background: 'var(--color-charcoal-surface)'
                }}
              >
                <div>
                  <span style={{ fontFamily: 'var(--font-technical)', fontSize: '11px', color: 'var(--color-steel)' }}>
                    {office.role.toUpperCase()}
                  </span>
                  <Heading level={2} style={{ fontSize: 'var(--font-size-lg)', marginTop: 'var(--space-8)' }}>
                    {office.name}
                  </Heading>
                </div>

                {/* Office Address */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: 'var(--font-size-base)', color: 'var(--color-off-white-muted)' }}>
                  {office.address.map((line, lIndex) => (
                    <div key={lIndex}>{line}</div>
                  ))}
                </div>

                {/* Tech Details */}
                <div style={{ borderTop: '1px solid var(--color-steel-dark)', paddingTop: 'var(--space-24)', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-technical)', fontSize: '10px', color: 'var(--color-steel)' }}>PHONE:</span>{' '}
                    <span style={{ color: 'var(--color-off-white)' }}>{office.phone}</span>
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-technical)', fontSize: '10px', color: 'var(--color-steel)' }}>EMAIL:</span>{' '}
                    <a href={`mailto:${office.email}`} style={{ color: 'var(--color-copper-light)' }}>{office.email}</a>
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-technical)', fontSize: '10px', color: 'var(--color-steel)' }}>HOURS:</span>{' '}
                    <span style={{ color: 'var(--color-off-white-muted)' }}>{office.hours}</span>
                  </div>
                  <div style={{ marginTop: 'var(--space-8)' }}>
                    <span style={{ fontFamily: 'var(--font-technical)', fontSize: '10px', color: 'var(--color-steel)' }}>COORDINATES:</span>{' '}
                    <span style={{ fontFamily: 'var(--font-technical)', fontSize: 'var(--font-size-xs)', color: 'var(--color-copper)' }}>{office.coordinates}</span>
                  </div>
                </div>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Departments Grid */}
      <Section spacing="large">
        <Container>
          <div style={{ marginBottom: 'var(--space-32)' }}>
            <Label showMarker>DEPARTMENT DIRECT CONTACTS</Label>
          </div>
          <Grid cols={3} gap="large">
            {departments.map((dept, index) => (
              <div 
                key={index} 
                style={{ 
                  borderLeft: '2px solid var(--color-steel-dark)', 
                  paddingLeft: 'var(--space-24)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-8)'
                }}
              >
                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-off-white)' }}>
                  {dept.name}
                </div>
                <a href={`mailto:${dept.email}`} style={{ fontFamily: 'var(--font-technical)', fontSize: 'var(--font-size-xs)', color: 'var(--color-copper)' }}>
                  {dept.email}
                </a>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>
    </motion.div>
  );
};

export default Contact;
