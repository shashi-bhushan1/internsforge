import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BusinessDevelopmentTeamLeadPage from "@/components/careers/BusinessDevelopmentTeamLeadPage";

export const metadata: Metadata = {
  title: "Business Development Team Lead - Careers",
  description: "Join InternsForge as a Business Development Team Lead. Lead a team of business development professionals and drive business growth initiatives.",
  openGraph: {
    title: "Business Development Team Lead - Careers",
    description: "Join InternsForge as a Business Development Team Lead. Spearhead business growth initiatives.",
    url: "https://internsforge.com/careers/business-development-team-lead",
  },
  twitter: {
    title: "Business Development Team Lead - Careers",
    description: "Join InternsForge as a Business Development Team Lead. Spearhead business growth initiatives.",
  },
};

export default function BusinessDevelopmentTeamLeadPageRoute() {
  return (
    <div className="min-h-screen bg-brand-page">
      <Header />
      <main className="w-full">
        <BusinessDevelopmentTeamLeadPage />
      </main>
      <Footer />
    </div>
  );
}
