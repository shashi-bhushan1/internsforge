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
  title: "Digital Marketing Course",
  description: "Master Digital Marketing with InternsForge. Learn SEO, social media marketing, content marketing, and analytics. Build successful digital marketing campaigns and grow your career.",
  openGraph: {
    title: "Digital Marketing Course - InternsForge",
    description: "Master Digital Marketing with InternsForge. Learn SEO, social media marketing, content marketing, and analytics.",
    url: "https://internsforge.com/courses/digital-marketing",
  },
  twitter: {
    title: "Digital Marketing Course - InternsForge",
    description: "Master Digital Marketing with InternsForge. Learn SEO, social media marketing, content marketing, and analytics.",
  },
};

export default function DigitalMarketingPage() {
  const paymentLinks = getPaymentLinks('digital-marketing');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Digital Marketing Course",
    "description": "Comprehensive Digital Marketing course covering SEO, social media marketing, content marketing, and analytics. Build successful campaigns and advance your career.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "DIG-MKT-001",
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
              courseName="Master Digital Marketing"
              defaultDescription="Master digital marketing strategies and tools. Learn SEO, social media marketing, content creation, and analytics to grow businesses."
              defaultImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="digital-marketing" />
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

