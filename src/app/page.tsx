import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CertificationPartners from "@/components/CertificationPartners";
import EducationalAlliances from "@/components/EducationalAlliances";
import ProgramsUnique from "@/components/ProgramsUnique";
import ComboPacks from "@/components/ComboPacks";
import TrendingCourses from "@/components/TrendingCourses";
import TopFeaturedCourses from "@/components/TopFeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import LearningJourney from "@/components/LearningJourney";
import ToolsYouWillLearn from "@/components/ToolsYouWillLearn";
import MeetTheTeam from "@/components/MeetTheTeam";
import AlumniWorksAt from "@/components/AlumniWorksAt";
import InvestInYourself from "@/components/InvestInYourself";
import StudentTestimonials from "@/components/StudentTestimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="w-full">
        <Hero />
        <CertificationPartners />
        <EducationalAlliances />
        <ProgramsUnique />
        <ComboPacks />
        <TrendingCourses />
        <TopFeaturedCourses />
        <WhyChooseUs />
        <LearningJourney />
        <ToolsYouWillLearn />
        <MeetTheTeam />
        <AlumniWorksAt />
        <InvestInYourself />
        <StudentTestimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
