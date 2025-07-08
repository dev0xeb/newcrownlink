'use client';

import Image from 'next/image';
import Link from 'next/link';
import images from '../../assets/image';

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

const FeaturedCoursesSection = ({ courses = defaultCourses, title = "Other courses that might interest you", onAddToCart, cartItems = [] }: FeaturedCoursesSectionProps) => {
  return (
    <section className="bg-white text-black px-2 sm:px-4 lg:px-12 xl:px-24 py-8">
      <div className="max-w-[1800px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-12">
          {courses.map((course, index) => {
            const inCart = cartItems.some(item => item.slug === course.slug);
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col w-full min-h-[480px] h-full"
              >
                <Link href={`/courses/${course.slug}`}>
                  <div className="relative w-full h-[180px]">
                    <Image
                      src={course.courseImage}
                      alt={course.courseAlt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-2xl"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center mb-4">
                        <Image
                          src={course.instructorImage}
                          alt={course.instructorName}
                          width={32}
                          height={32}
                          className="rounded-full mr-3 object-cover"
                        />
                        <span className="text-gray-700 text-sm sm:text-base">By {course.instructorName}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#242424] mb-4 leading-snug uppercase text-left min-h-[60px]">
                        {course.title}
                      </h3>
                    </div>
                    <div>
                      <div className="flex items-baseline mb-6">
                        <span className="text-gray-900 font-bold text-2xl md:text-3xl mr-2">{course.currentPrice}</span>
                        <span className="text-gray-500 line-through text-lg md:text-xl">{course.originalPrice}</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="px-6 pb-6 mt-auto">
                  <button
                    className="w-full border-2 border-blue-500 text-blue-500 font-semibold py-2 rounded-full transition-colors hover:bg-blue-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => !inCart && onAddToCart && onAddToCart(course)}
                    disabled={inCart}
                  >
                    {inCart ? 'In cart' : 'Add to cart'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;

