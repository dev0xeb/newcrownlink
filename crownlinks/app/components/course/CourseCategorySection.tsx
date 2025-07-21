import React from 'react';
import CourseList from './CourseList';
import { StaticImageData } from 'next/image';

interface Course {
  id: string;
  image: string | StaticImageData;
  alt: string;
  instructorImage: string | StaticImageData;
  instructorName: string;
  title: string;
  currentPrice: string;
  originalPrice: string;
}

interface CourseCategorySectionProps {
  title: string;
  courses: Course[];
}

const CourseCategorySection: React.FC<CourseCategorySectionProps> = ({ title, courses }) => (
  <div className="text-2xl font-bold mb-6 mx-[40px]">
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <CourseList courses={courses} />
    </section>
  </div>
);

export default CourseCategorySection; 