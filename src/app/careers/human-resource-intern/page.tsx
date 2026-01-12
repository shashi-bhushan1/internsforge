import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HumanResourceInternPage from "@/components/careers/HumanResourceInternPage";

export const metadata: Metadata = {
  title: "Human Resource Intern - Careers",
  description: "Join InternsForge as a Human Resource Intern. Gain hands-on experience in recruitment, employee engagement, and HR administration.",
  openGraph: {
    title: "Human Resource Intern - Careers",
    description: "Join InternsForge as a Human Resource Intern. Gain valuable experience in HR practices.",
    url: "https://internsforge.com/careers/human-resource-intern",
  },
  twitter: {
    title: "Human Resource Intern - Careers",
    description: "Join InternsForge as a Human Resource Intern. Gain valuable experience in HR practices.",
  },
};

export default function HumanResourceInternPageRoute() {
  return (
    <div className="min-h-screen bg-brand-page">
      <Header />
      <main className="w-full">
        <HumanResourceInternPage />
      </main>
      <Footer />
    </div>
  );
}
