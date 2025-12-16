'use client';

import React from 'react';

const companies = [
  // Top Row
  {
    name: "Meta",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
          <span className="text-white font-bold text-xl">∞</span>
        </div>
        <span className="text-blue-600 font-semibold text-sm">Meta</span>
      </div>
    )
  },
  {
    name: "Microsoft",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 grid grid-cols-2 gap-0.5">
          <div className="bg-blue-500 rounded-tl"></div>
          <div className="bg-green-500 rounded-tr"></div>
          <div className="bg-yellow-500 rounded-bl"></div>
          <div className="bg-red-500 rounded-br"></div>
        </div>
        <span className="text-gray-600 font-semibold text-sm">Microsoft</span>
      </div>
    )
  },
  {
    name: "Amazon",
    logo: (
      <div className="flex items-center gap-1">
        <span className="text-black font-semibold text-sm">amazon</span>
        <svg width="50" height="12" viewBox="0 0 50 12" fill="none">
          <path d="M5 2C10 8 15 8 20 8C25 8 30 8 35 2" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M35 2L40 8L45 2" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
    )
  },
  {
    name: "Unity",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-black rounded flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-sm transform rotate-45"></div>
        </div>
        <span className="text-black font-semibold text-sm lowercase">unity</span>
      </div>
    )
  },
  {
    name: "HCLTech",
    logo: (
      <div className="flex items-center">
        <span className="text-blue-600 font-semibold text-sm">HCLTech</span>
      </div>
    )
  },
  {
    name: "Microsoft",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 grid grid-cols-2 gap-0.5">
          <div className="bg-blue-500 rounded-tl"></div>
          <div className="bg-green-500 rounded-tr"></div>
          <div className="bg-yellow-500 rounded-bl"></div>
          <div className="bg-red-500 rounded-br"></div>
        </div>
        <span className="text-gray-600 font-semibold text-sm">Microsoft</span>
      </div>
    )
  },
  {
    name: "Meta",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
          <span className="text-white font-bold text-xl">∞</span>
        </div>
        <span className="text-blue-600 font-semibold text-sm">Meta</span>
      </div>
    )
  },
  {
    name: "Amazon",
    logo: (
      <div className="flex items-center gap-1">
        <span className="text-black font-semibold text-sm">amazon</span>
        <svg width="50" height="12" viewBox="0 0 50 12" fill="none">
          <path d="M5 2C10 8 15 8 20 8C25 8 30 8 35 2" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M35 2L40 8L45 2" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
    )
  },
  {
    name: "Unity",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-black rounded flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-sm transform rotate-45"></div>
        </div>
        <span className="text-black font-semibold text-sm lowercase">unity</span>
      </div>
    )
  },
  // Bottom Row
  {
    name: "HP",
    logo: (
      <div className="flex items-center">
        <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
          <span className="text-white font-bold text-xl">h</span>
        </div>
      </div>
    )
  },
  {
    name: "Oracle",
    logo: (
      <div className="flex items-center">
        <span className="text-red-600 font-semibold text-sm uppercase">ORACLE</span>
      </div>
    )
  },
  {
    name: "Walmart",
    logo: (
      <div className="flex items-center gap-1">
        <span className="text-blue-600 font-semibold text-sm">Walmart</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="#FFC72C">
          <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z"/>
        </svg>
      </div>
    )
  },
  {
    name: "Meta",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
          <span className="text-white font-bold text-xl">∞</span>
        </div>
        <span className="text-blue-600 font-semibold text-sm">Meta</span>
      </div>
    )
  },
  {
    name: "Microsoft",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 grid grid-cols-2 gap-0.5">
          <div className="bg-blue-500 rounded-tl"></div>
          <div className="bg-green-500 rounded-tr"></div>
          <div className="bg-yellow-500 rounded-bl"></div>
          <div className="bg-red-500 rounded-br"></div>
        </div>
        <span className="text-gray-600 font-semibold text-sm">Microsoft</span>
      </div>
    )
  },
  {
    name: "Amazon",
    logo: (
      <div className="flex items-center gap-1">
        <span className="text-black font-semibold text-sm">amazon</span>
        <svg width="50" height="12" viewBox="0 0 50 12" fill="none">
          <path d="M5 2C10 8 15 8 20 8C25 8 30 8 35 2" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M35 2L40 8L45 2" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
    )
  },
  {
    name: "Unity",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-black rounded flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-sm transform rotate-45"></div>
        </div>
        <span className="text-black font-semibold text-sm lowercase">unity</span>
      </div>
    )
  },
  {
    name: "HCLTech",
    logo: (
      <div className="flex items-center">
        <span className="text-blue-600 font-semibold text-sm">HCLTech</span>
      </div>
    )
  },
  {
    name: "Microsoft",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 grid grid-cols-2 gap-0.5">
          <div className="bg-blue-500 rounded-tl"></div>
          <div className="bg-green-500 rounded-tr"></div>
          <div className="bg-yellow-500 rounded-bl"></div>
          <div className="bg-red-500 rounded-br"></div>
        </div>
        <span className="text-gray-600 font-semibold text-sm">Microsoft</span>
      </div>
    )
  }
];

export default function AlumniWorksAt() {
  const topRow = companies.slice(0, 9);
  const bottomRow = companies.slice(9);

  // Duplicate arrays for seamless infinite scroll
  const topRowDuplicated = [...topRow, ...topRow];
  const bottomRowDuplicated = [...bottomRow, ...bottomRow];

  return (
    <section className="bg-white py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:pl-[145px] lg:pr-[145px]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-3 md:mb-4">
            Our Alumni Works At
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto px-4">
            Explore the top companies and organizations where our alumni have built successful careers, showcasing their achievements and professional growth.
          </p>
        </div>

        {/* Companies Grid - Two Rows with Infinite Scroll */}
        <div className="space-y-6 overflow-hidden">
          {/* Top Row - Scroll Right to Left */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 md:gap-6 animate-scroll-right-to-left">
              {topRowDuplicated.map((company, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex items-center justify-center min-w-[140px] flex-shrink-0">
                  {company.logo}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Scroll Left to Right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 md:gap-6 animate-scroll-left-to-right">
              {bottomRowDuplicated.map((company, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex items-center justify-center min-w-[140px] flex-shrink-0">
                  {company.logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

