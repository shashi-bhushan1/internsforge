'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Uttam Grade",
    company: "EY",
    designation: "Data Scientist",
    image: "/mentors/uttamGrade.webp",
    linkedin: "https://www.linkedin.com/in/uttamgrade/"
  },
  {
    name: "Krityanand Verma",
    company: "LKQ",
    designation: "Network Security",
    image: "/mentors/Krityanand Verma.webp",
    linkedin: "https://www.linkedin.com/in/krityanand-verma-258491256/"
  },
  {
    name: "Raj Kashyap",
    company: "MKS Instruments",
    designation: "Principal Architect",
    image: "/mentors/Raj Kashyap.webp",
    linkedin: "#"
  },
  {
    name: "Keshav",
    company: "Infosys",
    designation: "Software Testing",
    image: "/mentors/Keshav.webp",
    linkedin: "#"
  },
  {
    name: "Rajneesh Kumar",
    company: "Infosys Ltd",
    designation: "Fullstack Web Development",
    image: "/mentors/Rajneesh Kumar.webp",
    linkedin: "#"
  },
  {
    name: "Archanashree",
    company: "Santander Bank",
    designation: "Cyber Security",
    image: "/mentors/Archanashree.webp",
    linkedin: "#"
  },
  {
    name: "Kajal Jha",
    company: "Cognizant",
    designation: "DSA and Programming in Python",
    image: "/mentors/Kajal Jha.webp",
    linkedin: "#"
  },
  {
    name: "Chetan Vijay",
    company: "TCS",
    designation: "Programming in Java",
    image: "/mentors/Chetan Vijay.webp",
    linkedin: "#"
  },
  {
    name: "Vinuthna galagam",
    company: "6d technologies",
    designation: "Artificial Intelligence",
    image: "/mentors/Vinuthna galagam.webp",
    linkedin: "#"
  },
  {
    name: "Mrinmoy Pal",
    company: "Infosys Ltd",
    designation: "Full Stack Web Development",
    image: "/mentors/Mrinmoy Pal.webp",
    linkedin: "#"
  },
  {
    name: "Prakash kumar",
    company: "CGI",
    designation: "Sr. Software Engineer",
    image: "/mentors/Prakash kumar.webp",
    linkedin: "#"
  },
  {
    name: "Abhishek Saurabh",
    company: "Infogain",
    designation: "Cloud Computing",
    image: "/mentors/Abhishek Saurabh.webp",
    linkedin: "#"
  },
  {
    name: "Abhishek Pandey",
    company: "Wipro",
    designation: "Sr. Salesforce BA",
    image: "/mentors/Abhishek Pandey.jpeg",
    linkedin: "https://www.linkedin.com/in/abhishek-pandey-644729111/"
  },
  {
    name: "Farhath Bhat",
    company: "Sony",
    designation: "Software Engineer",
    image: "/mentors/Farhath Bhat.jpeg",
    linkedin: "https://www.linkedin.com/in/farhathbhat/"
  },
  {
    name: "Sakshi Pandey",
    company: "Davies",
    designation: "Cybersecurity",
    image: "/mentors/sakshiPandey.webp",
    linkedin: "https://www.linkedin.com/in/sakshipandeyofficial/"
  },
  {
    name: "Megha Shetty",
    company: "ICAI",
    designation: "Finance",
    image: "/mentors/meghaShetty.webp",
    linkedin: "https://www.linkedin.com/in/megha-shetty-206b89175/"
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
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden w-[280px] h-[420px] flex flex-col mx-auto">
              {/* Image Section with Padding */}
              <div className="pt-4 px-4 shrink-0">
                <div className="relative w-full h-[240px] rounded-xl overflow-hidden">
                  <Image
                    src={teamMembers[currentIndex].image}
                    alt={teamMembers[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Info Section Below Image */}
              <div className="px-6 pt-4 pb-3 bg-white flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">
                    {teamMembers[currentIndex].name}
                  </h3>
                  <p className="text-sm font-medium text-gray-600 mb-1.5 text-center">
                    {teamMembers[currentIndex].company}
                  </p>
                  <p className="text-sm font-normal text-gray-500 mb-3 text-center">
                    {teamMembers[currentIndex].designation}
                  </p>
                </div>
                {/* View Profile Button - Light Gray with Black Text */}
                <a 
                  href={teamMembers[currentIndex].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-900 text-sm font-medium rounded-full transition-colors group"
                >
                  <span className="group-hover:underline">View Profile</span>
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
          <div className="relative px-16">
            {/* Left Arrow Button */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border-2 border-gray-300 hover:border-brand-orange hover:bg-gray-50 flex items-center justify-center transition-all shadow-lg"
              aria-label="Scroll left"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="hover:stroke-brand-orange transition-colors">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
            >
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-3xl border border-gray-200 overflow-hidden w-[280px] h-[420px] shrink-0 flex flex-col"
                >
                  {/* Image Section with Padding */}
                  <div className="pt-4 px-4 shrink-0">
                    <div className="relative w-full h-[240px] rounded-xl overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Info Section Below Image */}
                  <div className="px-6 pt-4 pb-3 bg-white flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-gray-600 mb-1.5 text-center">
                        {member.company}
                      </p>
                      <p className="text-sm font-normal text-gray-500 mb-3 text-center">
                        {member.designation}
                      </p>
                    </div>
                    {/* View Profile Button - Light Gray with Black Text */}
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-900 text-sm font-medium rounded-full transition-colors group"
                    >
                      <span className="group-hover:underline">View Profile</span>
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
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border-2 border-gray-300 hover:border-brand-orange hover:bg-gray-50 flex items-center justify-center transition-all shadow-lg"
              aria-label="Scroll right"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="hover:stroke-brand-orange transition-colors">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

