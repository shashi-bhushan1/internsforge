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
  title: "Programming in Python Course",
  description: "Learn Python programming from fundamentals to advanced concepts with InternsForge. Build applications, automate tasks, and dive into data science and AI.",
  openGraph: {
    title: "Programming in Python Course - InternsForge",
    description: "Learn Python programming from fundamentals to advanced concepts. Build applications, automate tasks, and dive into data science and AI.",
    url: "https://internsforge.com/courses/python",
  },
  twitter: {
    title: "Programming in Python Course - InternsForge",
    description: "Learn Python programming from fundamentals to advanced concepts. Build applications, automate tasks, and dive into data science and AI.",
  },
};

export default function PythonPage() {
  const paymentLinks = getPaymentLinks('python');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Programming in Python Course",
    "description": "Comprehensive Python programming course covering fundamentals to advanced concepts. Build applications and automate tasks.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "PY-001",
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
              courseName="Programming in Python"
              defaultDescription="Learn Python programming from fundamentals to advanced concepts. Build applications, automate tasks, and dive into data science and AI."
              defaultImage="https://images.unsplash.com/photo-1526379095098-d400fd0bf040?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="python" courseName="Programming in Python Course" />
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
