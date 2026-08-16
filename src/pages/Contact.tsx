import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import SectionEyebrow from '../components/ui/SectionEyebrow';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Input from '../components/ui/Input';
import FileUpload from '../components/ui/FileUpload';
import FAQ from '../components/sections/FAQ';
import { trackContactFormSubmit } from '../lib/analytics';
import { getEnvVar } from '../lib/env';
import styles from './Contact.module.css';

interface ContactFormFields {
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

type FormErrors = Partial<Record<keyof ContactFormFields, string>>;

const EMPTY_FORM: ContactFormFields = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  company: '',
  location: '',
  signageType: 'LED 3D Glow Sign Boards',
  message: '',
  consent: false,
};

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<ContactFormFields>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFieldChange = useCallback(
    (field: keyof ContactFormFields) =>
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

    const newErrors: FormErrors = {};
    if (!formState.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!formState.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formState.email.trim()) newErrors.email = 'Email address is required.';
    if (!formState.message.trim()) newErrors.message = 'Please provide details about your project.';
    if (!formState.consent) newErrors.consent = 'Consent is required to submit your enquiry.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      trackContactFormSubmit({
        signageType: formState.signageType,
        hasAttachment: false,
      });

      // Simulate API submission
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSuccess(true);
      setFormState(EMPTY_FORM);
    } catch {
      setErrors({ firstName: 'Submission failed. Please call our direct helpline.' });
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
      {/* 1. Standard Hero Header Banner */}
      <section className={styles.heroSection}>
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]} />

          <div className={styles.heroContent}>
            <SectionEyebrow>GET IN TOUCH WITH TGB ENTERPRISE</SectionEyebrow>
            <h1 className={styles.heroTitle}>Start Your Signage Project Today</h1>
            <p className={styles.heroDesc}>
              Consult directly with our Nikol, Ahmedabad engineering team for 3D CAD mockups, site
              feasibility audits, and certified factory quotations.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Main Contact Form & Details Section */}
      <section className={styles.contactSection}>
        <Container>
          <div className={styles.grid}>
            {/* Left Column: Form / Success Message */}
            {isSuccess ? (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>
                  <CheckCircle2 size={36} />
                </div>
                <h2 className={styles.successTitle}>Enquiry Received!</h2>
                <p className={styles.successText}>
                  Thank you for reaching out to TGB Enterprise. Our project engineering team in
                  Nikol, Ahmedabad will review your specifications and get in touch within 2 to 4
                  business hours.
                </p>
                <button onClick={() => setIsSuccess(false)} className={styles.submitBtn}>
                  Send Another Project Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.formCard} noValidate>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>Request Factory Quotation</h2>
                  <p className={styles.formSubtitle}>
                    Fill in your details below for an official quotation with material breakdown.
                  </p>
                </div>

                <div className={styles.formRow}>
                  <Input
                    label="First Name"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleFieldChange('firstName')}
                    error={errors.firstName}
                    placeholder="e.g. Rahul"
                    required
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleFieldChange('lastName')}
                    error={errors.lastName}
                    placeholder="e.g. Patel"
                  />
                </div>

                <div className={styles.formRow}>
                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleFieldChange('phone')}
                    error={errors.phone}
                    placeholder="+91 98765 43210"
                    required
                  />
                  <Input
                    label="Business Email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleFieldChange('email')}
                    error={errors.email}
                    placeholder="name@company.com"
                    required
                  />
                </div>

                <div className={styles.formRow}>
                  <Input
                    label="Company / Brand Name"
                    name="company"
                    value={formState.company}
                    onChange={handleFieldChange('company')}
                    placeholder="e.g. Acme Retail Pvt Ltd"
                  />
                  <Input
                    label="Site / Installation City"
                    name="location"
                    value={formState.location}
                    onChange={handleFieldChange('location')}
                    placeholder="e.g. Ahmedabad, Surat, Rajkot"
                  />
                </div>

                <Input
                  label="Signage Product Type"
                  name="signageType"
                  type="select"
                  value={formState.signageType}
                  onChange={handleFieldChange('signageType')}
                  options={[
                    {
                      value: 'LED 3D Glow Sign Boards',
                      label: '3D LED Glow Sign Board (Starting ₹1,200/sqft)',
                    },
                    {
                      value: 'ACP Sign Boards & Facades',
                      label: 'ACP Facade & Elevation Cladding (Starting ₹350/sqft)',
                    },
                    {
                      value: '3D Acrylic Letters',
                      label: 'Laser-Cut 3D Acrylic Letters (Starting ₹85/inch)',
                    },
                    {
                      value: 'Stainless Steel Letters',
                      label: 'SS 304/316 Metal Letters (Starting ₹95/inch)',
                    },
                    {
                      value: 'Custom Neon Signs',
                      label: 'Custom LED Flex Neon Sign (Starting ₹4,500/set)',
                    },
                    { value: 'Pylon & Totem Signs', label: 'Pylon / Monolith Totem Highway Sign' },
                    {
                      value: 'Wayfinding & Reception',
                      label: 'Wayfinding & Corporate Reception Sign',
                    },
                    {
                      value: 'Custom Architectural Signage',
                      label: 'Custom Engineered Architectural Signage',
                    },
                  ]}
                  required
                />

                <Input
                  label="Project Requirements & Approximate Dimensions"
                  name="message"
                  type="textarea"
                  value={formState.message}
                  onChange={handleFieldChange('message')}
                  error={errors.message}
                  placeholder="Mention approximate dimensions (e.g. 20ft x 4ft), installation height, logo style, or specific materials..."
                  required
                />

                <FileUpload
                  label="Upload Design File / Site Photos (Optional)"
                  accept="image/*,.pdf,.ai,.cdr"
                  onFileSelect={() => {}}
                />

                <div className={styles.consentRow}>
                  <input
                    type="checkbox"
                    id="consentCheckbox"
                    checked={formState.consent}
                    onChange={handleFieldChange('consent')}
                    className={styles.checkbox}
                  />
                  <label htmlFor="consentCheckbox" className={styles.consentLabel}>
                    I agree to allow TGB Enterprise to contact me via Call or WhatsApp regarding
                    this quotation.
                  </label>
                </div>
                {errors.consent && (
                  <span style={{ color: 'var(--color-error)', fontSize: '11.5px' }}>
                    {errors.consent}
                  </span>
                )}

                <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                  {isSubmitting ? 'Submitting...' : 'Send Project Enquiry'}
                  <ArrowRight size={14} />
                </button>
              </form>
            )}

            {/* Right Column: Direct Info & Map */}
            <div className={styles.detailsCard}>
              {/* WhatsApp Quick Banner */}
              <div className={styles.directWhatsappBanner}>
                <div className={styles.whatsappTextWrap}>
                  <span className={styles.whatsappTitle}>Instant WhatsApp Estimation</span>
                  <span className={styles.whatsappSub}>
                    Send design photos &amp; get instant price range
                  </span>
                </div>
                <a
                  href="https://api.whatsapp.com/send?phone=919727136137&text=Hi%20TGB%20Enterprise!%20I'd%20like%20to%20get%20a%20quote%20for%20a%20signage%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  Chat On WhatsApp →
                </a>
              </div>

              {/* Map Container */}
              <div className={styles.mapBox}>
                <iframe
                  title="TGB Enterprise Nikol Workshop Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.189725895744!2d72.67566167603816!3d23.045839215162453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87189a6bfa9f%3A0x6a0c0a87679ebecb!2sShukan%20Shopping%20Center!5e0!3m2!1sen!2sin!4v1709900000000!5m2!1sen!2sin"
                  className={styles.mapIframe}
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Contact Details Box */}
              <div className={styles.infoBox}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIconWrap}>
                    <MapPin size={18} />
                  </div>
                  <div className={styles.infoBody}>
                    <span className={styles.infoLabel}>Workshop &amp; Office</span>
                    <span className={styles.infoValue}>
                      Shop No. 7/1, 1st Floor, Shukan Shopping Centre, opp. Chanakya School, Sukan
                      Cross Rd, Nikol, Ahmedabad, Gujarat 382345
                    </span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIconWrap}>
                    <Phone size={18} />
                  </div>
                  <div className={styles.infoBody}>
                    <span className={styles.infoLabel}>Factory Direct Helpline</span>
                    <a href="tel:+919727136137" className={styles.infoLink}>
                      +91 97271 36137
                    </a>
                    <span className={styles.infoSub}>Available Mon – Sat, 9:30 AM to 7:00 PM</span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIconWrap}>
                    <Mail size={18} />
                  </div>
                  <div className={styles.infoBody}>
                    <span className={styles.infoLabel}>Official Project Email</span>
                    <a
                      href={`mailto:${getEnvVar('VITE_CONTACT_EMAIL', 'tgbsign@proton.me')}`}
                      className={styles.infoLink}
                    >
                      {getEnvVar('VITE_CONTACT_EMAIL', 'tgbsign@proton.me')}
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIconWrap}>
                    <Clock size={18} />
                  </div>
                  <div className={styles.infoBody}>
                    <span className={styles.infoLabel}>Working Hours</span>
                    <span className={styles.infoValue}>Monday – Saturday: 9:30 AM – 7:00 PM</span>
                    <span className={styles.infoSub}>Sunday: Closed (Emergency on-call)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Frequently Asked Questions */}
      <FAQ
        title="Consultation &amp; Ordering FAQs"
        subtitle="Common questions regarding project quotation turnarounds, on-site measurements, sample deliveries, and advance payments."
      />
    </motion.div>
  );
};

export default Contact;
