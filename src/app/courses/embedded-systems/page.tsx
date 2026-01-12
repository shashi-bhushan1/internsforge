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
  title: "Embedded Systems Course",
  description: "Build connected devices and smart systems with InternsForge. Learn to integrate hardware and software for IoT applications and embedded systems.",
  openGraph: {
    title: "Embedded Systems Course - InternsForge",
    description: "Build connected devices and smart systems. Learn to integrate hardware and software for IoT applications and embedded systems.",
    url: "https://internsforge.com/courses/embedded-systems",
  },
  twitter: {
    title: "Embedded Systems Course - InternsForge",
    description: "Build connected devices and smart systems. Learn to integrate hardware and software for IoT applications and embedded systems.",
  },
};

export default function EmbeddedSystemsPage() {
  const paymentLinks = getPaymentLinks('embedded-systems');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Embedded Systems Course",
    "description": "Comprehensive Embedded Systems course covering hardware-software integration for IoT and embedded applications. Build connected devices.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "ES-001",
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
              courseName="Master Embedded Systems"
              defaultDescription="Build connected devices and smart systems. Learn to integrate hardware and software for IoT applications and embedded systems."
              defaultImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="embedded-systems" courseName="Embedded Systems Course" />
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
