const stats = [
  { value: '600+', label: 'Students Enrolled' },
  { value: '200+', label: 'Registered Instructors' },
  { value: '100%', label: 'Success Rates' },
];

const ImpactStatsSection = () => (
  <section className="bg-white py-12">
    <div className="max-w-9xl mx-auto px-6 sm:px-8 lg:px-[200px]">
      <h2 className="text-2xl md:text-2xl font-bold text-center mb-12 text-[#242424]">
        Delivering Measurable Impact in Online Education
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center md:space-x-24 space-y-8 md:space-y-0">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#1976d2] mb-2">{stat.value}</div>
            <div className="text-gray-600 text-lg md:text-base">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactStatsSection; 