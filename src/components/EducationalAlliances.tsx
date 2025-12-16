import React from 'react';

const educationalPartners = [
  {
    name: "VELS",
    logo: (
      <div className="flex flex-col items-center gap-1 p-2 bg-yellow-50 rounded-lg h-full justify-center overflow-hidden">
        <div className="flex items-center gap-2">
          <div className="w-12 h-14 bg-yellow-200 rounded flex flex-col items-center justify-center p-1">
            <div className="w-8 h-6 bg-yellow-300 rounded mb-1"></div>
            <div className="w-6 h-1 bg-yellow-400 rounded"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-blue-700 font-bold text-sm">VELS</span>
            <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center mt-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="6" r="2.5" fill="#8B5A2B"/>
                <path d="M4 13C4 10.5 5.5 9 8 9C10.5 9 12 10.5 12 13" stroke="#8B5A2B" strokeWidth="1"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "MAITREYI COLLEGE",
    logo: (
      <div className="flex flex-col items-center gap-1 p-2 bg-green-50 rounded-lg h-full justify-center overflow-hidden">
        <div className="text-center text-[9px] text-gray-800 mb-1">
          <div className="font-bold">MAITREYI COLLEGE</div>
          <div className="text-[8px]">University of Delhi</div>
          <div className="text-[7px] mt-0.5">NAAC A++</div>
        </div>
        <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center border-2 border-pink-400">
          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
            <span className="text-pink-800 font-bold text-[9px]">MC</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "IVB",
    logo: (
      <div className="flex flex-col items-center gap-1.5 p-2 bg-purple-50 rounded-lg h-full justify-center overflow-hidden">
        <div className="w-14 h-14 bg-purple-200 rounded-lg flex items-center justify-center">
          <span className="text-purple-800 font-bold text-lg">IVB</span>
        </div>
      </div>
    ),
  },
  {
    name: "unstop",
    logo: (
      <div className="flex flex-col items-center gap-1.5 p-2 bg-pink-50 rounded-lg h-full justify-center overflow-hidden">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">u</span>
          </div>
          <span className="text-blue-600 font-bold text-sm lowercase">unstop</span>
        </div>
      </div>
    ),
  },
  {
    name: "DRONA AVIATION",
    logo: (
      <div className="flex flex-col items-center gap-1 p-2 bg-blue-50 rounded-lg h-full justify-center overflow-hidden">
        <div className="flex items-center gap-0.5">
          <span className="text-black font-bold text-lg">DR</span>
          <div className="w-7 h-7 rounded-full border-2 border-black flex items-center justify-center relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-1.5 h-1.5 bg-black rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-1.5 h-1.5 bg-black rounded-full"></div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-1.5 h-1.5 bg-black rounded-full"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 w-1.5 h-1.5 bg-black rounded-full"></div>
          </div>
          <span className="text-black font-bold text-lg">NA</span>
        </div>
        <span className="text-black font-bold text-xs uppercase">AVIATION</span>
      </div>
    ),
  },
  {
    name: "JIGYASA UNIVERSITY",
    logo: (
      <div className="flex flex-col items-center gap-1 p-2 bg-gray-100 rounded-lg h-full justify-center overflow-hidden">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-full flex items-center justify-center border-2 border-blue-700">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-blue-800 font-bold text-[10px]">JU</span>
          </div>
        </div>
        <span className="text-gray-800 font-bold text-[9px] text-center leading-tight">JIGYASA</span>
      </div>
    ),
  },
  {
    name: "masai.",
    logo: (
      <div className="flex flex-col items-center gap-1.5 p-2 bg-white rounded-lg h-full border border-gray-200 justify-center overflow-hidden">
        <span className="text-black font-bold text-xl lowercase">masai.</span>
      </div>
    ),
  },
  {
    name: "Akshara",
    logo: (
      <div className="flex flex-col items-center gap-1.5 p-2 bg-white rounded-lg h-full border border-gray-200 justify-center overflow-hidden">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-green-500 rounded-lg transform rotate-45"></div>
          <div className="absolute inset-1.5 bg-white rounded flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 8L22 10L15 12L12 18L9 12L2 10L9 8L12 2Z" fill="#22C55E"/>
            </svg>
          </div>
        </div>
        <div className="text-center text-[9px] leading-tight">
          <div className="text-orange-500 font-bold">Akshara</div>
          <div className="text-gray-600 text-[8px]">The power of knowledge</div>
        </div>
      </div>
    ),
  },
  {
    name: "NSB NAAC Grade A",
    logo: (
      <div className="flex flex-col items-center gap-1 p-2 bg-white rounded-lg h-full border border-gray-200 justify-center overflow-hidden">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xs">NSB</span>
        </div>
        <div className="text-center">
          <div className="text-gray-800 font-bold text-[9px]">NAAC GRADE A</div>
          <div className="text-gray-600 text-[8px]">Accredited B-school</div>
        </div>
      </div>
    ),
  },
];

export default function EducationalAlliances() {
  return (
    <section className="bg-white py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:pl-[145px] lg:pr-[145px] relative">
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
            <div className="grid grid-cols-3 gap-2 md:gap-2 mr-0 md:mr-8 lg:mr-16 ml-0 md:ml-6 lg:ml-12">
              {educationalPartners.map((partner, index) => (
                <div key={index} className="w-full max-w-[104px] aspect-square mx-auto">
                  {partner.logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Corner Icons */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col gap-3 md:gap-4 z-50">
        <button className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors shadow-lg">
          <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M5 12L12 5L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg">
          <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.042-.024-4.976 1.293-1.059-4.916-.024-.042A9.86 9.86 0 0112.001 2.001c5.421 0 9.848 4.409 9.848 9.83 0 5.421-4.427 9.83-9.848 9.83"/>
          </svg>
        </button>
      </div>
    </section>
  );
}

