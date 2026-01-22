import React from 'react';
import Image from 'next/image';

const educationalPartners = [
  // Row 1: 4 logos
  {
    name: "VTU",
    logo: "/co-creating/vtu.png",
    bgColor: "bg-yellow-100",
  },
  {
    name: "ISO",
    logo: "/co-creating/iso.png",
    bgColor: "bg-green-100",
  },
  {
    name: "AICTE",
    logo: "/co-creating/aicte.png",
    bgColor: "bg-purple-100",
  },
  {
    name: "Oxford",
    logo: "/co-creating/oxford.png",
    bgColor: "bg-blue-100",
  },
  // Row 2: 3 logos
  {
    name: "unstop",
    logo: "/co-creating/unstop.png",
    bgColor: "bg-pink-100",
  },
  {
    name: "Mindenious",
    logo: "/co-creating/mindenious.png",
    bgColor: "bg-cyan-50",
  },
  {
    name: "YHills",
    logo: "/co-creating/yhills.png",
    bgColor: "bg-gray-200",
  },
  // Row 3: 4 logos
  {
    name: "apna",
    logo: "/co-creating/apna.png",
    bgColor: "bg-emerald-50",
  },
  {
    name: "indeed",
    logo: "/co-creating/indeed.png",
    bgColor: "bg-slate-50",
  },
  {
    name: "Internshala",
    logo: "/co-creating/internshala.png",
    bgColor: "bg-indigo-50",
  },
  {
    name: "LinkedIn",
    logo: "/co-creating/linkedin.png",
    bgColor: "bg-blue-50",
  },
];

export default function EducationalAlliances() {
  return (
    <section className="bg-brand-page py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px] relative">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-800 mb-2">
            Co-Creating the Future of Learning
          </h1>
          <p className="text-sm sm:text-base md:text-[16px] text-gray-700 max-w-3xl mx-auto px-4">
            <span className="whitespace-nowrap">Partnering with leading institutions to deliver real-world skills, mentorship, and future-ready learning for</span><br />
            the next generation of changemakers.
          </p>
        </div>

        {/* Main Content Area - Light Grey Rectangle */}
        <div className="bg-gray-100 rounded-2xl min-h-[408px] md:h-[408px] p-4 md:p-4">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center h-full">
            {/* Left Panel - Text Content */}
            <div className="space-y-4 md:space-y-6 ml-0 md:ml-8 lg:ml-16 flex flex-col justify-center h-full">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                Shaping the Future Through<br />
                Powerful Educational Alliances
              </h2>
              <p className="text-xs sm:text-sm md:text-[13px] text-gray-700 leading-5 md:leading-6 italic">
                At InternsForge we&apos;re not just collaborating — we&apos;re co-creating the future of education. By partnering with some of the most forward-thinking institutions across India, we&apos;re bringing next-gen learning experiences directly to ambitious minds where it matters most. These partnerships go beyond traditional education. They represent a shared vision: to equip students with practical skills, mentor-driven guidance, and the confidence to thrive in competitive, ever-evolving industries.
              </p>
            </div>

            {/* Right Panel - Partner Logos Grid */}
            <div className="flex flex-col gap-2 md:gap-2 mr-0 md:mr-8 lg:mr-16 ml-0 md:ml-6 lg:ml-12">
              {/* Row 1: 4 logos */}
              <div className="grid grid-cols-4 gap-2 md:gap-2">
                {educationalPartners.slice(0, 4).map((partner, index) => (
                  <div 
                    key={index} 
                    className={`w-full max-w-[104px] aspect-square mx-auto rounded-lg border border-gray-200 ${partner.bgColor} p-2 flex items-center justify-center overflow-hidden`}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={104}
                      height={104}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
              {/* Row 2: 3 logos */}
              <div className="grid grid-cols-3 gap-2 md:gap-2 max-w-[312px] mx-auto">
                {educationalPartners.slice(4, 7).map((partner, index) => (
                  <div 
                    key={index + 4} 
                    className={`w-full max-w-[104px] aspect-square mx-auto rounded-lg border border-gray-200 ${partner.bgColor} p-2 flex items-center justify-center overflow-hidden`}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={104}
                      height={104}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
              {/* Row 3: 4 logos */}
              <div className="grid grid-cols-4 gap-2 md:gap-2">
                {educationalPartners.slice(7, 11).map((partner, index) => (
                  <div 
                    key={index + 7} 
                    className={`w-full max-w-[104px] aspect-square mx-auto rounded-lg border border-gray-200 ${partner.bgColor} p-2 flex items-center justify-center overflow-hidden`}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={104}
                      height={104}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
