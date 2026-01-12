'use client';

import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value || ''
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-brand-page py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:px-[145px]">
      <div className="max-w-[1600px] mx-auto">
        {/* Top Section: Contact Information */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-8 md:mb-12 text-center">
            Let&apos;s Get In Touch
          </h1>
          
          {/* Three Column Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* Phone Column */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-orange-50 flex items-center justify-center shadow-sm border border-orange-200">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-orange">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Phone Number</h3>
              <a href="tel:+916361187682" className="block text-base md:text-lg text-gray-700 hover:text-brand-cyan transition-colors font-medium">
                +91 6361187682
              </a>
            </div>

            {/* Email Column */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-orange-50 flex items-center justify-center shadow-sm border border-orange-200">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-orange">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 6L12 13L22 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:support@internsforge.com" className="block text-base md:text-lg text-gray-700 hover:text-brand-cyan transition-colors break-all font-medium">
                support@internsforge.com
              </a>
            </div>

            {/* WhatsApp Column */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-orange-50 flex items-center justify-center shadow-sm border border-orange-200">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-orange">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <a href="https://wa.me/916361187682" target="_blank" rel="noopener noreferrer" className="block text-base md:text-lg text-gray-700 hover:text-brand-cyan transition-colors font-medium">
                +91 6361187682
              </a>
            </div>
          </div>

          {/* Divider Line */}
          <div className="border-t border-gray-300 my-8 md:my-12"></div>
        </div>

        {/* Bottom Section: Contact Form */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-8 md:mb-10 text-center">
            Or fill out the form below
          </h2>

          <div className="bg-white rounded-xl shadow-lg border-2 border-gray-300 p-6 md:p-8 lg:p-10 max-w-5xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              {/* Row 1: Two Column Fields */}
              <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName || ''}
                      onChange={handleChange}
                      placeholder="Enter your full name..."
                      required
                      className="w-full pl-12 pr-5 py-3.5 bg-gray-50 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange text-gray-900 placeholder-gray-600 text-base transition-all font-medium"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <path d="M2 6L12 13L22 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email || ''}
                      onChange={handleChange}
                      placeholder="Enter your email address..."
                      required
                      className="w-full pl-12 pr-5 py-3.5 bg-gray-50 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange text-gray-900 placeholder-gray-600 text-base transition-all font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Two Column Fields */}
              <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="2"/>
                        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
                        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="10 9 9 9 8 9" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject || ''}
                      onChange={handleChange}
                      placeholder="Enter subject..."
                      className="w-full pl-12 pr-5 py-3.5 bg-gray-50 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange text-gray-900 placeholder-gray-600 text-base transition-all font-medium"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone || ''}
                      onChange={handleChange}
                      placeholder="Enter your phone number..."
                      className="w-full pl-12 pr-5 py-3.5 bg-gray-50 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange text-gray-900 placeholder-gray-600 text-base transition-all font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Message Textarea (Full Width) */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message || ''}
                    onChange={handleChange}
                    placeholder="Enter your message here..."
                    required
                    rows={6}
                    className="w-full pl-12 pr-5 py-3.5 bg-gray-50 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange text-gray-900 placeholder-gray-600 resize-none text-base transition-all font-medium"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-2 md:pt-4">
                <button
                  type="submit"
                  className="bg-brand-orange hover:bg-brand-cyan text-white font-semibold py-3.5 md:py-4 px-8 rounded-full transition-colors shadow-sm text-base md:text-lg flex items-center gap-2"
                >
                  Submit Form
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

