'use client';

import React from 'react';

const tools = [
  // Top Row
  {
    name: "C++",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
          <span className="text-white font-bold text-xl">C++</span>
        </div>
      </div>
    )
  },
  {
    name: "SQL",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">SQL</span>
        </div>
      </div>
    )
  },
  {
    name: "Kotlin",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-blue-500 rounded flex items-center justify-center">
          <span className="text-white font-bold text-lg">K</span>
        </div>
        <span className="text-black font-semibold text-sm">Kotlin</span>
      </div>
    )
  },
  {
    name: "Docker",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center">
          <svg width="28" height="20" viewBox="0 0 28 20" fill="white">
            <path d="M14 0C6.27 0 0 5.37 0 12c0 3.69 2.01 6.93 5.04 8.68L3.5 20h5.5l1.5-1.5v-3.5h3.5l1.5-1.5v-3.5h3.5l1.5-1.5V8.5h3.5L25 7h3.5l1.5-1.5V3.5L28 2h-2.5l-1.5 1.5v2L22.5 7H20l-1.5 1.5v3.5h-3.5L14 13.5v3.5h-3.5L9 18.5v1.5H7.5L6 21.5v-2L4.5 18H2.5L1 16.5v-2L0 13.5v-1.5h1.5L3 10.5V9H4.5L6 7.5V6H7.5L9 4.5V3H10.5L12 1.5V0H14z"/>
          </svg>
        </div>
        <span className="text-blue-600 font-semibold text-sm lowercase">docker</span>
      </div>
    )
  },
  {
    name: "Jenkins",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <circle cx="12" cy="10" r="6" fill="white"/>
            <circle cx="12" cy="10" r="3" fill="#1E3A8A"/>
            <rect x="10" y="16" width="4" height="4" fill="white"/>
            <rect x="11" y="18" width="2" height="2" fill="#1E3A8A"/>
          </svg>
        </div>
        <span className="text-black font-semibold text-sm">Jenkins</span>
      </div>
    )
  },
  {
    name: "Anaconda",
    logo: (
      <div className="flex flex-col items-center gap-1">
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-green-600 rounded-full"></div>
        </div>
        <span className="text-black font-semibold text-xs">ANACONDA.</span>
      </div>
    )
  },
  {
    name: "Tally",
    logo: (
      <div className="flex items-center">
        <span className="text-red-600 font-bold text-2xl italic">Tally</span>
      </div>
    )
  },
  {
    name: "Node.js",
    logo: (
      <div className="flex flex-col items-center gap-1">
        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">node</span>
        </div>
        <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">js</span>
        </div>
      </div>
    )
  },
  {
    name: "MongoDB",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 2C8.27 2 2 8.27 2 16s6.27 14 14 14 14-6.27 14-14S23.73 2 16 2zm0 26c-6.63 0-12-5.37-12-12S9.37 4 16 4s12 5.37 12 12-5.37 12-12 12z" fill="#10AA50"/>
            <path d="M16 6c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#10AA50"/>
            <path d="M16 10c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#10AA50"/>
          </svg>
        </div>
        <span className="text-green-600 font-semibold text-sm">MongoDB.</span>
      </div>
    )
  },
  // Bottom Row
  {
    name: "Wireshark",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L2 4v8c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V4l-10-2zm0 2.18l8 1.6v7.22c0 4.5-3.07 8.69-7.4 9.84C8.07 21.69 5 17.5 5 13V5.78l7-1.6z"/>
            <path d="M8 8h8v2H8V8zm0 4h8v2H8v-2z" fill="white"/>
          </svg>
        </div>
        <span className="text-black font-semibold text-sm">WIRESHARK</span>
      </div>
    )
  },
  {
    name: "Microsoft Excel",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-green-600 rounded flex items-center justify-center">
          <span className="text-white font-bold text-xl">X</span>
        </div>
      </div>
    )
  },
  {
    name: "Pandas",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <rect x="3" y="6" width="4" height="12" fill="white"/>
            <rect x="9" y="4" width="4" height="14" fill="white"/>
            <rect x="15" y="8" width="4" height="10" fill="white"/>
          </svg>
        </div>
        <span className="text-black font-semibold text-sm lowercase">pandas</span>
      </div>
    )
  },
  {
    name: "Microsoft Azure",
    logo: (
      <div className="flex items-center">
        <span className="text-blue-600 font-semibold text-sm">Microsoft Azure</span>
      </div>
    )
  },
  {
    name: "Kali Linux",
    logo: (
      <div className="flex flex-col items-center gap-1">
        <div className="w-12 h-12 bg-gray-700 rounded flex items-center justify-center">
          <span className="text-white font-bold text-xs">KALI</span>
        </div>
        <span className="text-gray-600 text-[8px] text-center">BY OFFENSIVE<br />SECURITY</span>
      </div>
    )
  },
  {
    name: "TensorFlow",
    logo: (
      <div className="flex items-center">
        <div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center">
          <span className="text-white font-bold text-xl">T</span>
        </div>
      </div>
    )
  },
  {
    name: "MATLAB",
    logo: (
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-500 rounded flex items-center justify-center">
          <span className="text-white font-bold text-lg">M</span>
        </div>
      </div>
    )
  },
  {
    name: "Firebase",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <div className="w-8 h-8 bg-gray-800 rounded"></div>
      </div>
    )
  },
  {
    name: "Python",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" fill="#3776AB"/>
            <path d="M16 8c-2.21 0-4 1.79-4 4v2h4v-2h4v-2c0-2.21-1.79-4-4-4zm-4 12c0 2.21 1.79 4 4 4h4v-2h-4v-2h4v-2c0-2.21-1.79-4-4-4s-4 1.79-4 4z" fill="#FFD43B"/>
            <circle cx="12" cy="12" r="2" fill="#3776AB"/>
            <circle cx="20" cy="20" r="2" fill="#FFD43B"/>
          </svg>
        </div>
      </div>
    )
  }
];

export default function ToolsYouWillLearn() {
  const topRow = tools.slice(0, 9);
  const bottomRow = tools.slice(9);

  // Duplicate arrays for seamless infinite scroll
  const topRowDuplicated = [...topRow, ...topRow];
  const bottomRowDuplicated = [...bottomRow, ...bottomRow];

  return (
    <section className="bg-white py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:pl-[145px] lg:pr-[145px]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-3 md:mb-4">
            Tools you will learn
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto px-4">
            Explore the top companies and organizations where our alumni have built successful careers, showcasing their achievements and professional growth.
          </p>
        </div>

        {/* Tools Grid - Two Rows with Infinite Scroll */}
        <div className="space-y-6 overflow-hidden">
          {/* Top Row - Scroll Right to Left */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 md:gap-6 animate-scroll-right-to-left">
              {topRowDuplicated.map((tool, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex items-center justify-center min-w-[140px] flex-shrink-0">
                  {tool.logo}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Scroll Left to Right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 md:gap-6 animate-scroll-left-to-right">
              {bottomRowDuplicated.map((tool, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex items-center justify-center min-w-[140px] flex-shrink-0">
                  {tool.logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

