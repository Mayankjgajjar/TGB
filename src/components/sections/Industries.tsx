import React from 'react';
import { homeContent } from '../../content/home';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import Label from '../ui/Label';
import Grid from '../ui/Grid';

export const Industries: React.FC = () => {
  const { header, sectors } = homeContent.industries;

  return (
    <Section id="industries" dividerBottom spacing="large">
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

        {/* Sectors Grid */}
        <Grid cols={3} gap="large">
          {sectors.map((sector) => (
            <div 
              key={sector.id} 
              style={{ 
                border: '1px solid var(--color-steel-dark)', 
                padding: 'var(--space-32)', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 'var(--space-24)' 
              }}
            >
              {sector.elevationLimit && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <span style={{ 
                    fontFamily: 'var(--font-technical)', 
                    fontSize: '10px', 
                    color: 'var(--color-steel)', 
                    border: '1px solid var(--color-steel-dark)', 
                    padding: '2px 8px' 
                  }}>
                    LIMIT: {sector.elevationLimit.toUpperCase()}
                  </span>
                </div>
              )}
              <Heading level={3}>{sector.title}</Heading>
              <p style={{ color: 'var(--color-off-white-muted)', fontSize: 'var(--font-size-sm)', flexGrow: 1 }}>
                {sector.description}
              </p>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Industries;
