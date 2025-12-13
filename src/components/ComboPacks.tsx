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
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
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
    <section className="bg-white py-16 pl-[145px] pr-[145px]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-[42px] font-bold text-gray-900 mb-4">
            InternsForge Combo Packs
          </h1>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            Discover InternsForge Combo Packs, curated with top-quality courses and resources to provide comprehensive learning and great value.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {comboPacks.map((pack, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow m-0 border-0 p-5 w-[379px] h-[450px] flex flex-col">
              {/* Top Section: Image and Title */}
              <div className="flex gap-4 mb-4">
                {/* Image with Badge */}
                <div className="relative flex-shrink-0">
                  <div className="absolute top-1 left-1 z-10 bg-gray-900 text-white px-2 py-0.5 rounded text-[10px] font-semibold uppercase">
                    {pack.badge}
                  </div>
                  <div className="w-[83px] h-[80px] relative rounded-lg overflow-hidden">
                    <Image
                      src={pack.image}
                      alt={pack.title}
                      width={83}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Title */}
                <div className="flex-1 flex items-start">
                  <h2 className="text-[24px] font-bold text-gray-900 leading-tight">
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
                <h4 className="text-base font-bold text-gray-900 mb-2">
                  Includes Below Features
                </h4>
                <ul className="space-y-1">
                  {pack.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-700">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className={`${index === 2 ? 'mb-3' : 'mb-3'} text-center`}>
                <span className="text-red-600 line-through text-[28px] mr-2">
                  {pack.originalPrice}
                </span>
                <span className="text-[36px] font-bold text-gray-900">
                  {pack.discountedPrice}
                </span>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gray-200 text-gray-900 font-medium py-3 rounded-full hover:bg-gray-300 transition-colors">
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

