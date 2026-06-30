import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import styles from './Legal.module.css';

export const Terms: React.FC = () => {
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
          <h1 className={styles.title}>Terms & Conditions</h1>
          <span className={styles.lastUpdated}>LAST UPDATED: OCTOBER 2025</span>

          <section className={styles.article}>
            <p className={styles.paragraph}>
              Welcome to TGB Enterprise. These Terms and Conditions govern your relationship with TGB Enterprise, including our custom design consultation, fabrication, and signage installation services. By requesting a quotation, placing an order, or browsing our website, you agree to comply with and be bound by these terms.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>1. Scope of Services</h2>
            <p className={styles.paragraph}>
              TGB Enterprise manufactures and installs customized indoor and outdoor signage systems (including LED sign boards, ACP panels, 3D acrylic letters, stainless steel channel signs, and custom neon boards). The exact scope, specifications, dimensions, and materials of each signage project are defined strictly by the final approved quotation and invoice.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>2. Design Approvals & Proofs</h2>
            <p className={styles.paragraph}>
              Before we begin fabrication, clients must review and provide formal written approval (via email or message) for the design proof, technical drawing, and dimensions worksheet. TGB Enterprise is not liable for structural errors, typographic mistakes, color discrepancies, or layout issues once the proof is signed off and sent to the manufacturing plant.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>3. Payment Milestones</h2>
            <p className={styles.paragraph}>
              Unless explicitly agreed otherwise in writing, our standard billing terms require:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                An advance deposit of 50% of the total project value to initiate structural design and material procurement.
              </li>
              <li className={styles.listItem}>
                An additional milestone payment of 30% upon completion of fabrication and before dispatch from our Ahmedabad facility.
              </li>
              <li className={styles.listItem}>
                The final remaining balance of 20% immediately upon installation check-off or delivery.
              </li>
            </ul>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>4. Site Readiness & Installation</h2>
            <p className={styles.paragraph}>
              For projects including installation services, the client is responsible for ensuring that the installation site is ready and safe. This includes:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Obtaining all necessary local municipal, society, or landlord permissions.</li>
              <li className={styles.listItem}>Providing active, secure electrical power supply lines near the mounting site.</li>
              <li className={styles.listItem}>Ensuring smooth structural access for our installation technicians and machinery.</li>
            </ul>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>5. Warranty & Liability</h2>
            <p className={styles.paragraph}>
              We offer material guarantees on LEDs, acrylics, and structural frameworks as specified in your quote profile. This warranty does not cover damages caused by extreme environmental disasters, vandalism, electrical voltage spikes, or unauthorized structural modifications made by third-party contractors.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>6. Governing Law</h2>
            <p className={styles.paragraph}>
              These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with our signage manufacturing or installation services shall be subject to the exclusive jurisdiction of the courts located in Ahmedabad, Gujarat, India.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>7. Updates to Terms</h2>
            <p className={styles.paragraph}>
              TGB Enterprise reserves the right to modify these Terms and Conditions at any time. Any changes will be posted directly on this page with the updated date at the top. We encourage clients to review this page periodically.
            </p>
          </section>
        </div>
      </Container>
    </motion.div>
  );
};

export default Terms;
