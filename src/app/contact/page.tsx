import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with InternsForge. Have questions or feedback? Contact us via email, phone, or WhatsApp. We're here to help and will respond within 24 hours. Visit our corporate office in Bengaluru, Karnataka.",
  openGraph: {
    title: "Contact Us - InternsForge",
    description: "Get in touch with InternsForge. Have questions or feedback? Contact us via email, phone, or WhatsApp. We're here to help.",
    url: "https://internsforge.com/contact",
  },
  twitter: {
    title: "Contact Us - InternsForge",
    description: "Get in touch with InternsForge. Have questions or feedback? We're here to help.",
  },
};

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact InternsForge",
    "description": "Contact InternsForge for questions, feedback, or inquiries about our educational programs and services.",
    "url": "https://internsforge.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "InternsForge",
      "url": "https://internsforge.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-6361187682",
          "contactType": "Customer Service",
          "email": "support@internsforge.com",
          "areaServed": "IN",
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+91-6361187682",
          "contactType": "Customer Service",
          "areaServed": "IN",
          "availableLanguage": "English"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "BHIVE Workspace – No.112, AKR Tech Park, B Block, 7th Mile Hosur Rd, Krishna Reddy Industrial Area",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560068",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main className="w-full">
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

