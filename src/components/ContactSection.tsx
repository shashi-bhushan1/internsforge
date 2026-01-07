'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-brand-page py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:pl-[145px] lg:pr-[145px]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          {/* Left Section: Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10 lg:p-12 flex flex-col">
            {/* Header */}
            <div className="mb-8">
              <p className="text-sm md:text-base font-semibold mb-3 text-brand-orange">
                Get in Touch
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Let&apos;s Chat, Reach Out to Us
              </h1>
              <p className="text-base md:text-lg text-gray-700 leading-7">
                Have questions or feedback? We&apos;re here to help. Send us a message, and we&apos;ll respond within 24 hours.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
              {/* Name Fields Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm md:text-base font-semibold text-gray-900 mb-2.5">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    required
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent text-gray-900 placeholder-gray-400 text-base transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm md:text-base font-semibold text-gray-900 mb-2.5">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent text-gray-900 placeholder-gray-400 text-base transition-all"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm md:text-base font-semibold text-gray-900 mb-2.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-base transition-all"
                />
              </div>

              {/* Message Field */}
              <div className="flex-1 flex flex-col">
                <label htmlFor="message" className="block text-sm md:text-base font-semibold text-gray-900 mb-2.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Leave us message"
                  required
                  rows={6}
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-400 resize-none text-base transition-all flex-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-3.5 md:py-4 bg-brand-orange hover:bg-brand-cyan text-white font-semibold text-base md:text-lg rounded-full transition-colors shadow-sm"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Section: Image and Contact Details */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Illustrative Image */}
            <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                alt="Contact us"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Contact Details Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10 flex-1 flex flex-col">
              {/* Corporate Office Address */}
              <div className="pb-8 border-b border-gray-200 mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Corporate Office</h3>
                <address className="text-base md:text-lg text-gray-700 leading-7 not-italic">
                  BHIVE Workspace – No.112, AKR Tech Park, B Block, 7th Mile Hosur Rd,<br />
                  Krishna Reddy Industrial Area, Bengaluru, Karnataka 560068
                </address>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 flex-1">
                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm" style={{ backgroundColor: '#E3F2FD' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="#2196F3" strokeWidth="2"/>
                      <path d="M2 6L12 13L22 6" stroke="#2196F3" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-1.5">Email</h3>
                    <a href="mailto:support@internsforge.com" className="text-base md:text-lg text-gray-700 hover:text-brand-cyan transition-colors break-all">
                      support@internsforge.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm" style={{ backgroundColor: '#E3F2FD' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-1.5">Phone</h3>
                    <a href="tel:+916361187682" className="text-base md:text-lg text-gray-700 hover:text-brand-cyan transition-colors">
                      +91 6361187682
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm" style={{ backgroundColor: '#E8F5E9' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.042-.024-4.976 1.293-1.059-4.916-.024-.042A9.86 9.86 0 0112.001 2.001c5.421 0 9.848 4.409 9.848 9.83 0 5.421-4.427 9.83-9.848 9.83"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-1.5">WhatsApp</h3>
                    <a href="https://wa.me/916361187682" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg text-gray-700 hover:text-brand-cyan transition-colors">
                      +91 6361187682
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

