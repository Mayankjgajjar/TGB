import React from 'react';
import { homeContent } from '../../content/home';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import Label from '../ui/Label';
import Grid from '../ui/Grid';

export const Services: React.FC = () => {
  const { header, items } = homeContent.services;

  return (
    <Section id="services" dividerBottom spacing="large">
      <Container>
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-64)', display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
          <div>
            <Label showMarker style={{ marginBottom: 'var(--space-12)' }}>{header.label}</Label>
            <Heading level={2}>{header.title}</Heading>
          </div>
          <span style={{ fontFamily: 'var(--font-technical)', fontSize: 'var(--font-size-xs)', color: 'var(--color-steel)' }}>
            {header.coordinates}
          </span>
        </div>

        {/* Services List */}
        <Grid cols={3} gap="large">
          {items.map((service) => (
            <div 
              key={service.id} 
              style={{ 
                border: '1px solid var(--color-steel-dark)', 
                padding: 'var(--space-32)', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 'var(--space-24)' 
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-technical)', color: 'var(--color-copper)', fontSize: 'var(--font-size-xs)' }}>
                  {service.number}
                </span>
              </div>
              <Heading level={3}>{service.title}</Heading>
              <p style={{ color: 'var(--color-off-white-muted)', fontSize: 'var(--font-size-sm)', flexGrow: 1 }}>
                {service.description}
              </p>
              <div style={{ borderTop: '1px solid var(--color-steel-dark)', paddingTop: 'var(--space-16)' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
                  {service.parameters.map((param, index) => (
                    <li key={index} style={{ fontFamily: 'var(--font-technical)', fontSize: '11px', color: 'var(--color-steel)' }}>
                      • {param}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Services;
