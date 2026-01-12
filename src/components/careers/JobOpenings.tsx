'use client';

import Link from 'next/link';

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 2.5C7.5 2.5 5 4.5 5 7.5C5 12.5 10 17.5 10 17.5C10 17.5 15 12.5 15 7.5C15 4.5 12.5 2.5 10 2.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface JobCardProps {
  title: string;
  tag: string;
  description: string;
  location: string;
  type: string;
  route?: string;
}

const JobCard = ({ title, tag, description, location, type, route }: JobCardProps) => {
  if (route) {
    return (
      <Link href={route} className="block">
        <div className="bg-gray-100 rounded-xl p-6 md:p-8 hover:shadow-lg transition-all cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h3>
            <span className="bg-brand-orange text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-4">
              {tag}
            </span>
          </div>
          <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 text-sm md:text-base">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPinIcon className="w-4 h-4 md:w-5 md:h-5" />
              <span>{location}</span>
            </div>
            <div className="text-gray-600">
              <span className="font-medium">Type:</span> {type}
            </div>
          </div>
          <div className="bg-brand-orange hover:bg-brand-cyan text-white font-semibold px-6 py-2.5 rounded-full transition-colors text-sm md:text-base w-full md:w-auto cursor-pointer shadow-sm text-center inline-block">
            Know More
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="bg-gray-100 rounded-xl p-6 md:p-8 hover:shadow-lg transition-all">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h3>
        <span className="bg-brand-orange text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-4">
          {tag}
        </span>
      </div>
      <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 text-sm md:text-base">
        <div className="flex items-center gap-2 text-gray-600">
          <MapPinIcon className="w-4 h-4 md:w-5 md:h-5" />
          <span>{location}</span>
        </div>
        <div className="text-gray-600">
          <span className="font-medium">Type:</span> {type}
        </div>
      </div>
      <div className="bg-brand-orange hover:bg-brand-cyan text-white font-semibold px-6 py-2.5 rounded-full transition-colors text-sm md:text-base w-full md:w-auto cursor-pointer shadow-sm text-center inline-block">
        Know More
      </div>
    </div>
  );
};

const jobs = [
  {
    title: 'Business Development Associate',
    tag: 'Sales',
    description: 'We are looking for experience engineer for our team',
    location: 'Banglore, India',
    type: 'Full Time',
    route: '/careers/business-development-associate',
  },
  {
    title: 'Marketing Intern',
    tag: 'Marketing',
    description:
      'Mindenious Edutech is seeking enthusiastic and creative Marketing Interns to join our team. Gain hands-on experience in content creation, social media management, market research, and more in a dynamic edtech environment.',
    location: 'Bangalore, India',
    type: 'Internship',
    route: '/careers/marketing-intern',
  },
  {
    title: 'Human Resource Intern',
    tag: 'HR',
    description:
      'We are seeking a motivated Human Resource Intern to support our HR team in various administrative and operational tasks. This is an excellent opportunity for students or recent graduates looking to gain hands-on experience in human resources.',
    location: 'Bangalore, India',
    type: 'Internship',
    route: '/careers/human-resource-intern',
  },
  {
    title: 'Business Development Manager',
    tag: 'Management',
    description:
      'We are looking for a highly skilled and driven Business Development Manager to lead our efforts in identifying new business opportunities and fostering strategic partnerships.',
    location: 'Bangalore, India',
    type: 'Full Time',
    route: '/careers/business-development-manager',
  },
  {
    title: 'Business Development Team Lead',
    tag: 'Management',
    description:
      'We are looking for an experienced and strategic Business Development Team Lead to spearhead our business growth initiatives.',
    location: 'Bangalore, India',
    type: 'Full Time',
    route: '/careers/business-development-team-lead',
  },
];

export default function JobOpenings() {
  return (
    <section
      id="job-openings"
      className="bg-brand-page py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-[145px] xl:pr-[145px]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
          Current Job Openings
        </h2>
        <div className="space-y-6 md:space-y-8">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}

