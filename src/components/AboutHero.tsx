import React from 'react';
import Image from 'next/image';

const statistics = [
  {
    number: "25K+",
    label: "Students Enrolled"
  },
  {
    number: "4.8/5",
    label: "Satisfaction Rate"
  },
  {
    number: "50K+",
    label: "Total Project Completion"
  },
  {
    number: "5/5",
    label: "Faculty Rating"
  }
];

export default function AboutHero() {
  return (
    <section className="bg-brand-page py-4 md:py-8 px-4 sm:px-6 md:px-12 lg:pl-[145px] lg:pr-[145px] overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-3 lg:space-y-4">
            {/* How it Started */}
            <h6 className="text-[14px] font-medium text-brand-orange">How it Started</h6>
            
            {/* Main Title */}
            <h1 className="text-[32px] md:text-[40px] font-bold text-gray-900 leading-tight">
              Our Dream is Global<br />
              Learning<br />
              Transformation
            </h1>

            {/* Illustration - Man climbing blocks */}
            <div className="relative w-full max-w-[420px] h-[200px] md:h-[240px] flex items-center justify-center my-2">
              {/* Yellow Blocks */}
              <div className="relative">
                <div className="flex items-end gap-1.5">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-md" style={{ background: '#F9A826' }}></div>
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-md" style={{ background: '#F9A826' }}></div>
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-md relative" style={{ background: '#F9A826' }}>
                    {/* Red Arrow */}
                    <svg className="absolute -top-8 -left-5 md:-top-10 md:-left-6" width="80" height="80" viewBox="0 0 100 100" fill="none">
                      <path d="M20 80 L50 30 L80 60" stroke="#E63946" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M45 35 L50 30 L55 35" stroke="#E63946" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                {/* Man Illustration */}
                <div className="absolute top-1 right-2 md:right-6">
                  <svg width="60" height="75" viewBox="0 0 70 90" fill="none">
                    {/* Head */}
                    <circle cx="35" cy="12" r="9" fill="#3B7DD6"/>
                    {/* Body */}
                    <rect x="26" y="21" width="18" height="24" rx="2" fill="#3B7DD6"/>
                    {/* Tie */}
                    <path d="M35 21 L32 28 L35 35 L38 28 Z" fill="#2C5BA0"/>
                    {/* Briefcase */}
                    <rect x="29" y="38" width="12" height="7" rx="1" fill="#F9A826"/>
                    <rect x="31" y="40" width="8" height="3" fill="#E08C1D"/>
                    {/* Legs */}
                    <rect x="29" y="45" width="6" height="14" rx="1" fill="#2C3E50"/>
                    <rect x="35" y="45" width="6" height="14" rx="1" fill="#2C3E50"/>
                  </svg>
                </div>

                {/* Blue leaf decorations */}
                <div className="absolute -bottom-2 -left-3">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="#3B82F6" opacity="0.7">
                    <path d="M10 2 C8 4 6 6 4 8 C6 10 8 12 10 14 C12 12 14 10 16 8 C14 6 12 4 10 2Z"/>
                  </svg>
                </div>
                <div className="absolute -bottom-3 right-1">
                  <svg width="14" height="14" viewBox="0 0 18 18" fill="#3B82F6" opacity="0.7">
                    <path d="M9 2 C7 4 5 6 3 8 C5 10 7 12 9 14 C11 12 13 10 15 8 C13 6 11 4 9 2Z"/>
                  </svg>
                </div>
                <div className="absolute bottom-0 left-8">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="#3B82F6" opacity="0.6">
                    <path d="M8 2 C6 4 4 6 2 8 C4 10 6 12 8 14 C10 12 12 10 14 8 C12 6 10 4 8 2Z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Quoted Text */}
            <div className="max-w-[600px]">
              <p className="text-[14px] text-gray-700 leading-5">
                &quot;InternsForge is an innovative educational technology platform which isn&apos;t just another ed-tech platform; we&apos;re the bridge that spans the gap between classroom theory and real-world industry needs. From internships to personalized career guidance and mentorship, we&apos;re here to help students navigate the ever-shifting terrain of professional development. With us, education isn&apos;t just about learning more, it&apos;s about thriving.&quot;
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative lg:pl-8">
            {/* Upper Part: Three Images in Staggered Layout */}
            <div className="relative w-full h-[320px] md:h-[360px] mb-4">
              {/* Top-left Image - Woman in yellow pointing up */}
              <div className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg z-10" style={{ backgroundColor: '#9B8DC6' }}>
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
                  alt="Happy student pointing"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Bottom-left Image - Man with laptop in beige shirt (larger) */}
              <div className="absolute bottom-0 left-0 w-44 h-36 md:w-56 md:h-44 rounded-2xl overflow-hidden shadow-lg z-10" style={{ backgroundColor: '#E8E8E8' }}>
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80"
                  alt="Student with laptop"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Top-right Image - Graduate in cap and gown */}
              <div className="absolute top-8 right-0 w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-lg z-10" style={{ backgroundColor: '#D9D9D9' }}>
                <Image
                  src="https://images.unsplash.com/photo-1622519407650-3df9883f76a5?auto=format&fit=crop&w=400&q=80"
                  alt="Graduate student"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Decorative Elements */}
              {/* Orange circles and arrow near top-left image */}
              <div className="absolute top-8 left-36 md:left-44 z-20 flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 bg-brand-orange rounded-full"></div>
                <div className="w-7 h-7 bg-brand-orange rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="white">
                    <path d="M5 15 L10 5 L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 7 L10 5 L12 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Orange starburst */}
              <div className="absolute top-1/3 -left-4 z-0">
                <svg width="40" height="40" viewBox="0 0 50 50" fill="#F97316" opacity="0.7">
                  <path d="M25 2 L28 18 L42 20 L28 22 L25 38 L22 22 L8 20 L22 18 Z"/>
                </svg>
              </div>

              {/* Orange hexagonal pattern */}
              <div className="absolute top-2 right-12 z-0">
                <svg width="50" height="50" viewBox="0 0 60 60" fill="none" opacity="0.5">
                  {/* Hexagon grid pattern */}
                  <g stroke="#F97316" strokeWidth="1.5">
                    <line x1="10" y1="5" x2="20" y2="10" />
                    <line x1="20" y1="10" x2="30" y2="5" />
                    <line x1="30" y1="5" x2="40" y2="10" />
                    <line x1="10" y1="15" x2="20" y2="20" />
                    <line x1="20" y1="20" x2="30" y2="15" />
                    <line x1="30" y1="15" x2="40" y2="20" />
                    <line x1="10" y1="25" x2="20" y2="30" />
                    <line x1="20" y1="30" x2="30" y2="25" />
                    <line x1="10" y1="5" x2="10" y2="25" />
                    <line x1="20" y1="10" x2="20" y2="30" />
                    <line x1="30" y1="5" x2="30" y2="25" />
                    <line x1="40" y1="10" x2="40" y2="20" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Lower Part: Statistics Boxes - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {statistics.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-3 md:p-4 border border-gray-100">
                  <div className="text-2xl md:text-[36px] font-bold mb-1 text-brand-orange">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-[13px] font-medium text-gray-900">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.042-.024-4.976 1.293-1.059-4.916-.024-.042A9.86 9.86 0 0112.001 2.001c5.421 0 9.848 4.409 9.848 9.83 0 5.421-4.427 9.83-9.848 9.83"/>
          </svg>
        </button>
      </div>
    </section>
  );
}

