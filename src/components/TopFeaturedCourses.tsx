import React from 'react';
import Image from 'next/image';

const programCategories = [
  { 
    name: "Advanced Programes", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 3L4 7L8 11M16 3L20 7L16 11M8 21L4 17L8 13M16 21L20 17L16 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ), 
    active: true 
  },
  { 
    name: "IBM", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <rect x="4" y="4" width="4" height="4"/>
        <rect x="10" y="4" width="4" height="4"/>
        <rect x="16" y="4" width="4" height="4"/>
        <rect x="4" y="10" width="4" height="4"/>
        <rect x="10" y="10" width="4" height="4"/>
        <rect x="16" y="10" width="4" height="4"/>
        <rect x="4" y="16" width="4" height="4"/>
        <rect x="10" y="16" width="4" height="4"/>
        <rect x="16" y="16" width="4" height="4"/>
      </svg>
    ), 
    active: false 
  },
  { 
    name: "Microsoft", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="10" height="10" fill="#F25022"/>
        <rect x="12" y="2" width="10" height="10" fill="#7FBA00"/>
        <rect x="2" y="12" width="10" height="10" fill="#00A4EF"/>
        <rect x="12" y="12" width="10" height="10" fill="#FFB900"/>
      </svg>
    ), 
    active: false 
  },
  { 
    name: "Meta", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#1877F2"/>
        <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6Z" fill="white"/>
      </svg>
    ), 
    active: false 
  },
  { 
    name: "Computer Science", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="14" rx="2"/>
        <path d="M6 8H18M6 12H14"/>
      </svg>
    ), 
    active: false 
  },
  { 
    name: "Electrical", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
      </svg>
    ), 
    active: false 
  },
  { 
    name: "Mechanical", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1V6M12 18V23M4.22 4.22L7.76 7.76M16.24 16.24L19.78 19.78M1 12H6M18 12H23M4.22 19.78L7.76 16.24M16.24 7.76L19.78 4.22"/>
      </svg>
    ), 
    active: false 
  },
  { 
    name: "Management", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="6" width="16" height="12" rx="2"/>
        <path d="M4 10H20M8 14H16"/>
      </svg>
    ), 
    active: false 
  },
  { 
    name: "Medical", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L4 7V11C4 16.55 7.16 21.74 12 23C16.84 21.74 20 16.55 20 11V7L12 2Z"/>
        <path d="M12 8V16M8 12H16"/>
      </svg>
    ), 
    active: false 
  },
  { 
    name: "Autodesk Courses", 
    icon: (
      <span className="font-bold text-lg">A</span>
    ), 
    active: false 
  },
];

const featuredCourses = [
  {
    title: "WEB DEVELOPMENT",
    category: "ADVANCED",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-orange-900 to-black"
  },
  {
    title: "DIGITAL MARKETING",
    category: "ADVANCED",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-orange-900 to-black"
  },
  {
    title: "CYBER SECURITY",
    category: "ADVANCED",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    description: "Protect your digital assets with our advanced cybersecurity solutions against evolving threats.",
    gradient: "from-black to-black"
  }
];

export default function TopFeaturedCourses() {
  return (
    <section className="bg-white py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:pl-[145px] lg:pr-[145px] relative">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-[42px] font-bold text-gray-900 mb-3 md:mb-4">
            Top Featured Courses
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto px-4">
            Explore our Top Featured Courses, handpicked for their quality, relevance, and impact in shaping your career.
          </p>
        </div>

        {/* Main Content: Sidebar + Course Cards */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Sidebar Navigation */}
          <div className="w-full lg:w-[280px] flex-shrink-0 lg:-ml-8 lg:-mt-4">
            <div className="bg-white p-4 space-y-2">
              {programCategories.map((category, index) => (
                <button
                  key={index}
                  className={`w-[280px] h-[44px] text-left px-4 py-3 rounded-full font-medium text-sm transition-colors flex items-center gap-3 border ${
                    category.active
                      ? 'bg-orange-500 text-white border-orange-500'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200'
                  }`}
                >
                  <span className="flex-shrink-0">{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Featured Course Cards */}
          <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 ml-[10px]">
            {featuredCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col w-[290px] h-[230px] p-5 border-2 border-gray-200">
                {/* Card Header Banner */}
                <div className="bg-black px-4 py-3 mb-2">
                  {course.title === "CYBER SECURITY" ? (
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L4 5V11C4 16.55 7.16 21.74 12 23C16.84 21.74 20 16.55 20 11V5L12 2Z" fill="#EF4444"/>
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="8" y="10" width="8" height="8" rx="2" fill="#EF4444"/>
                          <circle cx="12" cy="14" r="1.5" fill="white"/>
                        </svg>
                      </div>
                      <p className="text-white text-[10px] leading-tight flex-1">{course.description}</p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white text-xs font-semibold">{course.category}</span>
                    </div>
                  )}
                  <h3 className="text-white font-bold text-lg md:text-xl leading-tight">{course.title}</h3>
                </div>

                {/* Card Content Area */}
                <div className={`relative flex-1 bg-gradient-to-br ${course.gradient}`}>
                  {course.title === "CYBER SECURITY" ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        {/* Network lines effect */}
                        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400">
                          <line x1="0" y1="200" x2="400" y2="200" stroke="white" strokeWidth="1"/>
                          <line x1="200" y1="0" x2="200" y2="400" stroke="white" strokeWidth="1"/>
                          <line x1="0" y1="0" x2="400" y2="400" stroke="blue" strokeWidth="1" opacity="0.5"/>
                          <line x1="400" y1="0" x2="0" y2="400" stroke="blue" strokeWidth="1" opacity="0.5"/>
                          <circle cx="200" cy="200" r="50" stroke="white" strokeWidth="1" fill="none"/>
                          <circle cx="200" cy="200" r="100" stroke="blue" strokeWidth="1" fill="none" opacity="0.5"/>
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={course.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"}
                        alt={course.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/70 via-orange-800/50 to-black/80"></div>
                      {/* Technology logos overlay for Web Development */}
                      {course.title === "WEB DEVELOPMENT" && (
                        <>
                          <div className="absolute top-2 left-2 w-12 h-12 bg-orange-500/90 rounded-lg flex items-center justify-center backdrop-blur-sm">
                            <span className="text-white font-bold text-lg">5</span>
                          </div>
                          <div className="absolute top-2 right-2 w-12 h-12 bg-blue-500/90 rounded-lg flex items-center justify-center backdrop-blur-sm">
                            <span className="text-white font-bold text-lg">3</span>
                          </div>
                          <div className="absolute bottom-2 right-2 w-10 h-10 bg-yellow-400/90 rounded flex items-center justify-center backdrop-blur-sm">
                            <span className="text-black font-bold text-sm">JS</span>
                          </div>
                        </>
                      )}
                      {/* Marketing icons overlay for Digital Marketing */}
                      {course.title === "DIGITAL MARKETING" && (
                        <>
                          <div className="absolute top-2 left-2 w-10 h-10 bg-red-500/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-white font-bold text-xs">SEO</span>
                          </div>
                          <div className="absolute top-2 right-2 w-10 h-10 bg-blue-600/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-white font-bold text-xs">LI</span>
                          </div>
                          <div className="absolute bottom-2 right-2 w-10 h-10 bg-orange-500/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-white font-bold text-xs">GA</span>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Right Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <button className="w-12 h-12 md:w-14 md:h-14 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M5 12L12 5L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.042-.024-4.976 1.293-1.059-4.916-.024-.042A9.86 9.86 0 0112.001 2.001c5.421 0 9.848 4.409 9.848 9.83 0 5.421-4.427 9.83-9.848 9.83"/>
          </svg>
        </button>
      </div>
    </section>
  );
}

