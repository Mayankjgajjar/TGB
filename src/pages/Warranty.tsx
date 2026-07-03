import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import styles from './Warranty.module.css';

interface FormFields {
  customerName: string;
  email: string;
  phone: string;
  invoiceNumber: string;
  purchaseDate: string;
  signageType: string;
  issueDetails: string;
}

type FormErrors = Partial<Record<keyof FormFields, string>>;

const EMPTY_FORM: FormFields = {
  customerName: '',
  email: '',
  phone: '',
  invoiceNumber: '',
  purchaseDate: '',
  signageType: '',
  issueDetails: '',
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
  if (!fields.purchaseDate.trim()) errors.purchaseDate = 'Purchase date is required.';
  if (!fields.signageType) errors.signageType = 'Please select a signage type.';
  if (!fields.issueDetails.trim()) errors.issueDetails = 'Please provide details about the issue.';
  
  return errors;
};

export const Warranty: React.FC = () => {
  const [formState, setFormState] = useState<FormFields>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      const field = name as keyof FormFields;
      setFormState((prev) => ({ ...prev, [field]: value }));
      
      // Clear error as user corrects the field
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    },
    [errors]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const field = e.target.name as keyof FormFields;
      setTouched((prev) => ({ ...prev, [field]: true }));
      const fieldErrors = validateForm(formState);
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    },
    [formState]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSubmitError(null);
      const validationErrors = validateForm(formState);

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        const allTouched = Object.keys(formState).reduce(
          (acc, key) => ({ ...acc, [key]: true }),
          {} as Record<keyof FormFields, boolean>
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
          body: JSON.stringify(formState),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || 'Failed to submit warranty claim.');
        }

        setIsSubmitted(true);
        setFormState(EMPTY_FORM);
        setErrors({});
        setTouched({});
      } catch (error: any) {
        console.error('Error submitting warranty form:', error);
        setSubmitError(error.message || 'We encountered an issue submitting your claim. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    },
    [formState]
  );

  const handleReset = useCallback(() => {
    setIsSubmitted(false);
    setSubmitError(null);
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
          <h1 className={styles.title}>Warranty Claim</h1>
          <span className={styles.subtitle}>Submit Warranty Request</span>

          {isSubmitted ? (
            <div className={styles.successMessage}>
              <div style={{ color: 'var(--color-copper)', fontSize: '48px', marginBottom: '8px' }}>✓</div>
              <h2 className={styles.successTitle}>Claim Submitted</h2>
              <p className={styles.successDesc}>
                Thank you for submitting your warranty claim. Our technical support team will review your request and the purchase records and contact you within 24–48 business hours.
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
                <label htmlFor="customerName" className={styles.fieldLabel}>Full Name *</label>
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
                  <label htmlFor="email" className={styles.fieldLabel}>Email Address *</label>
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
                  <label htmlFor="phone" className={styles.fieldLabel}>Phone Number *</label>
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

              {/* Invoice Number & Purchase Date Row */}
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="invoiceNumber" className={styles.fieldLabel}>Invoice / Order Number *</label>
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
                  <label htmlFor="purchaseDate" className={styles.fieldLabel}>Purchase Date *</label>
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
              </div>

              {/* Signage Type */}
              <div className={styles.inputGroup}>
                <label htmlFor="signageType" className={styles.fieldLabel}>Type of Signage *</label>
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
                    <option value="Indoor/Outdoor Systems">Indoor & Outdoor Signage Systems</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {touched.signageType && errors.signageType && (
                  <span id="signageType-error" className={styles.fieldError} role="alert">
                    {errors.signageType}
                  </span>
                )}
              </div>

              {/* Issue Details */}
              <div className={styles.inputGroup}>
                <label htmlFor="issueDetails" className={styles.fieldLabel}>Describe the Issue *</label>
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

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Claim'}
                {!isSubmitting && <span className={styles.submitArrow}>→</span>}
              </button>
            </form>
          )}
        </div>
      </Container>
    </motion.div>
  );
};

export default Warranty;
