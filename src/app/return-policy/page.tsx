import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Read InternsForge's Refund Policy to understand our cancellation and refund terms. Learn about order cancellation rights, refund conditions, and our refund policies.",
  openGraph: {
    title: "Refund Policy - InternsForge",
    description: "Read InternsForge's Refund Policy to understand our cancellation and refund terms.",
    url: "https://internsforge.com/return-policy",
  },
  twitter: {
    title: "Refund Policy - InternsForge",
    description: "Read InternsForge's Refund Policy to understand our cancellation and refund terms.",
  },
};

export default function RefundPolicyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Refund Policy",
    "description": "Refund Policy for InternsForge Edutech LLP",
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
                Our Refund Policy
              </h1>

              {/* Refund Policy Content */}
              <div className="max-w-none text-gray-900 space-y-10 md:space-y-12">
                
                {/* Interpretation and Definitions Section */}
                <section className="space-y-5">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Interpretation and Definitions</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">I. Interpretation</h3>
                      <p className="text-base md:text-[16px] leading-7 text-gray-900">
                        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">II. Definitions</h3>
                      <p className="text-base md:text-[16px] leading-7 text-gray-900 mb-4">
                        For the purposes of this Return and Refund Policy:
                      </p>
                      <ul className="list-disc list-inside space-y-3 ml-5 text-base md:text-[16px] leading-7 text-gray-900">
                        <li>
                          <strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to internsforge.
                        </li>
                        <li>
                          <strong>Goods</strong> refer to the items offered for sale on the Service.
                        </li>
                        <li>
                          <strong>Orders</strong> mean a request by You to purchase Goods from Us.
                        </li>
                        <li>
                          <strong>Service</strong> refers to the Website.
                        </li>
                        <li>
                          <strong>Website</strong> refers to internsforge, accessible from <a href="https://www.internsforge.com" className="text-brand-orange hover:underline">https://www.internsforge.com</a>.
                        </li>
                        <li>
                          <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Your order cancellation rights Section */}
                <section className="space-y-5">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Your Order Cancellation Rights</h2>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    You are entitled to cancel Your Order within 24 hours without giving any reason for doing so.
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    The deadline for cancelling an Order is 24 hours from the date on which You received the Goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by e-mail at <a href="mailto:support@internsforge.com" className="text-brand-orange hover:underline">support@internsforge.com</a>.
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.
                  </p>
                </section>

                {/* Conditions for Refund from User's End Section */}
                <section className="space-y-5">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Conditions for Refund from User&apos;s End</h2>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    In order for the Goods to be eligible for a return, please make sure that:
                  </p>
                  <ul className="list-disc list-inside space-y-3 ml-5 text-base md:text-[16px] leading-7 text-gray-900">
                    <li>The Goods were purchased in the last 24 hours</li>
                  </ul>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    The following Goods cannot be returned:
                  </p>
                  <ul className="list-disc list-inside space-y-3 ml-5 text-base md:text-[16px] leading-7 text-gray-900">
                    <li>The supply of Goods made to Your specifications or clearly personalized.</li>
                    <li>The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.</li>
                    <li>The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li>
                    <li>The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.</li>
                  </ul>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    Please email your purchase receipt to <a href="mailto:support@internsforge.com" className="text-brand-orange hover:underline">support@internsforge.com</a>.
                  </p>
                </section>

                {/* Conditions for Refund from Our End Section */}
                <section className="space-y-5">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Conditions for Refund from Our End</h2>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    We reserve the right to refuse or cancel Your Order at any time for certain reasons including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-3 ml-5 text-base md:text-[16px] leading-7 text-gray-900">
                    <li>Goods availability</li>
                    <li>Errors in the description or prices for Goods</li>
                    <li>Errors in Your Order</li>
                    <li>We reserve the right to refuse or cancel Your Order if fraud or an unauthorized or illegal transaction is suspected.</li>
                  </ul>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    We reserve the right to postpone or cancel training/internship programs due to insufficient enrollments, unavailability of slots, or unavailability of mentors (under certain conditions).
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    In such cases, users will be informed, and internsforge is liable to refund the full amount without any deduction.
                  </p>
                </section>

                {/* Contact Us Section */}
                <section className="space-y-5">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Contact Us</h2>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    If you have any questions about our Returns and Refunds Policy, please contact us:
                  </p>
                  <p className="text-base md:text-[16px] leading-7 text-gray-900">
                    By email: <a href="mailto:support@internsforge.com" className="text-brand-orange hover:underline">support@internsforge.com</a>
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
