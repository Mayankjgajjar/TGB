import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import SectionEyebrow from '../components/ui/SectionEyebrow';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Input from '../components/ui/Input';
import FileUpload from '../components/ui/FileUpload';
import ContactCTA from '../components/sections/ContactCTA';
import { trackWarrantyFormSubmit } from '../lib/analytics';
import styles from './Warranty.module.css';

interface FormFields {
  customerName: string;
  email: string;
  phone: string;
  invoiceNumber: string;
  warrantyNumber: string;
  purchaseDate: string;
  signageType: string;
  issueDetails: string;
  consent: boolean;
}

type FormErrors = Partial<Record<keyof FormFields, string>>;

const EMPTY_FORM: FormFields = {
  customerName: '',
  email: '',
  phone: '',
  invoiceNumber: '',
  warrantyNumber: '',
  purchaseDate: '',
  signageType: 'LED Sign Board',
  issueDetails: '',
  consent: false,
};

const validateForm = (fields: FormFields): FormErrors => {
  const errors: FormErrors = {};
  if (!fields.customerName.trim()) {
    errors.customerName = 'Customer name is required.';
  } else if (fields.customerName.trim().length < 2) {
    errors.customerName = 'Full name must be at least 2 characters.';
  }

  if (!fields.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(fields.phone)) {
    errors.phone = 'Invalid phone number format.';
  }

  if (!fields.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Invalid email address.';
  }

  if (!fields.invoiceNumber.trim()) errors.invoiceNumber = 'Invoice / Order number is required.';
  if (!fields.warrantyNumber.trim())
    errors.warrantyNumber = 'Warranty certificate number is required.';
  if (!fields.purchaseDate.trim()) errors.purchaseDate = 'Purchase date is required.';
  if (!fields.signageType) errors.signageType = 'Please select a signage type.';

  if (!fields.issueDetails.trim()) {
    errors.issueDetails = 'Please provide details about the issue.';
  } else if (fields.issueDetails.trim().length < 10) {
    errors.issueDetails = 'Issue description must be at least 10 characters.';
  }

  if (!fields.consent) {
    errors.consent = 'Consent is required to submit your claim.';
  }

  return errors;
};

export const Warranty: React.FC = () => {
  const [formState, setFormState] = useState<FormFields>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFieldChange = useCallback(
    (field: keyof FormFields) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const val =
          e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
        setFormState((prev) => ({ ...prev, [field]: val }));
        if (errors[field]) {
          setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
      },
    [errors],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formState);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      trackWarrantyFormSubmit({
        signageType: formState.signageType,
        hasAttachment: false,
      });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSuccess(true);
      setFormState(EMPTY_FORM);
    } catch {
      setErrors({ customerName: 'Submission failed. Please call our direct helpline.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className={styles.page}
    >
      {/* 1. Page Header */}
      <section className={styles.heroSection}>
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Warranty Claim' }]} />

          <div className={styles.heroContent}>
            <SectionEyebrow>OFFICIAL AFTER-SALES SUPPORT</SectionEyebrow>
            <h1 className={styles.heroTitle}>Warranty Registration &amp; Claim Portal</h1>
            <p className={styles.heroDesc}>
              TGB Enterprise stands behind every fabricated installation. Submit your warranty
              certificate details below for rapid on-site inspection and OEM component replacements.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Main Form & Support Grid */}
      <section className={styles.formSection}>
        <Container>
          <div className={styles.grid}>
            {/* Left Column: Form or Success */}
            {isSuccess ? (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>
                  <CheckCircle2 size={36} />
                </div>
                <h2 className={styles.successTitle}>Warranty Claim Logged</h2>
                <p className={styles.successText}>
                  Your claim has been assigned to our Nikol factory engineering desk. An engineer
                  will contact you within 24 business hours to schedule an on-site inspection.
                </p>
                <button onClick={() => setIsSuccess(false)} className={styles.submitBtn}>
                  Submit Another Claim
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.warrantyForm} noValidate>
                <div className={styles.formRow}>
                  <Input
                    label="Customer / Company Name"
                    name="customerName"
                    value={formState.customerName}
                    onChange={handleFieldChange('customerName')}
                    error={errors.customerName}
                    placeholder="e.g. Acme Corp / Rahul Patel"
                    required
                  />
                  <Input
                    label="Contact Phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleFieldChange('phone')}
                    error={errors.phone}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>

                <div className={styles.formRow}>
                  <Input
                    label="Official Email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleFieldChange('email')}
                    error={errors.email}
                    placeholder="name@company.com"
                    required
                  />
                  <Input
                    label="Invoice / Order Number"
                    name="invoiceNumber"
                    value={formState.invoiceNumber}
                    onChange={handleFieldChange('invoiceNumber')}
                    error={errors.invoiceNumber}
                    placeholder="e.g. TGB-2024-889"
                    required
                  />
                </div>

                <div className={styles.formRow}>
                  <Input
                    label="Warranty Certificate No."
                    name="warrantyNumber"
                    value={formState.warrantyNumber}
                    onChange={handleFieldChange('warrantyNumber')}
                    error={errors.warrantyNumber}
                    placeholder="e.g. WRT-9982"
                    required
                  />
                  <Input
                    label="Installation / Purchase Date"
                    name="purchaseDate"
                    type="date"
                    value={formState.purchaseDate}
                    onChange={handleFieldChange('purchaseDate')}
                    error={errors.purchaseDate}
                    required
                  />
                </div>

                <Input
                  label="Signage Product Type"
                  name="signageType"
                  type="select"
                  value={formState.signageType}
                  onChange={handleFieldChange('signageType')}
                  error={errors.signageType}
                  options={[
                    { value: 'LED Sign Board', label: '3D LED Glow Sign Board' },
                    { value: 'ACP Facade', label: 'ACP Cladding & Elevation' },
                    {
                      value: 'Stainless Steel Letters',
                      label: 'Stainless Steel (SS 304/316) Letters',
                    },
                    { value: 'Acrylic 3D Letters', label: 'Laser-Cut Acrylic Letters' },
                    { value: 'Neon Sign Board', label: 'Custom Neon Flex Sign' },
                    { value: 'Pylon Totem', label: 'Pylon / Monolith Highway Sign' },
                    { value: 'Wayfinding Sign', label: 'Wayfinding & Reception Sign' },
                  ]}
                  required
                />

                <Input
                  label="Nature of Issue / Defect Description"
                  name="issueDetails"
                  type="textarea"
                  value={formState.issueDetails}
                  onChange={handleFieldChange('issueDetails')}
                  error={errors.issueDetails}
                  placeholder="Describe the issue (e.g. LED section unlit, power supply flickering, facade panel alignment)..."
                  required
                />

                <FileUpload
                  label="Upload Photos of Signboard / Issue (Optional)"
                  accept="image/*,.pdf"
                  onFileSelect={() => {}}
                />

                <div className={styles.consentRow}>
                  <input
                    type="checkbox"
                    id="consentCheck"
                    checked={formState.consent}
                    onChange={handleFieldChange('consent')}
                    className={styles.checkbox}
                  />
                  <label htmlFor="consentCheck" className={styles.consentLabel}>
                    I confirm that the signage installation has not been modified by unauthorized
                    third-party electricians.
                  </label>
                </div>
                {errors.consent && (
                  <span style={{ color: 'var(--color-error)', fontSize: '11.5px' }}>
                    {errors.consent}
                  </span>
                )}

                <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                  {isSubmitting ? 'Verifying Certificate...' : 'Submit Warranty Claim →'}
                </button>
              </form>
            )}

            {/* Right Column: Warranty Coverage Policy */}
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Warranty Policy &amp; SLA</h3>
              <ul className={styles.coverageList}>
                <li className={styles.coverageItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>
                    <strong>Samsung LED Modules:</strong> 3 to 5 Years Replacement Warranty on
                    lumens degradation and diode failures.
                  </span>
                </li>
                <li className={styles.coverageItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>
                    <strong>Meanwell SMPS Drivers:</strong> 2 to 3 Years Immediate Swapping
                    Guarantee on voltage trip issues.
                  </span>
                </li>
                <li className={styles.coverageItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>
                    <strong>SS 304 / 316 Titanium Finishes:</strong> Anti-rust and anti-corrosion
                    structural warranty.
                  </span>
                </li>
                <li className={styles.coverageItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>
                    <strong>PVDF ACP Coating:</strong> 10-Year UV resistance and color stability
                    standard.
                  </span>
                </li>
              </ul>

              <div className={styles.directSupportBox}>
                <span className={styles.supportLabel}>Direct Emergency Factory Line:</span>
                <a href="tel:+919727136137" className={styles.supportPhone}>
                  +91 97271 36137
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </motion.div>
  );
};

export default Warranty;
