'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import images from '../../assets/image'

const Hero = () => {
  return (
    <section className="relative bg-black text-white flex items-center justify-center overflow-hidden min-h-[60vh] md:h-[686px] px-2 sm:px-4 md:px-12 xl:px-24">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.Hero}
          alt="blue background"
          fill
          className="object-cover opacity-70"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70" aria-hidden="true" />

      <div className="relative z-20 text-center max-w-9xl mx-auto px-2 sm:px-8 md:px-12 lg:px-20 xl:px-32 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[56px] font-bold mb-[24px] leading-tight tracking-tight"
        >
          Empower Your Future
          <br /> with  Crownlinks Academy and <br />
          Unlock Boundless  Opportunities
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="text-[20px] text-white mb-[40px] max-w-xs sm:max-w-md md:max-w-xl xl:max-w-2xl mx-auto px-1 sm:px-0"
        >
          Learn in-demand skills that drive success in health, social care, leadership and
          management and transform your career today.
        </motion.p>
        <motion.a
          href="/signup"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-white text-black font-bold rounded-[100px] shadow-lg hover:bg-gray-100 transition-colors h-[60px] w-[143px] leading-[60px] px-0"
        >
          Get started
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
