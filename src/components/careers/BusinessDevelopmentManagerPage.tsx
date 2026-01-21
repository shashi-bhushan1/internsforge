'use client';

import React, { useState } from 'react';

export default function BusinessDevelopmentManagerPage() {
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
            Business Development Manager
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
            InternsForge, a leader in the education technology sector, is seeking a highly skilled 
            and driven Business Development Manager to lead our efforts in identifying new business 
            opportunities and fostering strategic partnerships. This role requires a seasoned 
            professional with a proven track record in business development, strong analytical skills, 
            and the ability to build and maintain relationships with key stakeholders. The Business 
            Development Manager will play a critical role in expanding our market presence and 
            driving revenue growth.
          </p>
        </div>

        {/* Job Description Section - WITH white background box */}
        <div className="bg-white rounded-lg p-6 md:p-8 mb-6">
          <h2 className="text-[19px] font-bold text-gray-900 mb-4">Job Description</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            As a Business Development Manager at InternsForge, you will develop and implement 
            comprehensive business development strategies, manage partnerships, conduct market 
            research, and drive sales efforts. Your responsibilities will include:
          </p>
        </div>

        {/* Key Responsibilities Section - WITH white background box */}
        <div className="bg-white rounded-lg p-6 md:p-8 mb-6">
          <h2 className="text-[19px] font-bold text-gray-900 mb-6">Key Responsibilities</h2>
          <ol className="space-y-4 text-gray-700 text-base leading-relaxed">
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">1.</span>
              <div>
                <span className="font-semibold">Strategic Business Development:</span> Develop and 
                implement comprehensive business development strategies to drive growth and expand 
                InternsForge&apos;s market presence. Identify new markets, customer segments, and 
                opportunities for business expansion.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">2.</span>
              <div>
                <span className="font-semibold">Partnership & Relationship Management:</span> Build 
                and nurture relationships with key stakeholders, including educational institutions, 
                corporate clients, government bodies, and other potential partners. Act as a key 
                liaison to foster long-term, mutually beneficial partnerships.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">3.</span>
              <div>
                <span className="font-semibold">Market Research & Analysis:</span> Conduct thorough 
                market research to understand industry trends, competitive landscape, and customer 
                needs. Analyze data to identify business opportunities and inform strategic decisions.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">4.</span>
              <div>
                <span className="font-semibold">Sales & Revenue Generation:</span> Drive sales 
                efforts to achieve revenue targets. Lead the development and presentation of proposals, 
                negotiate contracts, and close deals with clients and partners.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">5.</span>
              <div>
                <span className="font-semibold">Team Leadership & Collaboration:</span> Work closely 
                with cross-functional teams, including marketing, product development, and customer 
                support, to ensure alignment and support for business development initiatives. Lead 
                and mentor junior team members as needed.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">6.</span>
              <div>
                <span className="font-semibold">Performance Metrics & Reporting:</span> Monitor and 
                report on key performance indicators (KPIs) related to business development 
                activities. Provide regular updates to senior management on progress, challenges, 
                and strategic recommendations.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">7.</span>
              <div>
                <span className="font-semibold">Brand Representation & Networking:</span> Represent 
                InternsForge at industry events, conferences, and networking functions. Enhance the 
                company&apos;s visibility and reputation in the education technology sector.
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
              <span>Bachelor&apos;s degree in Business Administration, Marketing, or a related field. An advanced degree, such as an MBA, is preferred.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>3-5 years of experience in business development, sales, or a related role, preferably within the edtech industry or a similar sector.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Exceptional communication and negotiation skills.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Proven ability to develop and execute successful business development strategies.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Strong analytical and problem-solving abilities.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Proficiency in CRM systems and other business development tools.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Ability to work effectively in a fast-paced, dynamic environment.</span>
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
                <span className="font-semibold">Competitive Compensation:</span> A competitive salary 
                package complemented by performance-based bonuses.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Professional Growth:</span> Opportunities for 
                professional development, including access to training programs, workshops, and 
                career advancement pathways.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Innovative Work Environment:</span> A collaborative 
                and supportive work culture that fosters innovation and creativity.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Comprehensive Benefits:</span> Health insurance, 
                wellness programs, and additional employee benefits.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Work-Life Balance:</span> Flexible working 
                arrangements and support for a healthy work-life balance.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Purpose-Driven Mission:</span> The opportunity to 
                contribute to a company that is making a meaningful impact in the education sector.
              </div>
            </li>
          </ul>
          <p className="text-gray-700 text-base leading-relaxed">
            Join InternsForge as a Business Development Manager and help us drive the next phase of 
            our growth and success. If you are a strategic thinker with a passion for business 
            development and a strong desire to make a difference in the education industry, we 
            encourage you to apply.
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
