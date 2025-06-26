'use client';

import Image from 'next/image';
import images from '../../assets/image'; // Assuming your image assets are here

const ImageBanner = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Image
          src={images.home_banner} 
          alt="Students in a classroom with an instructor"
          width={1200} 
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