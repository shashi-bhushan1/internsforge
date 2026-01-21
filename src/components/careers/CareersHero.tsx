'use client';

import React from 'react';
import Image from 'next/image';

export default function CareersHero() {
  const handleExploreOpenings = () => {
    const jobOpeningsSection = document.getElementById('job-openings');
    if (jobOpeningsSection) {
      jobOpeningsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-brand-page py-8 md:py-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-8 lg:gap-8 items-start">
          {/* Left Section - Job Provider Image */}
          <div className="relative">
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden w-full h-[400px] md:h-[450px]">
              <Image
                src="/careers-hero.jpg"
                alt="Job opportunities"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="flex flex-col justify-center h-full pt-8 lg:pt-0">
            <h1 className="text-[40px] font-bold text-gray-900 mb-6 md:mb-8 leading-[1.1] max-w-[650px]">
              Join Our Team: Shape the Future of Learning and Careers
            </h1>
            <p className="text-base text-gray-700 mb-8 md:mb-10 leading-relaxed max-w-3xl">
              At InternsForge, we&apos;re dedicated to transforming learning experiences and shaping careers. 
              We&apos;re looking for passionate individuals to join our team as mentors, HR professionals, and more. 
              As a part of our team, you&apos;ll have the opportunity to influence the next generation of learners 
              and professionals. Whether you&apos;re driven by innovation, education, or mentorship, InternsForge 
              offers a dynamic environment where your skills and ideas can thrive. Explore our current openings 
              below and embark on a rewarding journey with us.
            </p>
            <button
              onClick={handleExploreOpenings}
              className="bg-brand-orange hover:bg-brand-cyan text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm md:text-base w-fit shadow-sm"
            >
              Explore openings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
