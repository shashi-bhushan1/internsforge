import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Return Policy",
  description: "Read InternsForge's Return Policy to understand our payment terms and refund policies. Learn about our payment options and course refund policies.",
  openGraph: {
    title: "Return Policy - InternsForge",
    description: "Read InternsForge's Return Policy to understand our payment terms and refund policies.",
    url: "https://internsforge.com/return-policy",
  },
  twitter: {
    title: "Return Policy - InternsForge",
    description: "Read InternsForge's Return Policy to understand our payment terms and refund policies.",
  },
};

export default function ReturnPolicyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Return Policy",
    "description": "Return Policy for InternsForge Edutech LLP",
    "url": "https://internsforge.com/return-policy",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-brand-page">
        <Header />
        <main className="w-full bg-brand-page">
          <section className="py-8 md:py-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px]">
            <div className="max-w-[1200px] mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12">
              {/* Page Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
                Our Return Policy
              </h1>

              {/* Return Policy Content */}
              <div className="max-w-none text-gray-900 space-y-10 md:space-y-12">
                
                {/* Payment Terms Section */}
                <section className="space-y-5">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Payment Terms</h2>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    The Platform is a paid service, and you agree to pay the fees as specified for the courses or plans you select. We offer various payment options to facilitate your enrollment, including card payments, online bank transfers, and wallet payments.
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    All payment gateways operate under their respective third-party terms and conditions. By proceeding with payment through any gateway, you agree to comply with their terms and conditions.
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    <strong>Please note: Refunds are not provided for workshops conducted.</strong>
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    InternsForge Edutech LLP reserves the right to alter, modify, or update the fees for any course or service at its sole discretion. Any changes to fees will be communicated to users through the Platform or via email.
                  </p>
                </section>

                {/* Return Policy Section */}
                <section className="space-y-5">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Return Policy</h2>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    The Platform is a paid service, and all course enrollments require payment as specified at the time of registration.
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    <strong>InternsForge Edutech LLP does not offer refunds for its courses; once payments are made, they are final and not subject to cancellation or refund.</strong>
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    We strongly advise all users to carefully review all course information, including course descriptions, curriculum, duration, prerequisites, and any other relevant details before making any payment. It is your responsibility to ensure that the course meets your requirements and expectations before enrollment.
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    By proceeding with payment, you acknowledge that you have read, understood, and accepted this no-refund policy. Your payment constitutes acceptance of these terms and conditions.
                  </p>
                </section>

              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
