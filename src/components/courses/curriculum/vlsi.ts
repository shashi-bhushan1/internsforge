import { Module } from './types';

export const vlsiModules: Module[] = [
  {
    id: 1,
    title: 'Introduction to VLSI',
    lectures: 0,
    hours: 0,
    topics: [
      'What is VLSI? History and significance',
      'VLSI applications in industry',
      'VLSI design flow overview',
      'Tools used in VLSI design (EDA tools)'
    ]
  },
  {
    id: 2,
    title: 'Digital Electronics Fundamentals',
    lectures: 0,
    hours: 0,
    topics: [
      'Number systems and Boolean algebra',
      'Logic gates and truth tables',
      'Combinational vs. Sequential logic',
      'Basic circuits: adders, multiplexers, flip-flops'
    ]
  },
  {
    id: 3,
    title: 'CMOS Technology Basics',
    lectures: 0,
    hours: 0,
    topics: [
      'Introduction to MOSFETs (NMOS & PMOS)',
      'CMOS inverter characteristics',
      'CMOS logic gate design (NAND, NOR, etc.)',
      'Power dissipation and delay'
    ]
  },
  {
    id: 4,
    title: 'Verilog/VHDL Basics',
    lectures: 0,
    hours: 0,
    topics: [
      'HDL overview and applications',
      'Verilog/VHDL syntax and data types',
      'Modules, ports, and assignments',
      'Writing simple combinational logic'
    ]
  },
  {
    id: 5,
    title: 'Sequential Logic in Verilog/VHDL',
    lectures: 0,
    hours: 0,
    topics: [
      'Flip-flops and latches in HDL',
      'Finite State Machines (FSMs)',
      'Writing and simulating counters, registers',
      'Testbenches for sequential designs'
    ]
  },
  {
    id: 6,
    title: 'RTL Design and Verification',
    lectures: 0,
    hours: 0,
    topics: [
      'Register Transfer Level (RTL) modeling',
      'Behavioral vs Structural design',
      'Simulation using tools (e.g., ModelSim)',
      'Debugging and waveform analysis'
    ]
  },
  {
    id: 7,
    title: 'Synthesis Concepts',
    lectures: 0,
    hours: 0,
    topics: [
      'From RTL to gates: Logic synthesis',
      'Setup and hold times, critical path',
      'Timing analysis basics',
      'Area vs speed vs power trade-offs'
    ]
  },
  {
    id: 8,
    title: 'FPGA Architecture and Design',
    lectures: 0,
    hours: 0,
    topics: [
      'Introduction to FPGA structure',
      'Differences between ASIC and FPGA',
      'Toolchain overview (Vivado, Quartus)',
      'Simple design implementation on FPGA'
    ]
  },
  {
    id: 9,
    title: 'ASIC Flow Introduction',
    lectures: 0,
    hours: 0,
    topics: [
      'ASIC design flow overview',
      'Floorplanning, placement, routing (basics)',
      'Standard cell libraries',
      'Fabrication process overview'
    ]
  },
  {
    id: 10,
    title: 'Major Project and Review',
    lectures: 0,
    hours: 0,
    topics: [
      'Major project (e.g., 4-bit ALU, traffic controller)',
      'Design, simulate, and synthesize',
      'Project report preparation',
      'Feedback and internship completion'
    ]
  }
];
