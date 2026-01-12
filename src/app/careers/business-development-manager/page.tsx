import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BusinessDevelopmentManagerPage from "@/components/careers/BusinessDevelopmentManagerPage";

export const metadata: Metadata = {
  title: "Business Development Manager - Careers",
  description: "Join InternsForge as a Business Development Manager. Lead efforts in identifying new business opportunities and fostering strategic partnerships.",
  openGraph: {
    title: "Business Development Manager - Careers",
    description: "Join InternsForge as a Business Development Manager. Drive growth and expand market presence.",
    url: "https://internsforge.com/careers/business-development-manager",
  },
  twitter: {
    title: "Business Development Manager - Careers",
    description: "Join InternsForge as a Business Development Manager. Drive growth and expand market presence.",
  },
};

export default function BusinessDevelopmentManagerPageRoute() {
  return (
    <div className="min-h-screen bg-brand-page">
      <Header />
      <main className="w-full">
        <BusinessDevelopmentManagerPage />
      </main>
      <Footer />
    </div>
  );
}
