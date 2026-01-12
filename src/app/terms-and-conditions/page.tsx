import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read InternsForge's Terms & Conditions to understand the rules and regulations for using our website. Learn about acceptable use, liability, indemnity, and other important terms.",
  openGraph: {
    title: "Terms & Conditions - InternsForge",
    description: "Read InternsForge's Terms & Conditions to understand the rules and regulations for using our website.",
    url: "https://internsforge.com/terms-and-conditions",
  },
  twitter: {
    title: "Terms & Conditions - InternsForge",
    description: "Read InternsForge's Terms & Conditions to understand the rules and regulations for using our website.",
  },
};

export default function TermsAndConditionsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms & Conditions",
    "description": "Terms & Conditions for InternsForge Edutech LLP",
    "url": "https://internsforge.com/terms-and-conditions",
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
                Our Terms & Conditions
              </h1>

              {/* Terms & Conditions Content */}
              <div className="max-w-none text-gray-900 space-y-10 md:space-y-12">
                
                {/* Terms and Conditions Section */}
                <section className="space-y-5">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Terms and Conditions</h2>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    By accessing this website, you agree to be bound by these Terms and Conditions of use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    For the purposes of these Terms and Conditions, &quot;We,&quot; &quot;Us,&quot; &quot;Our,&quot; or &quot;Company&quot; refers to InternsForge Edutech LLP, and &quot;Visitor&quot; or &quot;User&quot; refers to the individual accessing this website.
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    The business reserves the right to amend these terms and conditions at any time without prior notice. It is the responsibility of the user to review these terms periodically for any changes.
                  </p>
                </section>

                {/* Use of Content Section */}
                <section className="space-y-5">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Use of Content</h2>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    All intellectual property, including but not limited to logos, brands, marks, graphics, photographs, images, text, audio, video, software, and other content displayed on this website, belongs to InternsForge Edutech LLP or its associated entities. You may not use, reproduce, display, distribute, or modify any of the content on this website for any public or commercial purpose without the express written permission of InternsForge Edutech LLP.
                  </p>
                </section>

                {/* Acceptable Website Use Section */}
                <section className="space-y-5">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Acceptable Website Use</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                        (A) Security Rules
                      </h3>
                      <p className="text-base md:text-[16px] leading-7 text-gray-900">
                        You are prohibited from violating or attempting to violate the security of the website, including, without limitation: (a) accessing data not intended for you or logging onto a server or account that you are not authorized to access; (b) attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without proper authorization; (c) attempting to interfere with service to any user, host or network, including, without limitation, via means of submitting a virus to the website, overloading, &quot;flooding,&quot; &quot;spamming,&quot; &quot;mail bombing&quot; or &quot;crashing&quot;; (d) sending unsolicited email, including promotions and/or advertising of products or services; or (e) forging any TCP/IP packet header or any part of the header information in any email or newsgroup posting. Violations of system or network security may result in civil or criminal liability.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                        (B) General Rules
                      </h3>
                      <p className="text-base md:text-[16px] leading-7 text-gray-900">
                        You may not use the website in order to transmit, distribute, store or destroy material: (a) in violation of any applicable law or regulation; (b) in a manner that will infringe the copyright, trademark, trade secret or other intellectual property rights of others or violate the privacy, publicity or other personal rights of others; (c) that is defamatory, obscene, threatening, abusive or hateful; or (d) that promotes illegal activities or conduct that is abusive, threatening, obscene, defamatory or libelous.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Indemnity Section */}
                <section className="space-y-5">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Indemnity</h2>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    You agree to indemnify, defend and hold harmless InternsForge Edutech LLP, its officers, directors, employees, agents, licensors, suppliers and any third-party information providers to the website from and against all losses, expenses, damages and costs, including reasonable attorneys&apos; fees, resulting from any violation of these Terms and Conditions (including negligent or wrongful conduct) by you or any other person accessing the website using your account.
                  </p>
                </section>

                {/* Liability Section */}
                <section className="space-y-5">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Liability</h2>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    InternsForge Edutech LLP and its affiliates, directors, officers, employees, or agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from: (a) your use or inability to use the service; (b) any unauthorized access to or use of our servers and/or any personal information stored therein; (c) any interruption or cessation of transmission to or from our service; (d) any bugs, viruses, trojan horses, or the like, which may be transmitted to or through our service by any third party; (e) any errors or omissions in any content or for any loss or damage of any kind incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available via the service, whether based on warranty, contract, tort, or any other legal theory, and whether or not the company is advised of the possibility of such damages.
                  </p>
                </section>

                {/* Disclaimer of Consequential Damages Section */}
                <section className="space-y-5">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Disclaimer of Consequential Damages</h2>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    In no event shall InternsForge Edutech LLP, its affiliates, or any third parties mentioned on the website be liable for any damages whatsoever (including, without limitation, incidental and consequential damages, lost profits, or damages resulting from lost data or business interruption) resulting from the use or inability to use the website and the material, whether based on warranty, contract, tort, or any other legal theory, and whether or not the company is advised of the possibility of such damages. If your use of materials from this website results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof.
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
