'use client';

import React, { useState } from 'react';

export default function BusinessDevelopmentTeamLeadPage() {
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
            Business Development Team Lead
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-gray-200 text-gray-700 text-base font-medium px-4 py-2 rounded-full">
              Management
            </span>
            <span className="bg-gray-200 text-gray-700 text-base font-medium px-4 py-2 rounded-full">
              Bangalore, India
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
            InternsForge is seeking an experienced and strategic Business Development Team Lead to 
            spearhead our business growth initiatives. The successful candidate will lead a team of 
            business development professionals, driving new business opportunities, forging strategic 
            partnerships, and expanding our market presence. This role requires a dynamic leader 
            with a proven track record in business development, exceptional leadership skills, and 
            a passion for the education technology industry.
          </p>
        </div>

        {/* Job Description Section - WITH white background box */}
        <div className="bg-white rounded-lg p-6 md:p-8 mb-6">
          <h2 className="text-[19px] font-bold text-gray-900 mb-4">Job Description</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            As a Business Development Team Lead at InternsForge, you will lead and manage a team of 
            business development associates, develop and execute business development strategies, and 
            drive market expansion and revenue growth. Your responsibilities will include:
          </p>
        </div>

        {/* Key Responsibilities Section - WITH white background box */}
        <div className="bg-white rounded-lg p-6 md:p-8 mb-6">
          <h2 className="text-[19px] font-bold text-gray-900 mb-6">Key Responsibilities</h2>
          <ol className="space-y-4 text-gray-700 text-base leading-relaxed">
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">1.</span>
              <div>
                <span className="font-semibold">Team Leadership & Management:</span> Lead, mentor, 
                and manage a team of business development associates. Set clear objectives, provide 
                guidance, and support professional development to ensure team success.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">2.</span>
              <div>
                <span className="font-semibold">Strategic Planning:</span> Develop and execute 
                comprehensive business development strategies that align with InternsForge&apos;s 
                overall goals. Identify new markets, customer needs, and emerging trends to drive 
                business growth.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">3.</span>
              <div>
                <span className="font-semibold">Market Expansion:</span> Lead efforts to identify 
                and explore new business opportunities. Develop and maintain a strong pipeline of 
                potential clients, partners, and strategic alliances.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">4.</span>
              <div>
                <span className="font-semibold">Client & Partner Relations:</span> Build and 
                maintain strong relationships with key stakeholders, including educational 
                institutions, corporate partners, and industry influencers. Act as the primary point 
                of contact for high-level negotiations and partnership discussions.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">5.</span>
              <div>
                <span className="font-semibold">Sales & Revenue Growth:</span> Drive sales 
                initiatives to achieve revenue targets. Develop and present compelling proposals, 
                negotiate contracts, and close deals with key clients and partners.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">6.</span>
              <div>
                <span className="font-semibold">Performance Analysis & Reporting:</span> Monitor 
                and analyze key performance indicators (KPIs) related to business development 
                activities. Provide regular reports and actionable insights to senior management.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">7.</span>
              <div>
                <span className="font-semibold">Cross-functional Collaboration:</span> Collaborate 
                with marketing, product development, and other internal teams to ensure alignment 
                and support for business development initiatives.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">8.</span>
              <div>
                <span className="font-semibold">Representation & Networking:</span> Represent 
                InternsForge at industry events, conferences, and networking opportunities. Promote 
                the company&apos;s brand and establish a strong presence in the education technology 
                sector.
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
              <span>Bachelor&apos;s degree in Business Administration, Marketing, or a related field. An MBA or other advanced degree is preferred.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Minimum of 5 years of experience in business development, sales, or a related field, with at least 2 years in a leadership role.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Strong leadership and team management abilities.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Excellent communication, negotiation, and presentation skills.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Proven track record of achieving and exceeding sales targets.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Strategic thinking with the ability to identify and capitalize on market opportunities.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Proficiency in CRM software and business development tools.</span>
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
                <span className="font-semibold">Competitive Compensation:</span> An attractive salary 
                package with performance-based bonuses.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Leadership Development:</span> Opportunities for 
                leadership growth and professional development, including training and mentorship 
                programs.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Dynamic Work Environment:</span> A collaborative and 
                innovative work culture that encourages creativity and initiative.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Comprehensive Benefits:</span> Health insurance, 
                wellness programs, and other employee benefits.
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
                <span className="font-semibold">Impactful Role:</span> The opportunity to lead a 
                team and drive meaningful growth in the education technology sector.
              </div>
            </li>
          </ul>
          <p className="text-gray-700 text-base leading-relaxed">
            Join InternsForge as our Business Development Team Lead and be a key driver in our 
            mission to transform the future of education through innovative technology solutions. 
            If you are a strategic thinker with a passion for business development and leadership, 
            we invite you to apply.
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
