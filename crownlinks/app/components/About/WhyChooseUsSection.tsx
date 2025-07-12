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
  
  const WhyChooseUsSection = () => (
    <section className="bg-white py-10 sm:py-16 xl:py-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 md:px-8 xl:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-center mb-4 xl:mb-6">
          Why choose Crownlinks Academy.
        </h2>
        <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-gray-700 text-center mb-12 xl:mb-16 max-w-2xl xl:max-w-3xl mx-auto">
          Crownlinks Academy offers flexible, expert-led courses designed to build real-world skills. Whether you're starting out or upskilling, we make learning easy and impactful—anytime, anywhere.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 xl:gap-16 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl min-h-[260px] xl:min-h-[300px] flex flex-col justify-end p-8 xl:p-10 shadow-sm"
            >
              <h3 className="font-bold text-lg md:text-xl xl:text-2xl mb-2 xl:mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-base md:text-lg xl:text-xl">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default WhyChooseUsSection;