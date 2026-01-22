'use client';

import React, { useState, useEffect } from 'react';

export default function FloatingButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const checkModalState = () => {
      // Check if body overflow is hidden (modal is open)
      setIsModalOpen(document.body.style.overflow === 'hidden');
    };

    // Check initially
    checkModalState();

    // Watch for changes to body style
    const observer = new MutationObserver(checkModalState);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['style']
    });

    // Also check periodically as a fallback
    const interval = setInterval(checkModalState, 100);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Hide buttons when modal is open
  if (isModalOpen) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 flex flex-col gap-3 sm:gap-4 z-50">
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-colors shadow-lg"
        style={{ backgroundColor: '#2b2929' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3a3838'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2b2929'}
        aria-label="Scroll to top"
      >
        <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19V5M5 12L12 5L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917019680860"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg"
        aria-label="Contact us on WhatsApp"
      >
        <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.042-.024-4.976 1.293-1.059-4.916-.024-.042A9.86 9.86 0 0112.001 2.001c5.421 0 9.848 4.409 9.848 9.83 0 5.421-4.427 9.83-9.848 9.83"/>
        </svg>
      </a>
    </div>
  );
}
