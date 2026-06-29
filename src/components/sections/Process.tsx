import React from 'react';
import { homeContent } from '../../content/home';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import Label from '../ui/Label';
import Grid from '../ui/Grid';

export const Process: React.FC = () => {
  const { header, stages } = homeContent.process;

  return (
    <Section id="process" dividerBottom spacing="large">
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

        {/* Process Stages Grid */}
        <Grid cols={4} gap="large">
          {stages.map((stage, index) => (
            <div 
              key={index} 
              style={{ 
                borderTop: '1px solid var(--color-steel-dark)', 
                paddingTop: 'var(--space-24)', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 'var(--space-16)' 
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-technical)', fontSize: 'var(--font-size-xs)', color: 'var(--color-copper)' }}>
                  {stage.step}
                </span>
                <span style={{ fontFamily: 'var(--font-technical)', fontSize: '11px', color: 'var(--color-steel)' }}>
                  {stage.duration}
                </span>
              </div>
              <Heading level={3} style={{ fontSize: 'var(--font-size-md)', fontFamily: 'var(--font-primary)', fontWeight: '500' }}>
                {stage.title}
              </Heading>
              <p style={{ color: 'var(--color-off-white-muted)', fontSize: 'var(--font-size-sm)', flexGrow: 1 }}>
                {stage.description}
              </p>
              <div style={{ marginTop: 'var(--space-8)' }}>
                <span style={{ fontFamily: 'var(--font-technical)', fontSize: '10px', color: 'var(--color-steel)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Deliverables:
                </span>
                <ul style={{ marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {stage.deliverables.map((item, dIndex) => (
                    <li key={dIndex} style={{ fontSize: '11px', color: 'var(--color-steel)' }}>
                      • {item}
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

export default Process;
