import React from 'react';
import { homeContent } from '../../content/home';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import Label from '../ui/Label';
import Button from '../ui/Button';

export const ContactCTA: React.FC = () => {
  const { label, title, description, actionLabel } = homeContent.contactCta;

  return (
    <Section id="contact-cta" spacing="large">
      <Container>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)', maxWidth: '700px' }}>
          <Label showMarker color="copper">{label}</Label>
          <Heading level={2}>{title}</Heading>
          <p style={{ color: 'var(--color-off-white-muted)', fontSize: 'var(--font-size-md)', lineHeight: 'var(--line-height-normal)' }}>
            {description}
          </p>
          <div style={{ marginTop: 'var(--space-12)' }}>
            <Button variant="primary" to="/contact" showTechnicalDot>
              {actionLabel}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactCTA;
