import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import { projectsContent } from '../content/projects';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Label from '../components/ui/Label';
import Grid from '../components/ui/Grid';

export const Projects: React.FC = () => {
  const { header, items } = projectsContent;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
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

      <Section spacing="large">
        <Container>
          <Grid cols={3} gap="large">
            {items.map((project) => (
              <div 
                key={project.id} 
                style={{ 
                  border: '1px solid var(--color-steel-dark)', 
                  display: 'flex', 
                  flexDirection: 'column',
                  background: 'var(--color-charcoal-surface)' 
                }}
              >
                {/* Photo Placeholder */}
                <div 
                  style={{ 
                    height: '280px', 
                    backgroundColor: 'var(--color-charcoal-deep)', 
                    borderBottom: '1px solid var(--color-steel-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-steel)',
                    fontFamily: 'var(--font-technical)',
                    fontSize: 'var(--font-size-xs)'
                  }}
                >
                  [ PHOTOGRAPHY: {project.name.toUpperCase()} ]
                </div>

                {/* Details */}
                <div style={{ padding: 'var(--space-32)', display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--font-size-xs)' }}>
                    <span style={{ fontFamily: 'var(--font-technical)', color: 'var(--color-steel)' }}>
                      {project.location.toUpperCase()}
                    </span>
                    <span style={{ fontFamily: 'var(--font-technical)', color: 'var(--color-copper)' }}>
                      {project.year}
                    </span>
                  </div>
                  
                  <Heading level={3}>{project.name}</Heading>
                  <p style={{ color: 'var(--color-off-white-muted)', fontSize: 'var(--font-size-sm)', flexGrow: 1 }}>
                    {project.description}
                  </p>

                  <div style={{ borderTop: '1px solid var(--color-steel-dark)', paddingTop: 'var(--space-16)', marginTop: 'var(--space-8)' }}>
                    <span style={{ fontFamily: 'var(--font-technical)', fontSize: '10px', color: 'var(--color-steel)' }}>
                      DIMENSIONS: {project.dimensions.height} x {project.dimensions.width}
                    </span>
                    <div style={{ fontFamily: 'var(--font-technical)', fontSize: '10px', color: 'var(--color-copper)', marginTop: '4px' }}>
                      ENGINEERING: {project.engineeringHighlight}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>
    </motion.div>
  );
};

export default Projects;
