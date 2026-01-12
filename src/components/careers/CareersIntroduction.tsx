'use client';

export default function CareersIntroduction() {
  const handleExploreOpenings = () => {
    const jobOpeningsSection = document.getElementById('job-openings');
    if (jobOpeningsSection) {
      jobOpeningsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-brand-page py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
          Join Our Team: Shape the Future of Learning and Careers
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-8 md:mb-10 leading-relaxed">
          At InternsForge, we are dedicated to transforming learning experiences and shaping careers. 
          We invite passionate individuals to join our team as mentors, HR professionals, and more. 
          Be part of a dynamic environment where you can influence the next generation of learners 
          and professionals. Together, we're building the future of education and career development.
        </p>
        <button
          onClick={handleExploreOpenings}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg transition-colors text-sm md:text-base"
        >
          Explore openings
        </button>
      </div>
    </section>
  );
}

