import Image, { StaticImageData } from 'next/image';

interface CourseHeroSectionProps {
  image: string | StaticImageData;
  title: string;
  instructor: string;
  instructorImage: string | StaticImageData;
  price: string;
  oldPrice: string;
  duration: string;
  lessons: number;
  enrolled: number;
  access: string;
}

const iconClass = "w-5 h-5 xl:w-7 xl:h-7 text-gray-400 mr-2 inline-block align-middle";

const CourseHeroSection: React.FC<CourseHeroSectionProps> = ({
  image,
  title,
  instructor,
  instructorImage,
  price,
  oldPrice,
  duration,
  lessons,
  enrolled,
  access
}) => (
  <section className="w-full max-w-screen-2xl mx-auto py-10 xl:py-20 px-4 sm:px-8 md:px-12 xl:px-32 flex flex-col md:flex-row gap-10 md:gap-16 xl:gap-24 items-start text-lg xl:text-xl">
    {/* Left: Course Image */}
    <div className="w-full md:basis-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
      <div className="w-full h-0 pb-[100%] md:pb-[80%] xl:pb-[60%] relative rounded-2xl overflow-hidden shadow-lg">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-2xl" />
      </div>
    </div>
    {/* Right: Info */}
    <div className="w-full md:basis-1/2 flex flex-col gap-6 xl:gap-10 justify-center text-lg xl:text-xl">
      <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-2 xl:mb-4 leading-tight">{title}</h1>
      <div className="flex items-center gap-3 xl:gap-5 mb-2 xl:mb-4">
        <Image src={instructorImage} alt={instructor} width={40} height={40} className="rounded-full object-cover xl:w-16 xl:h-16" />
        <span className="text-gray-700 font-medium text-lg xl:text-xl">Created by {instructor}</span>
      </div>
      <div className="flex items-end gap-3 xl:gap-5 mb-2 xl:mb-4">
        <span className="text-3xl xl:text-5xl font-bold">{price}</span>
        <span className="text-gray-400 line-through text-lg xl:text-2xl">{oldPrice}</span>
      </div>
      <ul className="space-y-2 xl:space-y-4 mb-4 xl:mb-8 text-lg xl:text-xl">
        <li className="flex items-center text-gray-700"><span className={iconClass}>👤</span> <span className="font-medium w-32 xl:w-40">Instructor</span> <span className="ml-auto">{instructor}</span></li>
        <li className="flex items-center text-gray-700"><span className={iconClass}>⏳</span> <span className="font-medium w-32 xl:w-40">Duration</span> <span className="ml-auto">{duration}</span></li>
        <li className="flex items-center text-gray-700"><span className={iconClass}>📚</span> <span className="font-medium w-32 xl:w-40">Lessons</span> <span className="ml-auto">{lessons}</span></li>
        <li className="flex items-center text-gray-700"><span className={iconClass}>👥</span> <span className="font-medium w-32 xl:w-40">Enrolled</span> <span className="ml-auto">{enrolled} STUDENTS</span></li>
        <li className="flex items-center text-gray-700"><span className={iconClass}>🔓</span> <span className="font-medium w-32 xl:w-40">Access</span> <span className="ml-auto">{access}</span></li>
      </ul>
      <button className="w-full bg-[#1976d2] hover:bg-[#145bb0] transition text-white font-semibold py-3 xl:py-4 rounded-lg text-lg xl:text-xl mb-2 xl:mb-4">Add to cart</button>
      <button className="w-full underline text-[#1976d2] font-semibold py-2 xl:py-3 rounded-lg mb-2 xl:mb-4 text-lg xl:text-xl">Apply coupon codes</button>
      <div className="text-xs xl:text-base text-center text-gray-500 mt-2 xl:mt-4">30-Days Money-Back Guarantee</div>
    </div>
  </section>
);

export default CourseHeroSection; 