import React from 'react';
import CourseCard from './CourseCard';
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

interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
    {courses.map((course) => (
      <CourseCard key={course.id} {...course} />
    ))}
  </div>
);

export default CourseList; 