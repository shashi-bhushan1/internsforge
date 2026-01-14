interface CourseStructuredDataProps {
  name: string;
  description: string;
  courseCode: string;
  provider?: {
    name: string;
    url: string;
  };
  educationalLevel?: string;
}

interface OrganizationStructuredDataProps {
  name: string;
  description: string;
  url: string;
  logo?: string;
  contactPoint?: {
    telephone: string;
    email: string;
    contactType: string;
    areaServed: string;
    availableLanguage: string;
  };
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs?: string[];
}

interface BreadcrumbStructuredDataProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

type StructuredDataProps = 
  | { type: 'Course'; data: CourseStructuredDataProps }
  | { type: 'Organization'; data: OrganizationStructuredDataProps }
  | { type: 'BreadcrumbList'; data: BreadcrumbStructuredDataProps };

export function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData: any;

  switch (type) {
    case 'Course':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": data.name,
        "description": data.description,
        "provider": {
          "@type": "EducationalOrganization",
          "name": data.provider?.name || "InternsForge",
          "url": data.provider?.url || "https://internsforge.com"
        },
        "courseCode": data.courseCode,
        "educationalLevel": data.educationalLevel || "Advanced"
      };
      break;

    case 'Organization':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": data.name,
        "description": data.description,
        "url": data.url,
        ...(data.logo && { "logo": data.logo }),
        ...(data.contactPoint && {
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": data.contactPoint.telephone,
            "contactType": data.contactPoint.contactType,
            "email": data.contactPoint.email,
            "areaServed": data.contactPoint.areaServed,
            "availableLanguage": data.contactPoint.availableLanguage
          }
        }),
        ...(data.address && {
          "address": {
            "@type": "PostalAddress",
            "streetAddress": data.address.streetAddress,
            "addressLocality": data.address.addressLocality,
            "addressRegion": data.address.addressRegion,
            "postalCode": data.address.postalCode,
            "addressCountry": data.address.addressCountry
          }
        }),
        ...(data.sameAs && data.sameAs.length > 0 && { "sameAs": data.sameAs })
      };
      break;

    case 'BreadcrumbList':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": data.items.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}