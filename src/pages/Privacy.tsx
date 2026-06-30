import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import styles from './Legal.module.css';

export const Privacy: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className={styles.legalPage}
    >
      <Container>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <span className={styles.lastUpdated}>LAST UPDATED: OCTOBER 2025</span>

          <section className={styles.article}>
            <p className={styles.paragraph}>
              At TGB Enterprise, we are committed to protecting the privacy and security of our clients, partners, and website visitors. This Privacy Policy details how we collect, use, and safeguard your personal information when you interact with our services and website.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>1. Information We Collect</h2>
            <p className={styles.paragraph}>
              We collect information to provide better services to all our clients. The types of personal information we collect include:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <strong>Personal Identity Details:</strong> Name, company name, design designation, and business details.
              </li>
              <li className={styles.listItem}>
                <strong>Contact Information:</strong> Email address, phone number, physical address, and project location details.
              </li>
              <li className={styles.listItem}>
                <strong>Project Specifications:</strong> Dimensions, materials preference, technical drawings, site photos, and other details provided during the consultation.
              </li>
              <li className={styles.listItem}>
                <strong>Technical & Usage Data:</strong> IP address, browser type, device information, and interaction details when visiting our website.
              </li>
            </ul>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>2. How We Use Your Information</h2>
            <p className={styles.paragraph}>
              The information we collect is used to design, manufacture, and install signage solutions tailored for your business. Specifically, we use your data to:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Process quote requests and manage consultation bookings.</li>
              <li className={styles.listItem}>Design and manufacture custom indoor and outdoor signage systems.</li>
              <li className={styles.listItem}>Coordinate on-site installations and provide technical after-sales support.</li>
              <li className={styles.listItem}>Communicate project updates, invoices, and design files.</li>
              <li className={styles.listItem}>Improve our website interface, visual assets, and customer experience.</li>
            </ul>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>3. Data Security & Storage</h2>
            <p className={styles.paragraph}>
              We implement strict technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Access to your project specifications and contact details is restricted to TGB Enterprise personnel who need it to fulfill design, manufacturing, or installation duties.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>4. Information Sharing</h2>
            <p className={styles.paragraph}>
              We do not sell, trade, or rent your personal information to third parties. We may share project data only with verified shipping partners and installation teams solely as required to deliver and install your signage systems.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>5. Your Rights</h2>
            <p className={styles.paragraph}>
              You have the right to request access to the personal data we hold about you, request corrections to incorrect data, or request the deletion of your customer record from our systems. To exercise these rights, please contact our support team.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>6. Contact Us</h2>
            <p className={styles.paragraph}>
              If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:
            </p>
            <p className={styles.paragraph}>
              <strong>TGB Enterprise</strong><br />
              Shop No. 7/1, First Floor, Shukan Shopping Centre, opp. Chanakya school, Sukan Cross Rd, New India Colony, Nikol, Ahmedabad, Gujarat 382345<br />
              Email: tgbenterprise@proton.me<br />
              Phone: +91 97271 36137
            </p>
          </section>
        </div>
      </Container>
    </motion.div>
  );
};

export default Privacy;
