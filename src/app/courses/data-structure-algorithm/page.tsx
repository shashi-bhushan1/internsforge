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
  title: "Data Structure & Algorithm Course",
  description: "Master fundamental data structures and algorithms with InternsForge. Learn problem-solving techniques and optimize code performance.",
  openGraph: {
    title: "Data Structure & Algorithm Course - InternsForge",
    description: "Master fundamental data structures and algorithms. Learn problem-solving techniques and optimize code performance.",
    url: "https://internsforge.com/courses/data-structure-algorithm",
  },
  twitter: {
    title: "Data Structure & Algorithm Course - InternsForge",
    description: "Master fundamental data structures and algorithms. Learn problem-solving techniques and optimize code performance.",
  },
};

export default function DataStructureAlgorithmPage() {
  const paymentLinks = getPaymentLinks('data-structure-algorithm');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Data Structure & Algorithm Course",
    "description": "Comprehensive Data Structure & Algorithm course covering problem-solving techniques and code optimization. Build expertise in algorithms.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "DSA-001",
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
              courseName="Master Data Structure & Algorithm"
              defaultDescription="Master fundamental data structures and algorithms. Learn problem-solving techniques and optimize code performance."
              defaultImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="data-structure-algorithm" courseName="Data Structure & Algorithm Course" />
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
