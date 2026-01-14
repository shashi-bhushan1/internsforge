import { Module } from './types';

export const bioInformaticsModules: Module[] = [
  {
    id: 1,
    title: 'Introduction to Bioinformatics',
    lectures: 0,
    hours: 0,
    topics: [
      'Overview of Bioinformatics Role in Modern Biology',
      'Types of Biological Data (e.g., DNA, RNA, Proteins, Sequences, Structures)',
      'Databases in Bioinformatics and Data & File Formats',
      'Different Bioinformatic Databases',
      'Different types of file formats, where they are used'
    ]
  },
  {
    id: 2,
    title: 'Sequencing',
    lectures: 0,
    hours: 0,
    topics: [
      'DNA Library',
      'Sequencing',
      'Types of Sequencing (Local and Global Alignment)',
      'Alignment',
      'What is alignment?',
      'What are different types of alignment?',
      'Why and how to perform alignment using various online tools and offline tools?'
    ]
  },
  {
    id: 3,
    title: 'Next-Generation Sequencing Analysis using Bioinformatics',
    lectures: 0,
    hours: 0,
    topics: [
      'Introduction to NGS Technologies',
      'First Generation',
      'Second Generation',
      'Third Generation',
      'Fourth Generation',
      'Quality Control and Preprocessing of NGS Data'
    ]
  },
  {
    id: 4,
    title: 'Data Retrieving',
    lectures: 0,
    hours: 0,
    topics: [
      'Downloading and Installing (Ubuntu, R-studio, etc.)',
      'Installing applications, learning about app settings',
      'Understanding basic commands for these applications',
      'Downloading prerequisite files for projects from various databases such as GEO and ENA',
      'Ubuntu and R commands'
    ]
  },
  {
    id: 5,
    title: 'Differential Gene Expression Pipeline',
    lectures: 0,
    hours: 0,
    topics: [
      'Differential Gene Expression',
      'Different Tools - their commands and how they work theoretically and practically',
      'FastQC',
      'Trimmomatic',
      'Hisat2',
      'SAMtools',
      'Stringtie',
      'Ballgown'
    ]
  },
  {
    id: 6,
    title: 'Differential gene expression analysis',
    lectures: 0,
    hours: 0,
    topics: [
      'Running the Pipeline - Different commands for different tools and how to use them for our data',
      'Analyzing Results (Different tables, and Graphs)'
    ]
  }
];
