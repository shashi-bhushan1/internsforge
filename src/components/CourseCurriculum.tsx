'use client';

import React, { useState } from 'react';

interface Module {
  id: number;
  title: string;
  lectures: number;
  hours: number;
  topics: string[];
  projects: string;
  ibmCourse: string;
}

interface CourseCurriculumProps {
  courseType: 'web-development' | 'cyber-security' | 'digital-marketing';
}

const webDevelopmentModules: Module[] = [
  {
    id: 1,
    title: 'HTML and CSS + AI',
    lectures: 11,
    hours: 22,
    topics: [
      'HTML5 semantics, forms, tags, tables',
      'CSS styling, Flexbox, Grid, media queries',
      'Responsive layouts & media breakpoints',
      'CSS animations, transitions, transforms',
      'Semantic elements & accessibility design',
      'Positioning: relative, absolute, fixed, sticky',
      'Box model & layout debugging',
      'Typography & color schemes',
      'Page structuring with semantic flow',
      'Trae AI integration for UI code suggestions'
    ],
    projects: 'Add animation effects to a photo gallery | Build a responsive HTML form layout',
    ibmCourse: 'HTML, CSS, and JavaScript for Beginners (14 hrs)'
  },
  {
    id: 2,
    title: 'JavaScript + AI',
    lectures: 11,
    hours: 22,
    topics: [
      'JavaScript fundamentals and ES6+ features',
      'DOM manipulation and event handling',
      'Async/await and promises',
      'Closures and scope',
      'Object-oriented programming',
      'AI-powered code generation',
      'Error handling and debugging',
      'Modern JavaScript patterns'
    ],
    projects: 'Build an interactive calculator | Create a dynamic todo application',
    ibmCourse: 'JavaScript Programming Essentials (16 hrs)'
  },
  {
    id: 3,
    title: 'Data Structures & Algorithms',
    lectures: 39,
    hours: 78,
    topics: [
      'Arrays, linked lists, stacks, queues',
      'Trees and binary search trees',
      'Graphs and graph algorithms',
      'Sorting and searching algorithms',
      'Dynamic programming',
      'Time and space complexity analysis',
      'Problem-solving strategies',
      'Algorithm optimization techniques'
    ],
    projects: 'Implement a hash table | Solve coding interview problems',
    ibmCourse: 'Data Structures and Algorithms Fundamentals (20 hrs)'
  },
  {
    id: 4,
    title: 'React JS + AI',
    lectures: 12,
    hours: 24,
    topics: [
      'React components and JSX',
      'State management with hooks',
      'Props and component composition',
      'React Router for navigation',
      'Context API and state management',
      'AI-assisted React development',
      'Performance optimization',
      'Testing React applications'
    ],
    projects: 'Build a weather app | Create a social media dashboard',
    ibmCourse: 'React.js Development (18 hrs)'
  },
  {
    id: 5,
    title: 'Node JS + AI',
    lectures: 2,
    hours: 4,
    topics: [
      'Node.js fundamentals',
      'NPM and package management',
      'File system operations',
      'Streams and buffers',
      'AI integration in Node.js',
      'Server-side JavaScript',
      'Event-driven programming'
    ],
    projects: 'Build a REST API server | Create a file upload system',
    ibmCourse: 'Node.js Backend Development (12 hrs)'
  },
  {
    id: 6,
    title: 'Express.js',
    lectures: 12,
    hours: 23,
    topics: [
      'Express.js framework setup',
      'Routing and middleware',
      'Request and response handling',
      'Database integration',
      'Authentication and authorization',
      'RESTful API design',
      'Error handling',
      'API documentation'
    ],
    projects: 'Build a blog API | Create an e-commerce backend',
    ibmCourse: 'Express.js Web Application Development (15 hrs)'
  },
  {
    id: 7,
    title: 'DBMS and MongoDB + AI',
    lectures: 10,
    hours: 20,
    topics: [
      'Database design principles',
      'SQL and NoSQL databases',
      'MongoDB CRUD operations',
      'Schema design and relationships',
      'Query optimization',
      'AI-powered database queries',
      'Data modeling',
      'Database security'
    ],
    projects: 'Design a database schema | Build a MongoDB application',
    ibmCourse: 'Database Management Systems (16 hrs)'
  },
  {
    id: 8,
    title: 'Capstone Projects',
    lectures: 5,
    hours: 10,
    topics: [
      'Full-stack project planning',
      'Project architecture design',
      'Integration of all technologies',
      'Deployment and hosting',
      'Project presentation',
      'Code review and optimization',
      'Documentation',
      'Portfolio development'
    ],
    projects: 'Build a complete e-commerce platform | Create a social networking app',
    ibmCourse: 'Full Stack Development Capstone (20 hrs)'
  },
  {
    id: 9,
    title: 'Career Assistance',
    lectures: 12,
    hours: 24,
    topics: [
      'Resume building and optimization',
      'LinkedIn profile enhancement',
      'Interview preparation',
      'Technical interview practice',
      'Portfolio development',
      'Job search strategies',
      'Networking techniques',
      'Salary negotiation'
    ],
    projects: 'Create a professional portfolio | Prepare for technical interviews',
    ibmCourse: 'Career Development and Job Placement (10 hrs)'
  }
];

const cyberSecurityModules: Module[] = [
  {
    id: 1,
    title: 'Introduction to Cybersecurity + AI',
    lectures: 10,
    hours: 20,
    topics: [
      'Cybersecurity fundamentals and threat landscape',
      'Types of cyber attacks and vulnerabilities',
      'Security policies and compliance frameworks',
      'Risk assessment and management',
      'AI-powered threat detection and analysis',
      'Security awareness and best practices',
      'Incident response basics',
      'Legal and ethical aspects of cybersecurity'
    ],
    projects: 'Create a security awareness presentation | Build a threat assessment report',
    ibmCourse: 'Introduction to Cybersecurity (12 hrs)'
  },
  {
    id: 2,
    title: 'Network Security & Firewalls',
    lectures: 14,
    hours: 28,
    topics: [
      'Network architecture and protocols',
      'Firewall configuration and management',
      'Intrusion Detection Systems (IDS)',
      'Intrusion Prevention Systems (IPS)',
      'VPN setup and secure communications',
      'Network monitoring and traffic analysis',
      'Wireless network security',
      'AI-enhanced network threat detection'
    ],
    projects: 'Configure a firewall rule set | Set up a secure VPN connection',
    ibmCourse: 'Network Security Essentials (16 hrs)'
  },
  {
    id: 3,
    title: 'Ethical Hacking & Penetration Testing',
    lectures: 18,
    hours: 36,
    topics: [
      'Penetration testing methodology',
      'Reconnaissance and information gathering',
      'Vulnerability scanning and assessment',
      'Exploitation techniques and tools',
      'Post-exploitation and privilege escalation',
      'Web application security testing',
      'Wireless network penetration testing',
      'AI-assisted vulnerability discovery'
    ],
    projects: 'Perform a complete penetration test | Document security vulnerabilities',
    ibmCourse: 'Ethical Hacking Fundamentals (20 hrs)'
  },
  {
    id: 4,
    title: 'Cryptography & Encryption',
    lectures: 12,
    hours: 24,
    topics: [
      'Cryptographic algorithms and protocols',
      'Symmetric and asymmetric encryption',
      'Hash functions and digital signatures',
      'Public Key Infrastructure (PKI)',
      'SSL/TLS implementation',
      'Cryptographic key management',
      'Quantum cryptography basics',
      'AI in cryptographic security'
    ],
    projects: 'Implement encryption for data at rest | Create a secure communication channel',
    ibmCourse: 'Cryptography and Network Security (18 hrs)'
  },
  {
    id: 5,
    title: 'Web Application Security',
    lectures: 15,
    hours: 30,
    topics: [
      'OWASP Top 10 vulnerabilities',
      'SQL injection and prevention',
      'Cross-Site Scripting (XSS) attacks',
      'Cross-Site Request Forgery (CSRF)',
      'Authentication and session management',
      'Secure coding practices',
      'Web application firewalls',
      'AI-powered security scanning'
    ],
    projects: 'Secure a vulnerable web application | Build a secure authentication system',
    ibmCourse: 'Web Application Security (16 hrs)'
  },
  {
    id: 6,
    title: 'Cloud Security',
    lectures: 10,
    hours: 20,
    topics: [
      'Cloud security models and shared responsibility',
      'AWS, Azure, and GCP security',
      'Identity and Access Management (IAM)',
      'Cloud data protection and encryption',
      'Container and Kubernetes security',
      'Cloud compliance and governance',
      'Security monitoring in cloud environments',
      'AI-driven cloud threat detection'
    ],
    projects: 'Configure cloud security policies | Implement secure cloud architecture',
    ibmCourse: 'Cloud Security Fundamentals (14 hrs)'
  },
  {
    id: 7,
    title: 'Security Operations & SIEM',
    lectures: 12,
    hours: 24,
    topics: [
      'Security Information and Event Management (SIEM)',
      'Log analysis and correlation',
      'Security monitoring and alerting',
      'Incident detection and response',
      'Threat hunting techniques',
      'Security orchestration and automation',
      'Forensic analysis basics',
      'AI-powered security analytics'
    ],
    projects: 'Set up a SIEM system | Create incident response playbooks',
    ibmCourse: 'Security Operations Center (SOC) Essentials (18 hrs)'
  },
  {
    id: 8,
    title: 'Capstone Security Projects',
    lectures: 6,
    hours: 12,
    topics: [
      'Comprehensive security assessment',
      'Multi-layered security implementation',
      'Security architecture design',
      'Penetration testing report creation',
      'Security policy development',
      'Compliance audit preparation',
      'Security documentation',
      'Portfolio development'
    ],
    projects: 'Complete security audit of an organization | Build a security operations center',
    ibmCourse: 'Cybersecurity Capstone Project (22 hrs)'
  },
  {
    id: 9,
    title: 'Career Assistance',
    lectures: 12,
    hours: 24,
    topics: [
      'Cybersecurity career paths',
      'Resume building for security roles',
      'Certification preparation (CEH, CISSP, etc.)',
      'Technical interview preparation',
      'Portfolio and GitHub profile',
      'Networking in cybersecurity community',
      'Job search strategies',
      'Salary negotiation for security roles'
    ],
    projects: 'Create a cybersecurity portfolio | Prepare for security certifications',
    ibmCourse: 'Career Development in Cybersecurity (10 hrs)'
  }
];

const digitalMarketingModules: Module[] = [
  {
    id: 1,
    title: 'Digital Marketing Fundamentals + AI',
    lectures: 10,
    hours: 20,
    topics: [
      'Introduction to digital marketing landscape',
      'Marketing funnel and customer journey',
      'Digital marketing channels overview',
      'Marketing strategy and planning',
      'AI-powered marketing insights',
      'Analytics and measurement basics',
      'Target audience identification',
      'Brand positioning in digital space'
    ],
    projects: 'Create a digital marketing strategy | Develop a customer persona',
    ibmCourse: 'Digital Marketing Fundamentals (14 hrs)'
  },
  {
    id: 2,
    title: 'Search Engine Optimization (SEO)',
    lectures: 14,
    hours: 28,
    topics: [
      'On-page and off-page SEO',
      'Keyword research and analysis',
      'Technical SEO and site structure',
      'Content optimization strategies',
      'Link building techniques',
      'Local SEO optimization',
      'SEO tools and analytics',
      'AI-driven SEO optimization'
    ],
    projects: 'Optimize a website for search engines | Create an SEO audit report',
    ibmCourse: 'SEO Mastery Course (18 hrs)'
  },
  {
    id: 3,
    title: 'Search Engine Marketing (SEM) & PPC',
    lectures: 12,
    hours: 24,
    topics: [
      'Google Ads campaign setup',
      'Keyword bidding strategies',
      'Ad copywriting and optimization',
      'Landing page optimization',
      'Quality Score improvement',
      'Budget management and ROI',
      'A/B testing for ads',
      'AI-powered ad optimization'
    ],
    projects: 'Launch a Google Ads campaign | Optimize ad performance',
    ibmCourse: 'Google Ads Certification (16 hrs)'
  },
  {
    id: 4,
    title: 'Social Media Marketing',
    lectures: 15,
    hours: 30,
    topics: [
      'Platform-specific strategies (Facebook, Instagram, LinkedIn, Twitter)',
      'Content creation and curation',
      'Social media advertising',
      'Community management',
      'Influencer marketing',
      'Social media analytics',
      'Crisis management on social media',
      'AI tools for social media management'
    ],
    projects: 'Create a social media campaign | Manage a brand social media presence',
    ibmCourse: 'Social Media Marketing Mastery (20 hrs)'
  },
  {
    id: 5,
    title: 'Content Marketing & Strategy',
    lectures: 13,
    hours: 26,
    topics: [
      'Content strategy development',
      'Blog writing and optimization',
      'Video content creation',
      'Email marketing campaigns',
      'Content calendar planning',
      'Content distribution channels',
      'Content performance measurement',
      'AI content generation tools'
    ],
    projects: 'Develop a content marketing plan | Create a multi-channel content campaign',
    ibmCourse: 'Content Marketing Excellence (18 hrs)'
  },
  {
    id: 6,
    title: 'Email Marketing & Automation',
    lectures: 10,
    hours: 20,
    topics: [
      'Email campaign design and copywriting',
      'Email automation workflows',
      'Segmentation and personalization',
      'A/B testing for emails',
      'Email deliverability optimization',
      'Marketing automation platforms',
      'Lead nurturing campaigns',
      'AI-powered email optimization'
    ],
    projects: 'Build an email marketing funnel | Create automated email sequences',
    ibmCourse: 'Email Marketing Automation (14 hrs)'
  },
  {
    id: 7,
    title: 'Analytics & Data-Driven Marketing',
    lectures: 12,
    hours: 24,
    topics: [
      'Google Analytics setup and configuration',
      'Key performance indicators (KPIs)',
      'Conversion tracking and optimization',
      'Data analysis and reporting',
      'Attribution modeling',
      'Marketing dashboard creation',
      'Predictive analytics',
      'AI-driven marketing insights'
    ],
    projects: 'Set up comprehensive analytics | Create marketing performance reports',
    ibmCourse: 'Google Analytics Certification (16 hrs)'
  },
  {
    id: 8,
    title: 'Capstone Marketing Projects',
    lectures: 5,
    hours: 10,
    topics: [
      'Complete digital marketing campaign',
      'Multi-channel marketing strategy',
      'Campaign execution and management',
      'Performance analysis and optimization',
      'Marketing budget allocation',
      'ROI calculation and reporting',
      'Client presentation skills',
      'Portfolio development'
    ],
    projects: 'Launch a full digital marketing campaign | Create a marketing portfolio',
    ibmCourse: 'Digital Marketing Capstone (20 hrs)'
  },
  {
    id: 9,
    title: 'Career Assistance',
    lectures: 12,
    hours: 24,
    topics: [
      'Digital marketing career paths',
      'Resume building for marketing roles',
      'Portfolio creation and presentation',
      'Interview preparation',
      'Certification preparation (Google, Facebook, HubSpot)',
      'Freelancing and agency work',
      'Networking in marketing community',
      'Salary negotiation strategies'
    ],
    projects: 'Create a digital marketing portfolio | Prepare for marketing interviews',
    ibmCourse: 'Career Development in Digital Marketing (10 hrs)'
  }
];

export default function CourseCurriculum({ courseType }: CourseCurriculumProps) {
  const [selectedModule, setSelectedModule] = useState<number>(1);

  let modules: Module[];
  let title: string;
  let subtitle: string;

  switch (courseType) {
    case 'web-development':
      modules = webDevelopmentModules;
      title = 'Full Stack Development';
      subtitle = 'With GenAI';
      break;
    case 'cyber-security':
      modules = cyberSecurityModules;
      title = 'Cybersecurity';
      subtitle = 'With AI-Powered Defense';
      break;
    case 'digital-marketing':
      modules = digitalMarketingModules;
      title = 'Digital Marketing';
      subtitle = 'With AI-Driven Strategies';
      break;
    default:
      modules = webDevelopmentModules;
      title = 'Full Stack Development';
      subtitle = 'With GenAI';
  }

  const currentModule = modules.find(m => m.id === selectedModule) || modules[0];

  return (
    <section className="bg-brand-page py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:pl-[145px] lg:pr-[145px]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-3 md:mb-4">
            <span className="text-brand-orange">Job-Ready</span>{' '}
            <span className="text-brand-navy">{title} {subtitle} Curriculum</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto px-4">
            Explore Our Comprehensive Curriculum
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Column - Module List */}
          <div className="w-full lg:w-[45%] space-y-3">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setSelectedModule(module.id)}
                className={`w-full text-left p-4 rounded-lg transition-all ${
                  selectedModule === module.id
                    ? 'bg-blue-100 text-brand-navy shadow-md border border-blue-200'
                    : 'bg-white text-gray-900 hover:bg-gray-50 shadow-sm border border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-lg font-bold">{module.id}.</span>
                    <span className="font-semibold text-sm sm:text-base">{module.title}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={selectedModule === module.id ? 'text-brand-navy' : 'text-gray-500'}
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" fill="currentColor" opacity="0.1" />
                      <path d="M9 9L15 12L9 15V9Z" fill="currentColor" />
                    </svg>
                    <span className={selectedModule === module.id ? 'text-brand-navy' : 'text-gray-600'}>
                      {module.lectures} Lectures
                    </span>
                    <span className={selectedModule === module.id ? 'text-brand-navy/70' : 'text-gray-400'}>•</span>
                    <span className={selectedModule === module.id ? 'text-brand-navy' : 'text-gray-600'}>
                      {module.hours} Hours
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column - Module Details */}
          <div className="w-full lg:w-[55%] bg-white rounded-lg shadow-md p-6 md:p-8">
            {/* Header with Download Button */}
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Module {currentModule.id}
              </h2>
              <button className="bg-brand-orange hover:bg-brand-cyan text-white px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold transition-colors shadow-sm">
                Download Brochure
              </button>
            </div>

            {/* Module Title */}
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
              {currentModule.title}
            </h3>

            {/* Key Topics */}
            <div className="mb-6">
              <ul className="space-y-2">
                {currentModule.topics.map((topic, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                    <span className="text-brand-orange mt-1.5">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects Section */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Projects:</h4>
              <p className="text-sm sm:text-base text-gray-700">{currentModule.projects}</p>
            </div>

            {/* IBM Course Section */}
            <div>
              <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">IBM Course:</h4>
              <p className="text-sm sm:text-base text-gray-700">{currentModule.ibmCourse}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

