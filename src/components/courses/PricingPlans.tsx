'use client';

import React from 'react';

interface PricingPlansProps {
  selfPacedLink?: string;
  mentorLedLink?: string;
  selfPacedPrice?: string;
  mentorLedPrice?: string;
}

const defaultPlans = [
  {
    id: 1,
    title: "Self Paced",
    subtitle: "Learn with your speed",
    price: "₹5500",
    paymentType: "One Time Payment",
    features: [
      { name: "RECORDED LECTURES", included: true },
      { name: "REAL TIME PROJECTS", included: true },
      { name: "4+ HRS OF LIVE SESSIONS", included: true },
      { name: "ONE ON ONE DOUBT SESSIONS", included: true },
      { name: "CERTIFICATIONS", included: true },
      { name: "MENTOR SUPPORT", included: false },
      { name: "PLACEMENT GUIDANCE", included: false },
      { name: "INTERVIEW ASSISTANCE", included: false },
    ],
    headerColor: "bg-blue-200",
    isPopular: false,
  },
  {
    id: 2,
    title: "Mentor Led",
    subtitle: "Live Mentorship",
    price: "₹8000",
    paymentType: "One Time Payment",
    features: [
      { name: "RECORDED LECTURES", included: true },
      { name: "REAL TIME PROJECTS", included: true },
      { name: "4+ HRS OF LIVE SESSIONS", included: true },
      { name: "ONE ON ONE DOUBT SESSIONS", included: true },
      { name: "CERTIFICATIONS", included: true },
      { name: "MENTOR SUPPORT", included: true },
      { name: "PLACEMENT GUIDANCE", included: true },
      { name: "INTERVIEW ASSISTANCE", included: true },
    ],
    headerColor: "bg-green-200",
    isPopular: true,
  },
];

export default function PricingPlans({ 
  selfPacedLink, 
  mentorLedLink,
  selfPacedPrice,
  mentorLedPrice
}: PricingPlansProps) {
  
  const handlePaymentClick = (link: string | undefined) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      console.warn('Payment link not available');
    }
  };
  return (
    <section id="pricing-plans" className="bg-brand-page py-8 md:py-16 pb-16 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px] scroll-mt-32 md:scroll-mt-36">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-3 md:mb-4">
            Choose the Learning Path That Fits You Best
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto px-4">
            Choose the plan that suits your learning needs and start your journey with InternsForge today. Tailored options for every goal and budget.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto justify-items-center pb-8">
          {defaultPlans.map((plan) => {
            // Determine which payment link and price to use
            const paymentLink = plan.id === 1 ? selfPacedLink : mentorLedLink;
            const displayPrice = plan.id === 1 
              ? (selfPacedPrice || plan.price)
              : (mentorLedPrice || plan.price);

            return (
              <div
                key={plan.id}
                className="relative bg-white rounded-xl shadow-md overflow-visible hover:shadow-lg transition-shadow w-full max-w-[350px] flex flex-col border border-gray-200"
              >
                {/* Popular/Exclusive Badge - Diagonal Ribbon */}
                {plan.isPopular && (
                  <div className="absolute -top-2 -left-2 z-10">
                    <div className="bg-brand-orange text-white text-[10px] md:text-xs font-bold px-4 py-2 transform -rotate-12 origin-center shadow-md rounded-tl-lg rounded-br-lg">
                      <span className="block">POPULAR</span>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="px-6 py-6 flex flex-col flex-1 min-h-0">
                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 text-center">
                    {plan.title}
                  </h2>
                  
                  {/* Subtitle */}
                  <p className="text-sm md:text-base text-gray-700 text-center mb-4">
                    {plan.subtitle}
                  </p>

                  {/* Price Section */}
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-gray-900 text-3xl md:text-4xl font-bold">
                        {displayPrice}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {plan.paymentType}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 flex-1 mb-6 min-h-0">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        {feature.included ? (
                          <svg
                            className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                        <span
                          className={`text-sm md:text-base flex-1 ${
                            feature.included ? 'text-gray-900' : 'text-gray-500'
                          }`}
                        >
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto pt-2">
                    <button 
                      onClick={() => handlePaymentClick(paymentLink)}
                      disabled={!paymentLink}
                      className={`w-full font-semibold py-3 md:py-3.5 rounded-full transition-colors text-sm md:text-base shadow-sm ${
                        paymentLink
                          ? 'bg-brand-orange text-white hover:bg-brand-cyan cursor-pointer'
                          : 'bg-gray-400 text-white cursor-not-allowed opacity-60'
                      }`}
                    >
                      Start Learning
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

