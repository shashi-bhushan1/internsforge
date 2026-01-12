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
  title: "Business Analytics Course",
  description: "Transform data into actionable business insights with InternsForge. Master business analytics, data visualization, and statistical modeling for strategic decision-making.",
  openGraph: {
    title: "Business Analytics Course - InternsForge",
    description: "Transform data into actionable business insights. Master business analytics, data visualization, and statistical modeling for strategic decision-making.",
    url: "https://internsforge.com/courses/business-analytics",
  },
  twitter: {
    title: "Business Analytics Course - InternsForge",
    description: "Transform data into actionable business insights. Master business analytics, data visualization, and statistical modeling for strategic decision-making.",
  },
};

export default function BusinessAnalyticsPage() {
  const paymentLinks = getPaymentLinks('business-analytics');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Business Analytics Course",
    "description": "Comprehensive Business Analytics course covering data analysis, visualization, and strategic decision-making. Build expertise in business intelligence.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "BA-001",
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
              courseName="Master Business Analytics"
              defaultDescription="Transform data into actionable business insights. Master business analytics, data visualization, and statistical modeling for strategic decision-making."
              defaultImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="business-analytics" courseName="Business Analytics Course" />
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
