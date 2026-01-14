'use client';

import React from 'react';
import Image from 'next/image';

interface CourseHeroProps {
  courseName: string;
  description: string;
  imageUrl: string;
  price?: string;
  chapters?: number;
  lessons?: number;
}

export default function CourseHero({ 
  courseName, 
  description, 
  imageUrl,
  price = "$85.00",
  chapters = 24,
  lessons = 72
}: CourseHeroProps) {
  return (
    <section className="bg-brand-page py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px]">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
          {/* Left Side - Course Image */}
          <div className="w-full lg:w-[45%] shrink-0">
            <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={imageUrl}
                alt={courseName}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Right Side - Course Details */}
          <div className="w-full lg:w-[55%] space-y-4">
            {/* Course Title */}
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900">
              {courseName}
            </h1>

            {/* Course Description */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {description}
            </p>

            {/* Enroll Button */}
            <button 
              onClick={() => {
                const pricingSection = document.getElementById('pricing-plans');
                if (pricingSection) {
                  // Get header height to account for sticky header
                  const header = document.querySelector('header');
                  const headerHeight = header ? (window.innerWidth >= 768 ? 120 : header.offsetHeight) : 0;
                  const offset = headerHeight + 20; // Add 20px extra padding
                  
                  const elementPosition = pricingSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-brand-orange hover:bg-brand-cyan text-white px-8 py-3 md:py-3.5 rounded-full font-semibold text-base md:text-lg transition-colors shadow-sm"
            >
              Enroll Now
            </button>

            {/* Course Stats */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span className="text-gray-700 font-medium">{chapters} Chapters</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                  <path d="M2 17L12 22L22 17"/>
                  <path d="M2 12L12 17L22 12"/>
                </svg>
                <span className="text-gray-700 font-medium">{lessons} Lessons</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

