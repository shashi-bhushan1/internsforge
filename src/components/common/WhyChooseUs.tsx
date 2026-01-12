import React from 'react';

const benefits = [
  {
    title: "Expert Mentorship",
    description: "Learn from industry professionals who offer valuable insights, real-world experiences, and guidance to deepen your understanding.",
    iconColor: "bg-blue-700",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="12" r="4" fill="white"/>
        <circle cx="25" cy="12" r="4" fill="white"/>
        <path d="M10 28C10 24 12 22 15 22C18 22 20 24 20 28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 28C20 24 22 22 25 22C28 22 30 24 30 28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <rect x="8" y="18" width="24" height="12" rx="2" fill="white" opacity="0.3"/>
        <rect x="8" y="18" width="24" height="12" rx="2" stroke="white" strokeWidth="2"/>
      </svg>
    )
  },
  {
    title: "Comprehensive Curriculum",
    description: "Our courses cover in-demand technologies and essential skills, providing the knowledge and abilities needed for success in your career.",
    iconColor: "bg-teal-500",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="24" height="28" rx="2" fill="white" opacity="0.2"/>
        <rect x="8" y="6" width="24" height="28" rx="2" stroke="white" strokeWidth="2"/>
        <path d="M14 12H26M14 18H26M14 24H20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="28" cy="10" r="5" fill="white"/>
        <circle cx="28" cy="10" r="3" fill="none" stroke="teal" strokeWidth="1"/>
      </svg>
    )
  },
  {
    title: "Flexible Learning Options",
    description: "We offer self-paced courses and live virtual classrooms to fit your learning preferences and schedule, ensuring flexibility and convenience.",
    iconColor: "bg-green-500",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M20 12V20L26 26" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 8L8 12M28 8L32 12M12 32L8 28M28 32L32 28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Hands-On Projects",
    description: "Engage in hands-on projects that reinforce learning and provide practical experience, allowing you to showcase your skills to potential employers.",
    iconColor: "bg-orange-500",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="16" r="7" fill="white"/>
        <path d="M20 9V16M20 16L28 24" stroke="orange" strokeWidth="2" strokeLinecap="round"/>
        <rect x="10" y="24" width="20" height="10" rx="2" fill="white" opacity="0.3"/>
        <rect x="10" y="24" width="20" height="10" rx="2" stroke="white" strokeWidth="2"/>
        <circle cx="16" cy="28" r="1.5" fill="white"/>
        <circle cx="20" cy="28" r="1.5" fill="white"/>
        <circle cx="24" cy="28" r="1.5" fill="white"/>
      </svg>
    )
  },
  {
    title: "Personalized Guidance",
    description: "Receive tailored support from instructors and staff, including feedback and assistance to overcome challenges and achieve your learning goals.",
    iconColor: "bg-pink-500",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="4" stroke="white" strokeWidth="2" fill="none"/>
        <circle cx="25" cy="15" r="4" stroke="white" strokeWidth="2" fill="none"/>
        <circle cx="20" cy="25" r="4" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M15 19L20 21L25 19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 19L20 25L25 19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Career Advancement",
    description: "Enhance your professional growth with new skills and knowledge, positioning yourself for promotions and career changes. We offer job placement support.",
    iconColor: "bg-purple-600",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="8" width="12" height="8" rx="1" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M10 16L20 12L30 16V28L20 32L10 28V16Z" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M20 12V32" stroke="white" strokeWidth="2"/>
        <circle cx="18" cy="18" r="2" fill="white"/>
        <circle cx="22" cy="22" r="2" fill="white"/>
        <path d="M16 24L24 24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Premium Educational Resources",
    description: "Access high-quality resources like video lectures, reading materials, and interactive exercises, designed to provide comprehensive topic understanding.",
    iconColor: "bg-orange-400",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8L12 12L20 16L28 12L20 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12V20L20 24L28 20V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 16V24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="20" r="3" fill="white"/>
      </svg>
    )
  },
  {
    title: "Community Support",
    description: "Join a vibrant community of learners, collaborate with peers, participate in discussions, and share knowledge in a supportive environment.",
    iconColor: "bg-pink-600",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 12C18 12 16 13 16 15C16 17 18 18 20 18C22 18 24 17 24 15C24 13 22 12 20 12Z" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M12 20C12 18 13 17 15 17C17 17 18 18 18 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 20C22 18 23 17 25 17C27 17 28 18 28 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 24C10 22 11 21 13 21C15 21 16 22 16 24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 24C24 22 25 21 27 21C29 21 30 22 30 24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <ellipse cx="20" cy="28" rx="8" ry="4" stroke="white" strokeWidth="2" fill="none"/>
      </svg>
    )
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-brand-page py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px] relative">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-3 md:mb-4">
            Why Choose InternsForge for Your<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Learning Journey?
          </h1>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const words = benefit.title.split(' ');
            const isThreeWords = words.length === 3;
            
            return (
              <div key={index} className="bg-white rounded-lg shadow-xl p-4 sm:p-5 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col w-full min-h-[200px] sm:min-h-[250px] cursor-pointer">
                {/* Icon and Title Section */}
                <div className="flex items-start gap-3 mb-3">
                  {/* Icon */}
                  <div className={`${benefit.iconColor} w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center shrink-0`}>
                    {benefit.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight flex-1">
                    {isThreeWords ? (
                      <>
                        {words[0]}<br />
                        {words[1]}<br />
                        {words[2]}
                      </>
                    ) : (
                      benefit.title
                    )}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-700 leading-5 flex-1">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

