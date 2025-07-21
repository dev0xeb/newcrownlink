'use client';

import Image from 'next/image';
import images from '../../assets/image'
const Hero = () => {
  return (
    <section className="relative bg-black text-white flex items-center justify-center overflow-hidden min-h-[60vh] md:h-[686px] px-2 sm:px-4 md:px-12 xl:px-24">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.Hero}
          alt="blue background"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
      </div>

      <div className="relative z-5 text-center max-w-9xl mx-auto px-2 sm:px-8 md:px-12 lg:px-20 xl:px-32 w-full">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[56px] font-bold mb-[24px] leading-tight tracking-tight">
          Empower Your Future 
          <br /> with  Crownlinks Academy and <br />
          Unlock Boundless  Opportunities
        </h1>
        <p className="text-[20px] text-white mb-[40px] max-w-xs sm:max-w-md md:max-w-xl xl:max-w-2xl mx-auto px-1 sm:px-0">
          Learn in-demand skills that drive success in health, social care, leadership and
          management and transform your career today.
        </p>
        <a href="/signup" className="inline-block bg-white text-black font-bold rounded-3xl shadow-lg hover:bg-gray-100 transition-colors" style={{ height: '60px', width: '143px', lineHeight: '60px', padding: 0 }}>
          Get started
        </a>
      </div>
    </section>
  );
};

export default Hero; 