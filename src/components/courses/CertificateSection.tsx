'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const certificates = [
  {
    id: 1,
    title: "CERTIFICATE OF TRAINING",
    recipient: "Kamrujama Ansari",
    description: "This is to certify that the above-named candidate has successfully completed the training in Machine Learning from 05-Jan-2025 to 05-Feb-2025. During the training period, he/she demonstrated diligence, consistency, determination, active participation, and innovation.",
    type: "training",
    certificateId: "MIND-TRN-25A001",
    issuedDate: "06-Feb-2025",
    courseName: "Machine Learning"
  },
  {
    id: 2,
    title: "CERTIFICATE OF INTERNSHIP",
    recipient: "Kamrujama Ansari",
    description: "This is to certify that the above-named candidate has successfully completed the internship in Machine Learning from 05-Jan-2025 to 04-Feb-2025. During the internship period, he/she demonstrated diligence, consistency, determination, active participation, and innovation.",
    type: "internship",
    certificateId: "MIND-INT-25A001",
    issuedDate: "06-Feb-2025",
    courseName: "Machine Learning"
  },
  {
    id: 3,
    title: "CERTIFICATE OF EXCELLENCE",
    recipient: "Akash Sharma",
    description: "in recognition of his/her outstanding performance, dedication, and commitment to excellence. Their achievements reflect professionalism and exemplary skill.",
    type: "excellence",
    issuedDate: "06-Feb-2025"
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

  return (
    <>
      <section className="bg-brand-page py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px]">
        <div className="max-w-[1600px] mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-3 md:mb-4">
              Proof of Your Skills — Not Just Another Certificate
            </h1>
            <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto px-4">
              Explore the professional certificates you'll earn upon successful completion of our programs.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 justify-items-center">
            {certificates.map((certificate) => {
              // Determine background and colors based on certificate type
              const bgColor = certificate.type === "excellence" 
                ? "bg-gradient-to-br from-gray-800 via-gray-900 to-black" 
                : "bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-50";
              
              const textColor = certificate.type === "excellence" 
                ? "text-yellow-400" 
                : "text-gray-800";
              
              const bannerColor = certificate.type === "excellence"
                ? "bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"
                : "bg-gradient-to-r from-transparent via-yellow-200 to-transparent";

              return (
                <div
                  key={certificate.id}
                  className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                  onClick={() => openZoom(certificate.id)}
                  style={{ width: '360px', height: '300px' }}
                >
                  {/* Certificate Card */}
                  <div className={`relative w-full h-full ${bgColor} p-3 flex flex-col`}>
                    {/* Sample Certificate Watermark */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
                        <span className={`${certificate.type === "excellence" ? "text-white/10" : "text-gray-300"} text-xl font-bold tracking-widest whitespace-nowrap`}>
                          SAMPLE CERTIFICATE
                        </span>
                      </div>
                    </div>

                    {/* Decorative Corner Elements - Top Left */}
                    <div className="absolute top-0 left-0 w-16 h-16">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M0,0 L100,0 L0,100 Z" fill={certificate.type === "excellence" ? "#1e3a8a" : "#1e3a8a"} opacity="0.4"/>
                        <path d="M0,0 L80,0 L0,80 Z" fill={certificate.type === "excellence" ? "#fbbf24" : "#fbbf24"} opacity="0.3"/>
                      </svg>
                    </div>

                    {/* Decorative Corner Elements - Bottom Right */}
                    <div className="absolute bottom-0 right-0 w-16 h-16">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M100,100 L0,100 L100,0 Z" fill={certificate.type === "excellence" ? "#1e3a8a" : "#1e3a8a"} opacity="0.4"/>
                        <path d="M100,100 L20,100 L100,20 Z" fill={certificate.type === "excellence" ? "#fbbf24" : "#fbbf24"} opacity="0.3"/>
                      </svg>
                    </div>

                    {/* Excellence Seal - Top Left (only for excellence) */}
                    {certificate.type === "excellence" && (
                      <div className="absolute top-1 left-1 z-10">
                        <div className="relative">
                          <svg width="30" height="30" viewBox="0 0 24 24" fill="#FCD34D">
                            <path d="M12 2L4 5V11C4 16.55 7.16 21.74 12 23C16.84 21.74 20 16.55 20 11V5L12 2Z"/>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-yellow-900 text-xs font-bold">★</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Logo Area - Top Center */}
                    <div className="relative z-10 flex flex-col items-center mt-1 mb-1">
                      <div className="w-8 h-8 mb-0.5 relative">
                        {/* Brain Icon with Laurel Wreath */}
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          {/* Laurel Wreath */}
                          <circle cx="50" cy="50" r="45" fill="none" stroke={certificate.type === "excellence" ? "#FCD34D" : "#fbbf24"} strokeWidth="2"/>
                          {/* Brain Icon */}
                          <path d="M30,40 Q35,30 40,35 Q45,30 50,35 Q55,30 60,35 Q65,30 70,40 Q70,50 65,55 Q60,60 55,58 Q50,60 45,58 Q40,60 35,55 Q30,50 30,40 Z" fill={certificate.type === "excellence" ? "#3b82f6" : "#3b82f6"} opacity="0.8"/>
                          <path d="M40,45 Q45,50 50,48 Q55,50 60,45" stroke={certificate.type === "excellence" ? "#1e3a8a" : "#1e3a8a"} strokeWidth="1.5" fill="none"/>
                        </svg>
                      </div>
                      <div className="text-center">
                        <h3 className={`${certificate.type === "excellence" ? "text-yellow-400" : "text-gray-800"} font-bold text-[9px]`}>INTERNSFORGE</h3>
                        <p className={`${certificate.type === "excellence" ? "text-yellow-300" : "text-gray-600"} text-[7px] italic`}>ELEVATE YOUR CAREER</p>
                      </div>
                    </div>

                    {/* Certificate Title */}
                    <div className="relative z-10 text-center mb-1">
                      <h4 className={`${certificate.type === "excellence" ? "text-yellow-400" : "text-gray-800"} font-bold text-[10px] mb-1`} style={{ fontFamily: 'serif' }}>
                        {certificate.title}
                      </h4>
                      <div className={`${bannerColor} py-1 mb-1`}>
                        <p className={`${certificate.type === "excellence" ? "text-yellow-200" : "text-gray-700"} text-[8px]`}>
                          This certificate is proudly presented to
                        </p>
                      </div>
                    </div>

                    {/* Recipient Name */}
                    <div className="relative z-10 text-center mb-1">
                      <p className={`${certificate.type === "excellence" ? "text-yellow-400" : "text-gray-800"} font-bold text-xs`}>
                        {certificate.recipient}
                      </p>
                    </div>

                    {/* Description (Truncated) */}
                    <div className="relative z-10 text-center mb-1 flex-1 min-h-0">
                      <p className={`${certificate.type === "excellence" ? "text-yellow-200" : "text-gray-700"} text-[7px] leading-tight px-2 line-clamp-2`}>
                        {certificate.description}
                      </p>
                    </div>

                    {/* Certificate ID and Issued Date */}
                    {(certificate.certificateId || certificate.issuedDate) && (
                      <div className="relative z-10 mb-1 text-left">
                        <div className={`space-y-0 text-[7px] ${certificate.type === "excellence" ? "text-yellow-200" : "text-gray-700"}`}>
                          {certificate.certificateId && (
                            <p className="truncate">Certificate Id: <span className="font-semibold">{certificate.certificateId}</span></p>
                          )}
                          {certificate.issuedDate && (
                            <p>Issued Date: <span className="font-semibold">{certificate.issuedDate}</span></p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Bottom Section - Logos and Signature */}
                    <div className="relative z-10 mt-auto pt-1 flex justify-between items-end text-[7px]">
                      {/* Left Side - Logos */}
                      <div className="flex items-center gap-1">
                        {certificate.type !== "excellence" && (
                          <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center border border-gray-300">
                            <span className="text-gray-800 font-bold text-[5px]">ISO</span>
                          </div>
                        )}
                        <span className={`${certificate.type === "excellence" ? "text-yellow-200" : "text-gray-700"} text-[7px]`}>#startupindia</span>
                      </div>

                      {/* Right Side - Signature */}
                      <div className="text-right">
                        <div className={`w-8 h-4 border ${certificate.type === "excellence" ? "border-yellow-400/50" : "border-gray-400"} mb-0.5`}></div>
                        <p className={`${certificate.type === "excellence" ? "text-yellow-200" : "text-gray-800"} font-semibold text-[7px]`}>MANU PRAKASH</p>
                        <p className={`${certificate.type === "excellence" ? "text-yellow-300" : "text-gray-600"} text-[6px]`}>Co-founder & COO</p>
                      </div>
                    </div>

                    {/* Zoom Icon - Center */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className={`w-10 h-10 ${certificate.type === "excellence" ? "bg-white/20" : "bg-white/90"} rounded-full flex items-center justify-center shadow-lg group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300`}>
                        <svg 
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          className={`${certificate.type === "excellence" ? "text-yellow-400" : "text-gray-600"} group-hover:text-white transition-colors`}
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                          <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Zoom Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeZoom}
        >
          <div
            className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeZoom}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-brand-orange hover:bg-brand-cyan rounded-full flex items-center justify-center transition-colors shadow-lg"
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Full Certificate */}
            <div className={`relative ${selectedCert.type === "excellence" ? "bg-gradient-to-br from-gray-800 via-gray-900 to-black" : "bg-gray-100"} p-8 md:p-12 lg:p-16 min-h-[800px] flex flex-col`}>
              {/* Sample Certificate Watermark */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
                  <span className="text-gray-300 text-6xl md:text-8xl font-bold tracking-widest whitespace-nowrap">
                    SAMPLE CERTIFICATE
                  </span>
                </div>
              </div>

              {/* Decorative Corner Elements - Top Left */}
              <div className="absolute top-0 left-0 w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M0,0 L100,0 L0,100 Z" fill="#1e3a8a" opacity="0.4"/>
                  <path d="M0,0 L80,0 L0,80 Z" fill="#fbbf24" opacity="0.3"/>
                </svg>
              </div>

              {/* Decorative Corner Elements - Bottom Right */}
              <div className="absolute bottom-0 right-0 w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M100,100 L0,100 L100,0 Z" fill="#1e3a8a" opacity="0.4"/>
                  <path d="M100,100 L20,100 L100,20 Z" fill="#fbbf24" opacity="0.3"/>
                </svg>
              </div>

              {/* Logo Area - Top Center */}
              <div className="relative z-10 flex flex-col items-center mb-8">
                <div className="w-24 h-24 mb-3 relative">
                  {/* Brain Icon with Laurel Wreath */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Laurel Wreath */}
                    <circle cx="50" cy="50" r="45" fill="none" stroke={selectedCert.type === "excellence" ? "#FCD34D" : "#fbbf24"} strokeWidth="2.5"/>
                    {/* Brain Icon */}
                    <path d="M30,40 Q35,30 40,35 Q45,30 50,35 Q55,30 60,35 Q65,30 70,40 Q70,50 65,55 Q60,60 55,58 Q50,60 45,58 Q40,60 35,55 Q30,50 30,40 Z" fill="#3b82f6" opacity="0.8"/>
                    <path d="M40,45 Q45,50 50,48 Q55,50 60,45" stroke="#1e3a8a" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className={`${selectedCert.type === "excellence" ? "text-yellow-400" : "text-gray-800"} font-bold text-xl md:text-2xl`}>INTERNSFORGE</h3>
                  <p className={`${selectedCert.type === "excellence" ? "text-yellow-300" : "text-gray-600"} text-sm md:text-base italic`}>ELEVATE YOUR CAREER</p>
                </div>
              </div>

              {/* Certificate Title */}
              <div className="relative z-10 text-center mb-6">
                <h2 className={`${selectedCert.type === "excellence" ? "text-yellow-400" : "text-gray-800"} font-bold text-2xl md:text-3xl lg:text-4xl mb-4`} style={{ fontFamily: 'serif' }}>
                  {selectedCert.title}
                </h2>
                <div className={`${selectedCert.type === "excellence" ? "bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" : "bg-gradient-to-r from-transparent via-yellow-200 to-transparent"} py-3 mb-4`}>
                  <p className={`${selectedCert.type === "excellence" ? "text-yellow-200" : "text-gray-700"} text-base md:text-lg`}>
                    This certificate is proudly presented to
                  </p>
                </div>
              </div>

              {/* Recipient Name */}
              <div className="relative z-10 text-center mb-6">
                <p className={`${selectedCert.type === "excellence" ? "text-yellow-400" : "text-gray-800"} font-bold text-3xl md:text-4xl lg:text-5xl mb-6`}>
                  {selectedCert.recipient}
                </p>
              </div>

              {/* Description */}
              <div className="relative z-10 text-center mb-8 max-w-3xl mx-auto">
                <p className={`${selectedCert.type === "excellence" ? "text-yellow-200" : "text-gray-700"} text-base md:text-lg leading-relaxed`}>
                  {selectedCert.type === "training" || selectedCert.type === "internship" ? (
                    <>
                      This is to certify that the above mentioned candidate has successfully completed {selectedCert.type === "training" ? "his/her training" : "his/her internship"} in <strong>{selectedCert.courseName}</strong> from <strong>05-Jan-2025</strong> to <strong>{selectedCert.type === "training" ? "05-Feb-2025" : "04-Feb-2025"}</strong>. Throughout this period, he/she demonstrated diligence, consistency, determination, active participation, and innovation.
                    </>
                  ) : (
                    selectedCert.description
                  )}
                </p>
              </div>

              {/* Bottom Section - Logos and Signature */}
              <div className="relative z-10 mt-auto pt-8 flex justify-between items-end">
                {/* Left Side - Logos */}
                <div className="flex flex-col gap-3">
                  {/* Certificate ID and Date */}
                  {(selectedCert.certificateId || selectedCert.issuedDate) && (
                    <div className={`space-y-1 text-sm ${selectedCert.type === "excellence" ? "text-yellow-200" : "text-gray-700"}`}>
                      {selectedCert.certificateId && (
                        <p>Certificate Id: <span className="font-semibold">{selectedCert.certificateId}</span></p>
                      )}
                      {selectedCert.issuedDate && (
                        <p>Issued Date: <span className="font-semibold">{selectedCert.issuedDate}</span></p>
                      )}
                    </div>
                  )}
                  {/* Logos Row */}
                  <div className="flex items-center gap-3">
                    {selectedCert.type !== "excellence" && (
                      <>
                        {/* Emblem of India */}
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-gray-300">
                          <svg viewBox="0 0 24 24" className="w-6 h-6">
                            <circle cx="12" cy="12" r="10" fill="#FF9933"/>
                            <circle cx="12" cy="12" r="8" fill="#FFFFFF"/>
                            <circle cx="12" cy="12" r="6" fill="#138808"/>
                            <circle cx="12" cy="12" r="1" fill="#000080"/>
                            <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="#000080" strokeWidth="1"/>
                          </svg>
                        </div>
                        {/* ISO Badge */}
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-gray-300">
                          <span className="text-gray-800 font-bold text-xs">ISO</span>
                        </div>
                        {/* Startup India */}
                        <div className={`${selectedCert.type === "excellence" ? "text-yellow-200" : "text-gray-700"} text-sm font-semibold`}>
                          #startupindia
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Right Side - Signature */}
                <div className="text-right">
                  <div className={`w-32 h-16 border-2 ${selectedCert.type === "excellence" ? "border-yellow-400/50" : "border-gray-400"} mb-2`}></div>
                  <p className={`${selectedCert.type === "excellence" ? "text-yellow-200" : "text-gray-800"} font-semibold text-base md:text-lg`}>
                    MANU PRAKASH
                  </p>
                  <p className={`${selectedCert.type === "excellence" ? "text-yellow-300" : "text-gray-600"} text-sm md:text-base`}>
                    Co-founder & COO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

