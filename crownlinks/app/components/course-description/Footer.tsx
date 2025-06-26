const Footer = () => (
  <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-8 mt-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-8">
      {/* Left: Logo and description */}
      <div className="flex-1 mb-8 md:mb-0 flex flex-col items-start">
        <div className="flex items-center mb-4">
          <img src="/logo.png" alt="Crownlinks Logo" className="h-10 mr-2" />
          <span className="font-bold text-2xl text-[#1976d2]">CROWNLINKS</span>
        </div>
        <p className="text-gray-600 text-base max-w-xs">
          We are providing high-quality online courses for about ten years. Our all instructors expert and highly experienced. We provide all kinds of course materials to our students.
        </p>
      </div>
      {/* Right: Links */}
      <div className="flex-[2] grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold mb-3 text-lg">Features</h4>
          <ul className="text-gray-600 text-base space-y-2">
            <li>Courses</li>
            <li>About Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-lg">Help Center</h4>
          <ul className="text-gray-600 text-base space-y-2">
            <li>Support</li>
            <li>Get Help</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-lg">Contact Info</h4>
          <ul className="text-gray-600 text-base space-y-2">
            <li>Call us: 07530382444</li>
            <li>Mail us: ade@crownlinksinternational.com</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 