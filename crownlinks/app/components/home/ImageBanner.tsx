'use client';

import Image from 'next/image';
import images from '../../assets/image'; // Assuming your image assets are here

const ImageBanner = () => {
  return (
    <section
      className="bg-white py-16 sm:py-24 w-screen relative left-1/2 right-1/2 -mx-[50vw] ml-[-50vw]"
      style={{ boxSizing: 'border-box' }}
    >
      <div className="max-w-9xl mx-auto px-6 sm:px-8 lg:px-20">
        <Image
          src={images.home_banner}
          alt="Students in a classroom with an instructor"
          width={1920}
          height={600}
          layout="responsive"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default ImageBanner; 