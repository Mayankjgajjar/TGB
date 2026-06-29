import React from 'react';
import { projectsContent } from '../../content/projects';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import Label from '../ui/Label';
import Grid from '../ui/Grid';
import Button from '../ui/Button';

export const Projects: React.FC = () => {
  const { header, items } = projectsContent;

  return (
    <Section id="projects" dividerBottom spacing="large">
      <Container>
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-64)', display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
          <div>
            <Label showMarker style={{ marginBottom: 'var(--space-12)' }}>{header.label}</Label>
            <Heading level={2}>{header.title}</Heading>
            <p style={{ color: 'var(--color-off-white-muted)', fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-8)', maxWidth: '500px' }}>
              {header.subtitle}
            </p>
          </div>
          <Button variant="secondary" to="/projects" showTechnicalDot>
            View Full Archive
          </Button>
        </div>

        {/* Selected Projects Grid */}
        <Grid cols={3} gap="large">
          {items.slice(0, 3).map((project) => (
            <div 
              key={project.id} 
              style={{ 
                border: '1px solid var(--color-steel-dark)', 
                display: 'flex', 
                flexDirection: 'column',
                background: 'var(--color-charcoal-surface)' 
              }}
            >
              {/* Photo Box Placeholder */}
              <div 
                style={{ 
                  height: '240px', 
                  backgroundColor: 'var(--color-charcoal-deep)', 
                  borderBottom: '1px solid var(--color-steel-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-steel)',
                  fontFamily: 'var(--font-technical)',
                  fontSize: 'var(--font-size-xs)',
                  position: 'relative'
                }}
              >
                [ PHOTOGRAPHY: {project.name.toUpperCase()} ]
                <div style={{ position: 'absolute', bottom: 'var(--space-12)', left: 'var(--space-16)', fontSize: '10px', color: 'var(--color-steel)' }}>
                  SCALE: {project.dimensions.height}
                </div>
              </div>

              {/* Text Area */}
              <div style={{ padding: 'var(--space-24)', display: 'flex', flexDirection: 'column', gap: 'var(--space-12)', flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--font-size-xs)' }}>
                  <span style={{ fontFamily: 'var(--font-technical)', color: 'var(--color-steel)' }}>
                    {project.location.toUpperCase()}
                  </span>
                  <span style={{ fontFamily: 'var(--font-technical)', color: 'var(--color-copper)' }}>
                    {project.year}
                  </span>
                </div>
                <Heading level={3} style={{ fontSize: 'var(--font-size-md)' }}>{project.name}</Heading>
                <p style={{ color: 'var(--color-off-white-muted)', fontSize: 'var(--font-size-xs)', flexGrow: 1 }}>
                  {project.description}
                </p>
                <div style={{ borderTop: '1px solid var(--color-steel-dark)', paddingTop: 'var(--space-12)', marginTop: 'var(--space-8)' }}>
                  <span style={{ fontFamily: 'var(--font-technical)', fontSize: '9px', color: 'var(--color-steel)' }}>
                    SPEC: {project.materials.join(' / ').toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Projects;
