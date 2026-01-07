import React from 'react';

const statistics = [
  {
    number: "25K+",
    label: "STUDENTS ENROLLED"
  },
  {
    number: "4.8/5",
    label: "SATISFACTION RATE"
  },
  {
    number: "50K+",
    label: "TOTAL PROJECT COMPLETION"
  },
  {
    number: "5/5",
    label: "FACULTY RATING"
  }
];

export default function InvestInYourself() {
  return (
    <section className="bg-brand-page py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:pl-[145px] lg:pr-[145px]">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center">
          {/* Slogan */}
          <p className="text-[16px] font-medium mb-3 md:mb-4 text-brand-navy">
            Your goals are our goals
          </p>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-4 md:mb-6">
            Invest in yourself today. Unlock<br />success for a lifetime.
          </h1>

          {/* Descriptive Paragraph */}
          <p className="text-[16px] text-gray-700 max-w-4xl mx-auto mb-8 md:mb-12 leading-6">
            InternsForge offers a unique blend of learning methods – including lectures from top faculty, group discussions and mentoring sessions, that keep learners motivated every step of the way.
          </p>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-[64px] font-bold mb-2 text-brand-orange">
                  {stat.number}
                </div>
                <div className="text-[16px] font-semibold uppercase tracking-wide text-brand-orange">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
