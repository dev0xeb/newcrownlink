'use client';

import Image from 'next/image';
import Link from 'next/link';
import images from '../../assets/image';

const defaultCourses = [
  {
    courseImage: images.medication_management_course,
    courseAlt: "Medication Management Course",
    instructorImage: images.instructor_ade_profile,
    instructorName: "ADE INAOLAJI",
    title: "MEDICATION MANAGEMENT",
    currentPrice: "£2000",
    originalPrice: "£2500",
    slug: "medication-management",
  },
  {
    courseImage: images.family_learning_course,
    courseAlt: "Family Learning Course",
    instructorImage: images.instructor_ade_profile,
    instructorName: "ADE INAOLAJI",
    title: "LEVEL 5 DIPLOMA IN LEADERSHIP AND MANAGEMENT FOR ADULT CARE",
    currentPrice: "£2000",
    originalPrice: "£2500",
    slug: "level-5-diploma-in-leadership-and-management-for-adult-care",
  },
  {
    courseImage: images.family_learning_course,
    courseAlt: "Family Learning Course",
    instructorImage: images.instructor_ade_profile,
    instructorName: "ADE INAOLAJI",
    title: "LEVEL 3 DIPLOMA IN ADULT CARE",
    currentPrice: "£2000",
    originalPrice: "£2500",
    slug: "level-3-diploma-in-adult-care",
  },
  {
    courseImage: images.family_learning_course,
    courseAlt: "Family Learning Course",
    instructorImage: images.instructor_ade_profile,
    instructorName: "ADE INAOLAJI",
    title: "FIRE SAFETY AWARENESS",
    currentPrice: "£2000",
    originalPrice: "£2500",
    slug: "fire-safety-awareness",
  },
];

const FeaturedCoursesSection = ({ courses = defaultCourses, title = "Other courses that might interest you" }) => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <Link
              key={index}
              href={`/courses/${course.slug}`}
              className="transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl focus:scale-105 focus:shadow-2xl bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <div className="relative w-full h-[180px] sm:h-[200px] overflow-hidden">
                <Image
                  src={course.courseImage}
                  alt={course.courseAlt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <Image
                    src={course.instructorImage}
                    alt={course.instructorName}
                    width={28}
                    height={28}
                    className="rounded-full mr-2 object-cover"
                  />
                  <span className="text-gray-700 text-sm sm:text-base">By {course.instructorName}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#242424] mb-2 leading-tight min-h-[40px]">
                  {course.title}
                </h3>
                <div className="flex items-baseline mt-4">
                  <span className="text-[#1A6EDC] font-bold text-xl sm:text-2xl mr-2">{course.currentPrice}</span>
                  <span className="text-gray-500 line-through text-sm sm:text-base">{course.originalPrice}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection; 