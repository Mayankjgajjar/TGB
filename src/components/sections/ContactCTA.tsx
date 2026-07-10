import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, Mail, Clock, MapPin, Building, Globe } from 'lucide-react';
import { EASE_EXPO } from '../../animations/variants';
import styles from './ContactCTA.module.css';
import SectionEyebrow from '../ui/SectionEyebrow';
import { trackContactFormSubmit } from '../../lib/analytics';
import { captureError } from '../../lib/telemetry';
import { getEnvVar } from '../../lib/env';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../ui/Breadcrumbs';

// ── Types ──────────────────────────────────────────────────────────────────

interface FormFields {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
  location: string;
  signageType: string;
  message: string;
  consent: boolean;
}

type FormErrors = Partial<Record<keyof FormFields, string>>;

// ── Validation ─────────────────────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s\-().]{7,19}$/;

function validateForm(fields: FormFields): FormErrors {
  const errors: FormErrors = {};

  if (!fields.firstName.trim()) {
    errors.firstName = 'First name is required.';
  } else if (fields.firstName.trim().length < 2) {
    errors.firstName = 'Must be at least 2 characters.';
  }

  if (!fields.lastName.trim()) {
    errors.lastName = 'Last name is required.';
  }

  if (!fields.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!PHONE_RE.test(fields.phone.trim())) {
    errors.phone = 'Enter a valid phone number.';
  }

  if (!fields.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!EMAIL_RE.test(fields.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  if (!fields.consent) {
    errors.consent = 'Consent is required to submit your enquiry.';
  }

  return errors;
}

const EMPTY_FORM: FormFields = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  company: '',
  location: '',
  signageType: '',
  message: '',
  consent: false,
};

// ── Component ──────────────────────────────────────────────────────────────

import useScrollReveal from '../../hooks/useScrollReveal';

export const ContactCTA: React.FC<{
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  breadcrumbs?: { label: string; to?: string }[];
}> = ({ eyebrow, title, subtitle, breadcrumbs }) => {
  const [formState, setFormState] = useState<FormFields>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSubmitted && successRef.current) {
      successRef.current.focus();
    }
  }, [isSubmitted]);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { ref, isRevealed, shouldReduceMotion } = useScrollReveal();

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
      // Validate only the blurred field for a responsive UX
      const fieldErrors = validateForm(formState);
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    },
    [formState],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSubmitError(null);
      const validationErrors = validateForm(formState);

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        // Mark all fields as touched so errors are visible
        const allTouched = Object.keys(formState).reduce(
          (acc, key) => ({ ...acc, [key]: true }),
          {} as Record<keyof FormFields, boolean>,
        );
        setTouched(allTouched);
        return;
      }

      setIsSubmitting(true);

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: formState.firstName,
            lastName: formState.lastName,
            phone: formState.phone,
            email: formState.email,
            company: formState.company,
            location: formState.location,
            signage: formState.signageType,
            message: formState.message,
            consentGiven: formState.consent,
            consentTimestamp: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || 'Failed to submit inquiry.');
        }

        setIsSubmitted(true);
        setFormState(EMPTY_FORM);
        setErrors({});
        setTouched({});
        trackContactFormSubmit();
      } catch (error: any) {
        console.error('Error submitting contact form:', error);
        captureError(error, { context: 'ContactCTA' });
        setSubmitError(
          error.message || 'We encountered an issue submitting your inquiry. Please try again.',
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [formState],
  );

  const handleReset = useCallback(() => {
    setIsSubmitted(false);
    setSubmitError(null);
  }, []);

  /** Helper to get input className with error state */
  const inputClass = (field: keyof FormFields) =>
    `${styles.textInput} ${touched[field] && errors[field] ? styles.inputError : ''}`;

  const headerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={ref} className={styles.section} id="contact">
      <div className={styles.container}>
        {/* ── Center Header Section ── */}
        <motion.div
          className={styles.sectionHeader}
          initial="hidden"
          animate={isRevealed ? 'visible' : 'hidden'}
          variants={headerVariants}
        >
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          <SectionEyebrow>{eyebrow || 'GET IN TOUCH'}</SectionEyebrow>
          <h2 className={styles.title}>
            {title || "Let's Create Signage That Defines Your Brand"}
          </h2>
          <p className={styles.subheading}>
            {subtitle ||
              "Whether you're launching a new business, rebranding a storefront, or developing a commercial space, TGB Enterprise is ready to transform your vision into a signage solution that leaves a lasting impression."}
          </p>
        </motion.div>

        {/* ── Two-Column Layout ── */}
        <div className={styles.splitGrid}>
          {/* ── Left Column: Contact Form ── */}
          <div className={styles.formColumn}>
            <p className={styles.formIntro}>
              Tell us about your project, ask a question, or request a consultation. Our team will
              get back to you as soon as possible.
            </p>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  ref={successRef}
                  className={styles.successMessage}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: EASE_EXPO }}
                  tabIndex={-1}
                  role="status"
                >
                  <h3 className={styles.successTitle}>Thank You</h3>
                  <p className={styles.successDesc}>
                    Your project inquiry has been received. One of our design engineers will contact
                    you shortly to schedule your consultation.
                  </p>
                  <button onClick={handleReset} className={styles.resetButton}>
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className={styles.contactForm}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  noValidate
                >
                  {/* Name Row */}
                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="firstName" className={styles.fieldLabel}>
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        autoComplete="given-name"
                        value={formState.firstName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="John"
                        className={inputClass('firstName')}
                        aria-invalid={touched.firstName && !!errors.firstName}
                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                      />
                      {touched.firstName && errors.firstName && (
                        <span id="firstName-error" className={styles.fieldError} role="alert">
                          {errors.firstName}
                        </span>
                      )}
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="lastName" className={styles.fieldLabel}>
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        autoComplete="family-name"
                        value={formState.lastName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Doe"
                        className={inputClass('lastName')}
                        aria-invalid={touched.lastName && !!errors.lastName}
                        aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                      />
                      {touched.lastName && errors.lastName && (
                        <span id="lastName-error" className={styles.fieldError} role="alert">
                          {errors.lastName}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Contact Info Row */}
                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="phone" className={styles.fieldLabel}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        value={formState.phone}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="+91 XXXXX XXXXX"
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
                    <div className={styles.inputGroup}>
                      <label htmlFor="email" className={styles.fieldLabel}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
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
                  </div>

                  {/* Company & Location Row */}
                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="company" className={styles.fieldLabel}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        autoComplete="organization"
                        value={formState.company}
                        onChange={handleInputChange}
                        placeholder="Enter company name"
                        className={styles.textInput}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="location" className={styles.fieldLabel}>
                        Project Location
                      </label>
                      <div className={styles.selectWrapper}>
                        <select
                          id="location"
                          name="location"
                          value={formState.location}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          className={styles.selectInput}
                        >
                          <option value="">Select project location</option>
                          <option value="Ahmedabad">Ahmedabad</option>
                          <option value="Surat">Surat</option>
                          <option value="Rajkot">Rajkot</option>
                          <option value="Vadodara">Vadodara</option>
                          <option value="Gandhinagar">Gandhinagar</option>
                          <option value="Mumbai">Mumbai</option>
                          <option value="Bengaluru">Bengaluru</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Other">Other (Gujarat &amp; Pan India)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Signage Type Select */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="signageType" className={styles.fieldLabel}>
                      Type of Signage
                    </label>
                    <div className={styles.selectWrapper}>
                      <select
                        id="signageType"
                        name="signageType"
                        value={formState.signageType}
                        onChange={handleInputChange}
                        className={styles.selectInput}
                      >
                        <option value="" disabled>
                          Select type of signage
                        </option>
                        <option value="led">LED Sign Boards</option>
                        <option value="acp">ACP Sign Boards</option>
                        <option value="acrylic">Acrylic &amp; 3D Letter Signages</option>
                        <option value="corporate">Corporate Signages</option>
                        <option value="neon">Neon Signages</option>
                        <option value="wayfinding">Wayfinding Signages</option>
                        <option value="retail">Retail Signages</option>
                        <option value="custom">Custom Signages</option>
                        <option value="not-sure">Not Sure Yet</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="message" className={styles.fieldLabel}>
                      Tell Us About Your Project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="Please share your requirements, project location, timeline, or any specific ideas you have in mind."
                      className={styles.textareaInput}
                    />
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
                      I agree to TGB Enterprise collecting and using my information to respond to
                      this enquiry, in accordance with the <Link to="/privacy">Privacy Policy</Link>
                      .
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
                    <div className={styles.formErrorBanner} role="alert">
                      {submitError}
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.submitButton}
                    aria-busy={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Request A Consultation'}</span>
                    <ArrowRight size={16} className={styles.submitArrow} />
                  </button>

                  {/* Phone direct line info */}
                  <div className={styles.phoneDirectLine}>
                    <span>Prefer to talk directly?</span>
                    <a href="tel:+919727136137" className={styles.phoneLink}>
                      Call us at +91 97271 36137
                    </a>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* ── Right Column: Visit Our Studio & Details ── */}
          <div className={styles.detailsColumn}>
            <div className={styles.studioHeader}>
              <h3 className={styles.studioTitle}>Visit Our Studio</h3>
              <p className={styles.studioSubtitle}>
                Proudly serving Ahmedabad and businesses across Gujarat and India.
              </p>
            </div>

            {/* Google Map */}
            <a
              href="https://maps.app.goo.gl/Uo3hdVGb74ZTquZ69"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLinkWrapper}
            >
              <div className={styles.mapContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.1895780518337!2d72.6602252758999!3d23.051224279153063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87dcf5fc5ced%3A0x7f67e11554da7d1c!2sTGB%20ENTERPRISE!5e0!3m2!1sen!2sin!4v1720512345678!5m2!1sen!2sin"
                  title="TGB Enterprise Ahmedabad Studio Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className={styles.mapIframe}
                />
                <div className={styles.mapOverlay} />
              </div>
            </a>

            {/* Studio Info Details */}
            <div className={styles.infoDetailsList}>
              <div className={styles.infoItem}>
                <div className={styles.infoIconWrapper}>
                  <Building size={18} strokeWidth={2} />
                </div>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>Office &amp; Studio</span>
                  <span className={styles.infoValue}>TGB Enterprise</span>
                  <a
                    href="https://maps.app.goo.gl/Uo3hdVGb74ZTquZ69"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.infoLink}
                  >
                    Shop No. 7/1, First Floor, Shukan Shopping Centre,
                    <br />
                    opp. Chanakya school, Sukan Cross Rd,
                    <br />
                    New India Colony, Nikol,
                    <br />
                    Ahmedabad, Gujarat 382345
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIconWrapper}>
                  <Phone size={18} strokeWidth={2} />
                </div>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>Phone Inquiry Desk</span>
                  <a href="tel:+919727136137" className={styles.infoLink}>
                    +91 97271 36137
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIconWrapper}>
                  <Mail size={18} strokeWidth={2} />
                </div>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>Email Communications</span>
                  <a
                    href={`mailto:${getEnvVar('VITE_CONTACT_EMAIL', 'info@tgbenterprise.com')}`}
                    className={styles.infoLink}
                  >
                    {getEnvVar('VITE_CONTACT_EMAIL', 'info@tgbenterprise.com')}
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIconWrapper}>
                  <Clock size={18} strokeWidth={2} />
                </div>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>Business Hours</span>
                  <span className={styles.infoValue}>Monday – Saturday</span>
                  <span className={styles.infoSubValue}>9:30 AM – 7:00 PM</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIconWrapper}>
                  <Globe size={18} strokeWidth={2} />
                </div>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>Service Area Coverage</span>
                  <span className={styles.infoValue}>
                    Proudly serving Ahmedabad and businesses across Gujarat and India.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Signature ── */}
        <div className={styles.brandSignature}>
          <span className={styles.signatureHeadline}>Built to be Seen.</span>
          <p className={styles.signatureSub}>Let's build something remarkable together.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
