import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import CourseHeroWrapper from "@/components/courses/CourseHeroWrapper";
import CourseKeyBenefits from "@/components/courses/CourseKeyBenefits";
import CourseCurriculum from "@/components/courses/CourseCurriculum";
import PricingPlans from "@/components/courses/PricingPlans";
import CertificateSection from "@/components/courses/CertificateSection";
import AlumniWorksAt from "@/components/common/AlumniWorksAt";
import InvestInYourself from "@/components/common/InvestInYourself";
import StudentTestimonials from "@/components/common/StudentTestimonials";
import FAQ from "@/components/common/FAQ";
import { getPaymentLinks } from "@/data/paymentLinks";

export const metadata: Metadata = {
  title: "Construction Planning Course",
  description: "Master CAD software and construction planning with InternsForge. Learn architectural design, project management, and building information modeling.",
  openGraph: {
    title: "Construction Planning Course - InternsForge",
    description: "Master CAD software and construction planning. Learn architectural design, project management, and building information modeling.",
    url: "https://internsforge.com/courses/construction-planning",
  },
  twitter: {
    title: "Construction Planning Course - InternsForge",
    description: "Master CAD software and construction planning. Learn architectural design, project management, and building information modeling.",
  },
};

export default function ConstructionPlanningPage() {
  const paymentLinks = getPaymentLinks('construction-planning');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Construction Planning Course",
    "description": "Comprehensive Construction Planning course covering project management, architectural design, and building information modeling. Build expertise in construction planning.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "CP-001",
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
              courseName="Master Construction Planning"
              defaultDescription="Master CAD software and construction planning. Learn architectural design, project management, and building information modeling."
              defaultImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="web-development" courseName="Construction Planning Course" />
          <PricingPlans 
            selfPacedLink={paymentLinks?.selfPaced.link}
            mentorLedLink={paymentLinks?.mentorLed.link}
            selfPacedPrice={`₹${paymentLinks?.selfPaced.fee.toLocaleString('en-IN')}`}
            mentorLedPrice={`₹${paymentLinks?.mentorLed.fee.toLocaleString('en-IN')}`}
          />
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
