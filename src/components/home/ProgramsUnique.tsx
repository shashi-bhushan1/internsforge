'use client';

import React from 'react';
import Image from 'next/image';

export default function ProgramsUnique() {
  const handleExploreMore = () => {
    const element = document.getElementById('top-featured-courses');
    if (element) {
      // Get header height to account for sticky header
      const header = document.querySelector('header');
      const headerHeight = header ? (window.innerWidth >= 768 ? 120 : header.offsetHeight) : 80;
      
      // Calculate the position to scroll to (element position minus header height)
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight - 20; // Extra 20px for spacing
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  return (
    <section className="bg-brand-page py-6 md:py-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center m-0 border-0 p-3 md:p-5">
          {/* Left Section - Text Content */}
          <div className="space-y-4 md:space-y-6 ml-0 md:ml-6">
            <p className="text-sm sm:text-base md:text-[16px] font-bold text-gray-600 uppercase tracking-wide">
              ONLINE LEARNING DONE BETTER
            </p>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-black leading-tight">
              Discover what makes<br />
              our programs unique
            </h2>
            
            <p className="text-xs sm:text-sm md:text-[13px] text-gray-700 leading-5 md:leading-6">
              InternsForge Learning programs are crafted for busy professionals, featuring top university professors, industry mentors, and real hands-on projects. Our approach ensures you gain practical skills from the best in the field, making our programs the ideal choice for those looking to advance their careers and master new skills effectively.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <button 
                onClick={handleExploreMore}
                className="px-6 md:px-8 py-3 md:py-3.5 bg-brand-orange text-white font-semibold rounded-full hover:bg-brand-cyan transition-colors text-sm md:text-base shadow-sm"
              >
                Explore More
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="flex justify-center mt-6 lg:mt-0">
            <div className="relative w-[340px] h-[340px] sm:w-[430px] sm:h-[430px] md:w-[520px] md:h-[520px]">
              <Image
                src="/discover-home.webp"
                alt="Discover what makes our programs unique"
                width={520}
                height={520}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

