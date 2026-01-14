import { Module } from './types';

export const networkSecurityModules: Module[] = [
  {
    id: 1,
    title: 'Network Fundamentals & Architecture',
    lectures: 12,
    hours: 24,
    topics: [
      'OSI and TCP/IP models',
      'Network topologies and design',
      'IP addressing and subnetting',
      'Routing and switching fundamentals',
      'Network protocols (TCP, UDP, ICMP)',
      'Network devices and infrastructure',
      'LAN, WAN, and MAN architectures',
      'Network documentation and diagrams'
    ],
    projects: 'Design a network topology | Configure IP addressing scheme',
    ibmCourse: 'Network Fundamentals (16 hrs)'
  },
  {
    id: 2,
    title: 'Network Security & Firewalls',
    lectures: 16,
    hours: 32,
    topics: [
      'Firewall types and architectures',
      'Firewall configuration and management',
      'Access Control Lists (ACLs)',
      'Stateful vs stateless firewalls',
      'Next-Generation Firewalls (NGFW)',
      'Firewall rule design and optimization',
      'Network segmentation strategies',
      'DMZ configuration and security'
    ],
    projects: 'Configure a firewall rule set | Design secure network segmentation',
    ibmCourse: 'Network Security Essentials (18 hrs)'
  },
  {
    id: 3,
    title: 'Intrusion Detection & Prevention Systems',
    lectures: 14,
    hours: 28,
    topics: [
      'IDS vs IPS fundamentals',
      'Signature-based detection',
      'Anomaly-based detection',
      'Network traffic analysis',
      'SIEM integration',
      'Threat intelligence feeds',
      'Incident response procedures',
      'False positive management'
    ],
    projects: 'Deploy and configure IDS/IPS | Create incident response playbook',
    ibmCourse: 'Intrusion Detection Systems (16 hrs)'
  },
  {
    id: 4,
    title: 'VPN & Secure Communications',
    lectures: 12,
    hours: 24,
    topics: [
      'VPN types and protocols (IPSec, SSL/TLS, OpenVPN)',
      'Site-to-site VPN configuration',
      'Remote access VPN setup',
      'Wireless network security (WPA2, WPA3)',
      'Secure remote access solutions',
      'Tunneling protocols',
      'VPN troubleshooting',
      'Encryption for network communications'
    ],
    projects: 'Set up site-to-site VPN | Configure secure remote access',
    ibmCourse: 'VPN and Secure Communications (14 hrs)'
  },
  {
    id: 5,
    title: 'Network Monitoring & Analysis',
    lectures: 13,
    hours: 26,
    topics: [
      'Network monitoring tools (Wireshark, tcpdump)',
      'Packet capture and analysis',
      'Network performance monitoring',
      'Bandwidth management',
      'Network traffic patterns',
      'Log analysis and correlation',
      'Network forensics basics',
      'Real-time monitoring dashboards'
    ],
    projects: 'Analyze network traffic | Create network monitoring dashboard',
    ibmCourse: 'Network Monitoring and Analysis (16 hrs)'
  },
  {
    id: 6,
    title: 'Wireless Network Security',
    lectures: 11,
    hours: 22,
    topics: [
      'Wireless security protocols (WEP, WPA, WPA2, WPA3)',
      'Wireless network vulnerabilities',
      'Rogue access point detection',
      'Wireless intrusion prevention',
      'Wi-Fi security best practices',
      'Enterprise wireless security',
      'Wireless authentication methods',
      'Mobile device security on networks'
    ],
    projects: 'Secure a wireless network | Detect and mitigate rogue access points',
    ibmCourse: 'Wireless Network Security (14 hrs)'
  },
  {
    id: 7,
    title: 'Network Access Control & Authentication',
    lectures: 12,
    hours: 24,
    topics: [
      'NAC (Network Access Control) fundamentals',
      '802.1X authentication',
      'RADIUS and TACACS+',
      'Certificate-based authentication',
      'Multi-factor authentication for networks',
      'Guest network management',
      'Device profiling and posture checking',
      'Identity and access management'
    ],
    projects: 'Implement 802.1X authentication | Configure guest network access',
    ibmCourse: 'Network Access Control (16 hrs)'
  },
  {
    id: 8,
    title: 'Capstone Network Security Projects',
    lectures: 6,
    hours: 12,
    topics: [
      'Complete network security assessment',
      'Design secure network architecture',
      'Implement multi-layered security',
      'Network security policy development',
      'Security audit and compliance',
      'Network security documentation',
      'Presentation and reporting',
      'Portfolio development'
    ],
    projects: 'Complete network security implementation | Create security audit report',
    ibmCourse: 'Network Security Capstone (20 hrs)'
  },
  {
    id: 9,
    title: 'Career Assistance',
    lectures: 12,
    hours: 24,
    topics: [
      'Network security career paths',
      'Resume building for network security roles',
      'Certification preparation (CCNA Security, Network+)',
      'Technical interview preparation',
      'Portfolio and GitHub profile',
      'Networking in security community',
      'Job search strategies',
      'Salary negotiation for network security roles'
    ],
    projects: 'Create a network security portfolio | Prepare for network security certifications',
    ibmCourse: 'Career Development in Network Security (10 hrs)'
  }];
