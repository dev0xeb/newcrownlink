import Image from "next/image";
import Link from "next/link";
import images from "../assets/image"; // Assuming logo is in images.logo

const Footer = () => {
  return (
    <footer className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-9xl mx-auto px-6 sm:px-8 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
        <div className="col-span-1">
          <div className="flex items-center mb-4">
            <Image src={images.logo} alt="Crownlinks Academy Logo" width={150} height={40} />
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            We are providing high-quality online courses for about ten years. Our all instructors expert and highly experienced. We provide all kinds of course materials to our students
          </p>
        </div>

        <div className="col-span-1">
          <h3 className="font-semibold text-lg sm:text-xl mb-4">Features</h3>
          <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
            <li><Link href="#" className="hover:underline">Courses</Link></li>
            <li><Link href="#" className="hover:underline">About Us</Link></li>
            <li><Link href="#" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="font-semibold text-lg sm:text-xl mb-4">Help Center</h3>
          <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
            <li><Link href="#" className="hover:underline">Support</Link></li>
            <li><Link href="#" className="hover:underline">Get Help</Link></li>
            <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:underline">Refund Policy</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="font-semibold text-lg sm:text-xl mb-4">Contact Info</h3>
          <p className="text-gray-600 text-sm sm:text-base">Call Us: 07539382444</p>
          <p className="text-gray-600 text-sm sm:text-base">Mail us: ade@crownlinksinternational.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 