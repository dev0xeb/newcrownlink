'use client';

import Link from 'next/link';

const CtaSection = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-9xl mx-auto px-6 sm:px-8 lg:px-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#242424] mb-6 leading-tight">
          Elevate Your Future with <br className="hidden md:block" />Crownlinks Academy
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-10 leading-relaxed">
          Join millions of learners worldwide. Our platform equips you with the skills and
          resources to pursue your passions and reach your goals.
        </p>
        <Link href="/signup" className="inline-block bg-[#1A6EDC] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-[#1557B0] transition-colors">
          Get started for free
        </Link>
      </div>
    </section>
  );
};

export default CtaSection; 