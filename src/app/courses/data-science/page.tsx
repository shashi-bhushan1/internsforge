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
  title: "Data Science Course",
  description: "Learn Data Science with InternsForge. Use data and statistical models to make predictions and communicate findings. Master data analysis and visualization.",
  openGraph: {
    title: "Data Science Course - InternsForge",
    description: "Learn Data Science. Use data and statistical models to make predictions and communicate findings with a broad range of audiences.",
    url: "https://internsforge.com/courses/data-science",
  },
  twitter: {
    title: "Data Science Course - InternsForge",
    description: "Learn Data Science. Use data and statistical models to make predictions and communicate findings with a broad range of audiences.",
  },
};

export default function DataSciencePage() {
  const paymentLinks = getPaymentLinks('data-science');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Data Science Course",
    "description": "Comprehensive Data Science course covering data analysis, statistical modeling, and visualization. Build expertise in data science technologies.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "DS-001",
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
              courseName="Master Data Science"
              defaultDescription="This course will help you learn how to use data and statistical models to make predictions, communicate your findings with a broad range of audiences."
              defaultImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="data-science" />
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
