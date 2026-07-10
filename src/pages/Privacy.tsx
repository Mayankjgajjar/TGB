import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import styles from './Legal.module.css';

export const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <div className={styles.linkRow}>
            <Link to="/" className={styles.link}>
              ← Back to Home
            </Link>
            <Link to="/#contact" className={styles.link}>
              Contact Us
            </Link>
          </div>
          <h1 className={styles.title}>Privacy Policy</h1>
          <span className={styles.lastUpdated}>LAST UPDATED: JULY 2026</span>

          <section className={styles.article}>
            <p className={styles.paragraph}>
              Welcome to the TGB Enterprise Privacy Policy. TGB Enterprise (hereinafter referred to
              as "the Company", "We", "Us", or "Our") is dedicated to protecting the privacy,
              confidentiality, and security of our clients, business partners, and website visitors.
              This Privacy Policy details how we collect, store, handle, and process personal and
              business data through our website (https://www.tgbsign.com) and associated operations.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>1. Introduction</h2>
            <p className={styles.paragraph}>
              This document serves as our corporate commitment to data privacy. As a premium signage
              design, fabrication, and installation enterprise, TGB Enterprise processes client
              personal details and project specifications to engineer corporate identity landmarks.
              We process data strictly in compliance with applicable law, including India's Digital
              Personal Data Protection Act, 2023 (DPDP Act) and international data protection
              standards where appropriate.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>2. Interpretation</h2>
            <p className={styles.paragraph}>
              In this Privacy Policy, capitalized terms have specific meanings defined under Section
              3. Singular terms include the plural and vice versa. Reference to "applicable law"
              means any legislation, rules, regulations, or notifications concerning data
              protection, online privacy, or cybersecurity in force in India or any territory where
              we provide signage fabrication and installation services.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>3. Definitions</h2>
            <p className={styles.paragraph}>For the purposes of this Privacy Policy:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <strong>"Data Principal"</strong> or <strong>"User"</strong> refers to any
                individual whose personal data is collected or processed by the website or our
                corporate systems.
              </li>
              <li className={styles.listItem}>
                <strong>"Personal Data"</strong> means any data about an individual who is
                identifiable by or in relation to such data.
              </li>
              <li className={styles.listItem}>
                <strong>"Data Fiduciary"</strong> refers to TGB Enterprise, which determines the
                purpose and means of processing personal data.
              </li>
              <li className={styles.listItem}>
                <strong>"Website"</strong> refers to the online presence of TGB Enterprise,
                accessible at https://www.tgbsign.com.
              </li>
              <li className={styles.listItem}>
                <strong>"Consent"</strong> means the free, specific, informed, unconditional, and
                unambiguous agreement provided by a Data Principal for the processing of their
                Personal Data.
              </li>
            </ul>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>4. Company Information</h2>
            <p className={styles.paragraph}>
              TGB Enterprise is an architectural identity systems manufacturer based in Ahmedabad,
              Gujarat, India. Our physical workshop and administrative headquarters are located at
              Shop No. 7/1, First Floor, Shukan Shopping Centre, opp. Chanakya school, Sukan Cross
              Rd, New India Colony, Nikol, Ahmedabad, Gujarat 382345. For privacy or data protection
              inquiries, we can be reached via email at tgbsign@proton.me or by phone at +91 97271
              36137.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>5. Scope of this Policy</h2>
            <p className={styles.paragraph}>
              This Privacy Policy applies to all Personal Data and project information processed via
              the website forms (Contact and Warranty Claim), email requests, telephone
              consultations, site inspections, and follow-up project coordination. It does not apply
              to any third-party links, external websites, or platforms that we do not own or
              control.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>6. Information We Collect</h2>
            <p className={styles.paragraph}>
              We collect information to provide customized signage design, fabrication, and mounting
              services. The categories of information processed include:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <strong>Personal Identity Details:</strong> First name and last name provided during
                inquiry or claim requests.
              </li>
              <li className={styles.listItem}>
                <strong>Contact Information:</strong> Phone number and email address utilized for
                sending design proofs, estimations, and project scheduling.
              </li>
              <li className={styles.listItem}>
                <strong>Business Information:</strong> Company name and commercial designation where
                applicable.
              </li>
              <li className={styles.listItem}>
                <strong>Technical Information:</strong> IP addresses and system connection
                parameters recorded by our security, rate-limiting, and analytics components.
              </li>
              <li className={styles.listItem}>
                <strong>Device &amp; Usage Information:</strong> Operating system, browser client
                information, and path navigation records.
              </li>
              <li className={styles.listItem}>
                <strong>Project Specifications:</strong> Dimensions, material preferences,
                architectural blueprints, installation locations, and custom descriptions provided
                by the client.
              </li>
              <li className={styles.listItem}>
                <strong>Uploaded Files:</strong> Site photos and signage status images uploaded via
                the Warranty Claim portal.
              </li>
              <li className={styles.listItem}>
                <strong>Warranty Information:</strong> Purchase date, invoice numbers, and warranty
                certificates associated with our signage products.
              </li>
            </ul>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>7. Information Collected Automatically</h2>
            <p className={styles.paragraph}>
              When you browse our website, our server logs and analytics packages automatically
              record certain technical metrics. This data is collected to verify user activity,
              prevent automated spam submissions, implement IP-based rate limiting, and optimize
              frontend loading times. This automatically collected information does not identify you
              by name and is used purely for performance and security monitoring.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>8. Cookies &amp; Similar Technologies</h2>
            <p className={styles.paragraph}>
              We use essential, analytical, and performance cookies to improve user experience.
              Essential cookies are required to process form submissions and verify browser tokens.
              Performance cookies help us understand which signage pages receive traffic. You can
              configure your browser to reject all cookies, but doing so may impact certain
              functionalities of the website, such as form submission.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>9. Analytics</h2>
            <p className={styles.paragraph}>
              Our website integrates Google Analytics 4 (GA4) to track user interaction, page
              routing flow, and device statistics. GA4 records anonymized site navigation data,
              which helps our marketing team evaluate which services (such as LED sign boards, ACP
              cladding, or neon signs) generate interest. We do not link analytics profiles with any
              personally identifiable information submitted through our forms.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>10. Third-Party Services</h2>
            <p className={styles.paragraph}>
              We partner with selected third-party service providers to handle specialized
              operations. Our integration list consists of:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <strong>Resend Email Platform:</strong> Utilized on our serverless backend to
                process contact leads and warranty submissions and deliver email notifications and
                customer auto-replies.
              </li>
              <li className={styles.listItem}>
                <strong>Sentry Runtime Monitoring:</strong> Utilized to log frontend runtime errors
                and debug application crashes, ensuring cross-browser loading stability.
              </li>
            </ul>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>11. How We Use Personal Information</h2>
            <p className={styles.paragraph}>
              We process your Personal Data strictly to achieve the specific, designated purposes
              for which consent is collected:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Calculating cost estimations and custom signage quotations.
              </li>
              <li className={styles.listItem}>
                Drafting architectural proofs, CAD templates, and blueprints for client review.
              </li>
              <li className={styles.listItem}>
                Scheduling site structural surveys and safety inspections at the project site.
              </li>
              <li className={styles.listItem}>
                Managing manufacturing queues, CNC routing, and assembly operations in Ahmedabad.
              </li>
              <li className={styles.listItem}>
                Coordinating dispatch logistics and physical installation scheduling.
              </li>
              <li className={styles.listItem}>
                Processing product warranty claims and dispatching technician support teams.
              </li>
              <li className={styles.listItem}>
                Sending project milestone updates, design revisions, and billing receipts.
              </li>
            </ul>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>12. Legal Basis for Processing</h2>
            <p className={styles.paragraph}>
              Under the Digital Personal Data Protection Act, 2023 (DPDP Act), we process personal
              information based on:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <strong>Specific Consent:</strong> The opt-in checkbox that you explicitly mark
                before sending inquiries or warranty claims.
              </li>
              <li className={styles.listItem}>
                <strong>Contractual Obligations:</strong> Processing necessary to fulfill our custom
                design, manufacturing, and installation contract agreements.
              </li>
              <li className={styles.listItem}>
                <strong>Legitimate Uses:</strong> Processing required for corporate security,
                rate-limiting, and legal claims defense.
              </li>
            </ul>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>13. Marketing Communications</h2>
            <p className={styles.paragraph}>
              TGB Enterprise does not share or sell your contact databases to third-party
              telemarketers. We may occasionally send project portfolio highlights, warranty update
              notifications, or technical guides directly from our official email address. You can
              choose to opt out of marketing communications at any time by replying with the keyword
              "UNSUBSCRIBE" or contacting our support team.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>14. Information Sharing</h2>
            <p className={styles.paragraph}>
              We do not sell, rent, or trade your personal information. Your details are shared only
              with the following trusted entities to complete project milestones:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <strong>Logistics Partners:</strong> Freight and shipping teams carrying structural
                signs from Nikol, Ahmedabad to your site.
              </li>
              <li className={styles.listItem}>
                <strong>Installation Crews:</strong> Partnered mounting teams who coordinate on-site
                anchor drilling and wiring.
              </li>
              <li className={styles.listItem}>
                <strong>Legal Authorities:</strong> Where required by law to comply with tax
                regulations, audits, or legal mandates.
              </li>
            </ul>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>15. International Data Transfers</h2>
            <p className={styles.paragraph}>
              Our cloud servers are managed on Vercel and Resend's global infrastructures. By
              submitting information through this website, your data may be processed in secure data
              centers located outside of India. We implement standard contractual safeguards to
              ensure that all data is handled in compliance with India's DPDP Act and international
              data security standards.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>16. Data Security</h2>
            <p className={styles.paragraph}>
              We maintain strict technical safeguards to secure your personal data. All connection
              paths are encrypted via HTTPS (Hypertext Transfer Protocol Secure). Form submissions
              are validated on both the client side and the serverless backend using strict schemas.
              We restrict access to your design plans and contact details exclusively to authorized
              TGB Enterprise employees involved in your signage design and assembly.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>17. Data Retention</h2>
            <p className={styles.paragraph}>
              We retain customer contact records, invoices, design blueprints, and warranty claims
              for the entire duration of the signage product lifecycle (typically up to 10–15 years)
              to fulfill our long-term structural warranties and product maintenance guarantees.
              Once this period expires or upon a valid deletion request, data is securely scrubbed
              from our systems.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>18. Children's Privacy</h2>
            <p className={styles.paragraph}>
              TGB Enterprise provides signage fabrication and B2B facade engineering services. We do
              not intentionally collect, verify, or target personal data from children under the age
              of 18. If we identify that a minor has submitted personal information through our
              quote forms, we will take immediate steps to delete those records from our databases.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>19. Your Rights</h2>
            <p className={styles.paragraph}>
              Under the Digital Personal Data Protection Act, 2023, you hold the following rights:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                The right to access a summary of Personal Data being processed.
              </li>
              <li className={styles.listItem}>
                The right to correct or update inaccurate personal data.
              </li>
              <li className={styles.listItem}>
                The right to withdraw consent for data processing at any time.
              </li>
              <li className={styles.listItem}>The right to request deletion of your records.</li>
              <li className={styles.listItem}>
                The right to register a grievance regarding any data discrepancy.
              </li>
            </ul>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>20. Withdrawal of Consent</h2>
            <p className={styles.paragraph}>
              You have the right to withdraw your consent to data processing at any time. To
              withdraw consent, please email us at tgbsign@proton.me. Once we receive your request,
              we will cease processing your personal information within 7 business days, except
              where processing is required to complete an active project contract or comply with
              legal requirements.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>21. Data Access Requests</h2>
            <p className={styles.paragraph}>
              You may submit a Data Access Request to receive a summary of all Personal Data that
              TGB Enterprise holds about you. Access requests must be submitted in writing to our
              official email address. We will verify your identity before releasing any data, and
              complete the request within 30 days of receiving your message.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>22. Data Correction</h2>
            <p className={styles.paragraph}>
              If your contact information, phone numbers, or design designation change, you have the
              right to request immediate correction. TGB Enterprise will review and update the
              records in our databases and coordinate with any logistics partners who may be relying
              on your contact information.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>23. Data Deletion</h2>
            <p className={styles.paragraph}>
              You may request that we delete all your Personal Data from our servers. Once verified,
              we will remove your email address, phone numbers, and company details. Please note
              that requesting data deletion will void any active structural or electrical
              warranties, as we will no longer have records to verify your signage purchase.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>24. Third-Party Links</h2>
            <p className={styles.paragraph}>
              Our website may contain links to external sites (such as project portfolios on Google
              Maps, social media profiles, or supplier galleries). We do not control these
              third-party platforms. We encourage you to review the privacy policies of any external
              website you visit, as we accept no liability for their data practices.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>25. External Services</h2>
            <p className={styles.paragraph}>
              For external services, we partner with selected providers under their own privacy
              terms. We do not transfer your form fields (such as name or email) to unauthorized
              third parties.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>26. Automated Decision Making</h2>
            <p className={styles.paragraph}>
              TGB Enterprise does not utilize automated decision-making or AI-driven profiling
              systems to evaluate client requests or process warranty claims. All design
              consultations, site surveys, and claims reviews are evaluated manually by our
              engineering team.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>27. Business Transfers</h2>
            <p className={styles.paragraph}>
              In the event that TGB Enterprise undergoes a corporate restructuring, merger, or asset
              sale, customer databases and project blueprint files will likely be transferred to the
              acquiring business entity. Any transferee will be bound to respect your data under the
              terms of this Privacy Policy.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>28. Changes to this Policy</h2>
            <p className={styles.paragraph}>
              We reserve the right to modify this Privacy Policy at any time to reflect updates in
              our website features, fabrication services, or privacy laws. Any modifications will be
              posted directly on this page with the updated date at the top. We encourage you to
              review this page periodically to stay informed about how we protect your personal
              information.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>29. Governing Law</h2>
            <p className={styles.paragraph}>
              This Privacy Policy and all disputes arising from data processing are governed
              exclusively by the laws of India. Any legal actions or proceedings must be initiated
              in courts of competent jurisdiction located in Ahmedabad, Gujarat, India.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>30. Contact Information</h2>
            <p className={styles.paragraph}>
              For access requests, data corrections, withdrawal of consent, or general privacy
              inquiries, please contact our designated Grievance Officer:
            </p>
            <p className={styles.paragraph}>
              <strong>Attention: Grievance Officer (Data Protection)</strong>
              <br />
              TGB Enterprise
              <br />
              Shop No. 7/1, First Floor, Shukan Shopping Centre, opp. Chanakya school, Sukan Cross
              Rd, New India Colony, Nikol, Ahmedabad, Gujarat 382345
              <br />
              Email: tgbsign@proton.me
              <br />
              Phone: +91 97271 36137
            </p>
          </section>
        </div>
      </Container>
    </motion.div>
  );
};

export default Privacy;
