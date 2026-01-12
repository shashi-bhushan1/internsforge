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
  title: "VLSI Course",
  description: "Master Very Large Scale Integration design and verification with InternsForge. Learn digital circuit design, FPGA programming, and semiconductor technologies.",
  openGraph: {
    title: "VLSI Course - InternsForge",
    description: "Master Very Large Scale Integration design and verification. Learn digital circuit design, FPGA programming, and semiconductor technologies.",
    url: "https://internsforge.com/courses/vlsi",
  },
  twitter: {
    title: "VLSI Course - InternsForge",
    description: "Master Very Large Scale Integration design and verification. Learn digital circuit design, FPGA programming, and semiconductor technologies.",
  },
};

export default function VLSIPage() {
  const paymentLinks = getPaymentLinks('vlsi');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "VLSI Course",
    "description": "Comprehensive VLSI course covering digital circuit design, FPGA programming, and semiconductor technologies. Build expertise in VLSI design.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "VLSI-001",
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
              courseName="Master VLSI"
              defaultDescription="Master Very Large Scale Integration design and verification. Learn digital circuit design, FPGA programming, and semiconductor technologies."
              defaultImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="vlsi" courseName="VLSI Course" />
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
