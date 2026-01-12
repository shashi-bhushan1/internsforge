'use client';

import React from 'react';
import Image from 'next/image';

// All tools in sequence
const allTools = [
  { name: "Kali Linux", logo: "/tools/kalilinux.webp" },
  { name: "TensorFlow", logo: "/tools/tensorflow.webp" },
  { name: "MATLAB", logo: "/tools/matlab.webp" },
  { name: "Firewall", logo: "/tools/Firewall.webp" },
  { name: "Python", logo: "/tools/python.webp" },
  { name: "Android Studio", logo: "/tools/androidStudio.webp" },
  { name: "AWS", logo: "/tools/aws.webp" },
  { name: "C++", logo: "/tools/c++.webp" },
  { name: "HTML5", logo: "/tools/html.webp" },
  { name: "CSS3", logo: "/tools/css.webp" },
  { name: "JavaScript", logo: "/tools/js.webp" },
  { name: "Matplotlib", logo: "/tools/matplotlib.webp" },
  { name: "SQL", logo: "/tools/cloudsql.webp" },
  { name: "Kotlin", logo: "/tools/kotlin.webp" },
  { name: "Docker", logo: "/tools/Docker.webp" },
  { name: "Jenkins", logo: "/tools/Jenkins.webp" },
  { name: "Anaconda", logo: "/tools/anaconda.webp" },
];

export default function ToolsYouWillLearn() {
  // First row: all tools in order
  const firstRow = allTools;
  // Second row: reverse of first row
  const secondRow = [...allTools].reverse();
  
  // Duplicate arrays for seamless infinite scroll
  const firstRowDuplicated = [...firstRow, ...firstRow];
  const secondRowDuplicated = [...secondRow, ...secondRow];

  return (
    <section className="bg-brand-page py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px]">
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
          {/* First Row - Scroll Right to Left */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 md:gap-6 animate-scroll-right-to-left">
              {firstRowDuplicated.map((tool, index) => (
                <div key={index} className="p-4 md:p-5 flex items-center justify-center w-[140px] md:w-[160px] flex-shrink-0 h-24 md:h-28">
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={120}
                    height={80}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Scroll Left to Right (Reverse) */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 md:gap-6 animate-scroll-left-to-right">
              {secondRowDuplicated.map((tool, index) => (
                <div key={index} className="p-4 md:p-5 flex items-center justify-center w-[140px] md:w-[160px] flex-shrink-0 h-24 md:h-28">
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={120}
                    height={80}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

