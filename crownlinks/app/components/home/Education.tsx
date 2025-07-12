'use client';

import Link from 'next/link';

const Education = () => {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 xl:py-40 text-center px-4 sm:px-6 md:px-12 lg:px-8 xl:px-12">
      <div className="max-w-9xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-[#242424] mb-8 xl:mb-12">
        Redefining Quality Online Education
        </h2>
        <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-gray-700 mb-12 xl:mb-16 leading-relaxed sm:leading-loose xl:leading-relaxed">
        Crownlinks Academy offers accessible, high-quality online courses in Technology, Business, Healthcare, <br /> Education, and Digital Skills. We empower learners with practical skills to thrive in today's job market and support <br /> their career and personal growth.
        </p>
        <Link href="/about" className="inline-block bg-[#1A6EDC] text-white font-semibold py-3 px-8 xl:py-4 xl:px-12 xl:text-lg rounded-3xl shadow-lg hover:bg-[#1557B0] transition-colors">
          Read about us
        </Link>
      </div>
    </section>
  );
};

export default Education; 