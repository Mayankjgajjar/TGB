import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { QuoteProvider } from '../../context/QuoteContext';
import QuoteModal from '../ui/QuoteModal';
import { ErrorBoundary } from '../ErrorBoundary';
import { servicesData } from '../../content/services';
import { projectsContent } from '../../content/projects';
import { trackWhatsAppFABClick } from '../../lib/analytics';
import styles from './AppLayout.module.css';

const whatsappVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.2,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ORIGIN = import.meta.env.DEV
  ? window.location.origin
  : (import.meta.env.VITE_SITE_URL || window.location.origin);

export const AppLayout: React.FC = () => {
  const location = useLocation();
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  // LocalBusiness Structured Data (JSON-LD)
  useEffect(() => {
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'TGB Enterprise',
      image: `${ORIGIN}/assets/logos/tgb-logo.svg`,
      '@id': `${ORIGIN}/#localbusiness`,
      url: ORIGIN,
      telephone: '+919727136137',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'Shop No. 7/1, First Floor, Shukan Shopping Centre, opp. Chanakya school, Sukan Cross Rd, New India Colony, Nikol',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        postalCode: '382345',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 23.0458,
        longitude: 72.6782,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:30',
          closes: '19:00',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '5',
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'local-business-schema';
    script.innerHTML = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('local-business-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Dynamic Breadcrumb Structured Data (JSON-LD)
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      const existingScript = document.getElementById('breadcrumb-schema');
      if (existingScript) existingScript.remove();
      return;
    }

    const pathSegments = path.split('/').filter(Boolean);
    const itemListElement = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: ORIGIN,
      },
    ];

    let currentPath = '';
    pathSegments.forEach((segment, idx) => {
      currentPath += `/${segment}`;
      let name = segment.replace(/-/g, ' ');
      // Capitalize first letter of each word
      name = name.replace(/\b\w/g, (c) => c.toUpperCase());

      // Customize names for specific segments
      if (segment === 'claim-warranty') name = 'Claim Warranty';
      if (segment === 'privacy') name = 'Privacy Policy';
      if (segment === 'terms') name = 'Terms & Conditions';

      // Special check for dynamic names if matches known ones
      if (segment.startsWith('led-sign')) name = 'LED Sign Boards';
      if (segment.startsWith('acp-sign')) name = 'ACP Sign Boards';
      if (segment.startsWith('neon-sign')) name = 'Neon Sign Boards';
      if (segment.startsWith('acrylic')) name = 'Acrylic & 3D Letters';
      if (segment.startsWith('ss-letters')) name = 'SS Letters';
      if (segment.startsWith('pylon')) name = 'Pylon Signs';

      itemListElement.push({
        '@type': 'ListItem',
        position: idx + 2,
        name: name,
        item: `${ORIGIN}${currentPath}`,
      });
    });

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: itemListElement,
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'breadcrumb-schema';
    script.innerHTML = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('breadcrumb-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [location.pathname]);

  // Centralized Dynamic SEO, OG and Twitter Metadata Updates
  useEffect(() => {
    let title = 'TGB Enterprise | Sign Board & Signage Manufacturer in Ahmedabad';
    let description =
      'TGB Enterprise is a leading sign board manufacturer in Ahmedabad, specializing in premium LED, ACP, and acrylic signage. Contact us to elevate your brand.';
    let image = `${ORIGIN}/assets/images/hero-poster.png`;

    const path = location.pathname;

    const updateMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    const updateMetaProperty = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    if (path === '/') {
      title = 'TGB Enterprise | Sign Board & Signage Manufacturer in Ahmedabad';
      description =
        'TGB Enterprise is a leading sign board manufacturer in Ahmedabad, specializing in premium LED, ACP, and acrylic signage. Contact us to elevate your brand.';
    } else if (path === '/about') {
      title = 'About TGB Enterprise | Trusted Sign Board Company in Ahmedabad';
      description =
        'Learn about TGB Enterprise, the trusted sign board company in Ahmedabad. We design, manufacture, and install high-quality signage for brands across India.';
    } else if (path === '/services') {
      title = 'Signage Services – LED, ACP, Neon & Acrylic Sign Boards | TGB Enterprise Ahmedabad';
      description =
        'Explore custom signage services in Ahmedabad by TGB Enterprise, including durable LED boards, ACP panels, neon signs, and 3D letters. Request a free quote.';
    } else if (path === '/contact') {
      title = 'Contact TGB Enterprise | Sign Board Manufacturer, Nikol, Ahmedabad';
      description =
        'Contact TGB Enterprise, the leading sign board manufacturer in Nikol, Ahmedabad. Visit our workshop or call us today to start your custom signage project.';
    } else if (path.startsWith('/services/')) {
      const slug = path.split('/services/')[1];
      const service = slug ? servicesData[slug] : null;
      if (service) {
        title = service.seoMetadata.title;
        description = service.seoMetadata.description;
        image = service.heroImage.startsWith('http')
          ? service.heroImage
          : `${ORIGIN}${service.heroImage}`;
      }
    } else if (path.startsWith('/projects/')) {
      const projectId = path.split('/projects/')[1];
      const project = projectId
        ? projectsContent.items.find((item) => item.id === projectId)
        : null;
      if (project) {
        title = `${project.name} | TGB Enterprise – Sign Board Manufacturer in Ahmedabad`;
        description = `Project case study: ${project.name} in ${project.location}. View specs, materials, and engineering details by TGB Enterprise.`;
        image = project.imagePath.startsWith('http')
          ? project.imagePath
          : `${ORIGIN}${project.imagePath}`;
      } else {
        title = 'Our Completed Projects Portfolio | TGB Enterprise Ahmedabad';
        description =
          'View TGB Enterprise completed projects and landmarks across Ahmedabad and Gujarat, featuring premium LED sign boards, ACP cladding, and neon signs.';
      }
    } else if (path === '/gallery') {
      title = 'Visual Portfolio | TGB Enterprise Signage Gallery';
      description =
        'Browse the TGB Enterprise visual portfolio of completed signage installations, LED boards, ACP facades, neon signs, and 3D letter projects across Ahmedabad and Gujarat.';
    } else if (path === '/projects') {
      title = 'Visual Portfolio | TGB Enterprise Signage Gallery';
      description =
        'Browse the TGB Enterprise visual portfolio of completed signage installations, LED boards, ACP facades, neon signs, and 3D letter projects across Ahmedabad and Gujarat.';
    } else if (path === '/claim-warranty') {
      title = 'Product Warranty Registration & Claim | TGB Enterprise Sign Boards';
      description =
        'Register or submit a warranty claim for your TGB Enterprise sign boards. Follow our easy guide to file a claim for LED, ACP, and 3D letters.';
    } else if (path === '/privacy') {
      title = 'Privacy Policy | TGB Enterprise – Sign Board Manufacturer in Ahmedabad';
      description =
        'Privacy Policy for TGB Enterprise, sign board manufacturer in Ahmedabad. Learn how we handle your personal data and respect your online privacy.';
    } else if (path === '/terms') {
      title = 'Terms & Conditions | TGB Enterprise – Sign Board Manufacturer in Ahmedabad';
      description =
        'Terms and conditions for using the website and services of TGB Enterprise, premium sign board manufacturer in Ahmedabad. Read our terms of service.';
    }

    // 1. Title
    document.title = title;

    // 2. Meta description
    updateMetaTag('description', description);

    // 3. Dynamic Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = `${ORIGIN}${path === '/' ? '' : path}`;
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', canonicalUrl);
      document.head.appendChild(canonical);
    }

    // 4. Open Graph Metadata
    updateMetaProperty('og:title', title);
    updateMetaProperty('og:description', description);
    updateMetaProperty('og:url', canonicalUrl);
    updateMetaProperty('og:image', image);
    updateMetaProperty('og:type', 'website');
    updateMetaProperty('og:site_name', 'TGB Enterprise');

    // 5. Twitter Card Metadata
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
  }, [location.pathname]);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    setLenisInstance(lenis);

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Scroll to top on every route change
  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, lenisInstance]);

  return (
    <QuoteProvider>
      {/* Skip to main content — visually hidden until focused */}
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <div className={styles.layoutContainer}>
        {/* Global Looping Video Background */}
        <div className={styles.globalVideoBg}>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/assets/images/hero-poster.png"
            className={styles.globalVideoElement}
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src="/assets/videos/sign_wall.mp4" type="video/mp4" />
          </video>
          <div className={styles.globalVideoOverlay} />
        </div>

        <Navbar />
        <main id="main-content" className={styles.mainContent}>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </main>
        <Footer />
        <QuoteModal />

        {/* Floating WhatsApp Action Button */}
        <motion.a
          href="https://wa.me/919727136137?text=Hi%20TGB%20Enterprise!%20I'd%20like%20to%20know%20more%20about%20your%20signage%20services%20and%20get%20a%20quote."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappButton}
          aria-label="Contact us on WhatsApp"
          onClick={() => trackWhatsAppFABClick()}
          variants={whatsappVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ y: -4, scale: 1.05 }}
        >
          {/* Pulsing Glow Ring inside the button (inherits hover translation/scale) */}
          <motion.div
            className={styles.whatsappPulse}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.45, 0],
              scale: [0.95, 1.2, 1.45],
            }}
            transition={{
              delay: 1.5,
              duration: 2.0,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />

          <div className={styles.whatsappIconWrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={styles.whatsappIcon}
            >
              <path
                fill="#fff"
                d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
              />
            </svg>
          </div>
        </motion.a>
      </div>
    </QuoteProvider>
  );
};

export default AppLayout;
