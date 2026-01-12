import React from 'react';
import Image from 'next/image';

const comboPacks = [
  {
    badge: "TECH PACK",
    title: "Tech Pack-Tech Beginner",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    features: [
      "+ Over 10 Tech Domains",
      "+ Embark on an Engaging Tech Journey",
      "+ Lifetime Tech Expertise",
      "+ Build a Future-Ready Tech Skill Set",
      "+ Explore Boundless Tech Horizons",
      "+ Achieve Hands-On Mastery with Real-World Projects"
    ],
    originalPrice: "18,998/-",
    discountedPrice: "9,999/-"
  },
  {
    badge: "MAKE YOUR OWN PACK",
    title: "Make your own pack",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    features: [
      "+ Select any 4",
      "+ Students have the option to choose any 4 random domains available on InternsForge",
      "+ They can bundle these into a package of 4 programs of their choice"
    ],
    originalPrice: "15,998/-",
    discountedPrice: "7,999/-"
  },
  {
    badge: "MBA LITE",
    title: "MBA Lite- Mini MBA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    features: [
      "+ Over 5 Business Domains",
      "+ Dive into Live Business Wisdom",
      "+ Access Lifetime Business Excellence",
      "+ Navigate Varied Business Landscapes",
      "+ Master Business Concepts Through Practical Application",
      "+ Demonstrate Portfolio-Ready Business Expertise"
    ],
    originalPrice: "17,998/-",
    discountedPrice: "8,999/-"
  }
];

export default function ComboPacks() {
  return (
    <section className="bg-brand-page py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-3 md:mb-4">
            InternsForge Combo Packs
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto px-4">
            Discover InternsForge Combo Packs, curated with top-quality courses and resources to provide comprehensive learning and great value.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-items-center">
          {comboPacks.map((pack, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow m-0 border-0 p-4 md:p-5 w-full max-w-[379px] min-h-[400px] sm:min-h-[450px] md:h-[450px] flex flex-col">
              {/* Top Section: Image and Title */}
              <div className="flex gap-3 md:gap-4 mb-2 md:mb-3">
                {/* Image with Badge */}
                <div className="relative shrink-0">
                  <div className="absolute top-1 left-1 z-10 bg-gray-900 text-white px-1.5 md:px-2 py-0.5 rounded text-[8px] md:text-[10px] font-semibold uppercase">
                    {pack.badge}
                  </div>
                  <div className="w-[70px] h-[68px] md:w-[83px] md:h-[80px] relative rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={pack.image}
                      alt={pack.title}
                      width={83}
                      height={80}
                      className="object-cover w-full h-full"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Title */}
                <div className="flex-1 flex items-start">
                  <h2 className="text-lg sm:text-xl md:text-[24px] font-bold text-gray-900 leading-tight">
                    {pack.title === "Tech Pack-Tech Beginner" ? (
                      <>
                        Tech Pack-Tech<br />
                        Beginner
                      </>
                    ) : pack.title === "MBA Lite- Mini MBA" ? (
                      <>
                        MBA Lite- Mini<br />
                        MBA
                      </>
                    ) : (
                      pack.title
                    )}
                  </h2>
                </div>
              </div>

              {/* Features Section */}
              <div className={`${index === 2 ? 'mb-1' : 'mb-2'} flex-1`}>
                <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2">
                  Includes Below Features
                </h4>
                <ul className="space-y-1">
                  {pack.features.map((feature, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-gray-700">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className={`${index === 2 ? 'mb-3' : 'mb-3'} text-center`}>
                <span className="text-red-600 line-through text-xl sm:text-2xl md:text-[28px] mr-2">
                  {pack.originalPrice}
                </span>
                <span className="text-2xl sm:text-3xl md:text-[36px] font-bold text-gray-900">
                  {pack.discountedPrice}
                </span>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-brand-orange text-white font-semibold py-3 md:py-3.5 rounded-full hover:bg-brand-cyan transition-colors text-sm md:text-base shadow-sm">
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

