import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import CourseHeroWrapper from "@/components/CourseHeroWrapper";
import CourseCurriculum from "@/components/CourseCurriculum";
import PricingPlans from "@/components/PricingPlans";
import CertificateSection from "@/components/CertificateSection";
import AlumniWorksAt from "@/components/AlumniWorksAt";
import InvestInYourself from "@/components/InvestInYourself";
import StudentTestimonials from "@/components/StudentTestimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Digital Marketing Course",
  description: "Master Digital Marketing with InternsForge. Learn SEO, social media marketing, content marketing, and analytics. Build successful digital marketing campaigns and grow your career.",
  openGraph: {
    title: "Digital Marketing Course - InternsForge",
    description: "Master Digital Marketing with InternsForge. Learn SEO, social media marketing, content marketing, and analytics.",
    url: "https://internsforge.com/courses/digital-marketing",
  },
  twitter: {
    title: "Digital Marketing Course - InternsForge",
    description: "Master Digital Marketing with InternsForge. Learn SEO, social media marketing, content marketing, and analytics.",
  },
};

export default function DigitalMarketingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Digital Marketing Course",
    "description": "Comprehensive Digital Marketing course covering SEO, social media marketing, content marketing, and analytics. Build successful campaigns and advance your career.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "DIG-MKT-001",
    "educationalLevel": "Advanced"
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
          <Suspense fallback={<div className="h-[400px] bg-brand-page" />}>
            <CourseHeroWrapper
              courseName="Digital Marketing"
              defaultDescription="Master digital marketing strategies and tools. Learn SEO, social media marketing, content creation, and analytics to grow businesses."
              defaultImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseCurriculum courseType="digital-marketing" />
          <PricingPlans />
          <CertificateSection />
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

