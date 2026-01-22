import Image from "next/image";

const services = [
  {
    title: "Training",
    description:
      "Structured training by experienced mentors, covering basics to advanced tactics in multiple learning modes.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="5" width="16" height="14" rx="2" fill="#FF9800" />
        <rect x="7" y="3" width="10" height="3" rx="1" fill="#FF9800" />
        <rect x="7" y="9" width="10" height="2" rx="1" fill="white" />
        <rect x="7" y="13" width="7" height="2" rx="1" fill="white" />
      </svg>
    ),
  },
  {
    title: "Internship",
    description:
      "Real-world projects, mentor guidance, and feedback to boost employability and practical skills.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="7" width="18" height="12" rx="3" fill="#FF9800" />
        <rect x="7" y="4" width="10" height="4" rx="2" fill="#FF9800" />
        <path
          d="M7 12H17M7 15H12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Placement Support",
    description:
      "Aptitude training, personality growth, mock interviews, and HR prep for careers.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="8" r="4" fill="#FF9800" />
        <path
          d="M6 20C6 16 9 14 12 14C15 14 18 16 18 20"
          stroke="#FF9800"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const collageImages = [
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
];

export default function Hero() {
  return (
    <section className="bg-brand-page min-h-[500px] md:h-[500px] flex items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px] py-8 md:py-6">
      <div className="max-w-[1600px] w-full flex flex-col lg:flex-row gap-6 items-start">
        {/* Mobile: Image Collage Section First */}
        <div className="flex-[0.9] relative w-full h-full lg:hidden mb-6 order-1">
          <div className="relative grid grid-cols-2 gap-1.5 sm:gap-2">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-sm bg-gray-100 h-28 sm:h-32">
              <Image
                src={collageImages[0]}
                alt="Smiling student"
                width={320}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-sm bg-gray-100 h-28 sm:h-32 relative">
              <Image
                src={collageImages[1]}
                alt="Student with books"
                width={320}
                height={180}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 w-5 h-5 sm:w-6 sm:h-6 bg-brand-orange rounded-full flex items-center justify-center">
                <svg width="10" height="10" className="sm:w-3 sm:h-3" viewBox="0 0 20 20" fill="white">
                  <path d="M10 2L2 6L10 10L18 6L10 2Z" />
                  <path d="M2 17L10 22L18 17L10 12L2 17Z" />
                </svg>
              </div>
            </div>

            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-sm bg-gray-100 h-28 sm:h-32">
              <Image
                src={collageImages[2]}
                alt="Students group"
                width={320}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-sm bg-gray-100 h-28 sm:h-32">
              <Image
                src={collageImages[3]}
                alt="Graduate celebrating"
                width={320}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Statistics Boxes - Mobile */}
          <div className="absolute left-1 sm:left-0 top-20 sm:top-24 bg-brand-navy text-white rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 shadow-lg w-20 sm:w-24 flex flex-col items-start gap-0.5 sm:gap-1 z-10">
            <div className="text-[10px] sm:text-xs font-semibold">50k+</div>
            <div className="text-[9px] sm:text-[10px] font-medium">Projects</div>
          </div>

          <div className="absolute right-1 sm:right-0 top-12 sm:top-16 bg-brand-navy text-white rounded-lg px-1.5 sm:px-2 py-2 sm:py-3 shadow-lg w-9 sm:w-10 flex items-center justify-center rotate-90 z-10">
            <div className="flex flex-col items-center gap-0.5 sm:gap-1 -rotate-90">
              <span className="text-[10px] sm:text-xs font-semibold">25k+</span>
              <span className="text-[7px] sm:text-[8px] leading-3 text-center">Happy Students</span>
            </div>
          </div>

          <div className="absolute left-16 sm:left-20 bottom-1 sm:bottom-2 bg-white rounded-xl shadow-lg border border-gray-100 px-2 sm:px-3 py-1.5 sm:py-2 w-28 sm:w-36 flex flex-col gap-0.5 sm:gap-1 z-10">
            <div className="text-xs sm:text-sm font-bold text-gray-900">4.9 ★</div>
            <div className="text-[9px] sm:text-[10px] font-semibold text-gray-800">Happy Students</div>
          </div>

          <div className="absolute right-0 sm:right-0 bottom-1 sm:bottom-2 bg-brand-orange text-white rounded-lg shadow-lg px-2 sm:px-3 py-1.5 sm:py-2 w-32 sm:w-40 flex items-center gap-1.5 sm:gap-2 z-10">
            <span className="text-sm sm:text-base">★</span>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold">4.8</span>
              <span className="text-[9px] sm:text-[10px] font-medium">Satisfactions</span>
            </div>
          </div>
        </div>

        <div className="flex-[1.35] space-y-3 pt-2 w-full order-2 lg:order-0">
          <p className="text-[11px] sm:text-[12.8px] font-semibold text-brand-orange">Hi, there</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight font-extrabold text-gray-900">
            <span className="text-brand-orange">InternsForge</span> Is Here To Be<br />
            Your New Learning Partner
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Elevate Your Intellect with InternsForge
          </h2>
          <p className="text-[11px] sm:text-[12.8px] text-gray-600 leading-5">
            &quot;InternsForge is an innovative educational technology platform
            which isn&apos;t just another ed-tech platform. we&apos;re the
            bridge that spans the gap between classroom theory and real-world
            industry needs. From internships to personalized career guidance and
            mentorship, we&apos;re here to help students navigate the
            ever-shifting terrain of professional development. With us,
            education isn&apos;t just about learning more, it&apos;s about
            thriving.&quot;
          </p>

          <div className="pt-1">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-orange mb-3">
              Our Services
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-3 flex flex-col gap-2 flex-1"
                >
                  <div className="flex items-center gap-2">
                    {service.icon}
                    <p className="text-sm sm:text-[15px] font-bold text-gray-900">
                      {service.title}
                    </p>
                  </div>
                  <p className="text-[11px] sm:text-[12px] text-gray-600 leading-4">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-[0.9] relative w-full h-full hidden lg:block lg:order-2">
          <div className="absolute -right-6 top-10 h-[300px] xl:h-[400px] w-[300px] xl:w-[400px] rounded-full border-2 border-dashed border-brand-orange/30" />

          <div className="relative grid grid-cols-2 gap-3 mt-10">
            <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100 h-28 xl:h-36">
              <Image
                src={collageImages[0]}
                alt="Smiling student"
                width={320}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100 h-28 xl:h-36">
              <Image
                src={collageImages[1]}
                alt="Student with books"
                width={320}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100 h-28 xl:h-36">
              <Image
                src={collageImages[2]}
                alt="Students group"
                width={320}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100 h-28 xl:h-36">
              <Image
                src={collageImages[3]}
                alt="Graduate celebrating"
                width={320}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="absolute -left-2 top-32 bg-brand-navy text-white rounded-2xl px-4 xl:px-5 py-3 xl:py-4 shadow-lg w-28 xl:w-32 flex flex-col items-start gap-1.5">
            <div className="text-sm xl:text-base font-semibold">50k+</div>
            <div className="text-xs xl:text-sm font-medium">Projects</div>
          </div>

          <div className="absolute -right-6 top-24 bg-brand-navy text-white rounded-[16px] px-2 xl:px-3 py-4 xl:py-5 shadow-lg w-12 xl:w-14 flex items-center justify-center">
            <div className="flex flex-col items-center gap-1.5 xl:gap-2">
              <span className="text-sm xl:text-base font-semibold">25k+</span>
              <span className="text-[10px] xl:text-xs leading-3 xl:leading-4 text-center">
                Happy Students
              </span>
            </div>
          </div>

          <div className="absolute left-28 bottom-0 bg-white rounded-2xl shadow-lg border border-gray-100 px-4 xl:px-5 py-3 xl:py-4 w-44 xl:w-52 flex flex-col gap-1.5">
            <div className="text-xl xl:text-2xl font-bold text-gray-900">4.9 ★</div>
            <div className="text-xs xl:text-sm font-semibold text-gray-800">
              Happy Students
            </div>
          </div>

          <div className="absolute right-0 bottom-0 bg-brand-orange text-white rounded-[14px] shadow-lg px-4 xl:px-5 py-2.5 xl:py-3 w-48 xl:w-56 flex items-center gap-2 xl:gap-2.5">
            <span className="text-lg xl:text-xl">★</span>
            <div className="flex flex-col">
              <span className="text-base xl:text-lg font-semibold">4.8</span>
              <span className="text-xs xl:text-sm font-medium">Satisfactions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

