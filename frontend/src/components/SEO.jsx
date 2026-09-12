import { useEffect } from 'react';
import { BASE_URL } from '../data/schemaData';

/**
 * Reusable Production SEO Component for Vedant Hospital
 * Manages Title, Meta Description, Canonical, Robots, Open Graph, Twitter Cards, and Schema.org JSON-LD.
 */
export default function SEO({
  title = 'Vedant Hospital Modasa | Maternity, Gynecology & General Medicine',
  description = 'Vedant Hospital, Modasa – Multi-speciality hospital offering 24x7 Emergency, Maternity, Gynecology and General Medicine services. Our specialist doctors: Dr. Happy Patel (M.B.D.G.O, DNB – Obstetrician & Gynecologist) and Dr. Paras Patel (M.D. Physician – General Medicine & ICU).',
  canonical = '/',
  ogImage = '/og-preview.jpg',
  ogType = 'website',
  schema = null,
  noindex = false
}) {
  const fullCanonical = canonical.startsWith('http')
    ? canonical
    : `${BASE_URL}${canonical.startsWith('/') ? canonical : `/${canonical}`}`;

  const fullOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${BASE_URL}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMeta = (attrName, attrValue, content) => {
      let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    updateMeta('name', 'description', description);
    updateMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // 3. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', fullCanonical);

    // 4. Open Graph Tags
    updateMeta('property', 'og:title', title);
    updateMeta('property', 'og:description', description);
    updateMeta('property', 'og:url', fullCanonical);
    updateMeta('property', 'og:image', fullOgImage);
    updateMeta('property', 'og:image:secure_url', fullOgImage);
    updateMeta('property', 'og:image:width', '1200');
    updateMeta('property', 'og:image:height', '630');
    updateMeta('property', 'og:image:alt', title);
    updateMeta('property', 'og:type', ogType);
    updateMeta('property', 'og:site_name', 'Vedant Hospital');
    updateMeta('property', 'og:locale', 'en_IN');

    // 5. Twitter Card Tags
    updateMeta('name', 'twitter:card', 'summary_large_image');
    updateMeta('name', 'twitter:title', title);
    updateMeta('name', 'twitter:description', description);
    updateMeta('name', 'twitter:image', fullOgImage);
    updateMeta('name', 'twitter:image:alt', title);

    // 6. Schema.org JSON-LD Script Injection
    const scriptId = 'vedant-schema-jsonld';
    let scriptElem = document.getElementById(scriptId);

    if (schema) {
      if (!scriptElem) {
        scriptElem = document.createElement('script');
        scriptElem.id = scriptId;
        scriptElem.type = 'application/ld+json';
        document.head.appendChild(scriptElem);
      }
      scriptElem.textContent = JSON.stringify(
        Array.isArray(schema)
          ? { '@context': 'https://schema.org', '@graph': schema }
          : schema,
        null,
        2
      );
    } else if (scriptElem) {
      scriptElem.remove();
    }

    return () => {
      // Optional cleanup on unmount if needed
    };
  }, [title, description, fullCanonical, fullOgImage, ogType, schema, noindex]);

  return null;
}
