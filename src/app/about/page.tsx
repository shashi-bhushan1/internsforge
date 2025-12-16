import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import AlumniWorksAt from "@/components/AlumniWorksAt";
import MeetTheTeam from "@/components/MeetTheTeam";
import StudentTestimonials from "@/components/StudentTestimonials";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="w-full">
        <AboutHero />
        <WhyChooseUs />
        <AlumniWorksAt />
        <MeetTheTeam />
        <StudentTestimonials />
      </main>
      <Footer />
    </div>
  );
}

