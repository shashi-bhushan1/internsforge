'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: "How Can I Join Live Classes?",
    answer: "The class link will be sent to your registered email/WhatsApp. Sessions will take place on the Zoom/LMS platform."
  },
  {
    question: "What Should I Do If I Don't Receive The Class Link?",
    answer: "If you don't receive the class link, please check your spam folder first. If it's still not there, contact our support team via email or WhatsApp, and we'll send you the link immediately."
  },
  {
    question: "How Do I Access My LMS Portal?",
    answer: "You can access your LMS portal by logging in with your registered email and password. The login credentials will be sent to your email after enrollment. If you face any issues, contact our support team."
  },
  {
    question: "How Do I Submit My Projects?",
    answer: "You can submit your projects through the LMS portal. Navigate to the 'Projects' section, select the project you want to submit, upload your files, and click submit. Make sure to follow the submission guidelines provided."
  },
  {
    question: "Will I Have Access To The Recorded Sessions I Missed?",
    answer: "Yes, all recorded sessions are available in your LMS portal. You can access them anytime after the live session ends. Recordings are typically available within 24 hours of the live session."
  },
  {
    question: "Who Would Be The Mentors Of Our Programs?",
    answer: "Our programs are led by industry experts and experienced professionals with years of real-world experience. All mentors are carefully selected based on their expertise and teaching abilities to ensure the best learning experience."
  },
  {
    question: "When Will I Get My Certificate?",
    answer: "Certificates are issued upon successful completion of the program, including all assignments and projects. You'll receive your certificate via email within 7-10 business days after program completion."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // No FAQ open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Section */}
      <section className="bg-brand-page py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px] relative">
        <div className="max-w-[1600px] mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-3 md:mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto px-4">
              Check out our FAQ section for quick answers to common questions. If you don't find what you're looking for, feel free to contact us directly.
            </p>
          </div>

          {/* FAQ Accordion - Full Width */}
          <div className="max-w-4xl mx-auto space-y-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-lg overflow-hidden transition-colors ${
                  openIndex === index
                    ? 'bg-gray-50 border-gray-300'
                    : 'bg-white border-gray-200'
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="group w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-sm sm:text-base md:text-lg pr-3 sm:pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-brand-orange shrink-0 transition-all duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-700 text-xs sm:text-sm md:text-base leading-5 sm:leading-6">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

