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
  },
  {
    question: "What Are The Prerequisites For This Course?",
    answer: "Basic computer knowledge and enthusiasm to learn are the main prerequisites. We start from the fundamentals, so no prior experience is required. However, having a basic understanding of computers will be helpful."
  },
  {
    question: "Is There Any Placement Assistance?",
    answer: "Yes, we provide comprehensive placement assistance including resume building, interview preparation, mock interviews, and job placement support. Our career services team works closely with students to help them secure positions in top companies."
  },
  {
    question: "What Is The Duration Of The Course?",
    answer: "The course duration varies depending on the program. Typically, our courses range from 3 to 6 months, including both training and internship phases. Detailed schedule information is provided during enrollment."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '' });
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1000);
  };

  return (
    <section className="bg-brand-page py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:pl-[145px] lg:pr-[145px] relative">
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

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Column - FAQ Accordion */}
          <div className="w-full lg:w-[65%] space-y-4">
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
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
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

          {/* Right Column - Sticky Contact Form */}
          <div className="w-full lg:w-[35%]">
            <div className="lg:sticky lg:top-8">
              <div className="bg-white rounded-xl shadow-lg border-2 border-gray-300 p-6 md:p-8">
                {/* Form Header */}
                <div className="mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    Have any Questions?
                  </h2>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-5 py-3.5 bg-gray-50 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange text-gray-900 placeholder-gray-600 text-base transition-all font-medium"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-5 py-3.5 bg-gray-50 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange text-gray-900 placeholder-gray-600 text-base transition-all font-medium"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                      className="w-full px-5 py-3.5 bg-gray-50 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange text-gray-900 placeholder-gray-600 text-base transition-all font-medium"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-orange hover:bg-brand-cyan text-white font-semibold py-3.5 md:py-4 px-6 rounded-full transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-lg"
                  >
                    {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                  </button>

                  {/* Success Message */}
                  {submitMessage && (
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm text-center">
                      {submitMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        {/* Scroll to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 md:w-14 md:h-14 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors shadow-lg"
          aria-label="Scroll to top"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M5 12L12 5L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/yourwhatsappnumber"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg"
          aria-label="Contact us on WhatsApp"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.042-.024-4.976 1.293-1.059-4.916-.024-.042A9.86 9.86 0 0112.001 2.001c5.421 0 9.848 4.409 9.848 9.83 0 5.421-4.427 9.83-9.848 9.83"/>
          </svg>
        </a>
      </div>
    </section>
  );
}

