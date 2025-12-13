import React from 'react';

const partners = [
  {
    name: "Microsoft",
    logo: (
      <div className="flex items-center gap-2">
        <div className="grid grid-cols-2 w-10 h-10 gap-0">
          <div className="bg-[#F25022]"></div>
          <div className="bg-[#7FBA00]"></div>
          <div className="bg-[#00A4EF]"></div>
          <div className="bg-[#FFB900]"></div>
        </div>
        <span className="text-black font-semibold text-sm">Microsoft</span>
      </div>
    ),
  },
  {
    name: "Adobe",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#FF0000] rounded-sm flex items-center justify-center relative">
          <span className="text-white font-bold text-lg relative z-10">A</span>
          <div className="absolute top-0 right-0 w-3 h-3 bg-white rounded-bl-sm"></div>
        </div>
        <span className="text-black font-semibold text-sm">Adobe</span>
      </div>
    ),
  },
  {
    name: "Unity",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" />
            <path d="M2 17L12 22L22 17L12 12L2 17Z" />
            <path d="M2 12L12 17L22 12L12 7L2 12Z" />
          </svg>
        </div>
        <span className="text-black font-semibold text-sm lowercase">unity</span>
      </div>
    ),
  },
  {
    name: "Meta",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
            <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6Z" />
          </svg>
        </div>
        <span className="text-black font-semibold text-sm">Meta</span>
      </div>
    ),
  },
  {
    name: "ESB",
    logo: (
      <div className="flex flex-col items-start gap-1">
        <div className="flex items-center gap-1">
          <span className="text-black font-bold text-base">ESB</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0L8.75 4.5L14 5L10.5 8.5L11.5 14L7 11.5L2.5 14L3.5 8.5L0 5L5.25 4.5L7 0Z" />
          </svg>
        </div>
        <div className="text-xs text-black leading-tight">
          <div>Entrepreneurship</div>
          <div>and Small Business</div>
        </div>
      </div>
    ),
  },
  {
    name: "Autodesk",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" />
            <path d="M2 17L12 22L22 17L12 12L2 17Z" />
          </svg>
        </div>
        <span className="text-black font-bold text-xs uppercase">AUTODESK</span>
      </div>
    ),
  },
  {
    name: "Apple",
    logo: (
      <div className="flex items-center justify-center">
        <svg width="24" height="30" viewBox="0 0 24 30" fill="black" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.05 20.28c-.98 1.57-2.35 2.88-4.05 3.81-1.31.73-2.41 1.23-3.29 1.49-.98.28-2.03.42-3.15.42-.85 0-1.78-.11-2.78-.33-1.01-.22-2.05-.55-3.12-1-.28-.11-.57-.25-.87-.42-.3-.17-.57-.3-.81-.39-.24-.09-.5-.14-.78-.14-.41 0-.88.12-1.41.35-.53.24-1.05.58-1.56 1.02-.51.44-.95.95-1.32 1.53-.37.58-.64 1.2-.81 1.86-.17.66-.25 1.33-.25 2.01 0 1.11.19 2.19.56 3.24.37 1.05.91 2.05 1.62 3.01.71.96 1.58 1.85 2.61 2.67 1.03.82 2.2 1.55 3.51 2.19 1.31.64 2.74 1.15 4.29 1.53 1.55.38 3.2.57 4.95.57 1.75 0 3.4-.19 4.95-.57 1.55-.38 2.98-.89 4.29-1.53 1.31-.64 2.48-1.37 3.51-2.19 1.03-.82 1.9-1.71 2.61-2.67.71-.96 1.25-1.96 1.62-3.01.37-1.05.56-2.13.56-3.24 0-.68-.08-1.35-.25-2.01-.17-.66-.44-1.28-.81-1.86-.37-.58-.81-1.09-1.32-1.53-.51-.44-1.03-.78-1.56-1.02-.53-.23-1-.35-1.41-.35-.28 0-.54.05-.78.14-.24.09-.51.22-.81.39-.3.17-.59.31-.87.42-1.07.45-2.11.78-3.12 1-1 .22-1.93.33-2.78.33-1.12 0-2.17-.14-3.15-.42-.88-.26-1.98-.76-3.29-1.49-1.7-.93-3.07-2.24-4.05-3.81z"/>
        </svg>
      </div>
    ),
  },
  {
    name: "Cisco",
    logo: (
      <div className="flex items-center gap-2">
        <div className="flex items-end gap-0.5 h-6">
          <div className="w-1 bg-black" style={{ height: '60%' }}></div>
          <div className="w-1 bg-black" style={{ height: '80%' }}></div>
          <div className="w-1 bg-black" style={{ height: '100%' }}></div>
          <div className="w-1 bg-black" style={{ height: '70%' }}></div>
          <div className="w-1 bg-black" style={{ height: '50%' }}></div>
        </div>
        <span className="text-red-600 font-bold text-xs uppercase">CISCO</span>
      </div>
    ),
  },
  {
    name: "Communication Skills for Business",
    logo: (
      <div className="flex flex-col items-start gap-1">
        <div className="flex items-center gap-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#FF9800"/>
            <path d="M8 10C8 10 10 8 12 8C14 8 16 10 16 10V14C16 14 14 16 12 16C10 16 8 14 8 14V10Z" fill="white"/>
          </svg>
          <span className="text-black font-bold text-xs uppercase">COMMUNICATION</span>
        </div>
        <span className="text-black text-xs">SKILLS FOR BUSINESS</span>
      </div>
    ),
  },
  {
    name: "PMI",
    logo: (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-xs">P</span>
          </div>
          <div className="w-6 h-6 bg-orange-500 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-xs">M</span>
          </div>
        </div>
        <span className="text-black text-xs">Project Management Institute.</span>
      </div>
    ),
  },
];

const otherPartners = [
  {
    name: "Ministry of Corporate Affairs",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 flex items-center justify-center">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="black" strokeWidth="2"/>
            <circle cx="20" cy="20" r="12" stroke="black" strokeWidth="1"/>
            <path d="M20 8L20 32M8 20L32 20" stroke="black" strokeWidth="1"/>
          </svg>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-black font-bold text-xs uppercase">MINISTRY OF CORPORATE AFFAIRS</span>
          <span className="text-black text-xs">GOVERNMENT OF INDIA</span>
        </div>
      </div>
    ),
  },
  {
    name: "ISO 9001:2015",
    logo: (
      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-full border-4 border-blue-600 flex items-center justify-center bg-white">
          <div className="text-center">
            <span className="text-blue-600 font-bold text-sm">ISO</span>
            <div className="text-blue-600 font-bold text-xs">9001:2015</div>
          </div>
        </div>
        <span className="text-black text-xs text-center">CERTIFIED ISO 9001:2015 COMPANY</span>
      </div>
    ),
  },
  {
    name: "IC3 Digital Literacy",
    logo: (
      <div className="flex flex-col items-center gap-1">
        <span className="text-green-600 font-bold text-xl">IC3</span>
        <div className="text-center">
          <span className="text-black text-xs font-semibold">DIGITAL LITERACY</span>
          <div className="text-black text-xs">CERTIFICATION</div>
        </div>
      </div>
    ),
  },
  {
    name: "IAF Accreditation",
    logo: (
      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-full border-4 border-blue-600 flex items-center justify-center bg-white">
          <span className="text-blue-600 font-bold text-lg">IAF</span>
        </div>
        <span className="text-black text-xs text-center">INTERNATIONAL IAF ACCREDITATION FORUM</span>
      </div>
    ),
  },
  {
    name: "Startup India",
    logo: (
      <div className="flex items-center">
        <span className="text-orange-500 font-bold text-lg">#startup</span>
        <span className="text-orange-500 font-bold text-lg relative">
          ind
          <span className="relative inline-block">
            i
            <svg className="absolute -bottom-1 left-0" width="14" height="14" viewBox="0 0 14 14" fill="#22C55E">
              <path d="M7 0L8.5 3.5L12.5 4L9.5 7L10.5 11L7 9L3.5 11L4.5 7L1.5 4L5.5 3.5L7 0Z" />
            </svg>
          </span>
          <span className="relative inline-block">
            a
            <svg className="absolute -bottom-1 left-0" width="10" height="10" viewBox="0 0 10 10" fill="#22C55E">
              <path d="M5 0L5 10M0 5L10 5" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
        </span>
      </div>
    ),
  },
  {
    name: "MSME",
    logo: (
      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-full border-4 border-blue-600 flex items-center justify-center bg-white">
          <div className="text-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="1"/>
              <circle cx="12" cy="12" r="6" stroke="black" strokeWidth="1"/>
            </svg>
          </div>
        </div>
        <div className="text-center text-xs text-black">
          <div>MSME</div>
          <div className="text-[10px]">Ministry of Micro, Small & Medium Enterprises</div>
        </div>
      </div>
    ),
  },
  {
    name: "DRONA AVIATION",
    logo: (
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-0.5">
          <span className="text-black font-bold text-xl">DR</span>
          <div className="w-7 h-7 rounded-full border-2 border-black flex items-center justify-center relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-1.5 h-1.5 bg-black rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-1.5 h-1.5 bg-black rounded-full"></div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-1.5 h-1.5 bg-black rounded-full"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 w-1.5 h-1.5 bg-black rounded-full"></div>
          </div>
          <span className="text-black font-bold text-xl">NA</span>
        </div>
        <span className="text-black font-bold text-xs uppercase">AVIATION</span>
      </div>
    ),
  },
  {
    name: "ITS Information Technology",
    logo: (
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-1">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">it</span>
          </div>
        </div>
        <div className="text-center text-xs text-black">
          <div>INFORMATION TECHNOLOGY</div>
          <div>SPECIAL ST</div>
        </div>
      </div>
    ),
  },
];

export default function CertificationPartners() {
  return (
    <section className="bg-white py-12 pl-[145px] pr-[145px]">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[42px] font-bold text-black mb-3">
            Your Trust is Our Priority
          </h2>
          <p className="text-base text-black mb-2">
            We are proudly certified by these organizations
          </p>
        </div>

        <div className="w-[864px] h-[316px] mx-auto flex flex-col mb-12">
          <h3 className="text-[19px] font-bold text-black underline text-center mb-8" style={{ marginTop: '0px', marginLeft: '0px', marginRight: '0px', marginBottom: '32px' }}>
            Our official Certification Partners
          </h3>
          <div className="grid grid-cols-5 gap-4 flex-1">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-center justify-center"
              >
                {partner.logo}
              </div>
            ))}
          </div>
        </div>

        <div className="w-[864px] mx-auto mt-[48px] mb-[48px]">
          <div className="h-[2px] bg-gray-300"></div>
        </div>

        <div className="w-[688px] mx-auto">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-[19px] font-bold text-black underline text-center mb-8" style={{ marginTop: '0px', marginLeft: '0px', marginRight: '0px', marginBottom: '32px' }}>
              Our other Partners
            </h3>
            <div className="grid grid-cols-4 gap-4">
            {otherPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-center justify-center"
              >
                {partner.logo}
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

