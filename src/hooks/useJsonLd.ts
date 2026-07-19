import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ORIGIN = import.meta.env.DEV
  ? window.location.origin
  : import.meta.env.VITE_SITE_URL || window.location.origin;

export function useJsonLd() {
  const location = useLocation();

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
}

export default useJsonLd;
