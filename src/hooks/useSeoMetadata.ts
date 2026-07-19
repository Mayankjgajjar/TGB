import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { productsData } from '../content/products';
import { projectsContent } from '../content/projects';

const ORIGIN = import.meta.env.DEV
  ? window.location.origin
  : import.meta.env.VITE_SITE_URL || window.location.origin;

export function useSeoMetadata() {
  const location = useLocation();

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
    } else if (path === '/products' || path === '/services') {
      title =
        'Products Catalogue – LED, ACP, Neon & Acrylic Sign Boards | TGB Enterprise Ahmedabad';
      description =
        'Explore custom architectural signage products in Ahmedabad by TGB Enterprise, including durable LED boards, ACP panels, neon signs, and 3D letters.';
    } else if (path === '/resources') {
      title = 'Technical Resources, Downloads & Signage Guides | TGB Enterprise Ahmedabad';
      description =
        'Download product catalogues, company profile PDF, material specs, installation manuals, and FAQs from TGB Enterprise, Ahmedabad.';
    } else if (path === '/contact') {
      title = 'Contact TGB Enterprise | Sign Board Manufacturer, Nikol, Ahmedabad';
      description =
        'Contact TGB Enterprise, the leading sign board manufacturer in Nikol, Ahmedabad. Visit our workshop or call us today to start your custom signage project.';
    } else if (path.startsWith('/products/') || path.startsWith('/services/')) {
      const slug = path.startsWith('/products/')
        ? path.split('/products/')[1]
        : path.split('/services/')[1];
      const product = slug ? productsData[slug] : null;
      if (product) {
        title = product.seoMetadata.title;
        description = product.seoMetadata.description;
        image = product.heroImage.startsWith('http')
          ? product.heroImage
          : `${ORIGIN}${product.heroImage}`;
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
}

export default useSeoMetadata;
