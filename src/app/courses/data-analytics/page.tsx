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
  title: "Data Analytics Course",
  description: "Transform data into actionable insights with InternsForge. Master data analysis, visualization, and statistical modeling techniques for business intelligence.",
  openGraph: {
    title: "Data Analytics Course - InternsForge",
    description: "Transform data into actionable insights. Master data analysis, visualization, and statistical modeling techniques for business intelligence.",
    url: "https://internsforge.com/courses/data-analytics",
  },
  twitter: {
    title: "Data Analytics Course - InternsForge",
    description: "Transform data into actionable insights. Master data analysis, visualization, and statistical modeling techniques for business intelligence.",
  },
};

export default function DataAnalyticsPage() {
  const paymentLinks = getPaymentLinks('data-analytics');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Data Analytics Course",
    "description": "Comprehensive Data Analytics course covering data analysis, visualization, and statistical modeling. Build expertise in business intelligence.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "DA-001",
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
              courseName="Master Data Analytics"
              defaultDescription="Transform data into actionable insights. Master data analysis, visualization, and statistical modeling techniques for business intelligence."
              defaultImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="data-analytics" courseName="Data Analytics Course" />
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
