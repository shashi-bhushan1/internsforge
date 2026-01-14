import { Module } from './types';

export const cyberSecurityModules: Module[] = [
  {
    id: 1,
    title: 'Introduction to Cyber Security',
    lectures: 0,
    hours: 0,
    topics: [
      'Definition, importance, and scope',
      'Types of Cyber Threats',
      'Basic Concepts of CIA (Confidentiality, Integrity, Availability)',
      'Cybersecurity Ethics, Principles and Best Practices'
    ]
  },
  {
    id: 2,
    title: 'Introduction to Linux',
    lectures: 0,
    hours: 0,
    topics: [
      'Basic commands',
      'Networking commands',
      'Service and logs',
      'System Administration Commands',
      'Linux File system / Directory\'s'
    ]
  },
  {
    id: 3,
    title: 'Introduction to Windows',
    lectures: 0,
    hours: 0,
    topics: [
      'Access Control Types, Permissions, and UAC (User Account Control)',
      'Windows Firewall and Windows Defender',
      'Windows Remote Management and RDP (Remote Desktop Protocol)',
      'Basic CMD Commands and Batch Scripting',
      'Introduction to PowerShell',
      'Using CMD and PowerShell for System Administration and Basic Security Tasks'
    ]
  },
  {
    id: 4,
    title: 'Introduction to Networking',
    lectures: 0,
    hours: 0,
    topics: [
      'Types of networks',
      'Understanding network topologies',
      'Introduction to Network Protocols and Ports',
      'IP Addressing and Subnetting',
      'Firewall and its configuration'
    ]
  },
  {
    id: 5,
    title: 'Ethical Hacking',
    lectures: 0,
    hours: 0,
    topics: [
      'Footprinting, Reconnaissance, and Enumeration',
      'Vulnerability Assessment and Reporting',
      'Windows and Linux System Hacking',
      'Password Cracking and hashing',
      'Wireshark and Network testing',
      'Wireless Network Hacking',
      'Digital Forensics',
      'Cloud Computing and Security AWS/Azure',
      'Tor, Anonymous and Proxy service\'s'
    ]
  },
  {
    id: 6,
    title: 'Web Application Security / Hacking / Penetration testing',
    lectures: 0,
    hours: 0,
    topics: [
      'Introduction to Web Hacking',
      'Introduction to Burp Suite',
      'Fuzzing & Directory Enumeration',
      'Subdomain Enumeration',
      'Authentication Bypass',
      'File inclusion Vulnerability',
      'File upload vulnerability',
      'Cross-site Scripting XSS',
      'Command Injection',
      'Sql Injection',
      'OWASP TOP 10-2021'
    ]
  },
  {
    id: 7,
    title: 'SOC and SIEM',
    lectures: 0,
    hours: 0,
    topics: [
      'Security Operations Center (SOC)',
      'Security Incident and Event Management (SIEM)',
      'Tools, installation, and configuration',
      'Building IDS, Firewalls, and Honeypots',
      'Deployment and monitoring',
      'Documenting and Reporting'
    ]
  },
  {
    id: 8,
    title: 'RED/BLUE/PURPLE Team Hacking Scenarios',
    lectures: 0,
    hours: 0,
    topics: [
      'Blue Team Defense',
      'Red Team Offensive testing',
      'Purple Team Organization Task'
    ]
  },
  {
    id: 9,
    title: 'Offensive Penetration Testing',
    lectures: 0,
    hours: 0,
    topics: [
      'Attacking real world Vulnerable Service\'s',
      'Testing web application for Vulnerability Finding',
      'Anonymity, Dark web, and secure communication'
    ]
  },
  {
    id: 10,
    title: 'Testing',
    lectures: 0,
    hours: 0,
    topics: [
      'Comprehensive Security Checklists for Auditing, testing'
    ]
  }
];
