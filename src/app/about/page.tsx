import type { Metadata } from "next";
import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import AlumniWorksAt from "@/components/AlumniWorksAt";
import MeetTheTeam from "@/components/MeetTheTeam";
import StudentTestimonials from "@/components/StudentTestimonials";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about InternsForge's mission to transform global learning. Discover how we bridge the gap between classroom theory and real-world industry needs through innovative educational technology, mentorship, and career guidance.",
  openGraph: {
    title: "About Us - InternsForge",
    description: "Learn about InternsForge's mission to transform global learning. Discover how we bridge the gap between classroom theory and real-world industry needs.",
    url: "https://internsforge.com/about",
  },
  twitter: {
    title: "About Us - InternsForge",
    description: "Learn about InternsForge's mission to transform global learning through innovative educational technology.",
  },
};

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About InternsForge",
    "description": "InternsForge is an innovative educational technology platform that bridges the gap between classroom theory and real-world industry needs.",
    "url": "https://internsforge.com/about",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "foundingDate": "2020", // Update with actual founding date
      "description": "Our dream is global learning transformation. We're the bridge that spans the gap between classroom theory and real-world industry needs."
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
        <AboutHero />
        <WhyChooseUs />
        <AlumniWorksAt />
        <MeetTheTeam />
        <StudentTestimonials />
      </main>
      <Footer />
    </div>
    </>
  );
}

