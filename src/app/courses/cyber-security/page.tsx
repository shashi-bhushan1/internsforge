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
  title: "Cyber Security Course",
  description: "Protect digital assets with our advanced Cyber Security course at InternsForge. Learn ethical hacking, network security, and threat management. Build expertise in cybersecurity.",
  openGraph: {
    title: "Cyber Security Course - InternsForge",
    description: "Protect digital assets with our advanced Cyber Security course. Learn ethical hacking, network security, and threat management.",
    url: "https://internsforge.com/courses/cyber-security",
  },
  twitter: {
    title: "Cyber Security Course - InternsForge",
    description: "Protect digital assets with our advanced Cyber Security course. Learn ethical hacking, network security, and threat management.",
  },
};

export default function CyberSecurityPage() {
  const paymentLinks = getPaymentLinks('cyber-security');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Cyber Security Course",
    "description": "Advanced Cyber Security course covering ethical hacking, network security, threat management, and digital asset protection. Build expertise in cybersecurity.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "CYB-SEC-001",
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
              courseName="Master Cyber Security"
              defaultDescription="Master key cybersecurity concepts to protect your digital assets. Gain practical skills to identify threats and implement robust security measures."
              defaultImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="cyber-security" />
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

