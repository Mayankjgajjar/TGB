import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import Turnstile from '../components/ui/Turnstile';
import { trackWarrantyFormSubmit } from '../lib/analytics';
import { Link } from 'react-router-dom';
import styles from './Warranty.module.css';
import Breadcrumbs from '../components/ui/Breadcrumbs';

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
  if (!fields.customerName.trim()) errors.customerName = 'Customer name is required.';

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
  if (!fields.issueDetails.trim()) errors.issueDetails = 'Please provide details about the issue.';

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
  const [turnstileToken, setTurnstileToken] = useState<string>('');

  // File Upload State
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileBase64, setFileBase64] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size limit (4MB)
    if (file.size > 4 * 1024 * 1024) {
      setFileError('File is too large. Please select an image under 4MB.');
      return;
    }

    // Check file type
    if (!file.type.startsWith('image/')) {
      setFileError('Invalid file type. Please upload an image file (JPG, PNG, WebP).');
      return;
    }

    setFileError(null);
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setFileBase64(reader.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleRemoveFile = useCallback(() => {
    setSelectedFile(null);
    setFileBase64(null);
    setFileError(null);
  }, []);

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

      if (!turnstileToken) {
        setSubmitError('Please complete the CAPTCHA verification.');
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
            imageFileName: selectedFile ? selectedFile.name : null,
            imageContent: fileBase64,
            turnstileToken,
            consentGiven: formState.consent,
            consentTimestamp: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || 'Failed to submit warranty claim.');
        }

        setIsSubmitted(true);
        setFormState(EMPTY_FORM);
        setSelectedFile(null);
        setFileBase64(null);
        setFileError(null);
        setTurnstileToken('');
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
    [formState, fileError, selectedFile, fileBase64, turnstileToken],
  );

  const handleReset = useCallback(() => {
    setIsSubmitted(false);
    setSubmitError(null);
    setSelectedFile(null);
    setFileBase64(null);
    setFileError(null);
    setTurnstileToken('');
  }, []);

  const inputClass = (field: keyof FormFields) =>
    `${styles.textInput} ${touched[field] && errors[field] ? styles.inputError : ''}`;

  const selectClass = () =>
    `${styles.selectInput} ${touched.signageType && errors.signageType ? styles.inputError : ''}`;

  const textareaClass = () =>
    `${styles.textareaInput} ${touched.issueDetails && errors.issueDetails ? styles.inputError : ''}`;

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
              <div className={styles.warrantyIcon}>
                ✓
              </div>
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
              {submitError && (
                <div className={styles.errorBanner} role="alert">
                  {submitError}
                </div>
              )}

              {/* Customer Name */}
              <div className={styles.inputGroup}>
                <label htmlFor="customerName" className={styles.fieldLabel}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  value={formState.customerName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="Enter your full name"
                  className={inputClass('customerName')}
                  aria-invalid={touched.customerName && !!errors.customerName}
                  aria-describedby={errors.customerName ? 'customerName-error' : undefined}
                />
                {touched.customerName && errors.customerName && (
                  <span id="customerName-error" className={styles.fieldError} role="alert">
                    {errors.customerName}
                  </span>
                )}
              </div>

              {/* Email & Phone Row */}
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.fieldLabel}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="name@company.com"
                    className={inputClass('email')}
                    aria-invalid={touched.email && !!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {touched.email && errors.email && (
                    <span id="email-error" className={styles.fieldError} role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="phone" className={styles.fieldLabel}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Enter phone number"
                    className={inputClass('phone')}
                    aria-invalid={touched.phone && !!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {touched.phone && errors.phone && (
                    <span id="phone-error" className={styles.fieldError} role="alert">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Invoice Number & Warranty Number Row */}
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="invoiceNumber" className={styles.fieldLabel}>
                    Invoice / Order Number *
                  </label>
                  <input
                    type="text"
                    id="invoiceNumber"
                    name="invoiceNumber"
                    value={formState.invoiceNumber}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="e.g. TGB-2025-1045"
                    className={inputClass('invoiceNumber')}
                    aria-invalid={touched.invoiceNumber && !!errors.invoiceNumber}
                    aria-describedby={errors.invoiceNumber ? 'invoiceNumber-error' : undefined}
                  />
                  {touched.invoiceNumber && errors.invoiceNumber && (
                    <span id="invoiceNumber-error" className={styles.fieldError} role="alert">
                      {errors.invoiceNumber}
                    </span>
                  )}
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="warrantyNumber" className={styles.fieldLabel}>
                    Warranty Number *
                  </label>
                  <input
                    type="text"
                    id="warrantyNumber"
                    name="warrantyNumber"
                    value={formState.warrantyNumber}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="e.g. WR-TGB-9874"
                    className={inputClass('warrantyNumber')}
                    aria-invalid={touched.warrantyNumber && !!errors.warrantyNumber}
                    aria-describedby={errors.warrantyNumber ? 'warrantyNumber-error' : undefined}
                  />
                  {touched.warrantyNumber && errors.warrantyNumber && (
                    <span id="warrantyNumber-error" className={styles.fieldError} role="alert">
                      {errors.warrantyNumber}
                    </span>
                  )}
                </div>
              </div>

              {/* Purchase Date & Signage Type Row */}
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="purchaseDate" className={styles.fieldLabel}>
                    Purchase Date *
                  </label>
                  <input
                    type="date"
                    id="purchaseDate"
                    name="purchaseDate"
                    value={formState.purchaseDate}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={inputClass('purchaseDate')}
                    aria-invalid={touched.purchaseDate && !!errors.purchaseDate}
                    aria-describedby={errors.purchaseDate ? 'purchaseDate-error' : undefined}
                  />
                  {touched.purchaseDate && errors.purchaseDate && (
                    <span id="purchaseDate-error" className={styles.fieldError} role="alert">
                      {errors.purchaseDate}
                    </span>
                  )}
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="signageType" className={styles.fieldLabel}>
                    Type of Signage *
                  </label>
                  <div className={styles.selectWrapper}>
                    <select
                      id="signageType"
                      name="signageType"
                      value={formState.signageType}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={selectClass()}
                      aria-invalid={touched.signageType && !!errors.signageType}
                      aria-describedby={errors.signageType ? 'signageType-error' : undefined}
                    >
                      <option value="">Select signage type</option>
                      <option value="LED Sign Board">LED Sign Board</option>
                      <option value="ACP Sign Board">ACP Sign Board</option>
                      <option value="Acrylic & 3D Letters">Acrylic & 3D Letters</option>
                      <option value="Neon Signage">Neon Signage</option>
                      <option value="Corporate Signage">Corporate Signage</option>
                      <option value="Indoor/Outdoor Systems">
                        Indoor & Outdoor Signage Systems
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  {touched.signageType && errors.signageType && (
                    <span id="signageType-error" className={styles.fieldError} role="alert">
                      {errors.signageType}
                    </span>
                  )}
                </div>
              </div>

              {/* Issue Details */}
              <div className={styles.inputGroup}>
                <label htmlFor="issueDetails" className={styles.fieldLabel}>
                  Describe the Issue *
                </label>
                <textarea
                  id="issueDetails"
                  name="issueDetails"
                  value={formState.issueDetails}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="Please describe the issue with your signage in detail..."
                  className={textareaClass()}
                  aria-invalid={touched.issueDetails && !!errors.issueDetails}
                  aria-describedby={errors.issueDetails ? 'issueDetails-error' : undefined}
                />
                {touched.issueDetails && errors.issueDetails && (
                  <span id="issueDetails-error" className={styles.fieldError} role="alert">
                    {errors.issueDetails}
                  </span>
                )}
              </div>

              {/* Proof of purchase or issue photo */}
              <div className={styles.fileInputGroup}>
                <label className={styles.fieldLabel} htmlFor="issuePhoto">
                  Upload Photo of the Issue (Optional)
                </label>
                {selectedFile ? (
                  <div className={styles.previewContainer}>
                    {fileBase64 && (
                      <img
                        src={fileBase64}
                        alt="Preview of issue"
                        className={styles.previewImage}
                        loading="lazy"
                      />
                    )}
                    <div className={styles.previewInfo}>
                      <span className={styles.previewName}>{selectedFile.name}</span>
                      <span className={styles.previewSize}>
                        {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className={styles.removeFileBtn}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className={styles.fileInputWrapper}>
                    <div className={styles.uploadIcon}>↑</div>
                    <span className={styles.uploadText}>Select or drag a photo here</span>
                    <span className={styles.uploadLimit}>Max file size: 4MB (JPG, PNG, WebP)</span>
                    <input
                      id="issuePhoto"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className={styles.hiddenFileInput}
                    />
                  </div>
                )}
                {fileError && (
                  <span className={styles.fieldError} role="alert">
                    {fileError}
                  </span>
                )}
              </div>

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

              {/* Turnstile Captcha */}
              <Turnstile onVerify={setTurnstileToken} />

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
