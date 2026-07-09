import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import styles from './Legal.module.css';

export const Terms: React.FC = () => {
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
          <h1 className={styles.title}>Terms & Conditions</h1>
          <span className={styles.lastUpdated}>LAST UPDATED: JULY 2026</span>

          <section className={styles.article}>
            <p className={styles.paragraph}>
              Welcome to TGB Enterprise. These Terms and Conditions (hereinafter referred to as
              "Terms" or "Agreement") constitute a legally binding contract between TGB Enterprise
              (hereinafter referred to as "the Company", "We", "Us", or "Our") and any person,
              corporate entity, or organization accessing our website or procuring our custom
              signage solutions (hereinafter referred to as "the Client", "User", "You", or "Your").
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>1. Introduction</h2>
            <p className={styles.paragraph}>
              TGB Enterprise is an industry-leading architectural identity systems manufacturer
              based in Ahmedabad, India. We design, engineer, fabricate, install, and maintain
              custom-built interior and exterior sign boards for commercial complexes, corporate
              offices, retail hubs, residential buildings, and public institutions.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>2. Acceptance of Terms</h2>
            <p className={styles.paragraph}>
              By browsing this Website (https://www.tgbsign.com), submitting inquiries through our
              quote portals, requesting consultations, placing orders, or signing our project
              milestone invoices, you explicitly accept, without limitation or qualification, all of
              the terms and conditions outlined in this Agreement. If you do not agree to these
              Terms, you must immediately terminate use of this Website and our services.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>3. Definitions</h2>
            <p className={styles.paragraph}>
              Unless the context requires otherwise, the following terms have specific meanings:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <strong>"Custom Signage"</strong> means any visual communication board, LED display,
                ACP panel, pylon monolith, neon structure, acrylic character, or metal letter
                fabricated to order.
              </li>
              <li className={styles.listItem}>
                <strong>"Blueprints"</strong> or <strong>"Artwork Approvals"</strong> refer to
                design drafts, technical CAD blueprints, structural configurations, and dimensional
                details approved by the Client before fabrication.
              </li>
              <li className={styles.listItem}>
                <strong>"Site Readiness"</strong> refers to the structural safety, clear physical
                access, societal/landlord authorization, and electrical connection clearance
                required at the installation location.
              </li>
            </ul>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>4. Company Information</h2>
            <p className={styles.paragraph}>
              TGB Enterprise operates as a proprietary signage manufacturing company. Our principal
              office and manufacturing facility are situated at Shop No. 7/1, First Floor, Shukan
              Shopping Centre, opp. Chanakya school, Sukan Cross Rd, New India Colony, Nikol,
              Ahmedabad, Gujarat 382345. All official business communications, notices, or formal
              claims must be sent to tgbsign@proton.me.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>5. Scope of Services</h2>
            <p className={styles.paragraph}>
              We provide professional signage services, which include:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>B2B and commercial signage design consultations.</li>
              <li className={styles.listItem}>
                Custom sheet metal fabrication, CNC routing, and acrylic laser profiling.
              </li>
              <li className={styles.listItem}>
                LED illumination, wiring, and transformer assembly.
              </li>
              <li className={styles.listItem}>
                Pylon sign structural foundation calculations and monostructural framing.
              </li>
              <li className={styles.listItem}>
                On-site signage mounting and architectural cladding installation.
              </li>
              <li className={styles.listItem}>
                Warranty management and technical maintenance diagnostics.
              </li>
            </ul>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>6. Website Use</h2>
            <p className={styles.paragraph}>
              This Website is provided as an informational portal to showcase our completed project
              portfolio, describe our core signage services, and allow clients to submit quote
              requests and warranty claims. You are granted a limited, non-exclusive,
              non-transferable, and revocable license to access this portal for business inquiry
              purposes.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>7. Eligibility</h2>
            <p className={styles.paragraph}>
              To request quotations or enter into commercial contracts with TGB Enterprise, you must
              be a legally competent individual or a validly registered corporate entity capable of
              executing binding business agreements under the Indian Contract Act, 1872. Minor
              individuals under 18 years of age are not eligible to request custom sign
              fabrications.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>8. Quotations</h2>
            <p className={styles.paragraph}>
              Any price estimation, bill of quantities (BOQ), or quotation provided by TGB
              Enterprise is valid for a period of exactly thirty (30) calendar days from the date of
              issue. Prices quoted are based on standard raw material costs (acrylic, sheet metal,
              aluminum, and LEDs) at the time of calculation and may vary if raw material rates
              fluctuate significantly.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>9. Pricing</h2>
            <p className={styles.paragraph}>
              All signage prices are calculated dynamically based on project height, width, material
              selections, and electrical load requirements. Standard prices displayed on our website
              represent baseline valuations and exclude taxes, delivery freight, crane rentals,
              specialized scaffolding, or emergency electrical revisions, which are invoiced
              separately.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>10. Design Services</h2>
            <p className={styles.paragraph}>
              Upon receiving a quote request, our graphics team provides digital layout previews,
              sizing specs, and material recommendations. Standard signage quotations include up to
              three (3) rounds of design revisions. Additional design iterations, complex CAD
              structural engineering stamps, or architectural wind-load certifications will be
              billed under a separate technical consultation rate.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>11. Artwork Approval</h2>
            <p className={styles.paragraph}>
              Before commencing CNC cutting or acrylic forming, the Client must review and return a
              signed, dated, or written electronic approval (email or chat sign-off) of the final
              technical drawings (artwork proofs). Once this approval is received, TGB Enterprise
              accepts no liability for layout errors, font/typographical mistakes, color matching
              variance, or sizing discrepancies.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>12. Manufacturing</h2>
            <p className={styles.paragraph}>
              Fabrication is conducted at our Nikol facility in Ahmedabad using calibrated CNC
              routers and laser profiles. Clients acknowledge that industrial fabrication involves
              standard manufacturing tolerances. Minor variations in material thicknesses (up to +/-
              5%), acrylic sheet color tones due to manufacturing batches, and dimensional
              tolerances (up to +/- 10mm) are standard and do not constitute defects.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>13. Production Timelines</h2>
            <p className={styles.paragraph}>
              Estimated manufacturing timelines commence only after (a) the advance deposit is
              cleared in our accounts, and (b) the Client provides written approval of all design
              proofs. Production timelines are estimations and may extend due to raw material supply
              constraints, manufacturing queue volumes, or power disruptions. Delays in production
              do not justify project cancellation or payment withholding.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>14. Delivery</h2>
            <p className={styles.paragraph}>
              TGB Enterprise arranges shipping of completed sign assemblies via third-party freight
              systems or company logistics. Risk of damage, structural warping, or loss of
              components transfers to the Client immediately upon delivery of the signs to the site
              address. Any claims for transit damage must be recorded and submitted in writing with
              photographic evidence within forty-eight (48) hours of receipt.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>15. Installation Services</h2>
            <p className={styles.paragraph}>
              If installation is included in the project scope, TGB Enterprise mounting crews will
              manage physical placement, anchor bolt setting, and facade alignment. The Client must
              provide a safe working environment. If scaffolding, specialized scissor lifts, or
              hydraulic cranes are required, the costs will be borne by the Client unless explicitly
              bundled in the final approved quote.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>16. Site Requirements</h2>
            <p className={styles.paragraph}>
              To facilitate a safe and complete installation, the mounting site must meet the
              following criteria:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Structural wall or concrete facade capable of holding the signage weight.
              </li>
              <li className={styles.listItem}>
                Safe, continuous electrical supply line (230V AC) terminated within 1.5 meters of
                the sign.
              </li>
              <li className={styles.listItem}>
                Unobstructed physical access for scaffolding or lift machinery.
              </li>
            </ul>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>17. Customer Responsibilities</h2>
            <p className={styles.paragraph}>
              The Client is responsible for securing all landlord permissions, commercial society
              authorizations, and municipal corporation signage licenses (e.g., from the Ahmedabad
              Municipal Corporation) required to install signs. TGB Enterprise is not responsible
              for legal issues, municipal fines, or structural removals resulting from the Client's
              failure to obtain legal clearances.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>18. Warranty</h2>
            <p className={styles.paragraph}>
              We stand behind our signage craftsmanship. Our standard product warranties cover:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                A 5-Year warranty on premium LED modules and Meanwell transformers (covering
                electrical burnout or dimming).
              </li>
              <li className={styles.listItem}>
                A 10-Year structural warranty on internal galvanized metal frames and
                sub-assemblies.
              </li>
              <li className={styles.listItem}>
                A 3-Year warranty on acrylic panels against extreme fading or cracking.
              </li>
            </ul>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>19. Warranty Limitations</h2>
            <p className={styles.paragraph}>
              All signage warranties are immediately voided under the following conditions:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Damage caused by abnormal main voltage surges, spikes, or erratic power supplies.
              </li>
              <li className={styles.listItem}>
                Vandalism, structural impacts, vehicular accidents, or general physical misuse.
              </li>
              <li className={styles.listItem}>
                Alterations, rewiring, or component replacements made by unauthorized third-party
                technicians.
              </li>
              <li className={styles.listItem}>
                Extreme natural occurrences, including lightning strikes, heavy cyclones, or
                structural building collapse.
              </li>
            </ul>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>20. Maintenance Services</h2>
            <p className={styles.paragraph}>
              While we engineer our signs to be low-maintenance, we offer optional annual
              maintenance contracts (AMC). Maintenance services cover wire inspections, structural
              anchor checking, LED light output tests, and dust removal. Standard repairs outside
              the AMC or warranty scope are subject to call-out charges and material costs.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>21. Cancellations</h2>
            <p className={styles.paragraph}>
              Because all signage solutions are highly customized in size, text, and materials,
              orders cannot be cancelled once manufacturing (laser cutting or sheet metal routing)
              has started. If the Client requests cancellation after design approval but before
              manufacturing, the Client forfeits the 50% advance deposit to cover design hours and
              raw material allocation.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>22. Refund Policy</h2>
            <p className={styles.paragraph}>
              Except as explicitly stated in these Terms, all payments made to TGB Enterprise are
              non-refundable. If a custom sign is verified to be defective upon delivery, our sole
              liability is to repair or replace the defective elements (acrylic face, LED modules,
              or frame) at no cost.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>23. Payment Terms</h2>
            <p className={styles.paragraph}>
              Standard B2B billing follows our milestone structure:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <strong>50% Advance Payment</strong> to initiate structural engineering drawings and
                raw material allocation.
              </li>
              <li className={styles.listItem}>
                <strong>30% Progress Payment</strong> upon completion of fabrication and prior to
                dispatch.
              </li>
              <li className={styles.listItem}>
                <strong>20% Final Payment</strong> immediately upon installation sign-off or
                delivery.
              </li>
            </ul>
            <p className={styles.paragraph}>
              Interest at the rate of 18% per annum will be charged on all outstanding balances not
              cleared within seven (7) business days of invoice presentation.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>24. Taxes</h2>
            <p className={styles.paragraph}>
              Unless explicitly specified otherwise, all prices quoted are exclusive of Goods and
              Services Tax (GST). Applicable GST (standard 18% for signage fabrication and
              installation in India) will be added to the invoices. The Client is responsible for
              providing their corporate GSTIN details before invoicing to claim input tax credits.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>25. Intellectual Property</h2>
            <p className={styles.paragraph}>
              All intellectual property rights associated with this Website, including layout
              design, graphics, custom icons, text copy, coding structures, and logo files, are
              owned exclusively by TGB Enterprise. You may not copy, scrape, modify, or republish
              any site assets without our explicit written permission.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>26. Customer Content</h2>
            <p className={styles.paragraph}>
              When you upload vector logos, branding assets, site photographs, or issue reports
              through our forms, you grant TGB Enterprise a non-exclusive, royalty-free, worldwide
              license to display, modify, and utilize these assets to design, manufacture, and
              install your signage systems.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>27. Acceptable Use</h2>
            <p className={styles.paragraph}>
              You agree to use this Website strictly for lawful business inquiries. When submitting
              information through our forms, you must provide accurate, current, and complete
              details. You must complete the Cloudflare Turnstile verification challenge in good
              faith without attempting automated bulk submissions.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>28. Prohibited Activities</h2>
            <p className={styles.paragraph}>
              Users are strictly prohibited from attempting to compromise our serverless functions,
              bypassing rate limiters, injecting malicious scripts via text area fields, uploading
              corrupted image payloads, or scraping our project galleries and service listings to
              create derivative databases.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>29. Third-Party Links</h2>
            <p className={styles.paragraph}>
              Our Website may contain links to social media networks, mapped portfolio sites, or
              component supplier databases. TGB Enterprise does not evaluate, endorse, or verify the
              content of external pages and accepts no liability for transactions or activities
              occurring on third-party domains.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>30. Limitation of Liability</h2>
            <p className={styles.paragraph}>
              To the maximum extent permitted by applicable law, TGB Enterprise's total cumulative
              liability for any claims, errors, damages, delays, or contract violations shall be
              strictly capped at the actual amount paid by the Client to the Company for the
              specific signage project under dispute. We are not liable for any indirect,
              incidental, or consequential losses, including lost revenue, storefront downtime, or
              brand damage.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>31. Disclaimer of Warranties</h2>
            <p className={styles.paragraph}>
              Except for the explicit product warranties described in Section 18, TGB Enterprise
              provides its products and installation services on an "as is" and "as available" basis
              without representations of any kind. We do not guarantee that the website or forms
              will be completely uninterrupted, secure, or free from server latency.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>32. Indemnification</h2>
            <p className={styles.paragraph}>
              The Client agrees to defend, indemnify, and hold harmless TGB Enterprise, its
              proprietor, fabricators, and contractors against any third-party claims, damages,
              municipal penalties, or legal fees resulting from (a) structural facade failures of
              the Client's building, (b) the Client's failure to secure municipal permissions, or
              (c) copyright disputes relating to logo files provided by the Client.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>33. Force Majeure</h2>
            <p className={styles.paragraph}>
              TGB Enterprise shall not be held liable or responsible for any failure to manufacture,
              deliver, or install signage systems resulting from events beyond our reasonable
              control. These include national steel supply shortages, lockdowns, acts of God, heavy
              cyclones, floods, extreme local monsoon delays, grid power failures, or transport
              strikes.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>34. Confidentiality</h2>
            <p className={styles.paragraph}>
              Both TGB Enterprise and the Client agree to maintain the strict confidentiality of all
              proprietary project information, engineering layouts, trade pricing details, and
              design parameters shared during negotiations or execution. Confidential parameters
              shall not be disclosed to competing signage builders.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>35. Privacy</h2>
            <p className={styles.paragraph}>
              Your privacy is extremely important to us. Any Personal Data submitted through our
              forms or collected automatically during website use is handled in accordance with our
              Privacy Policy. By agreeing to these Terms, you acknowledge and consent to the data
              practices described in our Privacy Policy.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>36. Governing Law</h2>
            <p className={styles.paragraph}>
              This Agreement, the relationship between TGB Enterprise and its Clients, and any
              orders placed through this Website shall be governed exclusively by the laws of India.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>37. Dispute Resolution</h2>
            <p className={styles.paragraph}>
              Any dispute, conflict, or claim arising out of our signage fabrication or installation
              services shall first be resolved through amicable mediation. If mediation fails, the
              dispute shall be referred to arbitration under the Arbitration and Conciliation Act,
              1996, with a single arbitrator appointed by TGB Enterprise. The venue of arbitration
              shall be Ahmedabad, Gujarat, India, and proceedings shall be held in English.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>38. Severability</h2>
            <p className={styles.paragraph}>
              If any provision of these Terms is determined by a court of competent jurisdiction to
              be invalid, illegal, or unenforceable, such provision shall be modified to the minimum
              extent necessary, and the remaining provisions of these Terms shall continue in full
              force and effect.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>39. Waiver</h2>
            <p className={styles.paragraph}>
              No waiver of any term or condition of this Agreement by TGB Enterprise shall be deemed
              a further or continuing waiver of such term or any other term, and any failure of the
              Company to assert a right under these Terms shall not constitute a waiver of that
              right.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>40. Assignment</h2>
            <p className={styles.paragraph}>
              The Client may not transfer, assign, or delegate their rights or obligations under
              these Terms or any active signage contracts without the prior written consent of TGB
              Enterprise. The Company reserves the right to delegate fabrication or installation
              duties to verified sub-contractors.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>41. Entire Agreement</h2>
            <p className={styles.paragraph}>
              These Terms, along with the approved project quotation and the Privacy Policy,
              constitute the entire, complete agreement between TGB Enterprise and the Client
              concerning the website and services, superseding all prior oral or written agreements.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>42. Changes to these Terms</h2>
            <p className={styles.paragraph}>
              We reserve the right to revise these Terms at our discretion. Any updates will be
              posted on this page, and the revision date at the top will be updated. Your continued
              use of our Website or services following any updates constitutes acceptance of the new
              Terms.
            </p>
          </section>

          <section className={styles.article}>
            <h2 className={styles.sectionHeading}>43. Contact Information</h2>
            <p className={styles.paragraph}>
              For any questions, notices of legal claims, or requests for clarifications concerning
              these Terms, please contact us at:
            </p>
            <p className={styles.paragraph}>
              <strong>TGB Enterprise</strong>
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

export default Terms;
