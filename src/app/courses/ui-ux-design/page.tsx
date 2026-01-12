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
  title: "UI/UX Design Course",
  description: "Create beautiful and intuitive user interfaces with InternsForge. Learn design principles, prototyping, and user experience optimization.",
  openGraph: {
    title: "UI/UX Design Course - InternsForge",
    description: "Create beautiful and intuitive user interfaces. Learn design principles, prototyping, and user experience optimization.",
    url: "https://internsforge.com/courses/ui-ux-design",
  },
  twitter: {
    title: "UI/UX Design Course - InternsForge",
    description: "Create beautiful and intuitive user interfaces. Learn design principles, prototyping, and user experience optimization.",
  },
};

export default function UIUXDesignPage() {
  const paymentLinks = getPaymentLinks('ui-ux-design');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "UI/UX Design Course",
    "description": "Comprehensive UI/UX Design course covering design principles, prototyping, and user experience optimization. Build beautiful interfaces.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "UIUX-001",
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
              courseName="Master UI/UX Design"
              defaultDescription="Create beautiful and intuitive user interfaces. Learn design principles, prototyping, and user experience optimization."
              defaultImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="ui-ux-design" courseName="UI/UX Design Course" />
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
