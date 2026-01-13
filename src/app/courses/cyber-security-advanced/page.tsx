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
  title: "Advanced Cyber Security Course (6 Months)",
  description: "Master advanced Cyber Security with our comprehensive 6-month course at InternsForge. Learn ethical hacking, network security, threat management, and advanced defense strategies.",
  openGraph: {
    title: "Advanced Cyber Security Course (6 Months) - InternsForge",
    description: "Master advanced Cyber Security. Learn ethical hacking, network security, threat management, and advanced defense strategies in this comprehensive 6-month course.",
    url: "https://internsforge.com/courses/cyber-security-advanced",
  },
  twitter: {
    title: "Advanced Cyber Security Course (6 Months) - InternsForge",
    description: "Master advanced Cyber Security. Learn ethical hacking, network security, threat management, and advanced defense strategies.",
  },
};

export default function AdvanceCyberSecurityPage() {
  const paymentLinks = getPaymentLinks('cyber-security-advanced');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Advanced Cyber Security Course (6 Months)",
    "description": "Comprehensive 6-month Advanced Cyber Security course covering ethical hacking, network security, threat management, and advanced defense strategies. Build expertise in cybersecurity.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "InternsForge",
      "url": "https://internsforge.com"
    },
    "courseCode": "ADV-CYB-SEC-001",
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
              courseName="Advanced Cyber Security"
              defaultDescription="Master advanced cybersecurity concepts and techniques. Learn ethical hacking, network security, threat management, and implement robust defense strategies to protect digital assets."
              defaultImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
              price="$85.00"
              chapters={24}
              lessons={72}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={2}
          />
          <CourseCurriculum courseType="cyber-security" courseName="Advanced Cyber Security Course" />
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
