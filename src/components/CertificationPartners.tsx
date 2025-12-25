import React from 'react';
import Image from 'next/image';

const partners = [
  {
    name: "Microsoft",
    logo: "/certificate_partners/Microsoft.svg",
  },
  {
    name: "Adobe",
    logo: "/certificate_partners/Adobe.svg",
  },
  {
    name: "Unity",
    logo: "/certificate_partners/Unity.svg",
  },
  {
    name: "Meta",
    logo: "/certificate_partners/Meta.svg",
  },
  {
    name: "ESB",
    logo: "/certificate_partners/Esb.svg",
  },
  {
    name: "Autodesk",
    logo: "/certificate_partners/Autodesk.svg",
  },
  {
    name: "Apple",
    logo: "/certificate_partners/Apple.svg",
  },
  {
    name: "Cisco",
    logo: "/certificate_partners/Cisco.svg",
  },
  {
    name: "Communication Skills for Business",
    logo: "/certificate_partners/csb.svg",
  },
  {
    name: "PMI",
    logo: "/certificate_partners/pmi.svg",
  },
  {
    name: "IBM",
    logo: "/certificate_partners/IBM.png",
  },
  {
    name: "IIT Hyderabad",
    logo: "/certificate_partners/IIT_Hyderabad.png",
  },
  {
    name: "Talview",
    logo: "/certificate_partners/Talview.svg",
  },
  {
    name: "Wipro",
    logo: "/certificate_partners/Wipro.webp",
  },
  {
    name: "Xencus",
    logo: "/certificate_partners/xencus.png",
  },
];

const otherPartners = [
  {
    name: "Ministry of Corporate Affairs",
    logo: "/other_partners/Mca.webp",
  },
  {
    name: "ISO 9001:2015",
    logo: "/other_partners/iso.webp",
  },
  {
    name: "IC3 Digital Literacy",
    logo: "/other_partners/prodesk.webp", // Using prodesk as placeholder for IC3
  },
  {
    name: "IAF Accreditation",
    logo: "/other_partners/s-s-innovations.webp", // Using s-s-innovations as placeholder for IAF
  },
  {
    name: "Startup India",
    logo: "/other_partners/startupIndia.webp",
  },
  {
    name: "MSME",
    logo: "/other_partners/msme.webp",
  },
  {
    name: "DRONA AVIATION",
    logo: "/other_partners/prodesk.webp", // Placeholder - will be replaced later
  },
  {
    name: "ITS Information Technology",
    logo: "/other_partners/s-s-innovations.webp", // Placeholder - will be replaced later
  },
];

export default function CertificationPartners() {
  return (
    <section className="bg-white py-8 md:py-12 px-4 sm:px-6 md:px-12 lg:pl-[145px] lg:pr-[145px]">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-black mb-3">
            Your Trust is Our Priority
          </h2>
          <p className="text-sm sm:text-base text-black mb-2">
            We are proudly certified by these organizations
          </p>
        </div>

        <div className="w-full max-w-[864px] min-h-[316px] mx-auto flex flex-col mb-8 md:mb-12">
          <h3 className="text-base sm:text-lg md:text-[19px] font-bold text-black underline text-center mb-6 md:mb-8" style={{ marginTop: '0px', marginLeft: '0px', marginRight: '0px', marginBottom: '32px' }}>
            Our official Certification Partners
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5 flex-1">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center ${
                  partner.name === "ESB" 
                    ? "p-5 md:p-7 min-h-[160px] md:min-h-[180px]" 
                    : "p-4 md:p-6 min-h-[140px] md:min-h-[160px]"
                }`}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={220}
                  height={140}
                  className={`w-full h-auto object-contain ${
                    partner.name === "ESB" 
                      ? "max-h-28 md:max-h-32" 
                      : partner.name === "Communication Skills for Business" || partner.name === "PMI"
                      ? "max-h-24 md:max-h-28"
                      : "max-h-20 md:max-h-24"
                  }`}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[864px] mx-auto mt-8 md:mt-[48px] mb-8 md:mb-[48px]">
          <div className="h-[2px] bg-gray-300"></div>
        </div>

        <div className="w-full max-w-[688px] mx-auto">
          <div className="bg-white rounded-lg p-4 md:p-6">
            <h3 className="text-base sm:text-lg md:text-[19px] font-bold text-black underline text-center mb-6 md:mb-8" style={{ marginTop: '0px', marginLeft: '0px', marginRight: '0px', marginBottom: '32px' }}>
              Our other Partners
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {otherPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 md:p-4 flex items-center justify-center min-h-[120px] md:min-h-[140px]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={100}
                  className="w-full h-full max-h-20 md:max-h-24 object-contain"
                  unoptimized
                />
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

