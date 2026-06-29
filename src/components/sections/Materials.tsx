import React from 'react';
import { homeContent } from '../../content/home';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import Label from '../ui/Label';
import Grid from '../ui/Grid';

export const Materials: React.FC = () => {
  const { header, items } = homeContent.materials;

  return (
    <Section id="materials" dividerBottom spacing="large">
      <Container>
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-64)' }}>
          <Label showMarker style={{ marginBottom: 'var(--space-12)' }}>{header.label}</Label>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
            <Heading level={2}>{header.title}</Heading>
            <span style={{ fontFamily: 'var(--font-technical)', fontSize: 'var(--font-size-xs)', color: 'var(--color-steel)' }}>
              {header.coordinates}
            </span>
          </div>
        </div>

        {/* Materials list */}
        <Grid cols={3} gap="large">
          {items.map((material) => (
            <div 
              key={material.id} 
              style={{ 
                border: '1px solid var(--color-steel-dark)', 
                padding: 'var(--space-32)', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 'var(--space-24)' 
              }}
            >
              <div>
                <Heading level={3} style={{ marginBottom: 'var(--space-8)' }}>{material.name}</Heading>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontFamily: 'var(--font-technical)', fontSize: '11px', color: 'var(--color-steel)' }}>
                    FINISH: {material.finish}
                  </span>
                  <span style={{ fontFamily: 'var(--font-technical)', fontSize: '11px', color: 'var(--color-copper)' }}>
                    RANGE: {material.thicknessRange}
                  </span>
                </div>
              </div>
              
              <p style={{ color: 'var(--color-off-white-muted)', fontSize: 'var(--font-size-sm)', flexGrow: 1 }}>
                {material.description}
              </p>

              <div style={{ borderTop: '1px solid var(--color-steel-dark)', paddingTop: 'var(--space-16)' }}>
                <span style={{ fontFamily: 'var(--font-technical)', fontSize: '11px', color: 'var(--color-steel)' }}>
                  APPLICATIONS:
                </span>
                <p style={{ color: 'var(--color-off-white-muted)', fontSize: '12px', marginTop: '4px' }}>
                  {material.suitability}
                </p>
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Materials;
