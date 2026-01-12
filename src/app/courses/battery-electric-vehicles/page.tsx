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
  title: "Battery Electric Vehicles (BEVs) Course",
  description: "Understand automotive engineering principles and modern vehicle technologies with InternsForge. Learn about battery electric vehicles and sustainable transportation.",
  openGraph: {
    title: "Battery Electric Vehicles (BEVs) Course - InternsForge",
    description: "Understand automotive engineering principles and modern vehicle technologies. Learn about battery electric vehicles and sustainable transportation.",
    url: "https://internsforge.com/courses/battery-electric-vehicles",
  },
  twitter: {
    title: "Battery Electric Vehicles (BEVs) Course - InternsForge",
    description: "Understand automotive engineering principles and modern vehicle technologies. Learn about battery electric vehicles and sustainable transportation.",
  },
};

export default function BatteryElectricVehiclesPage() {
  const paymentLinks = getPaymentLinks('battery-electric-vehicles');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Battery Electric Vehicles (BEVs) Course",
    "description": "Comprehensive BEV course covering battery electric vehicles and sustainable transportation. Build expertise in electric vehicle technologies.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "BEV-001",
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
              courseName="Master Battery Electric Vehicles (BEVs)"
              defaultDescription="Understand automotive engineering principles and modern vehicle technologies. Learn about battery electric vehicles and sustainable transportation."
              defaultImage="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="battery-electric-vehicles" courseName="Battery Electric Vehicles (BEVs) Course" />
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
