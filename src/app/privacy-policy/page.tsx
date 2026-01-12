import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read InternsForge's Privacy Policy to understand how we collect, use, and protect your personal information. Learn about our data practices, cookies, information sharing, and security measures.",
  openGraph: {
    title: "Privacy Policy - InternsForge",
    description: "Read InternsForge's Privacy Policy to understand how we collect, use, and protect your personal information.",
    url: "https://internsforge.com/privacy-policy",
  },
  twitter: {
    title: "Privacy Policy - InternsForge",
    description: "Read InternsForge's Privacy Policy to understand how we collect, use, and protect your personal information.",
  },
};

export default function PrivacyPolicyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Privacy Policy for InternsForge Edutech LLP",
    "url": "https://internsforge.com/privacy-policy",
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
                Our Privacy Policy
              </h1>

              {/* Privacy Policy Content */}
              <div className="max-w-none text-gray-900 space-y-10 md:space-y-12">
                
                {/* Introduction Section */}
                <section className="space-y-5">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Introduction</h2>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    This Privacy Policy is an electronic record in the form of an electronic contract formed under the Information Technology Act, 2000, the rules made thereunder, and the amended provisions pertaining to electronic documents / records in various statutes as amended by the Information Technology Act, 2000. This Privacy Policy does not require any physical, electronic, or digital signature.
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    This Privacy Policy is a legally binding document between you and InternsForge Edutech LLP (both terms defined below). The terms of this Privacy Policy will be effective upon your acceptance of the same (directly or indirectly in electronic form, by clicking on &quot;I accept&quot; tab / button or by use of the website or by other means) and will govern the relationship between you and InternsForge Edutech LLP for your use of the website <strong>&quot;www.internsforge.com&quot;</strong> (defined below).
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    This document is published and shall be construed in accordance with the provisions of the Information Technology (reasonable security practices and procedures and sensitive personal data of information) rules, 2011 under Information Technology Act, 2000; that require publishing of the Privacy Policy for collection, use, storage and transfer of sensitive personal data or information.
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    Please read this Privacy Policy carefully. By using the Website, you indicate that you understand, agree and consent to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use this Website.
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    By providing us your Information or by making use of the facilities provided by the Website, you hereby consent to the collection, storage, processing and transfer of any or all of Your Personal Information and Non-Personal Information by us as specified under this Privacy Policy. You further agree that such collection, use, storage and transfer of Your Information shall not cause any loss or wrongful gain to you or any other person.
                  </p>
                </section>

                {/* User Information Section */}
                <section className="space-y-5">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">User Information</h2>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    To avail certain services on our Website, users are required to provide certain information for the registration process namely: - a) your name, b) email address, c) sex, d) age, e) PIN code, f) credit card or debit card details, g) medical records and history, h) sexual orientation, i) biometric information, j) password etc., and / or your occupation, interests, and the like. The Information as supplied by the users enables us to improve our sites and provide you the most user-friendly experience.
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    All required information is service dependent and we may use the above-said user information to, maintain, protect, and improve its services (including advertising services) and for developing new services.
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    Such information will not be considered as sensitive if it is freely available and accessible in the public domain or is furnished under the Right to Information Act, 2005 or any other law for the time being in force.
                  </p>
                </section>

                {/* Cookies Section */}
                <section className="space-y-5">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Cookies</h2>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    To improve the responsiveness of the sites for our users, we may use &quot;cookies&quot;, or similar electronic tools to collect information to assign each visitor a unique, random number as a User Identification (User ID) to understand the user&apos;s individual interests using the Identified Computer. Unless you voluntarily identify yourself (through registration, for example), we will have no way of knowing who you are, even if we assign a cookie to your computer. The only personal information a cookie can contain is information you supply (an example of this is when you ask for our Personalised Horoscope). A cookie cannot read data off your hard drive. Our advertisers may also assign their own cookies to your browser (if you click on their ads), a process that we do not control.
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    Our web servers automatically collect limited information about your computer&apos;s connection to the Internet, including your IP address, when you visit our site. (Your IP address is a number that lets computers attached to the Internet know where to send you data — such as the web pages you view.) Your IP address does not identify you personally. We use this information to deliver our web pages to you upon request, to tailor our site to the interests of our users, to measure traffic within our site and let advertisers know the geographic locations from where our visitors come.
                  </p>
                </section>

                {/* Information Sharing Section */}
                <section className="space-y-5">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Information Sharing</h2>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    We shares the sensitive personal information to any third party without obtaining the prior consent of the user in the following limited circumstances:
                  </p>
                  <ol className="list-decimal list-inside space-y-4 ml-5 text-base md:text-[16px] leading-7 text-gray-900">
                    <li>
                      <strong>When it is requested or required by law or by any court or governmental agency or authority to disclose, for the purpose of verification of identity, or for the prevention, detection, investigation including cyber incidents, or for prosecution and punishment of offences.</strong> These disclosures are made in good faith and belief that such disclosure is reasonably necessary for enforcing these Terms; for complying with the applicable laws and regulations.
                    </li>
                    <li>
                      <strong>We proposes to share such information within its group companies and officers and employees of such group companies for the purpose of processing personal information on its behalf.</strong> We also ensure that these recipients of such information agree to process such information based on our instructions and in compliance with this Privacy Policy and any other appropriate confidentiality and security measures.
                    </li>
                  </ol>
                </section>

                {/* Information Security Section */}
                <section className="space-y-5">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Information Security</h2>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data. These include internal reviews of our data collection, storage and processing practices and security measures, including appropriate encryption and physical security measures to guard against unauthorized access to systems where we store personal data.
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    All information gathered on our Website is securely stored within our controlled database. The database is stored on servers secured behind a firewall; access to the servers is password-protected and is strictly limited. However, as effective as our security measures are, no security system is impenetrable. We cannot guarantee the security of our database, nor can we guarantee that information you supply will not be intercepted while being transmitted to us over the Internet. And, of course, any information you include in a posting to the discussion areas is available to anyone with internet access.
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    However the internet is an ever evolving medium. We may change our Privacy Policy from time to time to incorporate necessary future changes. Of course, our use of any information we gather will always be consistent with the policy under which the information was collected, regardless of what the new policy may be.
                  </p>
                </section>

                {/* Policy Updates Section */}
                <section className="space-y-5">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Policy Updates</h2>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    We reserve the right to change or update this Privacy Policy at any time. Such changes shall be effective immediately upon posting to the Website.
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
