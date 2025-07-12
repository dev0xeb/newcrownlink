'use client';

import Link from 'next/link';

const CtaSection = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24 lg:py-32 xl:py-40 px-4 sm:px-6 md:px-12 lg:px-8 xl:px-12 text-center">
      <div className="max-w-9xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-[#242424] mb-6 xl:mb-8 leading-tight">
          Elevate Your Future with <br className="hidden md:block" />Crownlinks Academy
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl text-gray-700 mb-10 xl:mb-16 leading-relaxed">
          Join millions of learners worldwide. Our platform equips you with the skills and
          resources to pursue your passions and reach your goals.
        </p>
        <Link href="/signup" className="inline-block bg-[#1A6EDC] text-white font-semibold py-3 px-8 xl:py-4 xl:px-12 xl:text-lg rounded-lg shadow-lg hover:bg-[#1557B0] transition-colors">
          Get started for free
        </Link>
      </div>
    </section>
  );
};

export default CtaSection; 