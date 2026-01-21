'use client';

import React, { useState } from 'react';

export default function MarketingInternPage() {
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
            Marketing Intern
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-gray-200 text-gray-700 text-base font-medium px-4 py-2 rounded-full">
              Marketing
            </span>
            <span className="bg-gray-200 text-gray-700 text-base font-medium px-4 py-2 rounded-full">
              Bangalore, India
            </span>
            <span className="bg-gray-200 text-gray-700 text-base font-medium px-4 py-2 rounded-full">
              Internship
            </span>
          </div>
        </div>

        {/* About Us Section - WITH white background box */}
        <div className="bg-white rounded-lg p-6 md:p-8 mb-6">
          <h2 className="text-[19px] font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            InternsForge is offering a valuable opportunity for individuals passionate about marketing. 
            Our Marketing Interns will gain practical experience in various aspects of marketing, 
            contributing to content creation, social media strategies, and campaign execution.
          </p>
        </div>

        {/* Job Description Section - WITH white background box */}
        <div className="bg-white rounded-lg p-6 md:p-8 mb-6">
          <h2 className="text-[19px] font-bold text-gray-900 mb-4">Job Description</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            As a Marketing Intern at InternsForge, you will support our marketing team in several 
            key areas, including content creation, social media management, market research, and 
            campaign support. Your responsibilities will include:
          </p>
        </div>

        {/* Key Responsibilities Section - WITH white background box */}
        <div className="bg-white rounded-lg p-6 md:p-8 mb-6">
          <h2 className="text-[19px] font-bold text-gray-900 mb-6">Key Responsibilities</h2>
          <ol className="space-y-4 text-gray-700 text-base leading-relaxed">
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">1.</span>
              <div>
                <span className="font-semibold">Content Creation:</span> Assist in creating and 
                editing marketing content, including blog posts, social media updates, newsletters, 
                and promotional materials. Ensure content aligns with brand guidelines and resonates 
                with target audiences.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">2.</span>
              <div>
                <span className="font-semibold">Social Media Management:</span> Support the management 
                of social media accounts by scheduling posts, engaging with followers, and monitoring 
                social media trends. Help track and analyze social media performance metrics.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">3.</span>
              <div>
                <span className="font-semibold">Market Research:</span> Conduct research on industry 
                trends, competitor activities, and customer preferences. Assist in gathering and 
                analyzing data to support marketing strategies and decision-making.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">4.</span>
              <div>
                <span className="font-semibold">Campaign Support:</span> Contribute to the planning 
                and execution of marketing campaigns and initiatives. Help coordinate campaign 
                logistics, track progress, and report on outcomes.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">5.</span>
              <div>
                <span className="font-semibold">Event Coordination:</span> Assist in organizing and 
                promoting marketing events, webinars, and other promotional activities. Help with 
                event logistics, attendee communication, and post-event follow-up.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">6.</span>
              <div>
                <span className="font-semibold">Administrative Tasks:</span> Provide general 
                administrative support to the marketing team, including managing schedules, preparing 
                reports, and maintaining marketing files and databases.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">7.</span>
              <div>
                <span className="font-semibold">Brand Promotion:</span> Help implement brand 
                promotion strategies to enhance brand visibility and awareness. Assist in developing 
                and executing tactics to engage target audiences.
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
              <span>Currently pursuing or recently completed a Bachelor&apos;s degree in Marketing, Communications, Business, or a related field.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Strong written and verbal communication skills.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Proficiency in Microsoft Office Suite (Word, Excel, PowerPoint).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Familiarity with social media platforms and digital marketing tools.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Basic knowledge of marketing principles and strategies.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Creative thinking and attention to detail.</span>
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
                <span className="font-semibold">Hands-On Experience:</span> Gain practical experience 
                in various marketing functions and real-world projects.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Professional Development:</span> Access to training 
                sessions, workshops, and learning resources to enhance your marketing skills.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Mentorship:</span> Work closely with experienced 
                marketing professionals who will guide and mentor you throughout your internship.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Supportive Environment:</span> Join a collaborative 
                and inclusive team that values creativity, innovation, and professional growth.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Networking Opportunities:</span> Connect with 
                industry professionals and build your professional network.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Stipend & Benefits:</span> Competitive stipend and 
                additional benefits as per company policy.
              </div>
            </li>
          </ul>
          <p className="text-gray-700 text-base leading-relaxed">
            This internship is a great opportunity for individuals passionate about marketing and 
            eager to gain practical experience in a leading edtech organization. If you are 
            enthusiastic about contributing to our marketing efforts and developing your skills, 
            we encourage you to apply.
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
          <p className="text-gray-700 text-sm mt-2 text-center">
            For any query, contact at: +917019680860
          </p>
        </div>
      </div>
    </div>
  );
}
