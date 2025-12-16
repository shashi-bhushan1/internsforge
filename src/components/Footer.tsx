'use client';

import React, { useState } from 'react';
import Link from 'next/link';

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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#1C0905] text-white">
      <div className="px-4 sm:px-6 md:px-12 lg:pl-[145px] lg:pr-[145px] py-8 md:py-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-8">
            {/* Left Section: Newsletter and Contact */}
            <div className="space-y-6 flex-shrink-0 lg:w-[400px]">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-4 whitespace-nowrap">Join Our weekly newsletter</h3>
                <form onSubmit={handleSubscribe} className="flex gap-2 mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2 bg-white text-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors font-medium whitespace-nowrap"
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
                  5, 14th Main Road, 15th Cross, Sector 4, HSR Layout, HSR Layout, Bangalore Bangalore South, Karnataka - 560102
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Find Us on Social</h4>
                <div className="flex gap-3 mb-4">
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                    <span className="text-white font-bold">f</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                    <span className="text-white font-bold text-xs">in</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                    <span className="text-white font-bold">X</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
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
                  <a href="mailto:support@internsforge.com" className="text-sm text-gray-300 hover:text-white">
                    support@internsforge.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <a href="tel:+919108126243" className="text-sm text-gray-300 hover:text-white">
                    +91 9108126243
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
                      <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
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
                      <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
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
                  {usefulLinks.map((link, index) => (
                    <li key={index}>
                      {link === "About Us" ? (
                        <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                          {link}
                        </Link>
                      ) : (
                        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                          {link}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright and Payment Information */}
      <div className="bg-[#1C0905] py-6">
        <div className="px-4 sm:px-6 md:px-12 lg:pl-[145px] lg:pr-[145px]">
          <div className="max-w-[1600px] mx-auto">
            {/* Copyright Bar - Dark Gray with Rounded Corners */}
            <div className="bg-gray-700 rounded-lg px-6 py-4 mb-4">
              <p className="text-sm text-white text-center">
                © 2025 InternsForge Edutech LLP. All rights reserved - v1.16.3
              </p>
            </div>
            
            {/* Payment Information */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <p className="text-[19.5px] text-white italic">100% Safe and Secure Payments with</p>
              <div className="flex gap-3 items-center">
                {/* Razorpay Logo */}
                <div className="bg-white px-4 py-2.5 rounded-lg flex items-center gap-2">
                  <span className="text-blue-600 font-bold text-lg">R</span>
                  <span className="text-blue-600 font-bold text-sm">Razorpay</span>
                </div>
                {/* Cashfree Payments Logo */}
                <div className="bg-white px-4 py-2.5 rounded-lg flex items-center gap-2">
                  <div className="flex items-center">
                    <span className="text-green-500 font-bold text-lg">F</span>
                    <span className="text-yellow-500 font-bold text-lg">F</span>
                  </div>
                  <span className="text-gray-900 font-semibold text-xs">Cashfree Payments</span>
                </div>
                {/* UPI Logo */}
                <div className="bg-white px-4 py-2.5 rounded-lg flex flex-col items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-700 font-bold text-sm">UP</span>
                    <span className="text-gray-700 font-bold text-sm relative">
                      I
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="absolute -right-1 top-0">
                        <path d="M2 8L6 12L14 4" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 8L6 12L14 4" stroke="#00A651" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
                      </svg>
                    </span>
                  </div>
                  <span className="text-gray-600 text-[8px] mt-0.5 text-center">UNIFIED PAYMENTS INTERFACE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <button className="w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M5 12L12 5L19 12" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.042-.024-4.976 1.293-1.059-4.916-.024-.042A9.86 9.86 0 0112.001 2.001c5.421 0 9.848 4.409 9.848 9.83 0 5.421-4.427 9.83-9.848 9.83"/>
          </svg>
        </button>
      </div>
    </footer>
  );
}

