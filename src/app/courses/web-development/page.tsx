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
  title: "Web Development Course",
  description: "Learn Web Development with InternsForge. Master HTML, CSS, JavaScript, and modern frameworks. Build real-world projects and advance your career in web development.",
  openGraph: {
    title: "Web Development Course - InternsForge",
    description: "Learn Web Development with InternsForge. Master HTML, CSS, JavaScript, and modern frameworks.",
    url: "https://internsforge.com/courses/web-development",
  },
  twitter: {
    title: "Web Development Course - InternsForge",
    description: "Learn Web Development with InternsForge. Master HTML, CSS, JavaScript, and modern frameworks.",
  },
};

export default function WebDevelopmentPage() {
  const paymentLinks = getPaymentLinks('web-development');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Web Development Course",
    "description": "Comprehensive Web Development course covering HTML, CSS, JavaScript, and modern frameworks. Build real-world projects and advance your career.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "WEB-DEV-001",
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
              courseName="Master Web Development"
              defaultDescription="Build modern, responsive web applications. Learn HTML, CSS, JavaScript, and industry-standard technologies to create scalable solutions."
              defaultImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="web-development" courseName="Web Development Course" />
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

