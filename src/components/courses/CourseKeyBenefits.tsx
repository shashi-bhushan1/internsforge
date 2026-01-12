'use client';

import React from 'react';

interface CourseKeyBenefitsProps {
  capstoneProjects?: number;
}

export default function CourseKeyBenefits({ 
  capstoneProjects = 2
}: CourseKeyBenefitsProps) {
  const benefits = [
    {
      title: "1 Year Course Access",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      )
    },
    {
      title: "Live Mentorship by Experts",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="4"/>
          <path d="M6 20C6 16 9 14 12 14C15 14 18 16 18 20"/>
        </svg>
      )
    },
    {
      title: "Internship Certificate",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="6" width="16" height="12" rx="2"/>
          <path d="M4 10H20M8 14H16"/>
        </svg>
      )
    },
    {
      title: `${capstoneProjects} Capstone Projects`,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
          <path d="M2 17L12 22L22 17"/>
          <path d="M2 12L12 17L22 12"/>
        </svg>
      )
    },
    {
      title: "Course Completion Certificate",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L4 7V11C4 16.55 7.16 21.74 12 23C16.84 21.74 20 16.55 20 11V7L12 2Z"/>
          <path d="M12 8V16M8 12H16"/>
        </svg>
      )
    },
    {
      title: "Placement Support",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="4"/>
          <path d="M6 20C6 16 9 14 12 14C15 14 18 16 18 20"/>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-brand-page py-8 md:py-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px]">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-center">
          {/* Left Side - Title and Description */}
          <div className="lg:max-w-[420px] lg:flex-shrink-0 w-full">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-5 md:mb-6 tracking-tight text-center">
              <span className="block whitespace-nowrap">What Makes Learning</span>
              <span className="block mt-3 md:mt-4 whitespace-nowrap">With Us Different</span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
              This comprehensive course gives you everything you need to master your skills, build real-world projects, and advance your career — all in one place.
            </p>
          </div>

          {/* Right Side - Benefits Cards Grid (2 columns, 3 rows) */}
          <div className="flex-1 w-full max-w-[500px] lg:ml-auto lg:flex-shrink-0">
            <div className="grid grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 hover:border-brand-orange hover:shadow-md transition-all flex flex-col items-center text-center min-h-[120px] md:min-h-[140px] justify-center"
                >
                  <div className="flex-shrink-0 text-brand-orange mb-3">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xs md:text-sm font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

