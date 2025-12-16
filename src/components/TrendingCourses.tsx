import React from 'react';
import Image from 'next/image';

const trendingCourses = [
  {
    title: "DATA SCIENCE",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description: "This course will help you learn how to use data and statistical models to make predictions, communicate your findings with a broad range of audiences."
  },
  {
    title: "DIGITAL MARKETING",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: "This course aims to set a solid foundation for the digital marketing skills required for successful campaigns in the digital world."
  },
  {
    title: "FULL STACK WEB DEVELOPMENT",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    description: "The Web Development course will teach you how to create web pages, apps, and other online content by using the languages HTML, and CSS."
  },
  {
    title: "MACHINE LEARNING",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    description: "The Machine Learning course will teach you how to leverage data, build models, and create intelligent systems by using tools and techniques."
  }
];

export default function TrendingCourses() {
  return (
    <section className="bg-white py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:pl-[145px] lg:pr-[145px] relative">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-[42px] font-bold text-gray-900 mb-3 md:mb-4">
            Trending Courses
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto px-4">
            Discover our Trending Courses, offering the latest skills and knowledge in <span className="whitespace-nowrap">high-demand fields</span> to keep you ahead in your career.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trendingCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
              {/* Image Section with Overlay Title */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                {/* Title Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
                  <h3 className="text-white font-bold text-xl md:text-2xl lg:text-3xl p-4 md:p-5 w-full leading-tight">
                    {course.title}
                  </h3>
                </div>
              </div>

              {/* Description Section */}
              <div className="p-4 md:p-5 flex-1 flex flex-col">
                <p className="text-[14px] text-gray-700 leading-6 mb-4 flex-1">
                  {course.description}
                </p>

                {/* Read More Button */}
                <button className="w-full bg-gray-200 text-gray-900 font-medium py-2.5 md:py-3 rounded-full hover:bg-gray-300 transition-colors text-sm md:text-base">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button className="fixed bottom-8 right-8 w-12 h-12 md:w-14 md:h-14 bg-green-400 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors shadow-lg z-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19V5M5 12L12 5L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  );
}

