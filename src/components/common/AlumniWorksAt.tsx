'use client';

import React from 'react';
import Image from 'next/image';

// Map company names to their image files
const companyImageMap: { [key: string]: string } = {
  'Amazon': '/alumni/Amazon.svg',
  'Meta': '/alumni/Meta.svg',
  'Microsoft': '/alumni/Microsoft.svg',
  'Unity': '/alumni/Unity.svg',
  'HCLTech': '/alumni/Hcl.svg',
  'Oracle': '/alumni/Oracle.svg',
  'Walmart': '/alumni/Walmart.svg',
  'PayPal': '/alumni/PayPal.svg',
  'Salesforce': '/alumni/Salesforce.svg',
  'TCS': '/alumni/TCS.svg',
  'Infosys': '/alumni/Infosys.svg',
  'Wipro': '/alumni/Wipro.webp',
  'Tech Mahindra': '/alumni/Tech_Mahindra.svg',
  'Zoho': '/alumni/Zoho.svg',
  'Caterpillar': '/alumni/Caterpillar.svg',
  'Citi Bank': '/alumni/Citi_bank.svg',
  'Ford': '/alumni/Ford.svg',
  'Innodata': '/alumni/Innodata.png',
  'LKQ': '/alumni/LKQ.svg',
  'Wakefitt': '/alumni/Wakefitt.png',
};

const companies = [
  // Row 1
  {
    name: "Unity",
    image: companyImageMap['Unity']
  },
  {
    name: "HCLTech",
    image: companyImageMap['HCLTech']
  },
  {
    name: "Microsoft",
    image: companyImageMap['Microsoft']
  },
  {
    name: "Meta",
    image: companyImageMap['Meta']
  },
  {
    name: "Amazon",
    image: companyImageMap['Amazon']
  },
  {
    name: "Oracle",
    image: companyImageMap['Oracle']
  },
  {
    name: "Walmart",
    image: companyImageMap['Walmart']
  },
  // Row 2
  {
    name: "PayPal",
    image: companyImageMap['PayPal']
  },
  {
    name: "Salesforce",
    image: companyImageMap['Salesforce']
  },
  {
    name: "TCS",
    image: companyImageMap['TCS']
  },
  {
    name: "Infosys",
    image: companyImageMap['Infosys']
  },
  {
    name: "Wipro",
    image: companyImageMap['Wipro']
  },
  {
    name: "Tech Mahindra",
    image: companyImageMap['Tech Mahindra']
  },
  {
    name: "Zoho",
    image: companyImageMap['Zoho']
  },
  // Row 3
  {
    name: "Caterpillar",
    image: companyImageMap['Caterpillar']
  },
  {
    name: "Citi Bank",
    image: companyImageMap['Citi Bank']
  },
  {
    name: "Ford",
    image: companyImageMap['Ford']
  },
  {
    name: "Innodata",
    image: companyImageMap['Innodata']
  },
  {
    name: "LKQ",
    image: companyImageMap['LKQ']
  },
  {
    name: "Wakefitt",
    image: companyImageMap['Wakefitt']
  },
  {
    name: "Microsoft",
    image: companyImageMap['Microsoft']
  },
  {
    name: "Meta",
    image: companyImageMap['Meta']
  }
];

export default function AlumniWorksAt() {
  const row1 = companies.slice(0, 7);
  const row2 = companies.slice(7, 14);
  const row3 = companies.slice(14, 22); // Ensure we get all 8 items

  // Duplicate arrays for seamless infinite scroll
  const row1Duplicated = [...row1, ...row1];
  const row2Duplicated = [...row2, ...row2];
  const row3Duplicated = [...row3, ...row3];

  return (
    <section className="bg-brand-page py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-3 md:mb-4">
            Our Alumni Works At
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto px-4">
            Explore the top companies and organizations where our alumni have built successful careers, showcasing their achievements and professional growth.
          </p>
        </div>

        {/* Companies Grid - Three Rows with Infinite Scroll */}
        <div className="space-y-4 md:space-y-6 overflow-hidden group">
          {/* Row 1 - Scroll Right to Left */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 md:gap-6 animate-scroll-right-to-left">
              {row1Duplicated.map((company, index) => (
                <div 
                  key={index} 
                  className="p-4 md:p-5 flex items-center justify-center w-[140px] md:w-[160px] flex-shrink-0 h-24 md:h-28 bg-brand-page rounded-lg transition-opacity duration-300 hover:opacity-80"
                >
                  {company.image && (
                    <Image
                      src={company.image}
                      alt={company.name}
                      width={120}
                      height={80}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scroll Left to Right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 md:gap-6 animate-scroll-left-to-right">
              {row2Duplicated.map((company, index) => (
                <div 
                  key={index} 
                  className="p-4 md:p-5 flex items-center justify-center w-[140px] md:w-[160px] flex-shrink-0 h-24 md:h-28 bg-brand-page rounded-lg transition-opacity duration-300 hover:opacity-80"
                >
                  {company.image && (
                    <Image
                      src={company.image}
                      alt={company.name}
                      width={120}
                      height={80}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Scroll Right to Left (Faster) */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 md:gap-6 animate-scroll-right-to-left-fast">
              {row3Duplicated.map((company, index) => (
                <div 
                  key={index} 
                  className="p-4 md:p-5 flex items-center justify-center w-[140px] md:w-[160px] flex-shrink-0 h-24 md:h-28 bg-brand-page rounded-lg transition-opacity duration-300 hover:opacity-80"
                >
                  {company.image && (
                    <Image
                      src={company.image}
                      alt={company.name}
                      width={120}
                      height={80}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

