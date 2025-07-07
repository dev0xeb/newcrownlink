'use client';

import Image from 'next/image';
import images from '../../assets/image'
const Hero = () => {
  return (
    <section className="relative bg-black text-white flex items-center justify-center overflow-hidden min-h-[60vh] md:h-screen px-2 sm:px-4 md:px-12">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.Hero}
          alt="blue background"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
      </div>

      <div className="relative z-5 text-center max-w-9xl mx-auto px-2 sm:px-8 md:px-12 lg:px-20 w-full">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6 md:mb-8 leading-tight tracking-tight">
          Empower Your Future 
          with <br /> Crownlinks Academy and 
          Unlock Boundless <br /> Opportunities
        </h1>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white mb-5 sm:mb-8 md:mb-10 max-w-xs sm:max-w-md md:max-w-xl mx-auto px-1 sm:px-0">
          Learn in-demand skills that drive success in health, social care, leadership and
          management and transform your career today.
        </p>
        <a href="#" className="inline-block w-full sm:w-auto md:w-auto bg-white text-black font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
          Get started
        </a>
      </div>
    </section>
  );
};

export default Hero; 