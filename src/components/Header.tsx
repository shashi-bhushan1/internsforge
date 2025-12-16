'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// SVG Icons
const BrainIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5C15 5 10 7.5 10 12.5C10 15 11.5 17.5 13 18.75C11.5 20 10 22.5 10 25C10 30 15 32.5 20 32.5C25 32.5 30 30 30 25C30 22.5 28.5 20 27 18.75C28.5 17.5 30 15 30 12.5C30 7.5 25 5 20 5Z" fill="#4CAF50"/>
    <path d="M17.5 10C17.5 10 15 12.5 15 15C15 16.25 16.25 17.5 17.5 17.5C18.75 17.5 20 16.25 20 15C20 12.5 17.5 10 17.5 10Z" fill="#2196F3"/>
    <path d="M22.5 10C22.5 10 25 12.5 25 15C25 16.25 23.75 17.5 22.5 17.5C21.25 17.5 20 16.25 20 15C20 12.5 22.5 10 22.5 10Z" fill="#FF9800"/>
    <path d="M20 15C20 15 18.75 17.5 18.75 20C18.75 21.25 20 22.5 21.25 22.5C22.5 22.5 23.75 21.25 23.75 20C23.75 17.5 22.5 15 20 15Z" fill="#F44336"/>
    <path d="M20 12.5C20 12.5 18 14.5 18 16.5C18 17.5 19 18.5 20 18.5C21 18.5 22 17.5 22 16.5C22 14.5 20 12.5 20 12.5Z" fill="#9C27B0"/>
  </svg>
);

const HamburgerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 5H18M2 10H18M2 15H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const MedicalCrossIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="14" height="14" rx="2" stroke="white" strokeWidth="2"/>
    <path d="M10 6V14M6 10H14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const HouseIcon = ({ isActive }: { isActive?: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2L2 8V18H8V12H12V18H18V8L10 2Z" fill={isActive ? "#FF9800" : "none"} stroke={isActive ? "#FF9800" : "#374151"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InfoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8" stroke="#374151" strokeWidth="2"/>
    <path d="M10 6V10M10 14H10.01" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="12" height="10" stroke="#374151" strokeWidth="2"/>
    <path d="M4 8C4 7 5 6 6 6H14C15 6 16 7 16 8" stroke="#374151" strokeWidth="2"/>
    <path d="M8 6V4C8 3 9 2 10 2C11 2 12 3 12 4V6" stroke="#374151" strokeWidth="2"/>
  </svg>
);

const EnvelopeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="16" height="12" stroke="#374151" strokeWidth="2"/>
    <path d="M2 6L10 11L18 6" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const GraduationCapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2L2 6L10 10L18 6L10 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 6V14L10 18L18 14V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isAboutPage = pathname === '/about';

  return (
    <header className="bg-white w-full h-auto md:h-[100px] sticky top-0 z-50 flex items-center px-4 sm:px-6 md:px-12 lg:pl-[145px] lg:pr-[145px] py-3 md:py-0">
      <div className="max-w-[1600px] w-full flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full md:w-auto flex-shrink-0">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <h1 className="text-base md:text-lg font-bold text-gray-900 leading-tight cursor-pointer">InternsForge</h1>
          </Link>
          
          {/* Mobile: Hamburger Menu and Icon Buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <button className="p-2 text-gray-700">
              <HamburgerIcon />
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5C15 5 10 7.5 10 12.5C10 15 11.5 17.5 13 18.75C11.5 20 10 22.5 10 25C10 30 15 32.5 20 32.5C25 32.5 30 30 30 25C30 22.5 28.5 20 27 18.75C28.5 17.5 30 15 30 12.5C30 7.5 25 5 20 5Z" fill="white"/>
              </svg>
            </button>
            <button className="relative w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
              <MedicalCrossIcon />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] px-1 py-0.5 rounded-full font-bold leading-none">New</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
              <GraduationCapIcon />
            </button>
          </div>
        </div>

        {/* Program Buttons - Desktop Only */}
        <div className="hidden md:flex items-center gap-1.5 md:gap-2 flex-shrink-0 md:ml-4 flex-wrap">
          <button className="flex items-center gap-1 md:gap-1.5 px-2 md:px-4 py-1.5 md:py-2 rounded-full bg-blue-500 text-white text-[10px] md:text-[12.8px] font-medium hover:bg-blue-600 transition-colors">
            <HamburgerIcon />
            <span className="hidden sm:inline">All Programs</span>
          </button>
          
          <button className="flex items-center gap-1 md:gap-1.5 px-2 md:px-4 py-1.5 md:py-2 rounded-full bg-gray-700 text-white text-[10px] md:text-[12.8px] font-medium hover:bg-gray-800 transition-colors">
            <svg width="16" height="16" className="md:w-[18px] md:h-[18px]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 3C7 3 4 5 4 9C4 11 5 13 6 14C5 15 4 17 4 19H6C6 17 7 16 8 16C9 16 10 17 10 19H12C12 17 13 16 14 16C15 16 16 17 16 19H18C18 17 17 15 16 14C17 13 18 11 18 9C18 5 15 3 12 3C11 3 10 3 10 3Z" fill="white"/>
            </svg>
            <span className="hidden sm:inline">Advanced</span>
          </button>
          
          <button className="relative flex items-center gap-1 md:gap-1.5 px-2 md:px-4 py-1.5 md:py-2 rounded-full bg-teal-500 text-white text-[10px] md:text-[12.8px] font-medium hover:bg-teal-600 transition-colors">
            <MedicalCrossIcon />
            <span className="hidden sm:inline">Medical Coding</span>
            <span className="absolute -top-1 -right-1 md:-top-1.5 md:-right-1.5 bg-red-500 text-white text-[8px] md:text-[10px] px-1 md:px-1.5 py-0.5 rounded-full font-bold leading-none whitespace-nowrap">
              New
            </span>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 flex-1 justify-center">
          <Link href="/" className={`relative flex items-center gap-1.5 xl:gap-2 transition-colors pb-1 ${isHomePage ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'}`}>
            <HouseIcon isActive={isHomePage} />
            <span className="font-medium text-[12.8px]">Home</span>
            {isHomePage && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>}
          </Link>
          
          <Link href="/about" className={`relative flex items-center gap-1.5 xl:gap-2 transition-colors pb-1 ${isAboutPage ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'}`}>
            <InfoIcon />
            <span className="font-medium text-[12.8px] whitespace-nowrap">About Us</span>
            {isAboutPage && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>}
          </Link>
          
          <a href="#" className="flex items-center gap-1.5 xl:gap-2 text-gray-700 hover:text-gray-900 transition-colors">
            <BriefcaseIcon />
            <span className="font-medium text-[12.8px]">Careers</span>
          </a>
          
          <a href="#" className="flex items-center gap-1.5 xl:gap-2 text-gray-700 hover:text-gray-900 transition-colors">
            <EnvelopeIcon />
            <span className="font-medium text-[12.8px]">Contact</span>
          </a>
        </nav>

        {/* Enroll Now Button */}
        <button className="flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 text-white text-[11px] md:text-[12.8px] font-semibold hover:from-purple-600 hover:via-purple-700 hover:to-pink-600 transition-all shadow-md flex-shrink-0 md:ml-4 w-full md:w-auto justify-center">
          <GraduationCapIcon />
          <span>Enroll Now</span>
        </button>
      </div>
    </header>
  );
}

