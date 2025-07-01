'use client';

import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 text-center px-4 sm:px-6 md:px-12 lg:px-8">
      <div className="max-w-9xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#242424] mb-8">
          Industry Recongnized Favourites
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-12 leading-relaxed sm:leading-loose">
        Accredited courses with certification that provide Certified Status for <br /> individuals who hold them in their sector!
        </p>
        <Link href="/about" className="inline-block bg-[#1A6EDC] text-white font-semibold py-3 px-8 rounded-3xl shadow-lg hover:bg-[#1557B0] transition-colors">
          View all courses
        </Link>
      </div>
    </section>
  );
};

export default AboutSection; 