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
  title: "Drone Mechanics Course",
  description: "Master drone mechanics and unmanned aerial vehicle technologies with InternsForge. Learn about drone design, flight dynamics, and maintenance.",
  openGraph: {
    title: "Drone Mechanics Course - InternsForge",
    description: "Master drone mechanics and unmanned aerial vehicle technologies. Learn about drone design, flight dynamics, and maintenance.",
    url: "https://internsforge.com/courses/drone-mechanics",
  },
  twitter: {
    title: "Drone Mechanics Course - InternsForge",
    description: "Master drone mechanics and unmanned aerial vehicle technologies. Learn about drone design, flight dynamics, and maintenance.",
  },
};

export default function DroneMechanicsPage() {
  const paymentLinks = getPaymentLinks('drone-mechanics');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Drone Mechanics Course",
    "description": "Comprehensive Drone Mechanics course covering unmanned aerial vehicle technologies, flight dynamics, and drone maintenance. Build expertise in drone mechanics.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "DM-001",
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
              courseName="Master Drone Mechanics"
              defaultDescription="Master drone mechanics and unmanned aerial vehicle technologies. Learn about drone design, flight dynamics, and maintenance."
              defaultImage="https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="drone-mechanics" courseName="Drone Mechanics Course" />
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
