import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/home/Hero";
import CertificationPartners from "@/components/home/CertificationPartners";
import EducationalAlliances from "@/components/home/EducationalAlliances";
import ProgramsUnique from "@/components/home/ProgramsUnique";
import ComboPacks from "@/components/home/ComboPacks";
import TrendingCourses from "@/components/home/TrendingCourses";
import TopFeaturedCourses from "@/components/home/TopFeaturedCourses";
import WhyChooseUs from "@/components/common/WhyChooseUs";
import LearningJourney from "@/components/home/LearningJourney";
import ToolsYouWillLearn from "@/components/home/ToolsYouWillLearn";
import MeetTheTeam from "@/components/home/MeetTheTeam";
import AlumniWorksAt from "@/components/common/AlumniWorksAt";
import InvestInYourself from "@/components/common/InvestInYourself";
import StudentTestimonials from "@/components/common/StudentTestimonials";
import FAQ from "@/components/common/FAQ";

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
    <div className="min-h-screen bg-brand-page">
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
