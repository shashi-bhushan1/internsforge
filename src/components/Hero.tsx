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
    <section className="bg-white h-[500px] flex items-center pl-[145px] pr-[145px] pt-6">
      <div className="max-w-[1600px] w-full flex flex-col lg:flex-row gap-6 items-start">
        <div className="flex-[1.35] space-y-3 pt-2">
          <p className="text-[12.8px] font-semibold text-orange-500">Hi, there</p>
          <h1 className="text-[40px] leading-tight font-extrabold text-gray-900">
            <span className="text-orange-500">InternsForge</span> Is Here To Be<br />
            Your New Learning Partner
          </h1>
          <h2 className="text-xl font-semibold text-gray-900">
            Elevate Your Intellect with InternsForge
          </h2>
          <p className="text-[12.8px] text-gray-600 leading-5">
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
            <h3 className="text-2xl font-bold text-orange-500 mb-3">
              Our Services
            </h3>
            <div className="grid gap-3 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-xl bg-white shadow-sm border border-gray-100 p-3 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-start">
                    {service.icon}
                  </div>
                  <div className="space-y-1 text-left">
                    <p className="text-[15px] font-bold text-gray-900">
                      {service.title}
                    </p>
                    <p className="text-[12px] text-gray-600 leading-4">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-[0.9] relative w-full h-full">
          <div className="absolute -right-6 top-10 h-[400px] w-[400px] rounded-full border-2 border-dashed border-orange-300" />

          <div className="relative grid grid-cols-2 gap-3 mt-10">
            <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100 h-36">
              <Image
                src={collageImages[0]}
                alt="Smiling student"
                width={320}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100 h-36">
              <Image
                src={collageImages[1]}
                alt="Student with books"
                width={320}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100 h-36">
              <Image
                src={collageImages[2]}
                alt="Students group"
                width={320}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100 h-36">
              <Image
                src={collageImages[3]}
                alt="Graduate celebrating"
                width={320}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="absolute -left-2 top-32 bg-[#2b1a13] text-white rounded-2xl px-5 py-4 shadow-lg w-32 flex flex-col items-start gap-1.5">
            <div className="text-base font-semibold">50k+</div>
            <div className="text-sm font-medium">Projects</div>
          </div>

          <div className="absolute -right-6 top-24 bg-[#2b1a13] text-white rounded-[16px] px-3 py-5 shadow-lg w-14 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <span className="text-base font-semibold">25k+</span>
              <span className="text-xs leading-4 text-center">
                Happy Students
              </span>
            </div>
          </div>

          <div className="absolute left-28 bottom-0 bg-white rounded-2xl shadow-lg border border-gray-100 px-5 py-4 w-52 flex flex-col gap-1.5">
            <div className="text-2xl font-bold text-gray-900">4.9 ★</div>
            <div className="text-sm font-semibold text-gray-800">
              Happy Students
            </div>
          </div>

          <div className="absolute right-0 bottom-0 bg-orange-500 text-white rounded-[14px] shadow-lg px-5 py-3 w-56 flex items-center gap-2.5">
            <span className="text-xl">★</span>
            <div className="flex flex-col">
              <span className="text-lg font-semibold">4.8</span>
              <span className="text-sm font-medium">Satisfactions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

