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
    <section className="bg-white py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:pl-[145px] lg:pr-[145px] relative">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-[42px] font-bold text-gray-900 mb-3 md:mb-4">
            Why Choose InternsForge for Your<br />
            Learning Journey?
          </h1>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const words = benefit.title.split(' ');
            const isThreeWords = words.length === 3;
            
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow flex flex-col w-[290px] h-[250px]">
                {/* Icon and Title Section */}
                <div className="flex items-start gap-3 mb-3">
                  {/* Icon */}
                  <div className={`${benefit.iconColor} w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {benefit.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-[16px] font-bold text-gray-900 leading-tight flex-1">
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
                <p className="text-[14px] text-gray-700 leading-5 flex-1">
                  {benefit.description}
                </p>
              </div>
            );
          })}
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

