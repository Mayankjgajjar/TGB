import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import { trackWarrantyFormSubmit } from '../lib/analytics';
import { Link } from 'react-router-dom';
import styles from './Warranty.module.css';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Input from '../components/ui/Input';
import FileUpload from '../components/ui/FileUpload';

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
  signageType: '',
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
  if (!fields.warrantyNumber.trim()) errors.warrantyNumber = 'Warranty number is required.';
  if (!fields.purchaseDate.trim()) errors.purchaseDate = 'Purchase date is required.';
  if (!fields.signageType) errors.signageType = 'Please select a signage type.';

  if (!fields.issueDetails.trim()) {
    errors.issueDetails = 'Please provide details about the issue.';
  } else if (fields.issueDetails.trim().length < 10) {
    errors.issueDetails = 'Issue description must be at least 10 characters.';
  } else if (fields.issueDetails.trim().length > 2000) {
    errors.issueDetails = 'Issue description must be under 2000 characters.';
  }

  if (!fields.consent) {
    errors.consent = 'Consent is required to submit your claim.';
  }

  return errors;
};

export const Warranty: React.FC = () => {
  const [formState, setFormState] = useState<FormFields>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // File Upload State
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileBase64, setFileBase64] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
      const field = name as keyof FormFields;
      setFormState((prev) => ({ ...prev, [field]: val }));

      // Clear error as user corrects the field
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    },
    [errors],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const field = e.target.name as keyof FormFields;
      setTouched((prev) => ({ ...prev, [field]: true }));
      const fieldErrors = validateForm(formState);
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    },
    [formState],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSubmitError(null);

      if (fileError) {
        setSubmitError('Please resolve the file attachment error before submitting.');
        return;
      }

      const validationErrors = validateForm(formState);

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        const allTouched = Object.keys(formState).reduce(
          (acc, key) => ({ ...acc, [key]: true }),
          {} as Record<keyof FormFields, boolean>,
        );
        setTouched(allTouched);
        return;
      }

      setIsSubmitting(true);

      try {
        const response = await fetch('/api/warranty', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formState,
            imageFileName: selectedFile ? selectedFile.name : undefined,
            imageContent: fileBase64 || undefined,
            consentGiven: formState.consent,
            consentTimestamp: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          if (errorData.errors) {
            const clientErrors: FormErrors = {};
            Object.keys(errorData.errors).forEach((key) => {
              const clientKey = key === 'consentGiven' ? 'consent' : (key as keyof FormFields);
              clientErrors[clientKey] = errorData.errors[key];
            });
            setErrors(clientErrors);
            const touchedFields = Object.keys(clientErrors).reduce(
              (acc, key) => ({ ...acc, [key]: true }),
              {} as Record<string, boolean>,
            );
            setTouched((prev) => ({ ...prev, ...touchedFields }));
            const errorList = Object.values(clientErrors).filter(Boolean).join(' ');
            throw new Error(errorList || 'Please correct the validation errors below.');
          }
          throw new Error(
            errorData.error || errorData.message || 'Failed to submit warranty claim.',
          );
        }

        setIsSubmitted(true);
        setFormState(EMPTY_FORM);
        setSelectedFile(null);
        setFileBase64(null);
        setFileError(null);
        setErrors({});
        setTouched({});
        trackWarrantyFormSubmit();
      } catch (error: any) {
        console.error('Error submitting warranty form:', error);
        setSubmitError(
          error.message || 'We encountered an issue submitting your claim. Please try again.',
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [formState, fileError, selectedFile, fileBase64],
  );

  const handleReset = useCallback(() => {
    setIsSubmitted(false);
    setSubmitError(null);
    setSelectedFile(null);
    setFileBase64(null);
    setFileError(null);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className={styles.warrantyPage}
    >
      <Container>
        <div className={styles.contentWrapper}>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Warranty Support' }]} />

          <h1 className={styles.title}>Warranty Claim</h1>
          <span className={styles.subtitle}>Submit Warranty Request</span>

          {isSubmitted ? (
            <div className={styles.successMessage} role="status">
              <div className={styles.warrantyIcon}>✓</div>
              <h2 className={styles.successTitle}>Claim Submitted</h2>
              <p className={styles.successDesc}>
                Thank you for submitting your warranty claim. Our technical support team will review
                your request and the purchase records and contact you within 24–48 business hours.
              </p>
              <button onClick={handleReset} className={styles.resetButton}>
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.warrantyForm} noValidate>
              {/* Customer Name */}
              <Input
                label="Full Name"
                id="customerName"
                name="customerName"
                value={formState.customerName}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Enter your full name"
                required
                error={errors.customerName}
                touched={touched.customerName}
              />

              {/* Email & Phone Row */}
              <div className={styles.formRow}>
                <Input
                  label="Email Address"
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="name@company.com"
                  required
                  error={errors.email}
                  touched={touched.email}
                />
                <Input
                  label="Phone Number"
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="Enter phone number"
                  required
                  error={errors.phone}
                  touched={touched.phone}
                />
              </div>

              {/* Invoice Number & Warranty Number Row */}
              <div className={styles.formRow}>
                <Input
                  label="Invoice / Order Number"
                  id="invoiceNumber"
                  name="invoiceNumber"
                  value={formState.invoiceNumber}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="e.g. TGB-2025-1045"
                  required
                  error={errors.invoiceNumber}
                  touched={touched.invoiceNumber}
                />
                <Input
                  label="Warranty Number"
                  id="warrantyNumber"
                  name="warrantyNumber"
                  value={formState.warrantyNumber}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="e.g. WR-TGB-9874"
                  required
                  error={errors.warrantyNumber}
                  touched={touched.warrantyNumber}
                />
              </div>

              {/* Purchase Date & Signage Type Row */}
              <div className={styles.formRow}>
                <Input
                  label="Purchase Date"
                  id="purchaseDate"
                  name="purchaseDate"
                  type="date"
                  value={formState.purchaseDate}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                  error={errors.purchaseDate}
                  touched={touched.purchaseDate}
                />
                <Input
                  label="Type of Signage"
                  id="signageType"
                  name="signageType"
                  as="select"
                  value={formState.signageType}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                  error={errors.signageType}
                  touched={touched.signageType}
                  options={[
                    { value: '', label: 'Select signage type' },
                    { value: 'LED Sign Board', label: 'LED Sign Board' },
                    { value: 'ACP Sign Board', label: 'ACP Sign Board' },
                    { value: 'Acrylic & 3D Letters', label: 'Acrylic & 3D Letters' },
                    { value: 'Neon Signage', label: 'Neon Signage' },
                    { value: 'Corporate Signage', label: 'Corporate Signage' },
                    { value: 'Indoor/Outdoor Systems', label: 'Indoor & Outdoor Signage Systems' },
                    { value: 'Other', label: 'Other' },
                  ]}
                />
              </div>

              {/* Issue Details */}
              <Input
                label="Describe the Issue"
                id="issueDetails"
                name="issueDetails"
                as="textarea"
                rows={4}
                value={formState.issueDetails}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Please describe the issue with your signage in detail..."
                required
                error={errors.issueDetails}
                touched={touched.issueDetails}
              />

              {/* Proof of purchase or issue photo */}
              <FileUpload
                id="issuePhoto"
                label="Upload Photo of the Issue (Optional)"
                maxSizeMB={4}
                allowedExtensions={['.jpg', '.jpeg', '.png', '.webp', '.svg']}
                selectedFile={selectedFile}
                fileBase64={fileBase64}
                fileError={fileError}
                onFileSelect={(file, base64, error) => {
                  setSelectedFile(file);
                  setFileBase64(base64);
                  setFileError(error);
                }}
                accept="image/*"
              />

              {/* Consent Checkbox */}
              <div className={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formState.consent}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`${styles.checkboxInput} ${touched.consent && errors.consent ? styles.checkboxError : ''}`}
                  aria-invalid={touched.consent && !!errors.consent}
                  aria-describedby={errors.consent ? 'consent-error' : undefined}
                />
                <label htmlFor="consent" className={styles.checkboxLabel}>
                  I agree to TGB Enterprise collecting and using my information to respond to this
                  enquiry, in accordance with the <Link to="/privacy">Privacy Policy</Link>.
                </label>
              </div>
              {touched.consent && errors.consent && (
                <span
                  id="consent-error"
                  className={`${styles.fieldError} ${styles.fieldErrorConsent}`}
                  role="alert"
                >
                  {errors.consent}
                </span>
              )}

              {submitError && (
                <div
                  className={styles.errorBanner}
                  role="alert"
                  style={{ marginTop: '12px', marginBottom: '12px' }}
                >
                  {submitError}
                </div>
              )}

              <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
                {isSubmitting ? 'Submitting...' : 'Submit Claim'}
                {!isSubmitting && <span className={styles.submitArrow}>→</span>}
              </button>
            </form>
          )}
        </div>
      </Container>

      {/* Internal Navigation links at bottom */}
      <div className={styles.bottomSection}>
        <Link to="/" className={styles.bottomLink}>
          ← Back to Home
        </Link>
        <Link to="/contact" className={styles.bottomLink}>
          Contact Support
        </Link>
        <Link to="/privacy" className={styles.bottomLink}>
          Privacy Policy
        </Link>
      </div>
    </motion.div>
  );
};

export default Warranty;
