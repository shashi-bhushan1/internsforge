'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Megha Shetty",
    title: "CA Finalist",
    image: "/mentors/meghaShetty.webp",
    linkedin: "#"
  },
  {
    name: "Tushar Agarwal",
    title: "Drone Skill Training",
    image: "/mentors/tusharAgarwal.webp",
    linkedin: "#"
  },
  {
    name: "Aabid Padder",
    title: "Data Analyst",
    image: "/mentors/Aabid Padder.webp",
    linkedin: "#"
  },
  {
    name: "Suman Shekhar",
    title: "SWE 2 @People Inc.",
    image: "/mentors/sumanSekhar.webp",
    linkedin: "#"
  },
  {
    name: "Sakshi Pandey",
    title: "Cyber Security & Digital Forensics",
    image: "/mentors/sakshiPandey.webp",
    linkedin: "#"
  },
  {
    name: "Uttam Grade",
    title: "Data Scientist",
    image: "/mentors/uttamGrade.webp",
    linkedin: "#"
  },
  {
    name: "Subhasis Thakurta",
    title: "Human Resources Leader",
    image: "/mentors/SubhashisThakurta.webp",
    linkedin: "#"
  },
  {
    name: "Arib Nawal",
    title: "Data science corporate trainer",
    image: "/mentors/aribNawal.webp",
    linkedin: "#"
  },
  {
    name: "Iqbal Ansari",
    title: "Full Stack Developer",
    image: "/mentors/Iqbal Ansari.webp",
    linkedin: "#"
  },
  {
    name: "Aqib Ahmed",
    title: "Software Engineer",
    image: "/mentors/aqibAhmed.webp",
    linkedin: "#"
  },
  {
    name: "Shamika Singh",
    title: "Tech Mentor",
    image: "/mentors/ShamikaSingh.webp",
    linkedin: "#"
  }
];

export default function MeetTheTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 280 + 24; // Card width (280px) + gap (24px)
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 280 + 24; // Card width (280px) + gap (24px)
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const nextMember = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevMember = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-brand-page py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-base font-normal text-gray-800 mb-2">
            Meet the team
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900">
            Meet our Dedicated Team of<br />Educators and Innovators
          </h1>
        </div>

        {/* Mobile/Tablet View: Carousel with Arrow Navigation */}
        <div className="lg:hidden">
          <div className="relative w-full max-w-[280px] mx-auto">
            {/* Team Member Card */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden w-[280px] h-[400px] flex flex-col border-2 border-gray-200 transition-all duration-300 hover:border-brand-orange hover:shadow-xl mx-auto">
              {/* Image Section */}
              <div className="relative w-full flex-1 rounded-t-2xl overflow-hidden">
                <Image
                  src={teamMembers[currentIndex].image}
                  alt={teamMembers[currentIndex].name}
                  fill
                  className="object-cover transition-all duration-300"
                />
              </div>
              
              {/* Info Section Below Image */}
              <div className="p-2 bg-white flex flex-col flex-shrink-0">
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {teamMembers[currentIndex].name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {teamMembers[currentIndex].title}
                </p>
                {/* View Profile Button - Light Gray with Black Text */}
                <a 
                  href={teamMembers[currentIndex].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-900 text-sm font-medium rounded-full transition-colors cursor-pointer"
                >
                  <span>View Profile</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-4 mt-6">
              {/* Left Arrow Button */}
              <button
                onClick={prevMember}
                className="w-10 h-10 rounded-full bg-brand-orange hover:bg-brand-cyan flex items-center justify-center transition-colors shadow-md"
                aria-label="Previous mentor"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={nextMember}
                className="w-10 h-10 rounded-full bg-brand-orange hover:bg-brand-cyan flex items-center justify-center transition-colors shadow-md"
                aria-label="Next mentor"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-brand-orange' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to mentor ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View: Horizontal Carousel Layout */}
        <div className="hidden lg:block w-full mx-auto">
          <div className="relative">
            {/* Left Arrow Button */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors shadow-lg"
              aria-label="Scroll left"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2"
            >
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-md overflow-hidden w-[280px] h-[400px] flex-shrink-0 flex flex-col border-2 border-gray-200 transition-all duration-300 hover:border-brand-orange hover:shadow-xl"
                >
                  {/* Image Section */}
                  <div className="relative w-full flex-1 rounded-t-2xl overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-all duration-300"
                    />
                  </div>
                  
                  {/* Info Section Below Image */}
                  <div className="p-2 bg-white flex flex-col flex-shrink-0">
                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {member.title}
                    </p>
                    {/* View Profile Button - Light Gray with Black Text */}
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-900 text-sm font-medium rounded-full transition-colors cursor-pointer"
                    >
                      <span>View Profile</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors shadow-lg"
              aria-label="Scroll right"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

