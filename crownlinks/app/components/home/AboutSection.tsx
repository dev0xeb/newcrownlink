'use client';

import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#242424] mb-8">
          Redefining Quality Online Education
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-12 leading-relaxed sm:leading-loose">
          Crownlinks Academy offers accessible, high-quality online courses in Technology, Business, Healthcare,
          Education, and Digital Skills. We empower learners with practical skills to thrive in today's job market and support
          their career and personal growth.
        </p>
        <Link href="/about" className="inline-block bg-[#1A6EDC] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-[#1557B0] transition-colors">
          Read about us
        </Link>
      </div>
    </section>
  );
};

export default AboutSection; 