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
  title: "Hybrid Electrical Vehicles (HEV) Course",
  description: "Understand automotive engineering principles and modern vehicle technologies with InternsForge. Learn about hybrid electrical vehicles and sustainable transportation.",
  openGraph: {
    title: "Hybrid Electrical Vehicles (HEV) Course - InternsForge",
    description: "Understand automotive engineering principles and modern vehicle technologies. Learn about hybrid electrical vehicles and sustainable transportation.",
    url: "https://internsforge.com/courses/hybrid-electrical-vehicles",
  },
  twitter: {
    title: "Hybrid Electrical Vehicles (HEV) Course - InternsForge",
    description: "Understand automotive engineering principles and modern vehicle technologies. Learn about hybrid electrical vehicles and sustainable transportation.",
  },
};

export default function HybridElectricalVehiclesPage() {
  const paymentLinks = getPaymentLinks('hybrid-electrical-vehicles');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Hybrid Electrical Vehicles (HEV) Course",
    "description": "Comprehensive HEV course covering hybrid electrical vehicles and sustainable transportation. Build expertise in hybrid vehicle technologies.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "HEV-001",
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
              courseName="Master Hybrid Electrical Vehicles (HEV)"
              defaultDescription="Understand automotive engineering principles and modern vehicle technologies. Learn about hybrid electrical vehicles and sustainable transportation."
              defaultImage="https://images.unsplash.com/photo-1593941707882-a5bac6861d08?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="hybrid-electrical-vehicles" courseName="HEV Course" />
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
