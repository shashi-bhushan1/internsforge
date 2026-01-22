'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const certificates = [
  {
    id: 1,
    title: "CERTIFICATE OF APPRECIATION",
    image: "/certificates/certificate-appreciation.webp",
    width: 1414,
    height: 2000, // Portrait
    aspectRatio: 1414 / 2000 // ~0.707
  },
  {
    id: 2,
    title: "CERTIFICATE OF COMPLETION",
    image: "/certificates/certificate-completion.webp",
    width: 2000,
    height: 1414, // Landscape
    aspectRatio: 2000 / 1414 // ~1.414
  },
  {
    id: 3,
    title: "CERTIFICATE OF INTERNSHIP",
    image: "/certificates/certificate-internship.webp",
    width: 2000,
    height: 1414, // Landscape
    aspectRatio: 2000 / 1414 // ~1.414
  },
  {
    id: 4,
    title: "CERTIFICATE OF PROJECT COMPLETION",
    image: "/certificates/certificate-project-completion.webp",
    width: 1536,
    height: 1024, // Landscape
    aspectRatio: 1536 / 1024 // 1.5
  }
];

export default function CertificateSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  const openZoom = (id: number) => {
    setSelectedCertificate(id);
    document.body.style.overflow = 'hidden';
  };

  const closeZoom = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = 'unset';
  };

  const selectedCert = selectedCertificate 
    ? certificates.find(c => c.id === selectedCertificate) 
    : null;

  // Find certificates by ID for easier access
  const appreciationCert = certificates.find(c => c.id === 1)!;
  const completionCert = certificates.find(c => c.id === 2)!;
  const internshipCert = certificates.find(c => c.id === 3)!;
  const projectCompletionCert = certificates.find(c => c.id === 4)!;

  // Calculate dimensions for balanced layout
  // Gap sizes: gap-6 (24px mobile), gap-8 (32px md), gap-10 (40px lg)
  // We'll use the large screen gap (40px) for calculations
  const gapSize = 40; // lg:gap-10 = 2.5rem = 40px
  
  // Base target height for left certificates (without gap)
  const baseTargetHeight = 500;
  
  // Left column: calculate width so 2 landscape certs + gap fit in total height
  // Each landscape cert height = leftWidth / 1.414
  // Total left height = 2 * (leftWidth / 1.414) + gapSize
  // We want this to equal the right column height
  // Solving: leftWidth = (baseTargetHeight * 1.414) / 2
  const leftWidth = (baseTargetHeight * 1.414) / 2; // ~353.5px
  const leftCertHeight = leftWidth / completionCert.aspectRatio; // ~250px each
  
  // Total left column height (including gap)
  const totalLeftHeight = (leftCertHeight * 2) + gapSize; // ~540px
  
  // Right column (Appreciation): height = total left height (including gap)
  const rightHeight = totalLeftHeight;
  const rightWidth = rightHeight * appreciationCert.aspectRatio; // ~381.5px

  const CertificateCard = ({ certificate, width, height }: { 
    certificate: typeof certificates[0], 
    width: number, 
    height: number 
  }) => (
    <div
      className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border-4 border-gray-200 hover:border-gray-300 p-2"
      onClick={() => openZoom(certificate.id)}
      style={{ 
        width: `${width}px`, 
        height: `${height}px`
      }}
    >
      <div className="relative w-full h-full bg-gray-50 rounded border border-gray-100">
        <Image
          src={certificate.image}
          alt={certificate.title}
          fill
          className="object-contain"
          sizes={`${width}px`}
        />
        
        {/* Overlay with zoom icon */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-gray-600 group-hover:text-white transition-colors"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="bg-brand-page py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px]">
        <div className="max-w-[1600px] mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-3 md:mb-4">
              Proof of Your Skills: Earned, Not Just Awarded
            </h1>
            <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto px-4">
              Explore the professional certificates you'll earn upon successful completion of our programs.
            </p>
          </div>

          {/* 2-Column Layout */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 justify-center items-start">
            {/* Left Column - 2 Rows */}
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 w-full lg:w-auto">
              {/* Top Row - Completion */}
              <div className="flex justify-center lg:justify-start">
                <CertificateCard 
                  certificate={completionCert} 
                  width={leftWidth} 
                  height={leftCertHeight} 
                />
              </div>
              
              {/* Bottom Row - Internship */}
              <div className="flex justify-center lg:justify-start">
                <CertificateCard 
                  certificate={internshipCert} 
                  width={leftWidth} 
                  height={leftCertHeight} 
                />
                      </div>
                    </div>

            {/* Right Column - Appreciation */}
            <div className="flex justify-center lg:justify-start w-full lg:w-auto">
              <CertificateCard 
                certificate={appreciationCert} 
                width={rightWidth} 
                height={rightHeight} 
              />
                      </div>
                    </div>

          {/* Additional Certificate Section */}
          <div className="mt-12 md:mt-16 lg:mt-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center underline">
              Additional Certificate
            </h2>
            <div className="flex justify-center">
              <CertificateCard 
                certificate={projectCompletionCert} 
                width={leftWidth * 1.5} 
                height={(leftWidth * 1.5) / projectCompletionCert.aspectRatio} 
              />
            </div>
            <p className="text-center text-sm sm:text-base text-gray-600 mt-4 md:mt-6 max-w-2xl mx-auto px-4">
              <span className="mr-2">★</span>This additional certificate is issued only in Mentor-Led Program.
            </p>
          </div>
        </div>
      </section>

      {/* Zoom Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
        >
          <div className="relative flex items-center justify-center" style={{ 
            maxHeight: selectedCert.id === 1 
              ? 'calc(100vh - 2rem - 100px)' // Reduced by 100px (50px top + 50px bottom) for Certificate of Appreciation
              : 'calc(100vh - 2rem)' 
          }}>
            {/* Full Certificate Image */}
            <div 
              className="relative bg-white rounded-lg shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              style={{ 
                maxHeight: selectedCert.id === 1 
                  ? 'calc(100vh - 2rem - 100px)' // Reduced by 100px (50px top + 50px bottom) for Certificate of Appreciation
                  : 'calc(100vh - 2rem)', 
                maxWidth: 'min(calc(100vw - 2rem), 896px)',
                width: 'fit-content',
                height: 'fit-content'
              }}
            >
              {/* Close Button - Outside Certificate, 12px from top-right corner */}
              <button
                onClick={closeZoom}
                className="absolute z-10 w-12 h-12 bg-brand-orange hover:bg-brand-cyan rounded-full flex items-center justify-center transition-colors shadow-lg"
                style={{ 
                  top: 'calc(-48px - 12px)', 
                  right: 'calc(-48px - 12px)' 
                }}
                aria-label="Close"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                width={selectedCert.width}
                height={selectedCert.height}
                style={{ 
                  height: (selectedCert.id === 2 || selectedCert.id === 3)
                    ? '512px' // Fixed height for Completion and Internship certificates
                    : selectedCert.id === 1 
                      ? '650px' // Fixed height for Certificate of Appreciation
                      : undefined, // Let it scale for other certificates
                  maxHeight: (selectedCert.id === 2 || selectedCert.id === 3)
                    ? '512px' // Fixed height for Completion and Internship certificates
                    : selectedCert.id === 1 
                      ? '650px' // Fixed height for Certificate of Appreciation
                      : 'calc(100vh - 2rem)', 
                  maxWidth: (selectedCert.id === 2 || selectedCert.id === 3 || selectedCert.id === 1)
                    ? undefined // Let width adjust based on aspect ratio
                    : 'min(calc(100vw - 2rem), 896px)',
                  width: (selectedCert.id === 2 || selectedCert.id === 3 || selectedCert.id === 1)
                    ? 'auto' // Width adjusts automatically based on fixed height and aspect ratio
                    : 'auto',
                  objectFit: 'contain'
                }}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

