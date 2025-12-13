import React from 'react';
import Image from 'next/image';

export default function ProgramsUnique() {
  return (
    <section className="bg-white py-16 pl-[145px] pr-[145px]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center m-0 border-0 p-5">
          {/* Left Section - Text Content */}
          <div className="space-y-6 ml-6">
            <p className="text-[16px] font-bold text-gray-600 uppercase tracking-wide">
              ONLINE LEARNING DONE BETTER
            </p>
            
            <h2 className="text-[42px] font-bold text-black leading-tight">
              Discover what makes<br />
              our programs unique
            </h2>
            
            <p className="text-[13px] text-gray-700 leading-6">
              InternsForge Learning programs are crafted for busy professionals, featuring top university professors, industry mentors, and real hands-on projects. Our approach ensures you gain practical skills from the best in the field, making our programs the ideal choice for those looking to advance their careers and master new skills effectively.
            </p>
            
            <div className="flex gap-4 pt-4">
              <button className="px-6 py-3 bg-gray-200 text-black font-medium rounded-full hover:bg-gray-300 transition-colors">
                Explore More
              </button>
              <button className="px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>

          {/* Right Section - Circular Image */}
          <div className="flex justify-center lg:justify-start mr-1">
            <div className="relative w-[350px] h-[350px]">
              <div className="absolute inset-0 rounded-full border-[20px] border-orange-500"></div>
              <div className="absolute inset-[20px] rounded-full bg-gray-200 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Professional student with tablet"
                  width={310}
                  height={310}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

