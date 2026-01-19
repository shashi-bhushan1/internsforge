'use client';

import React, { useState, useRef, useEffect } from 'react';

const journeySteps = [
  {
    title: "Discover Your Goal",
    description: "Identify your career aspirations and explore our expert-led programs.",
    color: "bg-blue-400",
    titleBg: "bg-blue-500",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="2" fill="none"/>
        <circle cx="20" cy="20" r="4" fill="white"/>
        <circle cx="20" cy="20" r="12" stroke="white" strokeWidth="1" fill="none" opacity="0.5"/>
        <circle cx="20" cy="20" r="16" stroke="white" strokeWidth="1" fill="none" opacity="0.3"/>
      </svg>
    )
  },
  {
    title: "Choose Your Program",
    description: "Select the course that best fits your career path and goals.",
    color: "bg-green-400",
    titleBg: "bg-green-500",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="8" width="20" height="24" rx="2" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M14 14H26M14 18H26M14 22H20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="28" cy="12" r="4" fill="white"/>
        <path d="M26 12L30 12" stroke="green" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Learn from Experts",
    description: "Attend live sessions and gain insights from industry professionals.",
    color: "bg-yellow-400",
    titleBg: "bg-yellow-500",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="16" r="4" fill="white"/>
        <circle cx="20" cy="16" r="4" fill="white"/>
        <circle cx="28" cy="16" r="4" fill="white"/>
        <path d="M8 26C8 24 9 23 11 23C13 23 14 24 14 26" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 26C16 24 17 23 19 23C21 23 22 24 22 26" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 26C24 24 25 23 27 23C29 23 30 24 30 26" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 12L12 8M20 12L20 6M28 12L28 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="8" r="2" fill="white"/>
        <circle cx="20" cy="6" r="2" fill="white"/>
        <circle cx="28" cy="8" r="2" fill="white"/>
      </svg>
    )
  },
  {
    title: "Work on Projects",
    description: "Apply your knowledge through hands-on projects and case studies.",
    color: "bg-orange-400",
    titleBg: "bg-orange-500",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 30L10 20L20 10L30 20L20 30Z" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M20 10V30M10 20H30" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 10L15 15M20 10L25 15M20 30L15 25M20 30L25 25" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Get Certified",
    description: "Earn an industry-recognized certification to validate your expertise.",
    color: "bg-pink-400",
    titleBg: "bg-pink-500",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="12" width="20" height="16" rx="2" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M14 18H26M14 22H20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 8L18 12L14 12L16 15L15 19L20 17L25 19L24 15L26 12L22 12L20 8Z" fill="white"/>
      </svg>
    )
  },
  {
    title: "Build a Career",
    description: "Use your new skills and certifications to excel in your professional journey.",
    color: "bg-orange-600",
    titleBg: "bg-orange-700",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 30L10 20L20 10L30 20L20 30Z" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M20 10V30M10 20H30" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 10L15 15M20 10L25 15M20 30L15 25M20 30L25 25" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  }
];

export default function LearningJourney() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollPosition();
      container.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
      
      return () => {
        container.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 200; // Base card width, adjust for md breakpoint
      scrollContainerRef.current.scrollBy({
        left: -cardWidth - 16, // card width + gap
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 200; // Base card width, adjust for md breakpoint
      scrollContainerRef.current.scrollBy({
        left: cardWidth + 16, // card width + gap
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-brand-page py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px] relative">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-3 md:mb-4">
            Experience Your Learning Journey at<br />InternsForge Edtech
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto px-4">
            Embark on your learning journey with InternsForge Edtech, where innovative courses and expert guidance empower you to achieve your professional goals.
          </p>
        </div>

        {/* Journey Steps Flowchart */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="relative overflow-x-auto pb-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex items-start gap-4 md:gap-6 min-w-max px-4">
              {journeySteps.map((step, index) => (
                <div key={index} className="relative shrink-0">
                  {/* Connecting Line */}
                  {index < journeySteps.length - 1 && (
                    <div className="absolute top-8 left-full w-6 md:w-8 z-0" style={{ transform: 'translateX(-2px)' }}>
                      <svg width="100%" height="4" viewBox="0 0 100 4" preserveAspectRatio="none">
                        <line x1="0" y1="2" x2="100" y2="2" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="4 4"/>
                        <polygon points="100,0 110,2 100,4" fill="#9CA3AF"/>
                      </svg>
                    </div>
                  )}
                  
                  {/* Step Card */}
                  <div className={`${step.color} rounded-lg shadow-md overflow-hidden w-[200px] md:w-[240px] relative z-10`}>
                    {/* Icon */}
                    <div className="flex items-center justify-center p-4">
                      {step.icon}
                    </div>

                    {/* Title Bar */}
                    <div className={`${step.titleBg} px-4 py-2`}>
                      <h3 className="text-white font-semibold text-sm md:text-base text-center">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="bg-white p-4">
                      <p className="text-xs md:text-sm text-gray-700 leading-5 text-center">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow - Positioned outside the scrollable container */}
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-[-16px] sm:left-[-20px] md:left-[-24px] top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200"
              aria-label="Scroll left"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#1b0905" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}

          {/* Right Arrow - Positioned outside the scrollable container */}
          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-[-16px] sm:right-[-20px] md:right-[-24px] top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200"
              aria-label="Scroll right"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#1b0905" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

