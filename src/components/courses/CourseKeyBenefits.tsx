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
      title: "12 Months Unlimited Course Access",
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
      title: "Live Mentorship by Industry Experts",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="4"/>
          <path d="M6 20C6 16 9 14 12 14C15 14 18 16 18 20"/>
        </svg>
      )
    },
    {
      title: "Course Completion Certificate",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L4 7V11C4 16.55 7.16 21.74 12 23C16.84 21.74 20 16.55 20 11V7L12 2Z"/>
          <path d="M9 12L11 14L15 10"/>
        </svg>
      )
    },
    {
      title: "Internship Experience Certificate",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="6" width="16" height="12" rx="2"/>
          <path d="M4 10H20M8 14H16"/>
        </svg>
      )
    },
    {
      title: "Project Completion Certificate",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
          <path d="M2 17L12 22L22 17"/>
          <path d="M2 12L12 17L22 12"/>
        </svg>
      )
    },
    {
      title: "Certificate of Appreciation for Outstanding Performance",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
        </svg>
      )
    },
    {
      title: `${capstoneProjects}+ Industry-Based Capstone Projects`,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
          <path d="M2 17L12 22L22 17"/>
          <path d="M2 12L12 17L22 12"/>
        </svg>
      )
    },
    {
      title: "Career Guidance & Placement Assistance",
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
        {/* Bento Grid Layout - 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-fr">
          
          {/* Top Row - 2 small cards */}
          <div
            className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 hover:border-brand-orange hover:shadow-md transition-all flex flex-col items-center text-center justify-center min-h-[120px] md:min-h-[140px]"
          >
            <div className="shrink-0 text-brand-orange mb-3">
              {benefits[0].icon}
            </div>
            <h3 className="text-xs md:text-sm font-semibold text-gray-900 leading-tight">
              {benefits[0].title}
            </h3>
          </div>

          <div
            className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 hover:border-brand-orange hover:shadow-md transition-all flex flex-col items-center text-center justify-center min-h-[120px] md:min-h-[140px]"
          >
            <div className="shrink-0 text-brand-orange mb-3">
              {benefits[1].icon}
            </div>
            <h3 className="text-xs md:text-sm font-semibold text-gray-900 leading-tight">
              {benefits[1].title}
            </h3>
          </div>

          {/* Center Card - Heading and Description (spans 2 columns, 2 rows) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 bg-white border border-gray-200 rounded-lg p-6 md:p-8 lg:p-10 flex flex-col justify-center items-center text-center min-h-[280px] md:min-h-[320px]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
              <span className="block">What Makes Learning</span>
              <span className="block mt-2 md:mt-3">With Us Different</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-md">
              This comprehensive course gives you everything you need to master your skills, build real-world projects, and advance your career — all in one place.
            </p>
          </div>

          {/* Right side top - 2 small cards stacked */}
          <div
            className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 hover:border-brand-orange hover:shadow-md transition-all flex flex-col items-center text-center justify-center min-h-[120px] md:min-h-[140px]"
          >
            <div className="shrink-0 text-brand-orange mb-3">
              {benefits[2].icon}
            </div>
            <h3 className="text-xs md:text-sm font-semibold text-gray-900 leading-tight">
              {benefits[2].title}
            </h3>
          </div>

          <div
            className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 hover:border-brand-orange hover:shadow-md transition-all flex flex-col items-center text-center justify-center min-h-[120px] md:min-h-[140px]"
          >
            <div className="shrink-0 text-brand-orange mb-3">
              {benefits[3].icon}
            </div>
            <h3 className="text-xs md:text-sm font-semibold text-gray-900 leading-tight">
              {benefits[3].title}
            </h3>
          </div>

          {/* Bottom Row - Left side cards */}
          <div
            className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 hover:border-brand-orange hover:shadow-md transition-all flex flex-col items-center text-center justify-center min-h-[120px] md:min-h-[140px]"
          >
            <div className="shrink-0 text-brand-orange mb-3">
              {benefits[4].icon}
            </div>
            <h3 className="text-xs md:text-sm font-semibold text-gray-900 leading-tight">
              {benefits[4].title}
            </h3>
          </div>

          {/* Bottom Row - Wide card for Career Guidance (spans 2 columns) */}
          <div
            className="col-span-1 sm:col-span-2 bg-white border border-gray-200 rounded-lg p-4 md:p-5 hover:border-brand-orange hover:shadow-md transition-all flex flex-col items-center text-center justify-center min-h-[120px] md:min-h-[140px]"
          >
            <div className="shrink-0 text-brand-orange mb-3">
              {benefits[7].icon}
            </div>
            <h3 className="text-xs md:text-sm font-semibold text-gray-900 leading-tight">
              {benefits[7].title}
            </h3>
          </div>

          {/* Bottom Row - Right side card */}
          <div
            className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 hover:border-brand-orange hover:shadow-md transition-all flex flex-col items-center text-center justify-center min-h-[120px] md:min-h-[140px]"
          >
            <div className="shrink-0 text-brand-orange mb-3">
              {benefits[6].icon}
            </div>
            <h3 className="text-xs md:text-sm font-semibold text-gray-900 leading-tight">
              {benefits[6].title}
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}

