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
  title: "Cloud Computing Course",
  description: "Master cloud computing platforms and services with InternsForge. Learn to deploy, manage, and scale applications in the cloud with industry-leading tools.",
  openGraph: {
    title: "Cloud Computing Course - InternsForge",
    description: "Master cloud computing platforms and services. Learn to deploy, manage, and scale applications in the cloud with industry-leading tools.",
    url: "https://internsforge.com/courses/cloud-computing",
  },
  twitter: {
    title: "Cloud Computing Course - InternsForge",
    description: "Master cloud computing platforms and services. Learn to deploy, manage, and scale applications in the cloud with industry-leading tools.",
  },
};

export default function CloudComputingPage() {
  const paymentLinks = getPaymentLinks('cloud-computing');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Cloud Computing Course",
    "description": "Comprehensive Cloud Computing course covering cloud platforms, deployment, and management. Build expertise in cloud technologies.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "CC-001",
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
              courseName="Master Cloud Computing"
              defaultDescription="Master cloud computing platforms and services. Learn to deploy, manage, and scale applications in the cloud with industry-leading tools."
              defaultImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="cloud-computing" courseName="Cloud Computing Course" />
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
