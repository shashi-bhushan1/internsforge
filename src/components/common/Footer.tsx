'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const techCourses = [
  "Digital Marketing Associate",
  "Full Stack Web Development",
  "Cloud Computing",
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Cyber Security",
  "UI/UX Design",
  "Java Core",
  "Python",
  "Graphics Design",
  "Data Analytics",
  "IoT and Robotics",
  "Hybrid and Electric Vehicles",
  "Embedded Systems",
  "VLSI"
];

const nonTechCourses = [
  "Auto Cad",
  "Drone Mechanics",
  "Hybrid and Electric Vehicles",
  "Digital Marketing",
  "Finance",
  "Human Resource",
  "Stock Market",
  "Business Analytics"
];

const usefulLinks = [
  "About Us",
  "Contact Us",
  "Privacy Policy",
  "Terms & Conditions",
  "Return policy",
  "Careers"
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="bg-brand-navy text-white">
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px] py-8 md:py-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-8">
            {/* Left Section: Newsletter and Contact */}
            <div className="space-y-6 flex-shrink-0 lg:w-[400px]">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-4">Join Our weekly newsletter</h3>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2 bg-white text-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-orange text-sm sm:text-base"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 sm:px-6 py-2 bg-brand-orange text-white rounded-full hover:bg-brand-cyan transition-colors font-medium text-sm sm:text-base"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-sm text-gray-300 leading-5">
                  Join our vibrant community and never miss out on the latest updates, exclusive offers, and insightful content.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-sm text-gray-300 leading-5">
                  Rudhra Coworks, 126, RNS Plaza, KIADB Industrial Area, 1, near Tech Mahindra Gate, next to Hyderabad Magic, Phase II, Bengaluru, Karnataka 560100
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Find Us on Social</h4>
                <div className="flex gap-3 mb-4">
                  <a href="https://www.facebook.com/profile.php?id=61558047742720" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center hover:bg-brand-cyan transition-colors">
                    <span className="text-white font-bold">f</span>
                  </a>
                  <a href="https://www.linkedin.com/company/internsforge/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center hover:bg-brand-cyan transition-colors">
                    <span className="text-white font-bold text-xs">in</span>
                  </a>
                  <a href="https://x.com/ForgeInter91310" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center hover:bg-brand-cyan transition-colors">
                    <span className="text-white font-bold">X</span>
                  </a>
                  <a href="https://www.instagram.com/internsforge?igsh=MTkycmY4cDN1NTlj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center hover:bg-brand-cyan transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1" fill="none"/>
                      <circle cx="12" cy="12" r="3" fill="white"/>
                      <circle cx="18" cy="6" r="1" fill="white"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <a href="mailto:support@internsforge.com" className="text-sm text-gray-300 hover:text-brand-cyan">
                    support@internsforge.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <a href="tel:+916361187682" className="text-sm text-gray-300 hover:text-brand-cyan">
                    +91 6361187682
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section: Three Columns Grouped Together */}
            <div className="flex flex-col md:flex-row gap-4 lg:gap-6 flex-1 lg:ml-8">
              {/* Tech Courses */}
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-4">Tech Courses</h3>
                <ul className="space-y-2">
                  {techCourses.map((course, index) => (
                    <li key={index}>
                      <a href="#" className="text-sm text-gray-300 hover:text-brand-cyan transition-colors">
                        {course}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Non-Tech Courses */}
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-4">Non-Tech Courses</h3>
                <ul className="space-y-2">
                  {nonTechCourses.map((course, index) => (
                    <li key={index}>
                      <a href="#" className="text-sm text-gray-300 hover:text-brand-cyan transition-colors">
                        {course}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Useful Links */}
              <div>
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
                              // Force navigation using router.push when there's a hash in the URL
                              // This ensures links work properly from the careers page with hash fragments
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
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright and Payment Information */}
      <div className="bg-brand-navy py-6">
        <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px]">
          <div className="max-w-[1600px] mx-auto">
            {/* Copyright Bar - Dark Gray with Rounded Corners */}
            <div className="bg-brand-blue rounded-lg px-6 py-4 mb-4">
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

