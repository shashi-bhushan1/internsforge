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
  title: "Human Resources & Management Course",
  description: "Develop leadership and management skills with InternsForge. Learn strategic planning, team management, and organizational effectiveness.",
  openGraph: {
    title: "Human Resources & Management Course - InternsForge",
    description: "Develop leadership and management skills. Learn strategic planning, team management, and organizational effectiveness.",
    url: "https://internsforge.com/courses/human-resources-management",
  },
  twitter: {
    title: "Human Resources & Management Course - InternsForge",
    description: "Develop leadership and management skills. Learn strategic planning, team management, and organizational effectiveness.",
  },
};

export default function HumanResourcesManagementPage() {
  const paymentLinks = getPaymentLinks('human-resources-management');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Human Resources & Management Course",
    "description": "Comprehensive HR & Management course covering leadership, strategic planning, and team management. Build expertise in organizational effectiveness.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "HRM-001",
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
              courseName="Master Human Resources & Management"
              defaultDescription="Develop leadership and management skills. Learn strategic planning, team management, and organizational effectiveness."
              defaultImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="human-resources-management" courseName="Human Resources & Management Course" />
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
