'use client';

import React, { useState } from 'react';

export default function HumanResourceInternPage() {
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
            Human Resource Intern
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-gray-200 text-gray-700 text-base font-medium px-4 py-2 rounded-full">
              HR
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
            InternsForge is offering a valuable opportunity for students or recent graduates to gain 
            hands-on experience in human resources. Our Human Resource Interns will assist in 
            recruitment, employee engagement, and HR administration, contributing to the overall 
            success of our HR operations.
          </p>
        </div>

        {/* Job Description Section - WITH white background box */}
        <div className="bg-white rounded-lg p-6 md:p-8 mb-6">
          <h2 className="text-[19px] font-bold text-gray-900 mb-4">Job Description</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            As a Human Resource Intern at InternsForge, you will support our HR team in various 
            administrative and operational tasks. This is an excellent opportunity for students or 
            recent graduates looking to gain hands-on experience in human resources. You will work 
            closely with the HR team to assist in daily operations and contribute to various HR 
            projects, gaining exposure to different aspects of human resource management.
          </p>
        </div>

        {/* Key Responsibilities Section - WITH white background box */}
        <div className="bg-white rounded-lg p-6 md:p-8 mb-6">
          <h2 className="text-[19px] font-bold text-gray-900 mb-6">Key Responsibilities</h2>
          <ol className="space-y-4 text-gray-700 text-base leading-relaxed">
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">1.</span>
              <div>
                <span className="font-semibold">Recruitment Support:</span> Assist with job postings, 
                resume screening, scheduling interviews, and coordinating the onboarding process for 
                new employees. Help maintain recruitment databases and track candidate progress.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">2.</span>
              <div>
                <span className="font-semibold">Employee Engagement:</span> Support initiatives aimed 
                at enhancing employee engagement and company culture. Assist in organizing team-building 
                activities, recognition programs, and employee events.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">3.</span>
              <div>
                <span className="font-semibold">HR Administration:</span> Maintain employee records, 
                update HR databases, and assist in preparing HR reports and documentation. Help ensure 
                compliance with HR policies and procedures.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">4.</span>
              <div>
                <span className="font-semibold">Training & Development:</span> Assist in coordinating 
                training sessions and workshops for employees. Help develop training materials and track 
                employee participation in development programs.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-brand-orange shrink-0">5.</span>
              <div>
                <span className="font-semibold">HR Projects:</span> Participate in various HR projects 
                and initiatives, providing support as needed. Gain exposure to HR policies, procedures, 
                and organizational development activities.
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
              <span>Currently pursuing or recently completed a Bachelor&apos;s degree in Human Resources, Business Administration, Psychology, or a related field.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Strong interest in human resources and people management.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Excellent communication and interpersonal skills.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Strong organizational skills and attention to detail.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Proficiency in Microsoft Office Suite.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <span>Ability to handle sensitive information with confidentiality.</span>
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
                <span className="font-semibold">Competitive Stipend:</span> A competitive stipend 
                for the internship duration.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Learning & Development:</span> Hands-on experience 
                in various HR functions and opportunities for professional growth.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Supportive Environment:</span> A collaborative team 
                that encourages learning and professional development.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Networking Opportunities:</span> Build connections 
                with professionals in HR and the edtech industry.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-orange shrink-0">•</span>
              <div>
                <span className="font-semibold">Flexible Hours:</span> Accommodating work hours to 
                help balance your internship with other commitments.
              </div>
            </li>
          </ul>
          <p className="text-gray-700 text-base leading-relaxed">
            Join InternsForge as a Human Resource Intern and gain valuable experience in a dynamic 
            and supportive environment. This internship offers the opportunity to learn about HR 
            practices and contribute to a company committed to advancing education through technology.
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
