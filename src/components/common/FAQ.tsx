'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: "How Can I Join Live Classes?",
    answer: "The class link will be sent to your registered email/WhatsApp. Sessions will take place on the Zoom/LMS platform."
  },
  {
    question: "What Should I Do If I Don't Receive The Class Link?",
    answer: "Please check your spam or junk folder first. If you still can't find the link, feel free to contact us via email at support@internsforge.com or call us at +916361187682."
  },
  {
    question: "How Do I Access My LMS Portal?",
    answer: "You will receive access to the LMS portal during the first week of the starting month. To create your account, just follow the instructions sent to you via email/WhatsApp."
  },
  {
    question: "How Do I Submit My Projects?",
    answer: "You will receive an email about your project submission. Click on the \"Submit Project\" button in the email, which will redirect you to a page where you can upload your project as a PDF file or provide a drive link."
  },
  {
    question: "Will I Have Access To The Recorded Sessions I Missed?",
    answer: "Yes, you can access the recorded sessions you missed. Just log in to the LMS portal, go to the menu section, and then to the dashboard where you will find the recorded sessions."
  },
  {
    question: "Who Would Be The Mentors Of Our Programs?",
    answer: "You will be mentored by top professionals from leading MNCs who will provide you with exceptional training, a valuable learning experience, and industry insights."
  },
  {
    question: "When Will I Get My Certificate?",
    answer: "You will receive your completion certificate after finishing the course and submitting your projects."
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
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-700 text-sm leading-5">
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

