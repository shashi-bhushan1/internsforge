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
  title: "Genetic Engineering Course",
  description: "Explore medical technologies and healthcare informatics with InternsForge. Learn medical coding, bioinformatics, and genetic engineering applications.",
  openGraph: {
    title: "Genetic Engineering Course - InternsForge",
    description: "Explore medical technologies and healthcare informatics. Learn medical coding, bioinformatics, and genetic engineering applications.",
    url: "https://internsforge.com/courses/genetic-engineering",
  },
  twitter: {
    title: "Genetic Engineering Course - InternsForge",
    description: "Explore medical technologies and healthcare informatics. Learn medical coding, bioinformatics, and genetic engineering applications.",
  },
};

export default function GeneticEngineeringPage() {
  const paymentLinks = getPaymentLinks('genetic-engineering');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Genetic Engineering Course",
    "description": "Comprehensive Genetic Engineering course covering healthcare informatics and genetic engineering. Build expertise in medical technologies.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "GE-001",
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
              courseName="Master Genetic Engineering"
              defaultDescription="Explore medical technologies and healthcare informatics. Learn medical coding, bioinformatics, and genetic engineering applications."
              defaultImage="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="web-development" courseName="Genetic Engineering Course" />
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
