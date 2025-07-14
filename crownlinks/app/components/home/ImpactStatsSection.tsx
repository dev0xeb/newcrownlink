const stats = [
  { value: '600+', label: 'Students Enrolled' },
  { value: '200+', label: 'Registered Instructors' },
  { value: '100%', label: 'Success Rates' },
];

const ImpactStatsSection = () => (
  <section className="bg-[#F1F7FF] h-[396px] xl:h-[500px] py-12 xl:py-20">
    <div className="max-w-9xl pt-[50px] xl:pt-[80px] mx-auto px-6 sm:px-8 md:px-12 lg:px-[200px] xl:px-[300px]">
      <h2 className="text-[26px] md:text-2xl xl:text-5xl font-bold text-center mb-12 xl:mb-20 text-[#242424]">
        Delivering Measurable Impact in Online Education
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center md:space-x-24 xl:space-x-32 space-y-8 md:space-y-0">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-4xl md:text-5xl xl:text-4xl font-bold text-[#1976d2] mb-2 xl:mb-4">{stat.value}</div>
            <div className="text-gray-600 text-lg md:text-xl xl:text-xl">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactStatsSection; 