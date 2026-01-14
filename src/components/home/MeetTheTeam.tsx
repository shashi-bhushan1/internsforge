'use client';

import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Megha Shetty",
    title: "CA Finalist",
    image: "/mentors/meghaShetty.webp",
    linkedin: "#"
  },
  {
    name: "Tushar Agarwal",
    title: "Drone Skill Training",
    image: "/mentors/tusharAgarwal.webp",
    linkedin: "#"
  },
  {
    name: "Aabid Padder",
    title: "Data Analyst",
    image: "/mentors/Aabid Padder.webp",
    linkedin: "#"
  },
  {
    name: "Suman Shekhar",
    title: "SWE 2 @People Inc.",
    image: "/mentors/sumanSekhar.webp",
    linkedin: "#"
  },
  {
    name: "Sakshi Pandey",
    title: "Cyber Security & Digital Forensics",
    image: "/mentors/sakshiPandey.webp",
    linkedin: "#"
  },
  {
    name: "Uttam Grade",
    title: "Data Scientist",
    image: "/mentors/uttamGrade.webp",
    linkedin: "#"
  },
  {
    name: "Subhasis Thakurta",
    title: "Human Resources Leader",
    image: "/mentors/SubhashisThakurta.webp",
    linkedin: "#"
  },
  {
    name: "Arib Nawal",
    title: "Data science corporate trainer",
    image: "/mentors/aribNawal.webp",
    linkedin: "#"
  },
  {
    name: "Iqbal Ansari",
    title: "Full Stack Developer",
    image: "/mentors/Iqbal Ansari.webp",
    linkedin: "#"
  }
];

export default function MeetTheTeam() {
  return (
    <section className="bg-brand-page py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-base font-normal text-gray-800 mb-2">
            Meet the team
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900">
            Meet our Dedicated Team of<br />Educators and Innovators
          </h1>
        </div>

        {/* Team Grid Container - 880px × 1090px */}
        <div className="w-full lg:w-[880px] h-auto lg:h-[1090px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden w-[280px] h-[350px] p-[10px] border-2 border-gray-200 transition-all duration-300 hover:border-brand-orange hover:shadow-xl group"
              >
                <div className="relative w-full h-full rounded overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-300"
                  />
                  
                  {/* White overlay card that slides up from bottom on hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white rounded-b-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out px-4 py-3 flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {member.title}
                      </p>
                    </div>
                    {/* LinkedIn Icon */}
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0 ml-3 hover:bg-blue-700 transition-colors cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

