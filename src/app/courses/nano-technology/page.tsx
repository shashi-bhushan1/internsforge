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
  title: "Nano Technology Course",
  description: "Explore the fascinating world of nanotechnology with InternsForge. Learn about nanomaterials, nanofabrication, and applications in various industries.",
  openGraph: {
    title: "Nano Technology Course - InternsForge",
    description: "Explore the fascinating world of nanotechnology. Learn about nanomaterials, nanofabrication, and applications in various industries.",
    url: "https://internsforge.com/courses/nano-technology",
  },
  twitter: {
    title: "Nano Technology Course - InternsForge",
    description: "Explore the fascinating world of nanotechnology. Learn about nanomaterials, nanofabrication, and applications in various industries.",
  },
};

export default function NanoTechnologyPage() {
  const paymentLinks = getPaymentLinks('nano-technology');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Nano Technology Course",
    "description": "Comprehensive Nano Technology course covering nanomaterials, nanofabrication, and industry applications. Build expertise in nanotechnology.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "NANO-001",
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
              courseName="Master Nano Technology"
              defaultDescription="Explore the fascinating world of nanotechnology. Learn about nanomaterials, nanofabrication, and applications in various industries."
              defaultImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="nano-technology" courseName="Nano Technology Course" />
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
