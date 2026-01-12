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
  title: "Artificial Intelligence Course",
  description: "Explore the cutting-edge world of AI and machine learning with InternsForge. Develop intelligent systems and algorithms that solve real-world problems. Build expertise in artificial intelligence.",
  openGraph: {
    title: "Artificial Intelligence Course - InternsForge",
    description: "Explore the cutting-edge world of AI and machine learning. Develop intelligent systems and algorithms that solve real-world problems.",
    url: "https://internsforge.com/courses/artificial-intelligence",
  },
  twitter: {
    title: "Artificial Intelligence Course - InternsForge",
    description: "Explore the cutting-edge world of AI and machine learning. Develop intelligent systems and algorithms that solve real-world problems.",
  },
};

export default function ArtificialIntelligencePage() {
  const paymentLinks = getPaymentLinks('artificial-intelligence');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Artificial Intelligence Course",
    "description": "Comprehensive Artificial Intelligence course covering machine learning, neural networks, and intelligent systems. Build expertise in AI technologies.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "AI-001",
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
              courseName="Master Artificial Intelligence"
              defaultDescription="Explore the cutting-edge world of AI and machine learning. Develop intelligent systems and algorithms that solve real-world problems."
              defaultImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="artificial-intelligence" />
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
