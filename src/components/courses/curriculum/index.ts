import { Module } from './types';

// Import all course modules
export { webDevelopmentModules } from './webDevelopment';
export { cyberSecurityModules } from './cyberSecurity';
export { digitalMarketingModules } from './digitalMarketing';
export { networkSecurityModules } from './networkSecurity';
export { artificialIntelligenceModules } from './artificialIntelligence';
export { machineLearningModules } from './machineLearning';
export { dataScienceModules } from './dataScience';
export { dataAnalyticsModules } from './dataAnalytics';
export { businessAnalyticsModules } from './businessAnalytics';
export { cloudComputingModules } from './cloudComputing';
export { pythonModules } from './python';
export { javaModules } from './java';
export { embeddedSystemsModules } from './embeddedSystems';
export { vlsiModules } from './vlsi';
export { autocadModules } from './autocad';
export { humanResourcesManagementModules } from './humanResourcesManagement';
export { financeModules } from './finance';
export { stockMarketModules } from './stockMarket';
export { uiUxDesignModules } from './uiUxDesign';
export { psychologyModules } from './psychology';
export { hybridElectricalVehiclesModules } from './hybridElectricalVehicles';
export { internetOfThingsModules } from './internetOfThings';
export { nanotechnologyModules } from './nanotechnology';
export { dataStructureAlgorithmModules } from './dataStructureAlgorithm';
export { batteryElectricVehiclesModules } from './batteryElectricVehicles';
export { bioInformaticsModules } from './bioInformatics';
export { droneMechanicsModules } from './droneMechanics';

// Re-export types
export type { Module, CourseType } from './types';

// Export course configuration
export interface CourseConfig {
  title: string;
  subtitle: string;
  curriculumTitle: string;
}

export const courseConfigs: Record<string, CourseConfig> = {
  'web-development': {
    title: 'Web Development',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our Web Development Course.'
  },
  'cyber-security': {
    title: 'Cybersecurity',
    subtitle: 'With AI-Powered Defense',
    curriculumTitle: 'The Curriculum That Powers Our Cyber Security Course.'
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    subtitle: 'With AI-Driven Strategies',
    curriculumTitle: 'The Curriculum That Powers Our Digital Marketing Course.'
  },
  'network-security': {
    title: 'Network Security',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our Network Security Course.'
  },
  'artificial-intelligence': {
    title: 'Artificial Intelligence',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our Artificial Intelligence Course.'
  },
  'machine-learning': {
    title: 'Machine Learning',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our Machine Learning Course.'
  },
  'data-science': {
    title: 'Data Science',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our Data Science Course.'
  },
  'data-analytics': {
    title: 'Data Analytics',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our Data Analytics Course.'
  },
  'business-analytics': {
    title: 'Business Analytics',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our Business Analytics Course.'
  },
  'cloud-computing': {
    title: 'Cloud Computing',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our Cloud Computing Course.'
  },
  'python': {
    title: 'Programming in Python',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our Programming in Python Course.'
  },
  'java': {
    title: 'Programming in Java',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our Programming in Java Course.'
  },
  'embedded-systems': {
    title: 'Embedded Systems',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our Embedded Systems Course.'
  },
  'vlsi': {
    title: 'VLSI',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our VLSI Course.'
  },
  'autocad': {
    title: 'AutoCAD',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our AutoCAD Course.'
  },
  'human-resources-management': {
    title: 'Human Resources & Management',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our Human Resources & Management Course.'
  },
  'finance': {
    title: 'Finance',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our Finance Course.'
  },
  'stock-market': {
    title: 'Stock Market',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our Stock Market Course.'
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our UI/UX Design Course.'
  },
  'psychology': {
    title: 'Psychology',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our Psychology Course.'
  },
  'hybrid-electrical-vehicles': {
    title: 'Hybrid Electrical Vehicles',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our HEV Course.'
  },
  'internet-of-things': {
    title: 'Internet of Things',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our Internet of Things (IoT) Course.'
  },
  'nano-technology': {
    title: 'Nanotechnology',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our Nano Technology Course.'
  },
  'data-structure-algorithm': {
    title: 'Data Structure & Algorithm',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our Data Structure & Algorithm Course.'
  },
  'battery-electric-vehicles': {
    title: 'Battery Electric Vehicles',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our Battery Electric Vehicles (BEVs) Course.'
  },
  'bio-informatics': {
    title: 'Bio-Informatics',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our Bio-Informatics Course.'
  },
  'drone-mechanics': {
    title: 'Drone Mechanics',
    subtitle: '',
    curriculumTitle: 'The Curriculum That Powers Our Drone Mechanics Course.'
  }
};
