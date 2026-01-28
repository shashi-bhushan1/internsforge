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
    <section className="bg-brand-page py-4 md:py-8 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px] overflow-hidden">
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

            {/* Quoted Text */}
            <div className="max-w-[600px]">
              <p className="text-[14px] text-gray-700 leading-5">
                &quot;InternsForge is an innovative educational technology platform which isn&apos;t just another ed-tech platform; we&apos;re the bridge that spans the gap between classroom theory and real-world industry needs. From internships to personalized career guidance and mentorship, we&apos;re here to help students navigate the ever-shifting terrain of professional development. With us, education isn&apos;t just about learning more, it&apos;s about thriving.&quot;
              </p>
            </div>

            {/* Statistics Boxes - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3 max-w-[600px] mt-6">
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

          {/* Right Section */}
          <div className="relative lg:pl-8">
            {/* Hero Image */}
            <div className="relative w-full h-[420px] md:h-[500px] lg:h-[560px] overflow-hidden bg-brand-page">
              <Image
                src="/about-hero.webp"
                alt="About InternsForge"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

