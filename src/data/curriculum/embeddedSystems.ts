import { Module } from './types';

export const embeddedSystemsModules: Module[] = [
  {
    id: 1,
    title: 'Introduction of Microprocessor & Microcontroller',
    lectures: 0,
    hours: 0,
    topics: [
      'Introduction of Architecture of Microprocessor & Microcontroller'
    ]
  },
  {
    id: 2,
    title: 'Introduction of embedded system, Features of embedded system',
    lectures: 0,
    hours: 0,
    topics: [
      'Application of embedded system',
      'Practical Examples',
      'Characteristics',
      'Types of Embedded Systems'
    ]
  },
  {
    id: 3,
    title: 'Hardware Software Co-design',
    lectures: 0,
    hours: 0,
    topics: [
      'Challenges in embedded computing design',
      'Co-design Process',
      'Why co-design',
      'Architecture'
    ]
  },
  {
    id: 4,
    title: 'Introduction to ATmega/Arduino',
    lectures: 0,
    hours: 0,
    topics: [
      'Arduino Boards',
      'which Arduino is best?',
      'Memory map of Arduino',
      'pin configuration',
      'ATmega328 features'
    ]
  },
  {
    id: 5,
    title: 'Register map ATmega328',
    lectures: 0,
    hours: 0,
    topics: [
      'Arduino C functions vs register commands'
    ]
  },
  {
    id: 6,
    title: 'Introduction to simulation software/editors',
    lectures: 0,
    hours: 0,
    topics: [
      'Proteus: know-how',
      'TinkerCAD introduction'
    ]
  },
  {
    id: 7,
    title: 'Basics Programs with Atmega/Arduino',
    lectures: 0,
    hours: 0,
    topics: [
      'LED interfacing in proteus and TinkerCAD',
      'Controlling LED with a Switch'
    ]
  },
  {
    id: 8,
    title: 'Basics Programs with Atmega/Arduino',
    lectures: 0,
    hours: 0,
    topics: [
      'LED with serial-port',
      'LED with switch + serial port'
    ]
  },
  {
    id: 9,
    title: 'Advanced Programming: Interfacing 8 LEDs with a single port of ATmega/Arduino and displaying 10+ different patterns',
    lectures: 0,
    hours: 0,
    topics: [
      'All on-off',
      'First four on-off',
      'Odd-Even',
      'Left-shift and right-shift',
      'Curtain effect: left and right',
      'Converge and Diverge'
    ]
  },
  {
    id: 10,
    title: 'Advanced Programming: Seven Segment Display Theory and Practical Use of millis function instead of delay and its advantages',
    lectures: 0,
    hours: 0,
    topics: [
      'Concept and types of segments',
      'Interfacing with Arduino/ATmega',
      'Single-Digit, 2-digit and 4-digit',
      'Controlling each stripe of seven segment'
    ]
  },
  {
    id: 11,
    title: 'Liquid Crystal Display theory and practical',
    lectures: 0,
    hours: 0,
    topics: [
      'Concept of LCD',
      'The internal architecture of LCD with pin configuration',
      'Internal registers of LCD',
      'Algorithm to send data and commands to LCD from Microcontroller',
      'Difference between 4-bit and 8-bit LCD operation'
    ]
  },
  {
    id: 12,
    title: 'Advanced Programming: Interfacing LCD with Arduino to',
    lectures: 0,
    hours: 0,
    topics: [
      'Displaying various patterns and Effects',
      'Process of creating custom characters on LCD',
      'Hex commands of LCD'
    ]
  },
  {
    id: 13,
    title: 'Introduction to motors and actuators',
    lectures: 0,
    hours: 0,
    topics: [
      'Interfacing different types of motors with Arduino/ATmega'
    ]
  },
  {
    id: 14,
    title: 'Projects',
    lectures: 0,
    hours: 0,
    topics: [
      'Interfacing LDR and displaying the light intensity data on LCD',
      'Designing a traffic light controller using LEDs and Seven Segment',
      'Interfacing temperature sensor and displaying the readings on LCD',
      'Interfacing LEDs, LCD and Motor: all the same time to Arduino/ATmega'
    ]
  }
];
