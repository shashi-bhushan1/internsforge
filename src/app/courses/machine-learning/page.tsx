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
  title: "Machine Learning Course",
  description: "Master Machine Learning with InternsForge. Learn to leverage data, build models, and create intelligent systems using tools and techniques. Advance your career in ML.",
  openGraph: {
    title: "Machine Learning Course - InternsForge",
    description: "Master Machine Learning. Learn to leverage data, build models, and create intelligent systems using tools and techniques.",
    url: "https://internsforge.com/courses/machine-learning",
  },
  twitter: {
    title: "Machine Learning Course - InternsForge",
    description: "Master Machine Learning. Learn to leverage data, build models, and create intelligent systems using tools and techniques.",
  },
};

export default function MachineLearningPage() {
  const paymentLinks = getPaymentLinks('machine-learning');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Machine Learning Course",
    "description": "Comprehensive Machine Learning course covering data modeling, algorithms, and intelligent systems. Build expertise in ML technologies.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "ML-001",
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
              courseName="Master Machine Learning"
              defaultDescription="The Machine Learning course will teach you how to leverage data, build models, and create intelligent systems by using tools and techniques."
              defaultImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="machine-learning" />
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
