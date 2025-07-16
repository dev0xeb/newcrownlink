import React from 'react';

interface CoursePageHeaderProps {
  title?: string;
}

const CoursePageHeader: React.FC<CoursePageHeaderProps> = ({ title = 'Courses' }) => (
  <div className="bg-[#1A6EDC] h-[220px] md:h-[300px] xl:h-[368px] flex items-center justify-center text-center">
    <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white">{title}</h1>
  </div>
);

export default CoursePageHeader; 