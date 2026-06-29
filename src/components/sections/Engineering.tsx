import React from 'react';
import { homeContent } from '../../content/home';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import Label from '../ui/Label';
import Grid from '../ui/Grid';

export const Engineering: React.FC = () => {
  const { header, description, stats } = homeContent.engineering;

  return (
    <Section id="engineering" dividerBottom spacing="large">
      <Container>
        <Grid cols={2} gap="large" align="center">
          {/* Left Column: Description */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)' }}>
            <Label showMarker>{header.label}</Label>
            <Heading level={2}>{header.title}</Heading>
            <p style={{ color: 'var(--color-off-white-muted)', fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-normal)' }}>
              {description}
            </p>
            <div style={{ fontFamily: 'var(--font-technical)', fontSize: 'var(--font-size-xs)', color: 'var(--color-steel)' }}>
              {header.coordinates}
            </div>
          </div>

          {/* Right Column: Technical Stats Block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)' }}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                style={{ 
                  borderLeft: '2px solid var(--color-copper)', 
                  paddingLeft: 'var(--space-24)', 
                  paddingTop: 'var(--space-8)',
                  paddingBottom: 'var(--space-8)' 
                }}
              >
                <div style={{ fontSize: 'var(--font-size-2xl)', fontFamily: 'var(--font-display)', color: 'var(--color-off-white)' }}>
                  {stat.metric}
                </div>
                <div style={{ fontFamily: 'var(--font-technical)', fontSize: 'var(--font-size-xs)', color: 'var(--color-copper-light)', textTransform: 'uppercase', marginTop: 'var(--space-4)' }}>
                  {stat.label}
                </div>
                <p style={{ color: 'var(--color-steel)', fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-4)' }}>
                  {stat.details}
                </p>
              </div>
            ))}
          </div>
        </Grid>
      </Container>
    </Section>
  );
};

export default Engineering;
