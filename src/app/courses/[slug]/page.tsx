import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
import { getCourse } from "@/data/courses";
import { getPaymentLinks } from "@/data/paymentLinks";
import { StructuredData } from "@/components/seo/StructuredData";

export async function generateStaticParams() {
  const { getAllCourses } = await import('@/data/courses');
  const allCourses = getAllCourses();
  
  return allCourses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  
  if (!course) {
    return {
      title: 'Course Not Found',
    };
  }
  
  return {
    title: course.title,
    description: course.metaDescription,
    openGraph: {
      title: `${course.title} - InternsForge`,
      description: course.shortDescription,
      url: `https://internsforge.com/courses/${course.slug}`,
    },
    twitter: {
      title: `${course.title} - InternsForge`,
      description: course.shortDescription,
    },
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  
  if (!course) {
    notFound();
  }
  
  const paymentLinks = getPaymentLinks(course.paymentSlug);
  
  return (
    <>
      <StructuredData
        type="Course"
        data={{
          name: course.title,
          description: course.metaDescription,
          courseCode: course.courseCode,
          educationalLevel: "Advanced"
        }}
      />
      <div className="min-h-screen bg-brand-page">
        <Header />
        <main className="w-full">
          <Suspense fallback={<div className="h-[400px] bg-brand-page" />}>
            <CourseHeroWrapper
              courseName={course.courseName}
              defaultDescription={course.description}
              defaultImage={course.image}
              price="$85.00"
              chapters={course.chapters}
              lessons={course.lessons}
            />
          </Suspense>
          <CourseKeyBenefits 
            capstoneProjects={course.capstoneProjects}
          />
          <CourseCurriculum 
            courseType={course.courseType} 
            courseName={course.curriculumName || course.title} 
          />
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