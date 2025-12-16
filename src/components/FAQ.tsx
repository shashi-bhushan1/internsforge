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
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:pl-[145px] lg:pr-[145px] relative">
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

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-bold text-gray-900 text-base md:text-lg pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
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
                <div className="px-6 pb-4 text-gray-700 text-sm md:text-base leading-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Right Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        {/* Scroll to Top Button */}
        <button className="w-12 h-12 md:w-14 md:h-14 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M5 12L12 5L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {/* WhatsApp Button */}
        <button className="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.042-.024-4.976 1.293-1.059-4.916-.024-.042A9.86 9.86 0 0112.001 2.001c5.421 0 9.848 4.409 9.848 9.83 0 5.421-4.427 9.83-9.848 9.83"/>
          </svg>
        </button>
      </div>
    </section>
  );
}

