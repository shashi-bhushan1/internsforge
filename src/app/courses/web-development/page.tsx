import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import CourseHeroWrapper from "@/components/CourseHeroWrapper";
import CourseKeyBenefits from "@/components/CourseKeyBenefits";
import CourseCurriculum from "@/components/CourseCurriculum";
import PricingPlans from "@/components/PricingPlans";
import CertificateSection from "@/components/CertificateSection";
import AlumniWorksAt from "@/components/AlumniWorksAt";
import InvestInYourself from "@/components/InvestInYourself";
import StudentTestimonials from "@/components/StudentTestimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Web Development Course",
  description: "Learn Full Stack Web Development with InternsForge. Master HTML, CSS, JavaScript, and modern frameworks. Build real-world projects and advance your career in web development.",
  openGraph: {
    title: "Web Development Course - InternsForge",
    description: "Learn Full Stack Web Development with InternsForge. Master HTML, CSS, JavaScript, and modern frameworks.",
    url: "https://internsforge.com/courses/web-development",
  },
  twitter: {
    title: "Web Development Course - InternsForge",
    description: "Learn Full Stack Web Development with InternsForge. Master HTML, CSS, JavaScript, and modern frameworks.",
  },
};

export default function WebDevelopmentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Web Development Course",
    "description": "Comprehensive Full Stack Web Development course covering HTML, CSS, JavaScript, and modern frameworks. Build real-world projects and advance your career.",
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
              courseName="Full Stack Web Development"
              defaultDescription="Build modern, responsive web applications from frontend to backend. Learn industry-standard technologies and frameworks to create scalable solutions."
              defaultImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="web-development" />
          <PricingPlans />
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

