import { hospitalInfo, doctorsData } from './hospitalData';

export const BASE_URL = hospitalInfo.websiteUrl || 'https://www.vedanthospitalmodasa.com';

/**
 * Returns structured data for the Hospital entity (Schema.org / Hospital + MedicalOrganization)
 */
export function getHospitalSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Hospital', 'MedicalOrganization', 'EmergencyService'],
    '@id': `${BASE_URL}/#hospital`,
    name: 'Vedant Hospital',
    alternateName: [
      'Vedant Hospital Modasa',
      'Vedant Maternity & Nursing Home',
      'વેદાંત હોસ્પિટલ મોડાસા'
    ],
    url: BASE_URL,
    logo: `${BASE_URL}/vedant-hospital-logo.png`,
    image: [
      `${BASE_URL}/images/hospital-reception.jpg`,
      `${BASE_URL}/images/operation-theatre.jpg`,
      `${BASE_URL}/images/icu-care.jpg`
    ],
    description:
      'Vedant Hospital in Modasa is a premier healthcare institution providing specialized Obstetrics & Gynecology care by Dr. Happy Patel and General Medicine & 24×7 ICU critical care by Dr. Paras Patel.',
    slogan: hospitalInfo.taglineGujarati,
    telephone: hospitalInfo.contacts.emergencyDisplay,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: `+91-${hospitalInfo.contacts.emergency}`,
        contactType: 'emergency',
        areaServed: 'IN',
        availableLanguage: ['Gujarati', 'Hindi', 'English']
      },
      {
        '@type': 'ContactPoint',
        telephone: `+91-${hospitalInfo.contacts.appointment1}`,
        contactType: 'appointments',
        areaServed: 'IN',
        availableLanguage: ['Gujarati', 'Hindi', 'English']
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: hospitalInfo.postalAddress.streetAddress,
      addressLocality: hospitalInfo.postalAddress.addressLocality,
      addressRegion: hospitalInfo.postalAddress.addressRegion,
      postalCode: hospitalInfo.postalAddress.postalCode,
      addressCountry: hospitalInfo.postalAddress.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: hospitalInfo.geo.latitude,
      longitude: hospitalInfo.geo.longitude
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '09:00',
        closes: '13:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59'
      }
    ],
    medicalSpecialty: [
      'Obstetrics',
      'Gynecology',
      'Critical Care',
      'General Medicine',
      'Ultrasonography'
    ],
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Maternity Care & Painless Delivery'
      },
      {
        '@type': 'MedicalProcedure',
        name: '3D / 4D Ultrasound & Fetal Sonography'
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Stitchless Laparoscopic Surgery'
      },
      {
        '@type': 'MedicalProcedure',
        name: '24×7 Doctor-Supervised ICU'
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Cardiac & Emergency Medicine'
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Diabetes & Endocrine Care'
      }
    ],
    physician: doctorsData.map((d) => ({
      '@type': 'Physician',
      name: d.name,
      jobTitle: d.designation,
      url: `${BASE_URL}/doctors/${d.slug}`
    })),
    sameAs: [hospitalInfo.instagramUrl.split('?')[0]],
    priceRange: '₹₹'
  };
}

/**
 * Returns structured data for an individual Doctor (Schema.org / Physician + Person)
 */
export function getPhysicianSchema(doctor) {
  if (!doctor) return null;
  const isGynecologist = doctor.department.includes('Obstetrics');

  return {
    '@context': 'https://schema.org',
    '@type': ['Physician', 'Person'],
    '@id': `${BASE_URL}/doctors/${doctor.slug}#physician`,
    name: doctor.name,
    honorificPrefix: 'Dr.',
    jobTitle: doctor.designation,
    description: doctor.about ? doctor.about.replace(/\n+/g, ' ') : undefined,
    image: `${BASE_URL}${doctor.image}`,
    url: `${BASE_URL}/doctors/${doctor.slug}`,
    worksFor: {
      '@type': 'Hospital',
      name: 'Vedant Hospital',
      url: BASE_URL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Modasa',
        addressRegion: 'Gujarat',
        addressCountry: 'IN'
      }
    },
    medicalSpecialty: isGynecologist ? ['Obstetrics', 'Gynecology'] : ['General Medicine', 'Critical Care Medicine'],
    hasCredential: doctor.qualifications,
    alumniOf: isGynecologist
      ? [
          { '@type': 'EducationalOrganization', name: 'Jaslok Hospital, Mumbai' },
          { '@type': 'EducationalOrganization', name: 'SVP Hospital, Ahmedabad' }
        ]
      : [
          { '@type': 'MedicalOrganization', name: 'Pulse Hospital & ICU' }
        ],
    knowsAbout: doctor.specialties || []
  };
}

/**
 * Returns BreadcrumbList structured data for any path
 */
export function getBreadcrumbSchema(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url.startsWith('http') ? crumb.url : `${BASE_URL}${crumb.url}`
    }))
  };
}

/**
 * Returns WebSite Schema
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: 'Vedant Hospital',
    alternateName: 'Vedant Hospital Modasa',
    url: BASE_URL,
    publisher: {
      '@id': `${BASE_URL}/#hospital`
    }
  };
}
