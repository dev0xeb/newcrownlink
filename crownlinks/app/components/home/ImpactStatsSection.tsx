const stats = [
  { value: '600+', label: 'Students Enrolled' },
  { value: '200+', label: 'Registered Instructors' },
  { value: '100%', label: 'Success Rates' },
];

const ImpactStatsSection = () => (
  <section className="bg-[#F1F7FF] py-8 xl:py-12 mt-[30px]">
    <div className="max-w-9xl pt-[30px] xl:pt-[40px] mx-auto px-6 sm:px-8 md:px-12 lg:px-[200px] xl:px-[300px]">
      <h2 className="text-[26px] font-bold text-center mb-12  text-[#242424]">
        Delivering Measurable Impact in Online Education
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-[200px] space-y-8 md:space-y-0">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-[48px] font-bold text-[#1976d2] mb-2 xl:mb-4">{stat.value}</div>
            <div className="text-gray-600 text-[18px]">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactStatsSection; 