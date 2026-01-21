import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Helper function to get course route from course title
const getCourseRoute = (title: string): string => {
  const name = title.toLowerCase();
  
  if (name.includes('data science')) {
    return '/courses/data-science';
  }
  if (name.includes('digital marketing')) {
    return '/courses/digital-marketing';
  }
  // Check for "full stack" first (more specific) before checking just "web development"
  if (name.includes('full stack')) {
    return '/courses/full-stack-web-development';
  }
  if (name.includes('web development')) {
    return '/courses/web-development';
  }
  if (name.includes('machine learning')) {
    return '/courses/machine-learning';
  }
  
  // Default: generate slug
  return `/courses/${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
};

const trendingCourses = [
  {
    title: "DATA SCIENCE",
    image: "/courses/Data Science.webp",
    description: "This course will help you learn how to use data and statistical models to make predictions, communicate your findings with a broad range of audiences."
  },
  {
    title: "DIGITAL MARKETING",
    image: "/courses/Digital Marketing.webp",
    description: "This course aims to set a solid foundation for the digital marketing skills required for successful campaigns in the digital world."
  },
  {
    title: "FULL STACK WEB DEVELOPMENT",
    image: "/courses/Full Stack Web Development.webp",
    description: "The Web Development course will teach you how to create web pages, apps, and other online content by using the languages HTML, and CSS."
  },
  {
    title: "MACHINE LEARNING",
    image: "/courses/Machine Learning.webp",
    description: "The Machine Learning course will teach you how to leverage data, build models, and create intelligent systems by using tools and techniques."
  }
];

export default function TrendingCourses() {
  return (
    <section className="bg-brand-page py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px] relative">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-3 md:mb-4">
            Trending Courses
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 max-w-3xl mx-auto px-4">
            Discover our Trending Courses, offering the latest skills and knowledge in <span className="whitespace-nowrap">high-demand fields</span> to keep you ahead in your career.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trendingCourses.map((course, index) => {
            const courseRoute = getCourseRoute(course.title);
            
            return (
              <Link 
                key={index} 
                href={courseRoute} 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* Image Section with Overlay Title */}
                <div className="relative h-48 md:h-56 px-3 pt-3">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    {/* Title Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent flex items-end">
                      <h3 className="text-white font-bold text-xl md:text-2xl lg:text-3xl p-4 md:p-5 w-full leading-tight">
                        {course.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description Section */}
                <div className="p-4 md:p-5 flex-1 flex flex-col">
                  <p className="text-[14px] text-gray-700 leading-6 mb-4 flex-1">
                    {course.description}
                  </p>

                  {/* Read More Button */}
                  <button className="w-full bg-brand-orange text-white font-semibold py-3 md:py-3.5 rounded-full hover:bg-brand-cyan transition-colors text-sm md:text-base shadow-sm">
                    Read More
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

