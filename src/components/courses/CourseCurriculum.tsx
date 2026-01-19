'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  webDevelopmentModules,
  fullStackWebDevelopmentModules,
  androidAppDevelopmentModules,
  cyberSecurityModules,
  digitalMarketingModules,
  networkSecurityModules,
  artificialIntelligenceModules,
  machineLearningModules,
  dataScienceModules,
  dataAnalyticsModules,
  businessAnalyticsModules,
  cloudComputingModules,
  pythonModules,
  javaModules,
  embeddedSystemsModules,
  vlsiModules,
  autocadModules,
  humanResourcesManagementModules,
  financeModules,
  stockMarketModules,
  uiUxDesignModules,
  psychologyModules,
  hybridElectricalVehiclesModules,
  internetOfThingsModules,
  nanotechnologyModules,
  dataStructureAlgorithmModules,
  batteryElectricVehiclesModules,
  bioInformaticsModules,
  droneMechanicsModules,
  amazonWebServicesModules,
  constructionPlanningModules,
  gameDevelopmentModules,
  icEngineModules,
  roboticsModules,
  medicalCodingModules,
  geneticEngineeringModules,
  operationManagementModules,
  courseConfigs,
  type Module,
  type CourseType
} from '@/data/curriculum';

interface CourseCurriculumProps {
  courseType: CourseType;
  courseName?: string;
}

function CourseCurriculum({ courseType, courseName }: CourseCurriculumProps) {
  const [selectedModule, setSelectedModule] = useState<number>(1);
  const [showLeftScrollIndicator, setShowLeftScrollIndicator] = useState(true);
  const [showRightScrollIndicator, setShowRightScrollIndicator] = useState(true);
  const leftScrollRef = useRef<HTMLDivElement>(null);
  const rightScrollRef = useRef<HTMLDivElement>(null);

  // Get modules based on course type
  const getModules = (): Module[] => {
    switch (courseType) {
      case 'web-development':
        return webDevelopmentModules;
      case 'full-stack-web-development':
        return fullStackWebDevelopmentModules;
      case 'android-app-development':
        return androidAppDevelopmentModules;
      case 'cyber-security':
        return cyberSecurityModules;
      case 'digital-marketing':
        return digitalMarketingModules;
      case 'network-security':
        return networkSecurityModules;
      case 'artificial-intelligence':
        return artificialIntelligenceModules;
      case 'machine-learning':
        return machineLearningModules;
      case 'data-science':
        return dataScienceModules;
      case 'data-analytics':
        return dataAnalyticsModules;
      case 'business-analytics':
        return businessAnalyticsModules;
      case 'cloud-computing':
        return cloudComputingModules;
      case 'python':
        return pythonModules;
      case 'java':
        return javaModules;
      case 'embedded-systems':
        return embeddedSystemsModules;
      case 'vlsi':
        return vlsiModules;
      case 'autocad':
        return autocadModules;
      case 'human-resources-management':
        return humanResourcesManagementModules;
      case 'finance':
        return financeModules;
      case 'stock-market':
        return stockMarketModules;
      case 'ui-ux-design':
        return uiUxDesignModules;
      case 'psychology':
        return psychologyModules;
      case 'hybrid-electrical-vehicles':
        return hybridElectricalVehiclesModules;
      case 'internet-of-things':
        return internetOfThingsModules;
      case 'nano-technology':
        return nanotechnologyModules;
      case 'data-structure-algorithm':
        return dataStructureAlgorithmModules;
      case 'battery-electric-vehicles':
        return batteryElectricVehiclesModules;
      case 'bio-informatics':
        return bioInformaticsModules;
      case 'drone-mechanics':
        return droneMechanicsModules;
      case 'amazon-web-services':
        return amazonWebServicesModules;
      case 'construction-planning':
        return constructionPlanningModules;
      case 'game-development':
        return gameDevelopmentModules;
      case 'ic-engine':
        return icEngineModules;
      case 'robotics':
        return roboticsModules;
      case 'medical-coding':
        return medicalCodingModules;
      case 'genetic-engineering':
        return geneticEngineeringModules;
      case 'operation-management':
        return operationManagementModules;
      default:
        return webDevelopmentModules;
    }
  };

  const modules = getModules();
  const config = courseConfigs[courseType] || courseConfigs['web-development'];
  const currentModule = modules.find(m => m.id === selectedModule) || modules[0];

  // Check if scroll indicators should be shown
  const checkScrollPosition = (element: HTMLDivElement | null, setShowIndicator: (show: boolean) => void) => {
    if (!element) return;
    const { scrollTop, scrollHeight, clientHeight } = element;
    const isAtBottom = scrollHeight - scrollTop <= clientHeight + 5; // 5px threshold
    setShowIndicator(!isAtBottom);
  };

  // Check scroll position on mount and when content changes
  useEffect(() => {
    // Use setTimeout to ensure DOM is fully rendered
    setTimeout(() => {
      checkScrollPosition(leftScrollRef.current, setShowLeftScrollIndicator);
      checkScrollPosition(rightScrollRef.current, setShowRightScrollIndicator);
    }, 100);
  }, [selectedModule]);

  // Handle scroll events
  const handleLeftScroll = () => {
    checkScrollPosition(leftScrollRef.current, setShowLeftScrollIndicator);
  };

  const handleRightScroll = () => {
    checkScrollPosition(rightScrollRef.current, setShowRightScrollIndicator);
  };

  // Get title for display
  const getTitle = () => {
    if (courseName) {
      return (
        <span className="text-brand-navy inline-block">
          <span className="block whitespace-nowrap">Explore The Curriculum That Powers Our</span>
          <span className="block whitespace-nowrap">{courseName}.</span>
        </span>
      );
    }
    
    return (
      <span className="text-brand-navy inline-block">
        <span className="block whitespace-nowrap">Explore The Curriculum That Powers Our</span>
        <span className="block whitespace-nowrap">{config.curriculumTitle.replace('The Curriculum That Powers Our ', '').replace('.', '')}.</span>
      </span>
    );
  };

  return (
    <section className="bg-brand-page py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
            {getTitle()}
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto px-4">
            Explore Our Comprehensive Curriculum
          </p>
        </div>

        {/* Single Container Wrapping Both Columns */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 h-[450px] md:h-[500px] lg:h-[550px]">
            {/* Left Column - Module List (Scrollable) */}
            <div className="w-full lg:w-[45%] flex flex-col relative">
              <div 
                ref={leftScrollRef}
                onScroll={handleLeftScroll}
                className="overflow-y-auto pr-3 space-y-3 flex-1 scrollbar-visible"
              >
                {modules.map((module) => (
                  <button
                    key={module.id}
                    onClick={() => setSelectedModule(module.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all border-2 ${
                      selectedModule === module.id
                        ? 'bg-white text-gray-900 shadow-md border-brand-orange'
                        : 'bg-gray-50 text-gray-900 hover:bg-gray-100 shadow-sm border border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold">{module.id}.</span>
                      <span className="font-semibold text-sm sm:text-base">{module.title}</span>
                    </div>
                  </button>
                ))}
              </div>
              {/* Scroll Indicator - Down Arrow */}
              {showLeftScrollIndicator && (
                <div className="absolute bottom-0 left-0 right-3 flex justify-center pb-2 pointer-events-none">
                  <div className="bg-brand-orange rounded-full p-1.5 shadow-sm">
                    <svg 
                      className="w-5 h-5 text-white animate-bounce" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Module Details (Scrollable) */}
            <div className="w-full lg:w-[55%] flex flex-col">
              {/* Header with Download Button */}
              <div className="flex items-start justify-between mb-6 shrink-0">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Topics and Sub-Topics
                </h2>
                <button className="bg-brand-orange hover:bg-brand-cyan text-white px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold transition-colors shadow-sm">
                  Download Brochure
                </button>
              </div>

              {/* Key Topics (Scrollable) */}
              <div className="relative flex-1 min-h-0">
                <div 
                  ref={rightScrollRef}
                  onScroll={handleRightScroll}
                  className="overflow-y-auto pr-3 h-full scrollbar-visible"
                >
                  <ul className="space-y-2">
                    {currentModule.topics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                        <span className="text-brand-orange mt-1.5">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Scroll Indicator - Down Arrow */}
                {showRightScrollIndicator && (
                  <div className="absolute bottom-0 left-0 right-3 flex justify-center pb-2 pointer-events-none">
                    <div className="bg-brand-orange rounded-full p-1.5 shadow-sm">
                      <svg 
                        className="w-5 h-5 text-white animate-bounce" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseCurriculum;
