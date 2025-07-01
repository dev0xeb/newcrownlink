import Image from 'next/image';
import images from '../../assets/image';

const AboutImage = () => (
    <section className="bg-white py-10 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20">
    <div className="max-w-6xl mx-auto px-2 sm:px-6 md:px-12 lg:px-8">
      <Image
        src={images.home_banner} 
        alt="Students in a classroom with an instructor"
        width={1200} 
        height={600} 
        layout="responsive"
        objectFit="cover"
        className="rounded-lg shadow-lg"
      />
      <p className="mt-6 text-base sm:text-lg md:text-xl text-center">
        {/* Add your about image section text here */}
      </p>
    </div>
  </section>
);

export default AboutImage;