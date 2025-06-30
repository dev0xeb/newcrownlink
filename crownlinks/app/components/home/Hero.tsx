'use client';

import Image from 'next/image';
import images from '../../assets/image'
const Hero = () => {
  return (
    <section className="relative bg-black text-white flex items-center justify-center overflow-hidden min-h-[60vh] md:h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero_img}
          alt="blue background"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
      </div>

      <div className="relative z-5 text-center max-w-9xl mx-auto px-6 sm:px-8 lg:px-20">
        <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
          Empower Your Future 
          with <br /> Crownlinks Academy and 
          Unlock Boundless <br /> Opportunities
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