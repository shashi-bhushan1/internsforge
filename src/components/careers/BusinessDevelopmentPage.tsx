'use client';

import React, { useState } from 'react';

export default function BusinessDevelopmentPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      message: '',
    });
  };

  return (
    <div className="bg-brand-page">
      {/* Single wrapper matching header alignment */}
      <div 
        className="mx-auto"
        style={{
          width: '1176px',
          marginTop: '60px',
          marginLeft: '147px',
          marginRight: '147px',
          marginBottom: '0'
        }}
      >
        {/* Job Title Section - No white box, just centered on beige background */}
        <div className="mb-12">
          <h2 className="text-[44px] font-bold text-gray-900 mb-6 text-center">
            Business Development Associate
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-gray-200 text-gray-700 text-base font-medium px-4 py-2 rounded-full">
              Sales
            </span>
            <span className="bg-gray-200 text-gray-700 text-base font-medium px-4 py-2 rounded-full">
              Banglore, India
            </span>
            <span className="bg-gray-200 text-gray-700 text-base font-medium px-4 py-2 rounded-full">
              Full Time
            </span>
          </div>
        </div>

        {/* About Us Section - WITH white background box */}
        <div className="bg-white rounded-lg p-6 md:p-8 mb-6">
          <h2 className="text-[19px] font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            InternsForge is a pioneer in the education technology sector, dedicated to transforming 
            learning experiences and empowering learners and educators. We are seeking a proactive and skilled 
            Business Development Associate to join our team. In this role, you will play a crucial part in 
            delivering educational solutions, forging partnerships, and contributing to the growth of our company. 
            The ideal candidate should have a knack for identifying opportunities, building relationships, and 
            joining an innovative team.
          </p>
        </div>

        {/* Job Description Section - WITH white background box */}
        <div className="bg-white rounded-lg p-6 md:p-8 mb-6">
          <h2 className="text-[19px] font-bold text-gray-900 mb-4">Job Description</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            As a Business Development Associate at InternsForge, you will play a pivotal role in 
            identifying new business opportunities, building strategic partnerships, and driving growth. 
            You will lead by example, fostering a culture of innovation, collaboration, and excellence. 
            Your responsibilities will include:
          </p>
        </div>

        {/* Key Responsibilities Section - WITH white background box */}
        <div className="bg-white rounded-lg p-6 md:p-8 mb-6">
          <h2 className="text-[19px] font-bold text-gray-900 mb-6">Key Responsibilities</h2>
          <ol className="space-y-4 text-gray-700 text-base leading-relaxed">
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">1.</span>
              <div>
                <span className="font-semibold">Market Research & Lead Generation:</span> Identifying new 
                business opportunities, developing and maintaining a pipeline of potential clients and 
                strategic partners.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">2.</span>
              <div>
                <span className="font-semibold">Client & Partner Engagement:</span> Cultivating and managing 
                relationships with educational institutions, corporate partners, and other stakeholders, 
                ensuring satisfaction.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">3.</span>
              <div>
                <span className="font-semibold">Strategic Alliances:</span> Working with internal teams to 
                develop strategies for establishing and maintaining strategic partnerships, and securing 
                collaboration opportunities.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">4.</span>
              <div>
                <span className="font-semibold">Sales & Negotiation:</span> Preparing and delivering 
                persuasive presentations, proposals, and pitches, and leading negotiations to finalize 
                agreements.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">5.</span>
              <div>
                <span className="font-semibold">Performance Monitoring:</span> Tracking and analyzing 
                business development metrics and KPIs, reporting on progress, and providing insights.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">6.</span>
              <div>
                <span className="font-semibold">Event Representation & Networking:</span> Representing 
                InternsForge at industry events, conferences, and trade shows, and networking with 
                key industry players.
              </div>
            </li>
          </ol>
        </div>

        {/* Qualifications Section - WITH white background box */}
        <div className="bg-white rounded-lg p-6 md:p-8 mb-6">
          <h2 className="text-[19px] font-bold text-gray-900 mb-6">Qualifications</h2>
          <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Bachelor&apos;s degree in Business, Marketing, or a related field (an advanced degree is a plus).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>1-3 years of experience in business development, sales, or a similar role (preferably in the edtech sector).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Exceptional communication and interpersonal skills.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Demonstrated ability to meet or exceed sales targets.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Strong presentation and negotiation abilities.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Analytical and strategic thinking capabilities.</span>
            </li>
          </ul>
        </div>

        {/* What We Offer Section - WITH white background box */}
        <div className="bg-white rounded-lg p-6 md:p-8 mb-6">
          <h2 className="text-[19px] font-bold text-gray-900 mb-6">What We Offer</h2>
          <ul className="space-y-3 text-gray-700 text-base leading-relaxed mb-6">
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Competitive Compensation:</span> Attractive salary package 
                with performance-based incentives.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Career Development:</span> Access to professional 
                development, training, and mentorship.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Inclusive Work Culture:</span> Diverse, inclusive, 
                fosters creativity and innovation.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Health & Wellness:</span> Comprehensive health insurance 
                plans and wellness initiatives.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Work-Life Balance:</span> Flexible working hours and 
                support for a healthy work-life balance.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Purpose-Driven Work:</span> Chance to make a significant 
                impact in the education sector.
              </div>
            </li>
          </ul>
          <p className="text-gray-700 text-base leading-relaxed">
            At InternsForge, we are passionate about empowering learners and educators. If you are 
            enthusiastic about making a difference in the education sector and meet the qualifications 
            above, we encourage you to apply.
          </p>
        </div>

        {/* Summary Text - Applies to entire page, outside white box */}
        <div className="mb-6">
          <p className="text-gray-800 text-base leading-relaxed italic text-center">
            This job description is designed to attract the right candidates who align with InternsForge&apos;s 
            values and goals. Feel free to adjust the details to better match the specific needs and culture 
            of your organization.
          </p>
        </div>

        {/* Application Form Section - WITH white background box and border */}
        <div className="bg-white rounded-lg border border-gray-300 p-6 md:p-8 mb-6">
          <form onSubmit={handleSubmit} className="space-y-6 flex flex-col items-center">
            <div className="w-full max-w-md">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent text-gray-900 bg-white text-base"
              />
            </div>
            <div className="w-full max-w-md">
              <input
                type="email"
                name="email"
                placeholder="E-mail *"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent text-gray-900 bg-white text-base"
              />
            </div>
            <div className="w-full max-w-md">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number *"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent text-gray-900 bg-white text-base"
              />
            </div>
            <div className="w-full max-w-md">
              <textarea
                name="message"
                placeholder="Message *"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent text-gray-900 bg-white resize-none text-base"
              />
            </div>
            <div className="w-full max-w-md">
              <button
                type="submit"
                className="w-full bg-brand-orange text-white font-semibold py-3 md:py-3.5 rounded-full hover:bg-brand-cyan transition-colors text-sm md:text-base shadow-sm"
              >
                Apply Now
              </button>
            </div>
          </form>
          <p className="text-red-600 text-sm mt-4 text-center">
            *Drop your resume to: hr@internsforge.com
          </p>
        </div>
      </div>
    </div>
  );
}
