'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Helper function to generate slug from course name
const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Helper function to get course page route for existing courses
const getCourseRoute = (courseName: string): string | null => {
  const name = courseName.toLowerCase();
  
  // Advanced courses - map to existing course pages
  if (name.includes('network security')) {
    return '/courses/network-security';
  }
  if (name.includes('cyber security')) {
    // Check if it's the advanced version
    if (name.includes('advanced') || name.includes('advance') || name.includes('6 months')) {
      return '/courses/cyber-security-advanced';
    }
    return '/courses/cyber-security';
  }
  if (name.includes('full stack web development')) {
    // Check if it's the MERN version
    if (name.includes('mern')) {
      return '/courses/full-stack-web-development-mern';
    }
    return '/courses/full-stack-web-development';
  }
  if (name.includes('full stack')) {
    return '/courses/full-stack-web-development';
  }
  if (name.includes('web development')) {
    return '/courses/web-development';
  }
  if (name.includes('digital marketing')) {
    return '/courses/digital-marketing';
  }
  if (name.includes('amazon web services') || name.includes('aws')) {
    return '/courses/amazon-web-services';
  }
  if (name.includes('programming in python') || (name.includes('python') && !name.includes('data'))) {
    return '/courses/python';
  }
  if (name.includes('programming in java') || (name.includes('java') && !name.includes('script'))) {
    return '/courses/java';
  }
  if (name.includes('internet of things') || name.includes('iot')) {
    return '/courses/internet-of-things';
  }
  if (name.includes('battery electric vehicles') || name.includes('bevs')) {
    return '/courses/battery-electric-vehicles';
  }
  if (name.includes('hybrid electrical vehicles') || name.includes('hev')) {
    return '/courses/hybrid-electrical-vehicles';
  }
  if (name.includes('drone mechanics') || name.includes('drone')) {
    return '/courses/drone-mechanics';
  }
  
  // For other courses, generate slug
  return null;
};

// Helper function to get course duration
const getCourseDuration = (courseName: string): string => {
  const name = courseName.toLowerCase();
  
  // Check if duration is already in the course name (for Advanced courses)
  const durationMatch = courseName.match(/\(([^)]+)\)/);
  if (durationMatch) {
    const extractedDuration = durationMatch[1];
    
    // Skip if it's not a duration (e.g., "AWS" in "Amazon Web Services (AWS)", "BEVs", "HEV")
    const isNotDuration = ['aws', 'iot', 'bevs', 'hev'].includes(extractedDuration.toLowerCase());
    if (isNotDuration) {
      // Continue to check other conditions below
    } else {
      // If it's Network Security, add "– Advance Course"
      if (name.includes('network security') && extractedDuration.toLowerCase().includes('6 months')) {
        return '6 Months – Advance Course';
      }
      // If it's Full Stack Web Development (MERN), return 6 Months
      if (name.includes('full stack web development') && name.includes('mern')) {
        return '6 Months';
      }
      // For Full Stack Web Development (4 Months), return as is
      if (name.includes('full stack web development') && extractedDuration.toLowerCase().includes('4 months')) {
        return '4 Months';
      }
      // For other courses with duration in name, return it
      return extractedDuration;
    }
  }
  
  // 3 Months courses
  const threeMonthsCourses = [
    'artificial intelligence',
    'cyber security',
    'data analytics',
    'data science',
    'machine learning',
    'medical coding',
    'web development'
  ];
  
  if (threeMonthsCourses.some(course => name.includes(course))) {
    return '3 Months';
  }
  
  // 4 Months courses
  if (name.includes('full stack web development') && !name.includes('mern') && !name.includes('6 months')) {
    return '4 Months';
  }
  
  // Explicitly set 2 Months courses (these are already default, but listed for clarity)
  const twoMonthsCourses = [
    'amazon web services',
    'aws',
    'iot',
    'internet of things',
    'bevs',
    'battery electric vehicles',
    'hev',
    'hybrid electrical vehicles'
  ];
  
  if (twoMonthsCourses.some(course => name.includes(course))) {
    return '2 Months';
  }
  
  // 3 Months courses
  if (name.includes('drone mechanics') || name.includes('drone')) {
    return '3 Months';
  }
  
  // Default: 2 Months for all other courses
  return '2 Months';
};

// Helper function to generate course description
const generateCourseDescription = (courseName: string): string => {
  const name = courseName.toLowerCase();
  
  // Network Security
  if (name.includes('network security')) {
    return 'Master network security fundamentals and advanced techniques. Learn to design, implement, and manage secure network infrastructures. Protect networks from threats and vulnerabilities.';
  }
  // Cyber Security related
  if (name.includes('cyber') || name.includes('security')) {
    return 'Master key cybersecurity concepts to protect your digital assets. Gain practical skills to identify threats and implement robust security measures.';
  }
  
  // Web Development related
  if (name.includes('web development') || name.includes('full stack')) {
    return 'Build modern, responsive web applications from frontend to backend. Learn industry-standard technologies and frameworks to create scalable solutions.';
  }
  
  // AI/ML related
  if (name.includes('artificial intelligence') || name.includes('machine learning') || name.includes('ai')) {
    return 'Explore the cutting-edge world of AI and machine learning. Develop intelligent systems and algorithms that solve real-world problems.';
  }
  
  // Data related
  if (name.includes('data science') || name.includes('data analytics') || name.includes('business analytics')) {
    return 'Transform data into actionable insights. Master data analysis, visualization, and statistical modeling techniques for business intelligence.';
  }
  
  // Cloud/AWS related
  if (name.includes('cloud') || name.includes('aws') || name.includes('amazon web services')) {
    return 'Master cloud computing platforms and services. Learn to deploy, manage, and scale applications in the cloud with industry-leading tools.';
  }
  
  // Programming languages
  if (name.includes('python')) {
    return 'Learn Python programming from fundamentals to advanced concepts. Build applications, automate tasks, and dive into data science and AI.';
  }
  if (name.includes('java')) {
    return 'Master Java programming and object-oriented design. Build robust applications and understand enterprise-level development practices.';
  }
  
  // Mobile Development
  if (name.includes('android')) {
    return 'Create powerful Android applications using modern development tools. Learn UI/UX design, API integration, and app deployment.';
  }
  
  // Game Development
  if (name.includes('game')) {
    return 'Design and develop engaging games from concept to completion. Learn game engines, graphics programming, and game design principles.';
  }
  
  // IoT/Embedded
  if (name.includes('iot') || name.includes('internet of things') || name.includes('embedded')) {
    return 'Build connected devices and smart systems. Learn to integrate hardware and software for IoT applications and embedded systems.';
  }
  
  // VLSI
  if (name.includes('vlsi')) {
    return 'Master Very Large Scale Integration design and verification. Learn digital circuit design, FPGA programming, and semiconductor technologies.';
  }
  
  // Robotics
  if (name.includes('robotics')) {
    return 'Design and program intelligent robots. Learn robotics fundamentals, control systems, and automation technologies.';
  }
  
  // Mechanical/Automotive
  if (name.includes('engine') || name.includes('electric vehicle') || name.includes('hev') || name.includes('bev')) {
    return 'Understand automotive engineering principles and modern vehicle technologies. Learn about engine systems, electric vehicles, and sustainable transportation.';
  }
  if (name.includes('drone mechanics') || name.includes('drone')) {
    return 'Master drone mechanics and unmanned aerial vehicle technologies. Learn about drone design, flight dynamics, propulsion systems, and maintenance.';
  }
  
  // Civil/Architecture
  if (name.includes('autocad') || name.includes('construction') || name.includes('civil')) {
    return 'Master CAD software and construction planning. Learn architectural design, project management, and building information modeling.';
  }
  
  // Management
  if (name.includes('management') || name.includes('hr') || name.includes('human resources') || name.includes('operation')) {
    return 'Develop leadership and management skills. Learn strategic planning, team management, and organizational effectiveness.';
  }
  
  // Digital Marketing
  if (name.includes('digital marketing') || name.includes('marketing')) {
    return 'Master digital marketing strategies and tools. Learn SEO, social media marketing, content creation, and analytics to grow businesses.';
  }
  
  // Finance
  if (name.includes('finance') || name.includes('stock market') || name.includes('investment')) {
    return 'Understand financial markets and investment strategies. Learn financial analysis, portfolio management, and risk assessment.';
  }
  
  // Design
  if (name.includes('ui/ux') || name.includes('design')) {
    return 'Create beautiful and intuitive user interfaces. Learn design principles, prototyping, and user experience optimization.';
  }
  
  // Medical
  if (name.includes('medical') || name.includes('coding') || name.includes('bio') || name.includes('genetic')) {
    return 'Explore medical technologies and healthcare informatics. Learn medical coding, bioinformatics, and genetic engineering applications.';
  }
  
  // Personality Development
  if (name.includes('psychology') || name.includes('personality')) {
    return 'Develop personal and professional skills. Learn psychology principles, communication techniques, and self-improvement strategies.';
  }
  
  // Data Structures
  if (name.includes('data structure') || name.includes('algorithm')) {
    return 'Master fundamental data structures and algorithms. Learn problem-solving techniques and optimize code performance.';
  }
  
  // Nano Technology
  if (name.includes('nano')) {
    return 'Explore the fascinating world of nanotechnology. Learn about nanomaterials, nanofabrication, and applications in various industries.';
  }
  
  // Default description
  return `Master ${courseName} and advance your career. Gain practical skills, industry insights, and hands-on experience in this comprehensive course.`;
};

// Helper function to get course-specific image
const getCourseImage = (courseName: string): string => {
  const name = courseName.toLowerCase();
  
  // Advanced courses
  if (name.includes('cyber security') || name.includes('network security')) {
    return 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80'; // Circuit board/cyber security
  }
  if (name.includes('full stack web development') || name.includes('web development')) {
    return 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'; // Laptop with code (KEEP THIS)
  }
  
  // Computer Science / IT
  if (name.includes('artificial intelligence') || name.includes('machine learning')) {
    return 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80'; // AI/Robotics
  }
  if (name.includes('data science') || name.includes('data analytics') || name.includes('business analytics')) {
    return 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'; // Data visualization
  }
  if (name.includes('cloud computing') || name.includes('aws') || name.includes('amazon web services')) {
    return 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'; // Cloud technology
  }
  if (name.includes('python')) {
    return 'https://images.unsplash.com/photo-1526379095098-d400fd0bf040?auto=format&fit=crop&w=1200&q=80'; // Python code
  }
  if (name.includes('java')) {
    return 'https://images.unsplash.com/photo-1526379095098-d400fd0bf040?auto=format&fit=crop&w=1200&q=80'; // Programming code
  }
  if (name.includes('data structure') || name.includes('algorithm')) {
    return 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80'; // Algorithms
  }
  if (name.includes('android')) {
    return 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80'; // Mobile development
  }
  if (name.includes('game development')) {
    return 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1200&q=80'; // Game development
  }
  
  // ECE/EEE
  if (name.includes('embedded') || name.includes('iot') || name.includes('internet of things') || name.includes('vlsi')) {
    return 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'; // Electronics/circuit board
  }
  if (name.includes('robotics')) {
    return 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80'; // Robotics
  }
  if (name.includes('nano')) {
    return 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'; // Technology
  }
  
  // Mechanical & Automobiles
  if (name.includes('engine') || name.includes('ic engine')) {
    return 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80'; // Car engine
  }
  if (name.includes('battery electric') || name.includes('bev')) {
    return 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80'; // Battery Electric Vehicle - modern electric car
  }
  if (name.includes('hybrid electrical') || name.includes('hev')) {
    return 'https://images.unsplash.com/photo-1593941707882-a5bac6861d08?auto=format&fit=crop&w=1200&q=80'; // Hybrid Electric Vehicle - hybrid car technology
  }
  if (name.includes('drone mechanics') || name.includes('drone')) {
    return 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=80'; // Drone
  }
  if (name.includes('electric vehicle') || name.includes('electrical vehicle')) {
    return 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80'; // Electric car (fallback)
  }
  
  // Civil & Architecture
  if (name.includes('autocad') || name.includes('construction') || name.includes('civil')) {
    return 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'; // Architecture
  }
  
  // Commerce & Management
  if (name.includes('management') || name.includes('hr') || name.includes('human resources') || name.includes('operation')) {
    return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'; // Business analytics
  }
  if (name.includes('digital marketing') || name.includes('marketing')) {
    return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'; // Marketing analytics
  }
  
  // Finance & Investment
  if (name.includes('finance') || name.includes('stock market') || name.includes('investment')) {
    return 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80'; // Financial charts
  }
  
  // Design & Creative
  if (name.includes('ui/ux') || name.includes('design')) {
    return 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80'; // Design tools
  }
  
  // Medical
  if (name.includes('medical') || name.includes('coding') || name.includes('bio') || name.includes('genetic')) {
    return 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80'; // Medical/healthcare
  }
  
  // Personality Development
  if (name.includes('psychology') || name.includes('personality')) {
    return 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'; // People/teamwork
  }
  
  // Default fallback
  return 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80';
};

// Course data structure mapped from the table
const coursesByCategory: Record<string, string[]> = {
  'Advanced': [
    'Advanced Cyber Security (6 Months)',
    'Network Security (6 Months)',
    'Full Stack Web Development (MERN)'
  ],
  'Computer Science / IT': [
    'Artificial Intelligence',
    'Machine Learning',
    'Data Science',
    'Data Analytics',
    'Business Analytics',
    'Cloud Computing',
    'Amazon Web Services (AWS)',
    'Cyber Security',
    'Web Development',
    'Full Stack Web Development (4 Months)',
    'Programming in Python',
    'Programming in Java',
    'Data Structure & Algorithm',
    'Android App Development',
    'Game Development'
  ],
  'ECE/EEE': [
    'Embedded Systems',
    'Internet of Things (IoT)',
    'VLSI',
    'Robotics',
    'Nano Technology'
  ],
  'Mechanical & Automobiles': [
    'IC Engine',
    'Battery Electric Vehicles (BEVs)',
    'Hybrid Electrical Vehicles (HEV)',
    'Drone Mechanics'
  ],
  'Civil & Architecture': [
    'AutoCAD',
    'Construction Planning'
  ],
  'Commerce & Management': [
    'Human Resources & Management',
    'Operation Management',
    'Digital Marketing'
  ],
  'Finance & Investment': [
    'Finance',
    'Stock Market'
  ],
  'Design & Creative': [
    'UI/UX Design'
  ],
  'Medical': [
    'Medical Coding',
    'Bio-Informatics',
    'Genetic Engineering'
  ],
  'Personality Development': [
    'Psychology'
  ]
};

// Category definitions with icons
const programCategories = [
  { 
    name: "Advanced", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 3L4 7L8 11M16 3L20 7L16 11M8 21L4 17L8 13M16 21L20 17L16 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    name: "Computer Science / IT", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="14" rx="2"/>
        <path d="M6 8H18M6 12H14"/>
      </svg>
    )
  },
  { 
    name: "ECE/EEE", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
      </svg>
    )
  },
  { 
    name: "Mechanical & Automobiles", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1V6M12 18V23M4.22 4.22L7.76 7.76M16.24 16.24L19.78 19.78M1 12H6M18 12H23M4.22 19.78L7.76 16.24M16.24 7.76L19.78 4.22"/>
      </svg>
    )
  },
  { 
    name: "Civil & Architecture", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <path d="M4 8H20M8 4V20"/>
      </svg>
    )
  },
  { 
    name: "Commerce & Management", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="6" width="16" height="12" rx="2"/>
        <path d="M4 10H20M8 14H16"/>
      </svg>
    )
  },
  { 
    name: "Finance & Investment", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"/>
      </svg>
    )
  },
  { 
    name: "Design & Creative", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
        <path d="M2 17L12 22L22 17"/>
        <path d="M2 12L12 17L22 12"/>
      </svg>
    )
  },
  { 
    name: "Medical", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L4 7V11C4 16.55 7.16 21.74 12 23C16.84 21.74 20 16.55 20 11V7L12 2Z"/>
        <path d="M12 8V16M8 12H16"/>
      </svg>
    )
  },
  { 
    name: "Personality Development", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4"/>
        <path d="M6 20C6 16 9 14 12 14C15 14 18 16 18 20"/>
      </svg>
    )
  }
];

export default function TopFeaturedCourses() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Advanced');
  
  // Get courses for selected category
  const currentCourses = coursesByCategory[selectedCategory] || [];

  return (
    <section className="bg-brand-page py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px] relative">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-3 md:mb-4">
            Top Featured Courses
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 max-w-3xl mx-auto px-4">
            Explore our Top Featured Courses, handpicked for their quality, relevance, and impact in shaping your career.
          </p>
        </div>

        {/* Main Content: Sidebar + Course Cards */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Left Sidebar Navigation */}
          <div className="w-full lg:w-[280px] flex-shrink-0 lg:-ml-8 lg:-mt-4">
            <div className="p-2 sm:p-4 space-y-2">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                {programCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full lg:w-[280px] h-[44px] text-left px-3 sm:px-4 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm transition-colors flex items-center gap-2 sm:gap-3 border ${
                      selectedCategory === category.name
                        ? 'bg-brand-orange text-white border-brand-orange hover:bg-brand-cyan'
                        : 'bg-white text-gray-700 hover:bg-brand-cyan hover:text-white border-gray-200'
                    }`}
                  >
                    <span className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5">{category.icon}</span>
                    <span className="truncate">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Featured Course Cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {currentCourses.length > 0 ? (
              currentCourses.map((courseName, index) => {
                const image = getCourseImage(courseName);
                const description = generateCourseDescription(courseName);
                
                // Get course duration
                const duration = getCourseDuration(courseName);
                const nameWithoutDuration = courseName.replace(/\s*\([^)]+\)\s*/g, '').trim();
                
                // Check if course has an existing page route
                const existingRoute = getCourseRoute(courseName);
                const courseUrl = existingRoute 
                  ? `${existingRoute}?image=${encodeURIComponent(image)}`
                  : `/courses/${generateSlug(courseName)}?image=${encodeURIComponent(image)}`;
                
                return (
                  <Link 
                    key={index} 
                    href={courseUrl}
                    className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all flex flex-col border-2 border-gray-200 hover:border-brand-orange cursor-pointer min-h-[380px] sm:h-[380px]"
                  >
                    {/* Course Image */}
                    <div className="relative w-full h-40 sm:h-48 flex-shrink-0 px-3 pt-3">
                      <div className="relative w-full h-full rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={courseName}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          unoptimized
                        />
                      </div>
                    </div>

                    {/* Course Content */}
                    <div className="p-3 sm:p-4 flex flex-col flex-1 min-h-0">
                      {/* Course Name */}
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-brand-orange mb-1 line-clamp-2 transition-colors duration-300">
                        {nameWithoutDuration}
                      </h3>
                      
                      {/* Course Duration */}
                      <p className="text-xs text-gray-500 mb-2 font-medium">
                        {duration}
                      </p>
                      
                      {/* Course Description */}
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 flex-1">
                        {description}
                      </p>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                No courses available for this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

