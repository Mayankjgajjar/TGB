import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import { EASE_EXPO } from '../../animations/variants';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './ContactInfoPanel.module.css';

const contactItems = [
  {
    Icon: MapPin,
    label: 'Workshop Address',
    value: (
      <>
        Shop No. 7/1, First Floor, Shukan Shopping Centre,<br />
        Opp. Chanakya School, Sukan Cross Rd,<br />
        New India Colony, Nikol,<br />
        Ahmedabad, Gujarat 382345
      </>
    ),
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: (
      <a href="tel:+919727136137" className={styles.infoLink}>
        +91 97271 36137
      </a>
    ),
  },
  {
    Icon: Mail,
    label: 'Email',
    value: (
      <a href="mailto:tgbsign@proton.me" className={styles.infoLink}>
        tgbsign@proton.me
      </a>
    ),
  },
  {
    Icon: MessageCircle,
    label: 'WhatsApp',
    value: (
      <a
        href="https://wa.me/919727136137?text=Hi%20TGB%20Enterprise!%20I%27d%20like%20to%20know%20more%20about%20your%20signage%20services."
        target="_blank"
        rel="noopener noreferrer"
        className={styles.infoLink}
      >
        Chat on WhatsApp →
      </a>
    ),
  },
  {
    Icon: Clock,
    label: 'Business Hours',
    value: (
      <>
        Monday – Saturday: 9:30 AM – 7:00 PM IST<br />
        Sunday: By appointment only
      </>
    ),
  },
];

const serviceAreas = [
  'Ahmedabad', 'Nikol', 'Surat', 'Rajkot', 'Vadodara',
  'Gandhi Nagar', 'Mumbai', 'Bengaluru', 'Delhi', 'Hyderabad',
  'Pune', 'Jaipur', 'Pan-India Delivery',
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_EXPO } },
};

export const ContactInfoPanel: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={styles.section} aria-label="Contact Information">
      <div className={styles.inner}>
        {/* Header */}
        <motion.div
          className={styles.header}
          variants={container}
          initial="hidden"
          animate={isRevealed ? 'visible' : 'hidden'}
        >
          <motion.p variants={fadeUp} className={styles.eyebrow}>
            Reach Us
          </motion.p>
          <motion.h2 variants={fadeUp} className={styles.heading}>
            Talk to Our Signage Experts.
          </motion.h2>
          <motion.p variants={fadeUp} className={styles.subheading}>
            Visit our fabrication workshop in Nikol, Ahmedabad, or reach us through any of the channels below. Our team responds within one business day.
          </motion.p>
        </motion.div>

        {/* 2-Column Grid: Info + Map */}
        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          animate={isRevealed ? 'visible' : 'hidden'}
        >
          {/* Left: Contact Details */}
          <div className={styles.infoList}>
            {contactItems.map(({ Icon, label, value }, i) => (
              <motion.div key={i} className={styles.infoCard} variants={fadeUp}>
                <div className={styles.iconWrapper}>
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>{label}</span>
                  <div className={styles.infoValue}>{value}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Map */}
          <motion.div className={styles.mapCol} variants={fadeUp}>
            <div className={styles.mapWrapper}>
              <iframe
                title="TGB Enterprise Workshop Location — Nikol, Ahmedabad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2543259097!2d72.66637!3d23.04582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87b2a0e0dd95%3A0x4f6c69d63c53b10!2sNikol%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className={styles.mapNote}>
              Shukan Shopping Centre, Nikol, Ahmedabad — 382345
            </p>
          </motion.div>
        </motion.div>

        {/* Service Areas */}
        <motion.div
          className={styles.serviceAreas}
          variants={container}
          initial="hidden"
          animate={isRevealed ? 'visible' : 'hidden'}
        >
          <motion.span variants={fadeUp} className={styles.areasLabel}>
            Service Areas
          </motion.span>
          <motion.div variants={fadeUp} className={styles.areasGrid}>
            {serviceAreas.map((area) => (
              <span key={area} className={styles.areaChip}>{area}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfoPanel;
