import Image from 'next/image';
import images from '../../assets/image';

const AboutImage = () => (
    <section className="bg-white py-10 sm:py-16 xl:py-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
    <div className="max-w-6xl xl:max-w-7xl mx-auto px-2 sm:px-6 md:px-12 lg:px-8 xl:px-12">
      <Image
        src={images.home_banner} 
        alt="Students in a classroom with an instructor"
        width={1200} 
        height={600} 
        layout="responsive"
        objectFit="cover"
        className="rounded-lg shadow-lg"
      />
      <p className="mt-6 xl:mt-8 text-base sm:text-lg md:text-xl xl:text-2xl text-center">
        {/* Add your about image section text here */}
      </p>
    </div>
  </section>
);

export default AboutImage;