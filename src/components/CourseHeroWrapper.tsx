'use client';

import { useSearchParams } from 'next/navigation';
import CourseHero from './CourseHero';

interface CourseHeroWrapperProps {
  courseName: string;
  defaultDescription: string;
  defaultImage?: string;
  price?: string;
  chapters?: number;
  lessons?: number;
}

export default function CourseHeroWrapper({ 
  courseName, 
  defaultDescription,
  defaultImage = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  price,
  chapters,
  lessons
}: CourseHeroWrapperProps) {
  const searchParams = useSearchParams();
  const imageUrl = searchParams.get('image') || defaultImage;
  
  return (
    <CourseHero
      courseName={courseName}
      description={defaultDescription}
      imageUrl={imageUrl}
      price={price}
      chapters={chapters}
      lessons={lessons}
    />
  );
}

