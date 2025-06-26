'use client';

const features = [
  {
    title: "High Quality Courses",
    description: "Our high-quality standards are reflected in the meticulously crafted content designed to meet the highest educational benchmarks.",
  },
  {
    title: "Expert Instructors",
    description: "Learn from professionals who bring real-world insights, practical knowledge, and a deep understanding of industry trends into the virtual classroom.",
  },
  {
    title: "Personalized Learning Paths",
    description: "Break down complex topics into structured lessons that match your learning style and pace, ensuring better understanding and retention.",
  },
  {
    title: "Immersive Learning Experience",
    description: "Enhance your understanding with interactive activities, real-world projects, and collaborative discussions that bring learning to life.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#242424] mb-6">
          Why choose Crownlinks Academy.
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed">
          Crownlinks Academy offers flexible, expert-led courses designed to build real-
          world skills. Whether you're starting out or upskilling, we make learning easy and
          impactful—anytime, anywhere.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md p-6 sm:p-8 text-left overflow-hidden min-h-[250px] flex flex-col justify-end border border-gray-200"
            >
              {/* Placeholder for background image - you can add an Image component here if needed */}
              {/* <div className="absolute inset-0 z-0 bg-gray-300 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div> */}
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#242424] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 