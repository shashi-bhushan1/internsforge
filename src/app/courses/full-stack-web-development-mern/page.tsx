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
  title: "Full Stack Web Development (MERN) Course",
  description: "Master Full Stack Web Development with MERN Stack at InternsForge. Learn MongoDB, Express.js, React, and Node.js to build modern, scalable web applications. Advanced 6-month course.",
  openGraph: {
    title: "Full Stack Web Development (MERN) Course - InternsForge",
    description: "Master Full Stack Web Development with MERN Stack. Learn MongoDB, Express.js, React, and Node.js to build modern, scalable web applications.",
    url: "https://internsforge.com/courses/full-stack-web-development-mern",
  },
  twitter: {
    title: "Full Stack Web Development (MERN) Course - InternsForge",
    description: "Master Full Stack Web Development with MERN Stack. Learn MongoDB, Express.js, React, and Node.js to build modern, scalable web applications.",
  },
};

export default function FullStackWebDevelopmentMERNPage() {
  const paymentLinks = getPaymentLinks('full-stack-web-development-mern');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Full Stack Web Development (MERN) Course",
    "description": "Comprehensive Full Stack Web Development course with MERN Stack (MongoDB, Express.js, React, Node.js). Build modern, scalable web applications and advance your career.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "FSWD-MERN-001",
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
              courseName="Full Stack Web Development (MERN)"
              defaultDescription="Master the complete MERN stack - MongoDB, Express.js, React, and Node.js. Build full-stack applications from scratch, learn modern development practices, and create scalable web solutions."
              defaultImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={14}
              lessons={84}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={3}
          />
          <CourseCurriculum courseType="full-stack-web-development" courseName="Full Stack Web Development (MERN) Course" />
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
