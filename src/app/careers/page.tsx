import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import CareersHero from "@/components/careers/CareersHero";
import JobOpenings from "@/components/careers/JobOpenings";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Our Team: Shape the Future of Learning and Careers. Explore exciting career opportunities at InternsForge and be part of transforming education.",
  openGraph: {
    title: "Careers - InternsForge",
    description: "Join Our Team: Shape the Future of Learning and Careers. Explore exciting career opportunities at InternsForge.",
    url: "https://internsforge.com/careers",
  },
  twitter: {
    title: "Careers - InternsForge",
    description: "Join Our Team: Shape the Future of Learning and Careers. Explore exciting career opportunities at InternsForge.",
  },
};

export default function CareersPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Careers at InternsForge",
    "description": "Join Our Team: Shape the Future of Learning and Careers. Explore exciting career opportunities at InternsForge.",
    "url": "https://internsforge.com/careers",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-brand-page">
        <Header />
        <main className="w-full">
          <CareersHero />
          <JobOpenings />
        </main>
        <Footer />
      </div>
    </>
  );
}

