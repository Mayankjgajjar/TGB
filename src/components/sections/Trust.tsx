import React from 'react';
import { homeContent } from '../../content/home';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import Label from '../ui/Label';
import Grid from '../ui/Grid';

export const Trust: React.FC = () => {
  const { header, points } = homeContent.trust;

  return (
    <Section id="trust" dividerBottom spacing="large">
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

        {/* Trust Points Grid */}
        <Grid cols={3} gap="large">
          {points.map((point, index) => (
            <div 
              key={index} 
              style={{ 
                borderLeft: '1px solid var(--color-steel-dark)', 
                paddingLeft: 'var(--space-32)', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 'var(--space-16)' 
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
                <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--color-copper)' }} />
                <Heading level={3} style={{ fontSize: 'var(--font-size-md)', fontFamily: 'var(--font-primary)', fontWeight: '500' }}>
                  {point.title}
                </Heading>
              </div>
              <p style={{ color: 'var(--color-off-white-muted)', fontSize: 'var(--font-size-sm)', lineHeight: 'var(--line-height-normal)' }}>
                {point.text}
              </p>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Trust;
