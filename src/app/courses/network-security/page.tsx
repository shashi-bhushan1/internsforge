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
  title: "Network Security Course",
  description: "Master Network Security with InternsForge. Learn network protocols, firewall configuration, intrusion detection, and secure network architecture. Build expertise in protecting network infrastructure.",
  openGraph: {
    title: "Network Security Course - InternsForge",
    description: "Master Network Security with InternsForge. Learn network protocols, firewall configuration, intrusion detection, and secure network architecture.",
    url: "https://internsforge.com/courses/network-security",
  },
  twitter: {
    title: "Network Security Course - InternsForge",
    description: "Master Network Security with InternsForge. Learn network protocols, firewall configuration, intrusion detection, and secure network architecture.",
  },
};

export default function NetworkSecurityPage() {
  const paymentLinks = getPaymentLinks('network-security');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Network Security Course",
    "description": "Comprehensive Network Security course covering network protocols, firewall configuration, intrusion detection systems, and secure network architecture. Build expertise in protecting network infrastructure.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "NET-SEC-001",
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
              courseName="Master Network Security"
              defaultDescription="Master network security fundamentals and advanced techniques. Learn to design, implement, and manage secure network infrastructures. Protect networks from threats and vulnerabilities."
              defaultImage="/courses/Network Security.webp"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="network-security" />
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

