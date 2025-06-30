'use client';

import Link from 'next/link';
import Image from 'next/image';
import { coursesData } from '../../data/coursesData';

const CoursesSection = () => {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-9xl mx-auto px-6 sm:px-8 lg:px-20 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#242424] mb-6">
          Expand Your Career Opportunity With <br className="hidden md:block" />Our Courses
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed">
          Gain practical skills and industry knowledge that open doors to new roles
          and help you stand out in today's competitive job market.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {coursesData.map((course, index) => (
            <Link
              key={index}
              href={`/courses/${course.slug}`}
              className="transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl focus:scale-105 focus:shadow-2xl bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col h-full"
            >
              <div className="relative w-full h-[200px] sm:h-[250px] overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 text-left flex flex-col flex-grow">
  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#242424] mb-2 uppercase tracking-wide">
    {course.title}
  </h3>
  <p className="text-gray-700 text-base sm:text-lg leading-relaxed flex-grow">
    {course.description}
  </p>
  <button
    className="mt-6 w-full border border-[#1A6EDC] text-[#1A6EDC] font-semibold py-2 rounded-lg transition-colors hover:bg-[#1A6EDC] hover:text-white"
    // onClick={() => handleAddToCart(course)} // Uncomment and implement if you want functionality
  >
    Add to cart
  </button>
</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection; 