'use client';

import Image from 'next/image';
import Link from 'next/link';
import images from '../../assets/image';
import { useCart } from '../../components/checkout/CartContext';
import { useState } from 'react';
import CourseCard from '../course/CourseCard';

type Course = {
  id: string;
  slug: string;
  courseImage: any;
  courseAlt: string;
  instructorImage: any;
  instructorName: string;
  title: string;
  currentPrice: string;
  originalPrice: string;
};

interface FeaturedCoursesSectionProps {
  courses?: Course[];
  title?: string;
  onAddToCart?: (course: Course) => void;
  cartItems?: { id?: number | string; slug: string }[];
}

const defaultCourses = [
  {
    id: 'medication-management',
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
    id: 'level-5-diploma-in-leadership-and-management-for-adult-care',
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
    id: 'level-3-diploma-in-adult-care',
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
    id: 'fire-safety-awareness',
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

const FeaturedCoursesSection = ({ courses = defaultCourses, title = "" }: FeaturedCoursesSectionProps) => {
  const { addToCart } = useCart();
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleAddToCart = (course: Course) => {
    addToCart({
      id: course.id,
      image: course.courseImage,
      title: course.title,
      price: Number(course.currentPrice.replace('£', '')),
      quantity: 1,
      description: course.courseAlt || '',
    });
    setSuccessMsg(`${course.title} successfully added to cart!`);
    setTimeout(() => setSuccessMsg(null), 2000);
  };

  return (
    <section className="bg-white text-black px-0">
      <div className="max-w-[1800px] mx-[40px]">
        {successMsg && (
          <div className="mb-4 px-4 py-2 bg-green-100 text-green-800 rounded text-center font-semibold">
            {successMsg}
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-10 text-center">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {courses.map((course, index) => {
            const inCart = false; // No cartItems prop, so always false for now
            return (
              <div key={index} className="flex flex-col h-full">
                <Link href={`/coursesDescription/${course.slug}`} className="flex-1">
                  <CourseCard
                    image={course.courseImage}
                    alt={course.courseAlt}
                    instructorImage={course.instructorImage}
                    instructorName={course.instructorName}
                    title={course.title}
                    currentPrice={course.currentPrice}
                    originalPrice={course.originalPrice}
                  >
                    <button
                      className="w-full border-2 border-blue-500 text-blue-500 font-semibold py-2 rounded-full transition-colors hover:bg-blue-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                      onClick={e => { e.preventDefault(); handleAddToCart(course); }}
                    >
                      Add to cart
                    </button>
                  </CourseCard>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection; 

