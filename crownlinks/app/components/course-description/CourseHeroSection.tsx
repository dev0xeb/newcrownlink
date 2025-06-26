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

const iconClass = "w-5 h-5 text-gray-400 mr-2 inline-block align-middle";

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
  <section className="w-full max-w-screen-2xl mx-auto py-10 px-4 sm:px-8 flex flex-col md:flex-row gap-10 items-start text-lg">
    {/* Left: Course Image */}
    <div className="w-full md:basis-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
      <div className="w-full h-0 pb-[100%] md:pb-[80%] relative rounded-2xl overflow-hidden shadow-lg">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-2xl" />
      </div>
    </div>
    {/* Right: Info */}
    <div className="w-full md:basis-1/2 flex flex-col gap-6 justify-center text-lg">
      <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">{title}</h1>
      <div className="flex items-center gap-3 mb-2">
        <Image src={instructorImage} alt={instructor} width={40} height={40} className="rounded-full object-cover" />
        <span className="text-gray-700 font-medium text-lg">Created by {instructor}</span>
      </div>
      <div className="flex items-end gap-3 mb-2">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-gray-400 line-through text-lg">{oldPrice}</span>
      </div>
      <ul className="space-y-2 mb-4 text-lg">
        <li className="flex items-center text-gray-700"><span className={iconClass}>👤</span> <span className="font-medium w-32">Instructor</span> <span className="ml-auto">{instructor}</span></li>
        <li className="flex items-center text-gray-700"><span className={iconClass}>⏳</span> <span className="font-medium w-32">Duration</span> <span className="ml-auto">{duration}</span></li>
        <li className="flex items-center text-gray-700"><span className={iconClass}>📚</span> <span className="font-medium w-32">Lessons</span> <span className="ml-auto">{lessons}</span></li>
        <li className="flex items-center text-gray-700"><span className={iconClass}>👥</span> <span className="font-medium w-32">Enrolled</span> <span className="ml-auto">{enrolled} STUDENTS</span></li>
        <li className="flex items-center text-gray-700"><span className={iconClass}>🔓</span> <span className="font-medium w-32">Access</span> <span className="ml-auto">{access}</span></li>
      </ul>
      <button className="w-full bg-[#1976d2] hover:bg-[#145bb0] transition text-white font-semibold py-3 rounded-lg text-lg mb-2">Add to cart</button>
      <button className="w-full underline text-[#1976d2] font-semibold py-2 rounded-lg mb-2 text-lg">Apply coupon codes</button>
      <div className="text-xs text-center text-gray-500 mt-2">30-Days Money-Back Guarantee</div>
    </div>
  </section>
);

export default CourseHeroSection; 