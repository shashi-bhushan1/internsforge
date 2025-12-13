import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CertificationPartners from "@/components/CertificationPartners";
import EducationalAlliances from "@/components/EducationalAlliances";
import ProgramsUnique from "@/components/ProgramsUnique";
import ComboPacks from "@/components/ComboPacks";

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
      </main>
    </div>
  );
}
