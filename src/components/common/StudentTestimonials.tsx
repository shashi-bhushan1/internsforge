'use client';

import React, { useState } from 'react';

const testimonials = [
  {
    name: "Ananya Jaiswal",
    avatar: "A",
    avatarColor: "bg-orange-500",
    review: "InternsForge Edutech: Learning That Actually Works! I've tried a bunch of online learning platforms, but InternsForge Edutech stands out because it actually prepares you for the real world. The courses are...",
    rating: 5,
    reviewLink: "#"
  },
  {
    name: "Babalu Bharti",
    avatar: "B",
    avatarColor: "bg-blue-500",
    review: "InternsForge is a great Edutech to enhance your career. The mentors are really good and they teach in very deeply and nicely.",
    rating: 5,
    reviewLink: "#"
  },
  {
    name: "Ayush Sandilya",
    avatar: "A",
    avatarColor: "bg-orange-500",
    review: "InternsForge Edutech has been a transformative learning platform for me. The expert mentorship, hands-on projects, and practical approach to teaching have greatly enhanced my skills and confidence. The...",
    rating: 5,
    reviewLink: "#"
  },
  {
    name: "Prabash Sapkota",
    avatar: "P",
    avatarColor: "bg-gray-400",
    review: "Great experience. Mentors are excellent and they taught in dee Highly recommend.",
    rating: 5,
    reviewLink: "#"
  },
  {
    name: "Rahul Sharma",
    avatar: "R",
    avatarColor: "bg-green-500",
    review: "InternsForge has completely transformed my career path. The practical projects and industry-relevant curriculum helped me land my dream job. Highly recommended for anyone serious about upskilling.",
    rating: 5,
    reviewLink: "#"
  },
  {
    name: "Priya Patel",
    avatar: "P",
    avatarColor: "bg-purple-500",
    review: "The best investment I've made in my professional development. The mentors are supportive, the content is comprehensive, and the learning experience is truly engaging. Thank you InternsForge!",
    rating: 5,
    reviewLink: "#"
  }
];

export default function StudentTestimonials() {
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (carouselRef.current) {
      // Use window width to calculate scroll amount responsively
      const scrollAmount = Math.min(window.innerWidth * 0.85, 336); // 320px card + 16px gap, but responsive
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      const scrollAmount = Math.min(window.innerWidth * 0.85, 336);
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-brand-page py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px] relative">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-3 md:mb-4">
            Voices of Success: Hear From Our Students
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto px-4">
            Hear inspiring stories from our students as they share their experiences, achievements, and the impact of their learning journey.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Navigation Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors shadow-lg"
            aria-label="Previous review"
          >
            <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Carousel - Show multiple cards */}
          <div 
            ref={carouselRef}
            className="overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth px-2 sm:px-0"
          >
            <div className="flex gap-3 sm:gap-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 w-[280px] sm:w-[320px] min-h-[255px] h-auto sm:h-[255px] p-4 sm:p-5 flex flex-col">
                    {/* Student Info */}
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className={`${testimonial.avatarColor} w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0`}>
                          {testimonial.avatar}
                        </div>
                        <span className="font-bold text-gray-900 text-xs sm:text-sm">{testimonial.name}</span>
                      </div>
                      {/* Google Logo */}
                      <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 text-xs sm:text-sm mb-2 sm:mb-3 leading-4 sm:leading-5 flex-1 overflow-hidden">
                      {testimonial.review}
                    </p>

                    {/* Rating and View Review Link */}
                    <div className="flex items-center justify-between mt-auto">
                      {/* Stars */}
                      <div className="flex gap-0.5 sm:gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} width="14" height="14" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="#FF9500" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                          </svg>
                        ))}
                      </div>

                      {/* View Review Link */}
                      <a 
                        href={testimonial.reviewLink}
                        className="text-gray-900 font-medium text-xs sm:text-sm hover:underline"
                      >
                        View Review
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors shadow-lg"
            aria-label="Next review"
          >
            <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}

