import React, { useState } from 'react';
import { homeContent } from '../../content/home';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import Label from '../ui/Label';
import Grid from '../ui/Grid';

export const QuoteBuilder: React.FC = () => {
  const { header, steps } = homeContent.quoteBuilder;
  const [selections, setSelections] = useState<Record<string, string>>({
    material: 'copper',
    scale: 'ground',
    illumination: 'none',
  });

  const handleSelect = (stepId: string, value: string) => {
    setSelections((prev) => ({
      ...prev,
      [stepId]: value,
    }));
  };

  return (
    <Section id="quotebuilder" dividerBottom spacing="large">
      <Container>
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-48)', display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
          <div>
            <Label showMarker style={{ marginBottom: 'var(--space-12)' }}>{header.label}</Label>
            <Heading level={2}>{header.title}</Heading>
          </div>
          <span style={{ fontFamily: 'var(--font-technical)', fontSize: 'var(--font-size-xs)', color: 'var(--color-steel)' }}>
            {header.coordinates}
          </span>
        </div>

        {/* Steps Grid */}
        <Grid cols={3} gap="large">
          {steps.map((step) => (
            <div 
              key={step.id} 
              style={{ 
                border: '1px solid var(--color-steel-dark)', 
                padding: 'var(--space-24)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-16)'
              }}
            >
              <div>
                <Heading level={3} style={{ fontSize: 'var(--font-size-md)' }}>{step.title}</Heading>
                <p style={{ color: 'var(--color-off-white-muted)', fontSize: '12px', marginTop: '4px' }}>
                  {step.description}
                </p>
              </div>

              {/* Step Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
                {step.options.map((opt) => {
                  const isSelected = selections[step.id] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => handleSelect(step.id, opt.value)}
                      style={{
                        textAlign: 'left',
                        padding: 'var(--space-12)',
                        border: `1px solid ${isSelected ? 'var(--color-copper)' : 'var(--color-steel-dark)'}`,
                        backgroundColor: isSelected ? 'rgba(196, 131, 90, 0.05)' : 'transparent',
                        color: isSelected ? 'var(--color-copper-light)' : 'var(--color-off-white-muted)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div style={{ fontWeight: 500, fontSize: '13px' }}>{opt.label}</div>
                      {opt.description && (
                        <div style={{ fontSize: '10px', color: 'var(--color-steel)', marginTop: '2px' }}>
                          {opt.description}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </Grid>

        {/* Summary Spec Sheet Output */}
        <div 
          style={{ 
            marginTop: 'var(--space-48)', 
            border: '1px dashed var(--color-steel-dark)', 
            padding: 'var(--space-32)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-12)'
          }}
        >
          <div style={{ fontFamily: 'var(--font-technical)', fontSize: 'var(--font-size-xs)', color: 'var(--color-steel)' }}>
            [ SYSTEM CONFIGURATION SPECIFICATION SHEET ]
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-32)', fontFamily: 'var(--font-technical)', fontSize: 'var(--font-size-sm)' }}>
            <div>
              <span style={{ color: 'var(--color-steel)' }}>ALLOY:</span>{' '}
              <span style={{ color: 'var(--color-off-white)' }}>{selections.material.toUpperCase()}</span>
            </div>
            <div>
              <span style={{ color: 'var(--color-steel)' }}>SCOPE:</span>{' '}
              <span style={{ color: 'var(--color-off-white)' }}>{selections.scale.toUpperCase()}</span>
            </div>
            <div>
              <span style={{ color: 'var(--color-steel)' }}>ILLUMINATION:</span>{' '}
              <span style={{ color: 'var(--color-off-white)' }}>{selections.illumination.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default QuoteBuilder;
