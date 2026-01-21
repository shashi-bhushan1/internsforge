'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getCourse } from '@/data/courses';

// SVG Icons
const BrainIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5C15 5 10 7.5 10 12.5C10 15 11.5 17.5 13 18.75C11.5 20 10 22.5 10 25C10 30 15 32.5 20 32.5C25 32.5 30 30 30 25C30 22.5 28.5 20 27 18.75C28.5 17.5 30 15 30 12.5C30 7.5 25 5 20 5Z" fill="#4CAF50"/>
    <path d="M17.5 10C17.5 10 15 12.5 15 15C15 16.25 16.25 17.5 17.5 17.5C18.75 17.5 20 16.25 20 15C20 12.5 17.5 10 17.5 10Z" fill="#2196F3"/>
    <path d="M22.5 10C22.5 10 25 12.5 25 15C25 16.25 23.75 17.5 22.5 17.5C21.25 17.5 20 16.25 20 15C20 12.5 22.5 10 22.5 10Z" fill="#FF9800"/>
    <path d="M20 15C20 15 18.75 17.5 18.75 20C18.75 21.25 20 22.5 21.25 22.5C22.5 22.5 23.75 21.25 23.75 20C23.75 17.5 22.5 15 20 15Z" fill="#F44336"/>
    <path d="M20 12.5C20 12.5 18 14.5 18 16.5C18 17.5 19 18.5 20 18.5C21 18.5 22 17.5 22 16.5C22 14.5 20 12.5 20 12.5Z" fill="#9C27B0"/>
  </svg>
);

const HamburgerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 5H18M2 10H18M2 15H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const MedicalCrossIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="14" height="14" rx="2" stroke="white" strokeWidth="2"/>
    <path d="M10 6V14M6 10H14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const HouseIcon = ({ isActive }: { isActive?: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2L2 8V18H8V12H12V18H18V8L10 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InfoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 6V10M10 14H10.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="12" height="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M4 8C4 7 5 6 6 6H14C15 6 16 7 16 8" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 6V4C8 3 9 2 10 2C11 2 12 3 12 4V6" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const EnvelopeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="16" height="12" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 6L10 11L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const GraduationCapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2L2 6L10 10L18 6L10 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 6V14L10 18L18 14V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Helper function to generate course description
const generateCourseDescription = (courseName: string): string => {
  const name = courseName.toLowerCase();
  
  if (name.includes('network security')) {
    return 'Master network security fundamentals and advanced techniques. Learn to design, implement, and manage secure network infrastructures. Protect networks from threats and vulnerabilities.';
  }
  if (name.includes('cyber') || name.includes('security')) {
    return 'Master key cybersecurity concepts to protect your digital assets. Gain practical skills to identify threats and implement robust security measures.';
  }
  if (name.includes('web development') || name.includes('full stack')) {
    return 'Build modern, responsive web applications from frontend to backend. Learn industry-standard technologies and frameworks to create scalable solutions.';
  }
  if (name.includes('artificial intelligence') || name.includes('machine learning') || name.includes('ai')) {
    return 'Explore the cutting-edge world of AI and machine learning. Develop intelligent systems and algorithms that solve real-world problems.';
  }
  if (name.includes('data science') || name.includes('data analytics') || name.includes('business analytics')) {
    return 'Transform data into actionable insights. Master data analysis, visualization, and statistical modeling techniques for business intelligence.';
  }
  if (name.includes('cloud') || name.includes('aws') || name.includes('amazon web services')) {
    return 'Master cloud computing platforms and services. Learn to deploy, manage, and scale applications in the cloud with industry-leading tools.';
  }
  if (name.includes('python')) {
    return 'Learn Python programming from fundamentals to advanced concepts. Build applications, automate tasks, and dive into data science and AI.';
  }
  if (name.includes('java')) {
    return 'Master Java programming and object-oriented design. Build robust applications and understand enterprise-level development practices.';
  }
  if (name.includes('android')) {
    return 'Create powerful Android applications using modern development tools. Learn UI/UX design, API integration, and app deployment.';
  }
  if (name.includes('game')) {
    return 'Design and develop engaging games from concept to completion. Learn game engines, graphics programming, and game design principles.';
  }
  if (name.includes('iot') || name.includes('internet of things') || name.includes('embedded')) {
    return 'Build connected devices and smart systems. Learn to integrate hardware and software for IoT applications and embedded systems.';
  }
  if (name.includes('vlsi')) {
    return 'Master Very Large Scale Integration design and verification. Learn digital circuit design, FPGA programming, and semiconductor technologies.';
  }
  if (name.includes('robotics')) {
    return 'Design and program intelligent robots. Learn robotics fundamentals, control systems, and automation technologies.';
  }
  // Medical - Check "genetic engineering" BEFORE "engine" to avoid conflicts
  if (name.includes('genetic engineering')) {
    return 'Explore medical technologies and healthcare informatics. Learn medical coding, bioinformatics, and genetic engineering applications.';
  }
  // Mechanical/Automotive - Check "ic engine" specifically to avoid matching "genetic engineering"
  if (name.includes('ic engine')) {
    return 'Understand automotive engineering principles and modern vehicle technologies. Learn about engine systems, electric vehicles, and sustainable transportation.';
  }
  if (name.includes('engine') && !name.includes('genetic')) {
    return 'Understand automotive engineering principles and modern vehicle technologies. Learn about engine systems, electric vehicles, and sustainable transportation.';
  }
  if (name.includes('electric vehicle') || name.includes('hev') || name.includes('bev')) {
    return 'Understand automotive engineering principles and modern vehicle technologies. Learn about engine systems, electric vehicles, and sustainable transportation.';
  }
  if (name.includes('drone mechanics') || name.includes('drone')) {
    return 'Master drone mechanics and unmanned aerial vehicle technologies. Learn about drone design, flight dynamics, propulsion systems, and maintenance.';
  }
  if (name.includes('autocad') || name.includes('construction') || name.includes('civil')) {
    return 'Master CAD software and construction planning. Learn architectural design, project management, and building information modeling.';
  }
  if (name.includes('management') || name.includes('hr') || name.includes('human resources') || name.includes('operation')) {
    return 'Develop leadership and management skills. Learn strategic planning, team management, and organizational effectiveness.';
  }
  if (name.includes('digital marketing') || name.includes('marketing')) {
    return 'Master digital marketing strategies and tools. Learn SEO, social media marketing, content creation, and analytics to grow businesses.';
  }
  if (name.includes('finance') || name.includes('stock market') || name.includes('investment')) {
    return 'Understand financial markets and investment strategies. Learn financial analysis, portfolio management, and risk assessment.';
  }
  if (name.includes('ui/ux') || name.includes('design')) {
    return 'Create beautiful and intuitive user interfaces. Learn design principles, prototyping, and user experience optimization.';
  }
  if (name.includes('medical') || name.includes('coding') || name.includes('bio') || name.includes('genetic')) {
    return 'Explore medical technologies and healthcare informatics. Learn medical coding, bioinformatics, and genetic engineering applications.';
  }
  if (name.includes('psychology') || name.includes('personality')) {
    return 'Develop personal and professional skills. Learn psychology principles, communication techniques, and self-improvement strategies.';
  }
  if (name.includes('data structure') || name.includes('algorithm')) {
    return 'Master fundamental data structures and algorithms. Learn problem-solving techniques and optimize code performance.';
  }
  if (name.includes('nano')) {
    return 'Explore the fascinating world of nanotechnology. Learn about nanomaterials, nanofabrication, and applications in various industries.';
  }
  return `Master ${courseName} and advance your career. Gain practical skills, industry insights, and hands-on experience in this comprehensive course.`;
};

// Helper function to get course-specific image
const getCourseImage = (courseName: string): string => {
  const name = courseName.toLowerCase();
  
  // First, try to get the course from courses.ts by matching course names
  let courseSlug: string | null = null;
  
  // Advanced courses
  if (name.includes('advanced cyber security') || name.includes('advance cyber security')) {
    return '/courses/Advance Cyber Security.webp';
  }
  if (name.includes('network security')) {
    return '/courses/Network Security.webp';
  }
  if (name.includes('full stack web development') && name.includes('mern')) {
    return '/courses/Full Stack Web Development.webp';
  }
  
  // Map course names to slugs - Check "genetic engineering" BEFORE "ic engine" to avoid conflicts
  if (name.includes('genetic engineering')) {
    courseSlug = 'genetic-engineering';
  } else if (name.includes('artificial intelligence')) {
    courseSlug = 'artificial-intelligence';
  } else if (name.includes('machine learning')) {
    courseSlug = 'machine-learning';
  } else if (name.includes('data science')) {
    courseSlug = 'data-science';
  } else if (name.includes('data analytics')) {
    courseSlug = 'data-analytics';
  } else if (name.includes('business analytics')) {
    courseSlug = 'business-analytics';
  } else if (name.includes('cloud computing')) {
    courseSlug = 'cloud-computing';
  } else if (name.includes('amazon web services') || name.includes('aws')) {
    courseSlug = 'amazon-web-services';
  } else if (name.includes('cyber security')) {
    courseSlug = 'cyber-security';
  } else if (name.includes('web development') && !name.includes('full stack')) {
    courseSlug = 'web-development';
  } else if (name.includes('full stack web development')) {
    courseSlug = 'full-stack-web-development';
  } else if (name.includes('programming in python') || (name.includes('python') && !name.includes('data'))) {
    courseSlug = 'python';
  } else if (name.includes('programming in java') || (name.includes('java') && !name.includes('script'))) {
    courseSlug = 'java';
  } else if (name.includes('data structure') || name.includes('algorithm')) {
    courseSlug = 'data-structure-algorithm';
  } else if (name.includes('android')) {
    courseSlug = 'android-app-development';
  } else if (name.includes('game development')) {
    courseSlug = 'game-development';
  } else if (name.includes('embedded')) {
    courseSlug = 'embedded-systems';
  } else if (name.includes('iot') || name.includes('internet of things')) {
    courseSlug = 'internet-of-things';
  } else if (name.includes('vlsi')) {
    courseSlug = 'vlsi';
  } else if (name.includes('robotics')) {
    courseSlug = 'robotics';
  } else if (name.includes('nano')) {
    courseSlug = 'nano-technology';
  } else if (name.includes('ic engine')) {
    courseSlug = 'ic-engine';
  } else if (name.includes('battery electric') || name.includes('bev')) {
    courseSlug = 'battery-electric-vehicles';
  } else if (name.includes('hybrid electrical') || name.includes('hev')) {
    courseSlug = 'hybrid-electrical-vehicles';
  } else if (name.includes('drone')) {
    courseSlug = 'drone-mechanics';
  } else if (name.includes('autocad')) {
    courseSlug = 'autocad';
  } else if (name.includes('construction')) {
    courseSlug = 'construction-planning';
  } else if (name.includes('human resources') || name.includes('hr')) {
    courseSlug = 'human-resources-management';
  } else if (name.includes('operation management')) {
    courseSlug = 'operation-management';
  } else if (name.includes('digital marketing')) {
    courseSlug = 'digital-marketing';
  } else if (name.includes('finance') && !name.includes('stock')) {
    courseSlug = 'finance';
  } else if (name.includes('stock market')) {
    courseSlug = 'stock-market';
  } else if (name.includes('ui/ux') || name.includes('design')) {
    courseSlug = 'ui-ux-design';
  } else if (name.includes('medical coding')) {
    courseSlug = 'medical-coding';
  } else if (name.includes('bio-informatics') || name.includes('bioinformatics')) {
    courseSlug = 'bio-informatics';
  } else if (name.includes('psychology')) {
    courseSlug = 'psychology';
  }
  
  // Try to get course from courses.ts
  if (courseSlug) {
    const course = getCourse(courseSlug);
    if (course && course.image) {
      return course.image;
    }
  }
  
  // Fallback to hardcoded URLs for courses not in courses.ts
  if (name.includes('cyber security') || name.includes('network security')) {
    return 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80';
  }
  if (name.includes('web development') || name.includes('full stack')) {
    return 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80';
  }
  
  // Default fallback
  return 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80';
};

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
  return null;
};

// Course data structure
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

export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAdvancedDropdownOpen, setIsAdvancedDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string>('Computer Science / IT');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const advancedDropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const advancedButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const advancedDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Helper function to handle dropdown open with delay cancellation
  const handleDropdownEnter = (setIsOpen: (value: boolean) => void, timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  // Helper function to handle dropdown close with delay
  const handleDropdownLeave = (setIsOpen: (value: boolean) => void, timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>) => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      timeoutRef.current = null;
    }, 200); // 200ms delay before closing
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      if (advancedDropdownTimeoutRef.current) {
        clearTimeout(advancedDropdownTimeoutRef.current);
      }
    };
  }, []);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        advancedDropdownRef.current &&
        advancedButtonRef.current &&
        !advancedDropdownRef.current.contains(event.target as Node) &&
        !advancedButtonRef.current.contains(event.target as Node)
      ) {
        setIsAdvancedDropdownOpen(false);
      }
    };

    if (isDropdownOpen || isAdvancedDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen, isAdvancedDropdownOpen]);

  const isHomePage = mounted && pathname === '/';
  const isAboutPage = mounted && pathname === '/about';
  const isContactPage = mounted && pathname === '/contact';

  // Get courses for hovered category (excluding Advanced)
  const currentCourses = coursesByCategory[hoveredCategory] || [];
  const advancedCourses = coursesByCategory['Advanced'] || [];
  
  // Filter out Advanced from categories to display in dropdown
  const displayCategories = programCategories.filter(cat => cat.name !== 'Advanced');

  return (
    <header className="w-full h-auto md:h-[120px] sticky top-0 z-50 flex items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px] py-4 md:py-0 relative" style={{ backgroundColor: '#1b0905' }}>
      <div className="max-w-[1600px] w-full flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full md:w-auto shrink-0">
          <Link href="/" className="hover:opacity-80 transition-opacity -ml-2 md:-ml-4">
            <Image
              src="/internsforge_logo.png"
              alt="InternsForge"
              width={280}
              height={100}
              className="h-14 md:h-20 w-auto object-contain"
              priority
              unoptimized
            />
          </Link>
          
          {/* Mobile: Icon Buttons */}
          <div className="flex items-center gap-2 md:hidden">
            {/* All Programs Button */}
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center hover:bg-brand-cyan transition-colors"
              aria-label="All Programs"
            >
              <HamburgerIcon />
            </button>
            {/* Enroll Now Button */}
            <a 
              href="https://wa.me/919063848879"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center hover:bg-brand-cyan transition-colors"
              aria-label="Enroll Now"
            >
              <GraduationCapIcon />
            </a>
            {/* Advanced Button */}
            <button 
              onClick={() => setIsAdvancedDropdownOpen(!isAdvancedDropdownOpen)}
              className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center hover:bg-brand-cyan transition-colors"
              aria-label="Advanced"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3C7 3 4 5 4 9C4 11 5 13 6 14C5 15 4 17 4 19H6C6 17 7 16 8 16C9 16 10 17 10 19H12C12 17 13 16 14 16C15 16 16 17 16 19H18C18 17 17 15 16 14C17 13 18 11 18 9C18 5 15 3 12 3C11 3 10 3 10 3Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Program Buttons - Desktop Only */}
        <div className="hidden md:flex items-center gap-1.5 md:gap-2 shrink-0 md:ml-10 flex-wrap">
          {/* All Programs Button with Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => handleDropdownEnter(setIsDropdownOpen, dropdownTimeoutRef)}
            onMouseLeave={() => handleDropdownLeave(setIsDropdownOpen, dropdownTimeoutRef)}
          >
            <button 
              ref={buttonRef}
              className="flex items-center gap-1 md:gap-1.5 px-2 md:px-4 py-1.5 md:py-2 rounded-full bg-brand-orange text-white text-[10px] md:text-[12.8px] font-semibold transition-colors hover:bg-brand-cyan shadow-sm"
            >
              <HamburgerIcon />
              <span className="hidden sm:inline">All Programs</span>
              <svg 
                width="12" 
                height="12" 
                className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 12 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* All Programs Dropdown */}
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute left-0 top-full bg-white shadow-xl border border-gray-200 rounded-lg z-50 w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] md:w-[calc(100vw-6rem)] lg:w-[calc(100vw-8rem)] xl:max-w-[1100px] xl:min-w-[1100px]"
                style={{ 
                  maxHeight: 'calc(100vh - 120px)', 
                  overflowY: 'auto',
                  paddingTop: '12px',
                  marginTop: '8px'
                }}
                onMouseEnter={() => handleDropdownEnter(setIsDropdownOpen, dropdownTimeoutRef)}
                onMouseLeave={() => handleDropdownLeave(setIsDropdownOpen, dropdownTimeoutRef)}
              >
                  <div className="px-4 sm:px-6 py-4 sm:py-6">
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                    {/* Left Column - Category Sidebar */}
                    <div className="w-full lg:w-[280px] xl:w-[300px] shrink-0">
                      <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                        {displayCategories.map((category) => {
                          const isActive = hoveredCategory === category.name;
                          return (
                            <button
                              key={category.name}
                              onMouseEnter={() => setHoveredCategory(category.name)}
                              className={`w-full h-[44px] text-left px-3 lg:px-4 py-3 rounded-full font-medium text-xs lg:text-sm transition-colors flex items-center gap-2 lg:gap-3 ${
                                isActive
                                  ? 'bg-brand-orange text-white'
                                  : 'bg-white text-gray-700 hover:bg-brand-cyan hover:text-white border border-gray-200'
                              }`}
                            >
                              <span className="shrink-0">{category.icon}</span>
                              <span className="truncate flex-1">{category.name}</span>
                              <svg 
                                width="12" 
                                height="12" 
                                className="shrink-0 hidden lg:block"
                                viewBox="0 0 12 12" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path 
                                  d="M4 2L8 6L4 10" 
                                  stroke="currentColor" 
                                  strokeWidth="2" 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Column - Course Cards Grid */}
                    <div className="flex-1 min-w-0">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                        {currentCourses.length > 0 ? (
                          currentCourses.map((courseName, index) => {
                            const image = getCourseImage(courseName);
                            const description = generateCourseDescription(courseName);
                            const nameWithoutDuration = courseName.replace(/\s*\([^)]+\)\s*/g, '').trim();
                            const existingRoute = getCourseRoute(courseName);
                            const courseUrl = existingRoute 
                              ? `${existingRoute}?image=${encodeURIComponent(image)}`
                              : `/courses/${generateSlug(courseName)}?image=${encodeURIComponent(image)}`;

                            return (
                              <Link
                                key={index}
                                href={courseUrl}
                                className="flex items-start gap-3 p-3 rounded-lg bg-white border border-gray-200 hover:border-brand-orange hover:shadow-md transition-all group"
                              >
                                {/* Course Image - Small Thumbnail */}
                                <div className="shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                                  <Image
                                    src={image}
                                    alt={courseName}
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-cover"
                                    unoptimized
                                  />
                                </div>

                                {/* Course Info */}
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2 group-hover:text-brand-orange transition-colors">
                                    {nameWithoutDuration}
                                  </h3>
                                  <p className="text-xs text-gray-600 line-clamp-3">
                                    {description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })
                        ) : (
                          <div className="col-span-2 text-center py-8 text-gray-500 text-sm">
                            No courses available for this category.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Advanced Button with Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => handleDropdownEnter(setIsAdvancedDropdownOpen, advancedDropdownTimeoutRef)}
            onMouseLeave={() => handleDropdownLeave(setIsAdvancedDropdownOpen, advancedDropdownTimeoutRef)}
          >
            <button 
              ref={advancedButtonRef}
              className="flex items-center gap-1 md:gap-1.5 px-2 md:px-4 py-1.5 md:py-2 rounded-full bg-brand-orange text-white text-[10px] md:text-[12.8px] font-semibold transition-colors hover:bg-brand-cyan shadow-sm"
            >
              <svg width="16" height="16" className="md:w-[18px] md:h-[18px]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3C7 3 4 5 4 9C4 11 5 13 6 14C5 15 4 17 4 19H6C6 17 7 16 8 16C9 16 10 17 10 19H12C12 17 13 16 14 16C15 16 16 17 16 19H18C18 17 17 15 16 14C17 13 18 11 18 9C18 5 15 3 12 3C11 3 10 3 10 3Z" fill="white"/>
              </svg>
              <span className="hidden sm:inline">Advanced</span>
              <svg 
                width="12" 
                height="12" 
                className={`transition-transform ${isAdvancedDropdownOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 12 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Advanced Courses Dropdown */}
            {isAdvancedDropdownOpen && (
              <div
                ref={advancedDropdownRef}
                className="absolute left-0 top-full bg-white shadow-xl border border-gray-200 rounded-lg z-50 w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] md:max-w-[400px]"
                style={{ 
                  maxHeight: 'calc(100vh - 120px)', 
                  overflowY: 'auto',
                  paddingTop: '12px',
                  marginTop: '8px'
                }}
                onMouseEnter={() => handleDropdownEnter(setIsAdvancedDropdownOpen, advancedDropdownTimeoutRef)}
                onMouseLeave={() => handleDropdownLeave(setIsAdvancedDropdownOpen, advancedDropdownTimeoutRef)}
              >
                <div className="px-4 py-4">
                  <div className="flex flex-col gap-3">
                    {advancedCourses.length > 0 ? (
                      advancedCourses.map((courseName, index) => {
                        const image = getCourseImage(courseName);
                        const description = generateCourseDescription(courseName);
                        const nameWithoutDuration = courseName.replace(/\s*\([^)]+\)\s*/g, '').trim();
                        const existingRoute = getCourseRoute(courseName);
                        const courseUrl = existingRoute 
                          ? `${existingRoute}?image=${encodeURIComponent(image)}`
                          : `/courses/${generateSlug(courseName)}?image=${encodeURIComponent(image)}`;

                        return (
                          <Link
                            key={index}
                            href={courseUrl}
                            className="flex items-start gap-3 p-3 rounded-lg bg-white border border-gray-200 hover:border-brand-orange hover:shadow-md transition-all group"
                          >
                            {/* Course Image - Small Thumbnail */}
                            <div className="shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                              <Image
                                src={image}
                                alt={courseName}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover"
                                unoptimized
                              />
                            </div>

                            {/* Course Info */}
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2 group-hover:text-brand-orange transition-colors">
                                {nameWithoutDuration}
                              </h3>
                              <p className="text-xs text-gray-600 line-clamp-3">
                                {description}
                              </p>
                            </div>
                          </Link>
                        );
                      })
                    ) : (
                      <div className="text-center py-8 text-gray-500 text-sm">
                        No courses available.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 flex-1 justify-center">
          <Link href="/" className="flex items-center gap-1.5 xl:gap-2 text-brand-orange hover:text-brand-cyan transition-colors">
            <HouseIcon isActive={isHomePage} />
            <span className="font-medium text-[12.8px]">Home</span>
          </Link>
          
          <Link href="/about" className="flex items-center gap-1.5 xl:gap-2 text-brand-orange hover:text-brand-cyan transition-colors">
            <InfoIcon />
            <span className="font-medium text-[12.8px] whitespace-nowrap">About Us</span>
          </Link>
          
          <Link href="/careers" className="flex items-center gap-1.5 xl:gap-2 text-brand-orange hover:text-brand-cyan transition-colors">
            <BriefcaseIcon />
            <span className="font-medium text-[12.8px]">Careers</span>
          </Link>
          
          <Link href="/contact" className="flex items-center gap-1.5 xl:gap-2 text-brand-orange hover:text-brand-cyan transition-colors">
            <EnvelopeIcon />
            <span className="font-medium text-[12.8px]">Contact</span>
          </Link>
        </nav>

        {/* Enroll Now Button */}
        <a 
          href="https://wa.me/919063848879"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-full bg-brand-orange text-white text-[11px] md:text-[12.8px] font-semibold hover:bg-brand-cyan transition-colors shadow-sm shrink-0 md:ml-8"
        >
          <GraduationCapIcon />
          <span>Enroll Now</span>
        </a>
      </div>
    </header>
  );
}

