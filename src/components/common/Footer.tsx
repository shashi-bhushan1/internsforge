'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Course categories from Header.tsx structure
const coursesByCategory: Record<string, string[]> = {
  'Computer Science / IT': [
    'Artificial Intelligence',
    'Machine Learning',
    'Data Science',
    'Data Analytics',
    'Business Analytics',
    'Cloud Computing',
    'Amazon Web Services (AWS)',
    'Cyber Security',
    'Web Development',
    'Full Stack Web Development (4 Months)',
    'Programming in Python',
    'Programming in Java',
    'Data Structure & Algorithm',
    'Android App Development',
    'Game Development'
  ],
  'ECE/EEE': [
    'Embedded Systems',
    'Internet of Things (IoT)',
    'VLSI',
    'Robotics',
    'Nano Technology'
  ],
  'Mechanical & Automobiles': [
    'IC Engine',
    'Battery Electric Vehicles (BEVs)',
    'Hybrid Electrical Vehicles (HEV)',
    'Drone Mechanics'
  ],
  'Civil & Architecture': [
    'AutoCAD',
    'Construction Planning'
  ],
  'Commerce & Management': [
    'Human Resources & Management',
    'Operation Management',
    'Digital Marketing'
  ],
  'Finance & Investment': [
    'Finance',
    'Stock Market'
  ],
  'Design & Creative': [
    'UI/UX Design'
  ],
  'Medical': [
    'Medical Coding',
    'Bio-Informatics',
    'Genetic Engineering'
  ],
  'Personality Development': [
    'Psychology'
  ],
  'Advanced': [
    'Advanced Cyber Security (6 Months)',
    'Network Security (6 Months)',
    'Full Stack Web Development (MERN)'
  ]
};

const usefulLinks = [
  "About Us",
  "Contact Us",
  "Privacy Policy",
  "Terms & Conditions",
  "Return policy",
  "Careers"
];

// Helper function to get course page route (reused from Header logic)
const getCourseRoute = (courseName: string): string | null => {
  const name = courseName.toLowerCase();
  if (name.includes('network security')) {
    return '/courses/network-security';
  }
  if (name.includes('cyber security')) {
    if (name.includes('advanced') || name.includes('advance') || name.includes('6 months')) {
      return '/courses/cyber-security-advanced';
    }
    return '/courses/cyber-security';
  }
  if (name.includes('full stack web development')) {
    if (name.includes('mern')) {
      return '/courses/full-stack-web-development-mern';
    }
    return '/courses/full-stack-web-development';
  }
  if (name.includes('full stack')) {
    return '/courses/full-stack-web-development';
  }
  if (name.includes('web development')) {
    return '/courses/web-development';
  }
  if (name.includes('digital marketing')) {
    return '/courses/digital-marketing';
  }
  if (name.includes('amazon web services') || name.includes('aws')) {
    return '/courses/amazon-web-services';
  }
  if (name.includes('programming in python') || (name.includes('python') && !name.includes('data'))) {
    return '/courses/python';
  }
  if (name.includes('programming in java') || (name.includes('java') && !name.includes('script'))) {
    return '/courses/java';
  }
  if (name.includes('internet of things') || name.includes('iot')) {
    return '/courses/internet-of-things';
  }
  if (name.includes('battery electric vehicles') || name.includes('bevs')) {
    return '/courses/battery-electric-vehicles';
  }
  if (name.includes('hybrid electrical vehicles') || name.includes('hev')) {
    return '/courses/hybrid-electrical-vehicles';
  }
  if (name.includes('drone mechanics') || name.includes('drone')) {
    return '/courses/drone-mechanics';
  }
  return null;
};

// Helper function to generate slug from course name
const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Helper function to get course link
const getCourseLink = (courseName: string): string => {
  const existingRoute = getCourseRoute(courseName);
  if (existingRoute) {
    return existingRoute;
  }
  return `/courses/${generateSlug(courseName)}`;
};

export default function Footer() {
  const router = useRouter();
  const [isCSExpanded, setIsCSExpanded] = useState(false);
  
  // Number of courses to show initially for Computer Science / IT
  const INITIAL_CS_COURSES = 8;
  
  // Filter out Advanced from main categories (it will be shown separately)
  const mainCategories = Object.entries(coursesByCategory).filter(
    ([categoryName]) => categoryName !== 'Advanced'
  );
  
  // Get Computer Science / IT courses
  const csCourses = coursesByCategory['Computer Science / IT'] || [];
  const displayedCSCourses = isCSExpanded 
    ? csCourses 
    : csCourses.slice(0, INITIAL_CS_COURSES);

  return (
    <footer className="text-white" style={{ backgroundColor: '#1b0905' }}>
      {/* Top Section */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px] py-8 md:py-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-12">
            {/* Left Column: Brand */}
            <div className="space-y-6 sm:col-span-2 lg:col-span-1">
              {/* Logo */}
              <Link href="/" className="block hover:opacity-80 transition-opacity">
                <Image
                  src="/internsforge_logo.png"
                  alt="InternsForge"
                  width={200}
                  height={70}
                  className="h-12 md:h-16 w-auto object-contain"
                  unoptimized
                />
              </Link>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-5 -mt-2">
                Empowering learners worldwide with cutting-edge education technology. Transform your skills and unlock your potential with our comprehensive course library.
              </p>

              {/* Social Icons */}
              <div>
                <div className="flex gap-3">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61558047742720" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center hover:bg-brand-cyan transition-colors"
                    aria-label="Facebook"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/internsforge/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center hover:bg-brand-cyan transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://x.com/ForgeInter91310" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center hover:bg-brand-cyan transition-colors"
                    aria-label="Twitter"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/internsforge?igsh=MTkycmY4cDN1NTlj" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center hover:bg-brand-cyan transition-colors"
                    aria-label="Instagram"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Middle Column: Useful Links */}
            <div className="sm:col-span-1 lg:col-span-1">
              <h3 className="text-lg md:text-xl font-bold mb-4">Useful Links</h3>
              <ul className="space-y-2">
                {usefulLinks.map((link, index) => {
                  let href = '#';
                  if (link === "About Us") href = "/about";
                  else if (link === "Contact Us") href = "/contact";
                  else if (link === "Careers") href = "/careers";
                  else if (link === "Privacy Policy") href = "/privacy-policy";
                  else if (link === "Terms & Conditions") href = "/terms-and-conditions";
                  else if (link === "Return policy" || link === "Return Policy") href = "/return-policy";

                  return (
                    <li key={index}>
                      {href !== '#' ? (
                        <Link 
                          href={href}
                          className="text-sm text-gray-300 hover:text-brand-cyan transition-colors"
                          scroll={true}
                          onClick={(e) => {
                            if (typeof window !== 'undefined' && window.location.hash) {
                              e.preventDefault();
                              router.push(href);
                            }
                          }}
                        >
                          {link}
                        </Link>
                      ) : (
                        <a href="#" className="text-sm text-gray-300 hover:text-brand-cyan transition-colors">
                          {link}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right Column: Support */}
            <div className="sm:col-span-1 lg:col-span-1">
              <h3 className="text-lg md:text-xl font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="mailto:support@internsforge.com" 
                    className="text-sm text-gray-300 hover:text-brand-cyan transition-colors"
                  >
                    Email Support
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wa.me/917019680860" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-brand-cyan transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+917019680860" 
                    className="text-sm text-gray-300 hover:text-brand-cyan transition-colors"
                  >
                    Phone
                  </a>
                </li>
              </ul>
            </div>

            {/* Fourth Column: Address & Contact */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div>
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-sm text-gray-300 leading-5 mb-4">
                  Rudhra Coworks, 126, RNS Plaza, KIADB Industrial Area, 1, near Tech Mahindra Gate, next to Hyderabad Magic, Phase II, Bengaluru, Karnataka 560100
                </p>
                <p className="text-sm text-gray-300 leading-5">
                  BHIVE Workspace - No.112, AKR Tech Park, B Block, 7th Mile Hosur Rd, Krishna Reddy Industrial Area, Bengaluru, Karnataka 560068
                </p>
              </div>
            </div>
          </div>

          {/* Horizontal Line Below Top Section */}
          <div className="border-t border-gray-700 mt-12 mb-8"></div>

          {/* Middle Section: Course Categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 mb-8">
            {mainCategories.map(([categoryName, courses]) => (
              <div key={categoryName}>
                <h4 className="text-base font-bold mb-3 border-b border-gray-700 pb-2">{categoryName}</h4>
                <ul className="space-y-2">
                  {/* Special handling for Computer Science / IT */}
                  {categoryName === 'Computer Science / IT' ? (
                    <>
                      {displayedCSCourses.map((course, index) => (
                        <li key={index}>
                          <a 
                            href={getCourseLink(course)} 
                            className="text-sm text-gray-300 hover:text-brand-cyan transition-colors"
                          >
                            {course}
                          </a>
                        </li>
                      ))}
                      {csCourses.length > INITIAL_CS_COURSES && (
                        <li>
                          <button
                            onClick={() => setIsCSExpanded(!isCSExpanded)}
                            className="text-sm text-brand-orange hover:text-brand-cyan transition-colors font-medium"
                          >
                            {isCSExpanded ? 'View Less' : 'View More'}
                          </button>
                        </li>
                      )}
                    </>
                  ) : (
                    // Regular rendering for other categories
                    courses.map((course, index) => (
                      <li key={index}>
                        <a 
                          href={getCourseLink(course)} 
                          className="text-sm text-gray-300 hover:text-brand-cyan transition-colors"
                        >
                          {course}
                        </a>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            ))}
            
            {/* Advanced Courses Column */}
            {coursesByCategory['Advanced'] && (
              <div>
                <h4 className="text-base font-bold mb-3 border-b border-gray-700 pb-2">Advanced Courses</h4>
                <ul className="space-y-2">
                  {coursesByCategory['Advanced'].map((course, index) => (
                    <li key={index}>
                      <a 
                        href={getCourseLink(course)} 
                        className="text-sm text-gray-300 hover:text-brand-cyan transition-colors"
                      >
                        {course}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Horizontal Line Between Middle and Bottom Section */}
          <div className="border-t border-gray-700 my-8"></div>
        </div>
      </div>

      {/* Bottom Bar: Copyright and Payment Information */}
      <div className="py-6" style={{ backgroundColor: '#1b0905' }}>
        <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px]">
          <div className="max-w-[1600px] mx-auto">
            {/* Copyright Bar - Dark Gray with Rounded Corners */}
            <div className="rounded-lg px-6 py-4 mb-4" style={{ backgroundColor: '#2b2929' }}>
              <p className="text-sm text-white text-center">
                © 2026 InternsForge Edutech LLP. All rights reserved - v1.16.3
              </p>
            </div>
            
            {/* Payment Information */}
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-base sm:text-lg md:text-[19.5px] text-white italic text-center">100% Safe and Secure Payments with</p>
              <div className="flex flex-wrap gap-2 sm:gap-3 items-center justify-center w-full">
                {/* Razorpay Logo */}
                <div className="bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-center justify-center h-12 sm:h-14 w-[calc(50%-0.25rem)] sm:w-[calc(33.333%-0.5rem)] md:w-auto md:min-w-[130px]">
                  <Image
                    src="/footer/razorpay.svg"
                    alt="Razorpay"
                    width={120}
                    height={40}
                    className="h-6 sm:h-8 w-auto object-contain"
                    unoptimized
                  />
                </div>
                {/* PayU Logo */}
                <div className="bg-white px-3 sm:px-5 py-2.5 sm:py-3.5 rounded-lg flex items-center justify-center h-14 sm:h-16 w-[calc(50%-0.25rem)] sm:w-[calc(33.333%-0.5rem)] md:w-auto md:min-w-[140px]">
                  <Image
                    src="/footer/payu.svg"
                    alt="PayU"
                    width={130}
                    height={50}
                    className="h-8 sm:h-10 w-auto object-contain"
                    unoptimized
                  />
                </div>
                {/* UPI Logo */}
                <div className="bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-center justify-center h-12 sm:h-14 w-[calc(50%-0.25rem)] sm:w-[calc(33.333%-0.5rem)] md:w-auto md:min-w-[110px]">
                  <Image
                    src="/footer/Unified_Payments_Interface-Logo.wine.png"
                    alt="UPI - Unified Payments Interface"
                    width={100}
                    height={40}
                    className="h-6 sm:h-8 w-auto object-contain"
                    unoptimized
                  />
                </div>
                {/* RuPay Logo */}
                <div className="bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-center justify-center h-12 sm:h-14 w-[calc(50%-0.25rem)] sm:w-[calc(33.333%-0.5rem)] md:w-auto md:min-w-[110px]">
                  <Image
                    src="/footer/RuPay.svg.png"
                    alt="RuPay"
                    width={100}
                    height={40}
                    className="h-6 sm:h-8 w-auto object-contain"
                    unoptimized
                  />
                </div>
                {/* Visa Logo */}
                <div className="bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-center justify-center h-12 sm:h-14 w-[calc(50%-0.25rem)] sm:w-[calc(33.333%-0.5rem)] md:w-auto md:min-w-[110px]">
                  <Image
                    src="/footer/Visa-Logo-2006.png"
                    alt="Visa"
                    width={100}
                    height={40}
                    className="h-6 sm:h-8 w-auto object-contain"
                    unoptimized
                  />
                </div>
                {/* Instamojo Logo */}
                <div className="bg-white px-3 sm:px-5 py-2.5 sm:py-3.5 rounded-lg flex items-center justify-center h-14 sm:h-16 w-[calc(50%-0.25rem)] sm:w-[calc(33.333%-0.5rem)] md:w-auto md:min-w-[150px]">
                  <Image
                    src="/footer/instamojo_new.png"
                    alt="Instamojo"
                    width={140}
                    height={50}
                    className="h-8 sm:h-10 w-auto object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

