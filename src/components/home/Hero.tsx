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


export default function Hero() {
  return (
    <section className="bg-brand-page min-h-[550px] md:min-h-[600px] flex items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px] py-8 md:py-12">
      <div className="max-w-[1600px] w-full flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        {/* Mobile: Hero Image Section First */}
        <div className="flex-1 relative w-full h-full lg:hidden mb-6 order-1">
          <div className="relative">
            <Image
              src="/hero-home.webp"
              alt="InternsForge Hero"
              width={800}
              height={550}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex-[1.3] space-y-4 pt-2 w-full order-2 lg:order-0">
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

        <div className="flex-[1.2] relative w-full h-full hidden lg:block lg:order-2">
          <div className="relative">
            <Image
              src="/hero-home.webp"
              alt="InternsForge Hero"
              width={700}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

