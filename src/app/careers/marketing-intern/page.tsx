import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import MarketingInternPage from "@/components/careers/MarketingInternPage";

export const metadata: Metadata = {
  title: "Marketing Intern - Careers",
  description: "Join InternsForge as a Marketing Intern. Gain practical experience in content creation, social media management, market research, and campaign execution.",
  openGraph: {
    title: "Marketing Intern - Careers",
    description: "Join InternsForge as a Marketing Intern. Gain practical experience in various aspects of marketing.",
    url: "https://internsforge.com/careers/marketing-intern",
  },
  twitter: {
    title: "Marketing Intern - Careers",
    description: "Join InternsForge as a Marketing Intern. Gain practical experience in various aspects of marketing.",
  },
};

export default function MarketingInternPageRoute() {
  return (
    <div className="min-h-screen bg-brand-page">
      <Header />
      <main className="w-full">
        <MarketingInternPage />
      </main>
      <Footer />
    </div>
  );
}
