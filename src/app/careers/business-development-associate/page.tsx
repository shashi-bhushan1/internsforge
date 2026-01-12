import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BusinessDevelopmentPage from "@/components/careers/BusinessDevelopmentPage";

export const metadata: Metadata = {
  title: "Business Development Associate - Careers",
  description: "Join Mindenious Edutech as a Business Development Associate. We are seeking a proactive and skilled Business Development Associate to join our team.",
  openGraph: {
    title: "Business Development Associate - Careers",
    description: "Join Mindenious Edutech as a Business Development Associate.",
    url: "https://internsforge.com/careers/business-development-associate",
  },
  twitter: {
    title: "Business Development Associate - Careers",
    description: "Join Mindenious Edutech as a Business Development Associate.",
  },
};

export default function BusinessDevelopmentAssociatePage() {
  return (
    <div className="min-h-screen bg-brand-page">
      <Header />
      <main className="w-full">
        <BusinessDevelopmentPage />
      </main>
      <Footer />
    </div>
  );
}

