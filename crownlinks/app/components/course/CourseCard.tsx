import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface CourseCardProps {
  image: string | StaticImageData;
  alt: string;
  instructorImage: string | StaticImageData;
  instructorName: string;
  title: string;
  currentPrice: string;
  originalPrice: string;
  children?: React.ReactNode;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  alt,
  instructorImage,
  instructorName,
  title,
  currentPrice,
  originalPrice,
  children,
}) => (
  <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 flex flex-col w-full min-h-[240px] md:min-h-[320px] h-full">
    <div className="relative w-full h-[100px] md:h-[140px] xl:h-[180px]">
      <Image src={image} alt={alt} layout="fill" objectFit="cover" className="rounded-t-2xl" />
    </div>
    <div className="p-3 md:p-4 flex flex-col flex-1 justify-between h-full">
      <div className="flex-1 flex flex-col">
        <div className="flex items-center mb-2">
          <Image src={instructorImage} alt={instructorName} width={22} height={22} className="rounded-full mr-2 object-cover" />
          <span className="text-gray-700 text-[12px] md:text-sm">By {instructorName}</span>
        </div>
        <h3 className="text-[14px] md:text-[16px] font-bold text-[#242424] mb-2 leading-snug uppercase text-left min-h-[28px] md:min-h-[32px] line-clamp-2 hover:underline cursor-pointer transition-all">{title}</h3>
      </div>
      <div className="mt-4">
        <div className="flex items-baseline mb-4">
          <span className="text-gray-900 font-bold text-[16px] md:text-[18px] mr-2">{currentPrice}</span>
          <span className="text-gray-500 line-through text-[12px] md:text-[14px]">{originalPrice}</span>
        </div>
        {children}
      </div>
    </div>
  </div>
);

export default CourseCard;