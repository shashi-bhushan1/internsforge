export interface Module {
  id: number;
  title: string;
  lectures: number;
  hours: number;
  topics: string[];
  projects?: string;
  ibmCourse?: string;
}

export type CourseType = 
  | 'web-development'
  | 'full-stack-web-development'
  | 'cyber-security' 
  | 'digital-marketing' 
  | 'network-security' 
  | 'artificial-intelligence' 
  | 'machine-learning' 
  | 'data-science'
  | 'data-analytics'
  | 'business-analytics'
  | 'cloud-computing'
  | 'python'
  | 'java'
  | 'embedded-systems'
  | 'vlsi'
  | 'autocad'
  | 'human-resources-management'
  | 'finance'
  | 'stock-market'
  | 'ui-ux-design'
  | 'psychology'
  | 'hybrid-electrical-vehicles'
  | 'internet-of-things'
  | 'nano-technology'
  | 'data-structure-algorithm'
  | 'battery-electric-vehicles'
  | 'bio-informatics'
  | 'drone-mechanics';
