import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CertificationPartners from "@/components/CertificationPartners";
import EducationalAlliances from "@/components/EducationalAlliances";
import ProgramsUnique from "@/components/ProgramsUnique";
import ComboPacks from "@/components/ComboPacks";
import TrendingCourses from "@/components/TrendingCourses";
import TopFeaturedCourses from "@/components/TopFeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import LearningJourney from "@/components/LearningJourney";
import ToolsYouWillLearn from "@/components/ToolsYouWillLearn";
import MeetTheTeam from "@/components/MeetTheTeam";
import AlumniWorksAt from "@/components/AlumniWorksAt";
import InvestInYourself from "@/components/InvestInYourself";
import StudentTestimonials from "@/components/StudentTestimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home",
  description: "InternsForge is your learning partner offering training, internships, and placement support. Elevate your intellect with our innovative educational technology platform that bridges the gap between classroom theory and real-world industry needs.",
  openGraph: {
    title: "InternsForge - Your Learning Partner for Career Success",
    description: "InternsForge is your learning partner offering training, internships, and placement support. Elevate your intellect with our innovative educational technology platform.",
    url: "https://internsforge.com",
  },
  twitter: {
    title: "InternsForge - Your Learning Partner for Career Success",
    description: "InternsForge is your learning partner offering training, internships, and placement support.",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "InternsForge",
    "description": "InternsForge is an innovative educational technology platform bridging the gap between classroom theory and real-world industry needs.",
    "url": "https://internsforge.com",
    "logo": "https://internsforge.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-6361187682",
      "contactType": "Customer Service",
      "email": "support@internsforge.com",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "BHIVE Workspace – No.112, AKR Tech Park, B Block, 7th Mile Hosur Rd, Krishna Reddy Industrial Area",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560068",
      "addressCountry": "IN"
    },
    "sameAs": [
      // Add your social media links when available
    ]
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
        <Hero />
        <CertificationPartners />
        <EducationalAlliances />
        <ProgramsUnique />
        <ComboPacks />
        <TrendingCourses />
        <TopFeaturedCourses />
        <WhyChooseUs />
        <LearningJourney />
        <ToolsYouWillLearn />
        <MeetTheTeam />
        <AlumniWorksAt />
        <InvestInYourself />
        <StudentTestimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
    </>
  );
}
