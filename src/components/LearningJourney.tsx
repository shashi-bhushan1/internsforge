import React from 'react';

const journeySteps = [
  {
    title: "Discover Your Goal",
    description: "Identify your career aspirations and explore our expert-led programs.",
    color: "bg-blue-400",
    titleBg: "bg-blue-500",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="2" fill="none"/>
        <circle cx="20" cy="20" r="4" fill="white"/>
        <circle cx="20" cy="20" r="12" stroke="white" strokeWidth="1" fill="none" opacity="0.5"/>
        <circle cx="20" cy="20" r="16" stroke="white" strokeWidth="1" fill="none" opacity="0.3"/>
      </svg>
    )
  },
  {
    title: "Choose Your Program",
    description: "Select the course that best fits your career path and goals.",
    color: "bg-green-400",
    titleBg: "bg-green-500",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="8" width="20" height="24" rx="2" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M14 14H26M14 18H26M14 22H20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="28" cy="12" r="4" fill="white"/>
        <path d="M26 12L30 12" stroke="green" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Learn from Experts",
    description: "Attend live sessions and gain insights from industry professionals.",
    color: "bg-yellow-400",
    titleBg: "bg-yellow-500",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="16" r="4" fill="white"/>
        <circle cx="20" cy="16" r="4" fill="white"/>
        <circle cx="28" cy="16" r="4" fill="white"/>
        <path d="M8 26C8 24 9 23 11 23C13 23 14 24 14 26" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 26C16 24 17 23 19 23C21 23 22 24 22 26" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 26C24 24 25 23 27 23C29 23 30 24 30 26" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 12L12 8M20 12L20 6M28 12L28 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="8" r="2" fill="white"/>
        <circle cx="20" cy="6" r="2" fill="white"/>
        <circle cx="28" cy="8" r="2" fill="white"/>
      </svg>
    )
  },
  {
    title: "Work on Projects",
    description: "Apply your knowledge through hands-on projects and case studies.",
    color: "bg-orange-400",
    titleBg: "bg-orange-500",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 30L10 20L20 10L30 20L20 30Z" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M20 10V30M10 20H30" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 10L15 15M20 10L25 15M20 30L15 25M20 30L25 25" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Get Certified",
    description: "Earn an industry-recognized certification to validate your expertise.",
    color: "bg-pink-400",
    titleBg: "bg-pink-500",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="12" width="20" height="16" rx="2" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M14 18H26M14 22H20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 8L18 12L14 12L16 15L15 19L20 17L25 19L24 15L26 12L22 12L20 8Z" fill="white"/>
      </svg>
    )
  },
  {
    title: "Build a Career",
    description: "Use your new skills and certifications to excel in your professional journey.",
    color: "bg-orange-600",
    titleBg: "bg-orange-700",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 30L10 20L20 10L30 20L20 30Z" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M20 10V30M10 20H30" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 10L15 15M20 10L25 15M20 30L15 25M20 30L25 25" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  }
];

export default function LearningJourney() {
  return (
    <section className="bg-brand-page py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:pl-[145px] lg:pr-[145px] relative">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-3 md:mb-4">
            Experience Your Learning Journey at<br />InternsForge Edtech
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto px-4">
            Embark on your learning journey with InternsForge Edtech, where innovative courses and expert guidance empower you to achieve your professional goals.
          </p>
        </div>

        {/* Journey Steps Flowchart */}
        <div className="relative overflow-x-auto pb-8">
          <div className="flex items-start gap-4 md:gap-6 min-w-max px-4">
            {journeySteps.map((step, index) => (
              <div key={index} className="relative flex-shrink-0">
                {/* Connecting Line */}
                {index < journeySteps.length - 1 && (
                  <div className="absolute top-8 left-full w-6 md:w-8 z-0" style={{ transform: 'translateX(-2px)' }}>
                    <svg width="100%" height="4" viewBox="0 0 100 4" preserveAspectRatio="none">
                      <line x1="0" y1="2" x2="100" y2="2" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="4 4"/>
                      <polygon points="100,0 110,2 100,4" fill="#9CA3AF"/>
                    </svg>
                  </div>
                )}
                
                {/* Step Card */}
                <div className={`${step.color} rounded-lg shadow-md overflow-hidden w-[200px] md:w-[240px] relative z-10`}>
                  {/* Icon */}
                  <div className="flex items-center justify-center p-4">
                    {step.icon}
                  </div>

                  {/* Title Bar */}
                  <div className={`${step.titleBg} px-4 py-2`}>
                    <h3 className="text-white font-semibold text-sm md:text-base text-center">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="bg-white p-4">
                    <p className="text-xs md:text-sm text-gray-700 leading-5 text-center">
                      {step.description}
                    </p>
                  </div>
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

