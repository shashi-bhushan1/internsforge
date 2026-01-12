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
  title: "Android App Development Course",
  description: "Create powerful Android applications using modern development tools with InternsForge. Learn UI/UX design, API integration, and app deployment.",
  openGraph: {
    title: "Android App Development Course - InternsForge",
    description: "Create powerful Android applications using modern development tools. Learn UI/UX design, API integration, and app deployment.",
    url: "https://internsforge.com/courses/android-app-development",
  },
  twitter: {
    title: "Android App Development Course - InternsForge",
    description: "Create powerful Android applications using modern development tools. Learn UI/UX design, API integration, and app deployment.",
  },
};

export default function AndroidAppDevelopmentPage() {
  const paymentLinks = getPaymentLinks('android-app-development');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Android App Development Course",
    "description": "Comprehensive Android App Development course covering UI/UX design, API integration, and deployment. Build powerful mobile applications.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "AND-001",
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
              courseName="Master Android App Development"
              defaultDescription="Create powerful Android applications using modern development tools. Learn UI/UX design, API integration, and app deployment."
              defaultImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="web-development" courseName="Android App Development Course" />
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
