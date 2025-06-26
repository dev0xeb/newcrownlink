// app/components/about/AboutCTA.tsx
import Link from 'next/link';

const CallToActionSection = () => (
  <section className="bg-white py-16 text-center px-4">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Elevate Your Future with Crownlinks Academy</h2>
    <p className="text-gray-700 mb-8">
      Join millions of learners worldwide. Our platform equips you with the skills and resources to pursue your passions and reach your goals.
    </p>
    <Link href="/signup" className="inline-block bg-[#1A6EDC] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-[#1557B0] transition-colors">
      Get started for free
    </Link>
  </section>
);

export default CallToActionSection;