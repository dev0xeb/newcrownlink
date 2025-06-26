'use client';

import Image from 'next/image';
import images from '../../assets/image'
const Hero = () => {
  return (
    <section className="relative bg-black text-white h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero_img}
          alt="blue background"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
      </div>

      <div className="relative z-5 text-center px-4 sm:px-6 lg:px-8 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
          Empower Your Future 
          with Crownlinks Academy and 
          Unlock Boundless Opportunities
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-xl mx-auto px-2 sm:px-0">
          Learn in-demand skills that drive success in health, social care, leadership and
          management and transform your career today.
        </p>
        <a href="#" className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
          Get started
        </a>
      </div>
    </section>
  );
};

export default Hero; 