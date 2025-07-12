'use client';

import Image from 'next/image';
import images from '../../assets/image'; // Assuming your image assets are here

const ImageBanner = () => {
  return (
    <section className="bg-white py-0 w-full m-0 p-0 md:py-0">
      <Image
        src={images.home_banner}
        alt="Students in a classroom with an instructor"
        width={1920}
        height={600}
        layout="responsive"
        objectFit="cover"
        className="w-full md:h-[400px] lg:h-[600px] xl:h-[800px]"
      />
    </section>
  );
};

export default ImageBanner; 