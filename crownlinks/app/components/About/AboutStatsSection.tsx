// app/components/about/AboutStats.tsx
const stats = [
    { value: '600+', label: 'Students Enrolled' },
    { value: '200+', label: 'Registered Instructors' },
    { value: '100%', label: 'Success Rates' },
  ];
  
  const AboutStats = () => (
    <section className="bg-[#ff8521] py-8 sm:py-10 xl:py-16 h-auto sm:h-[396px] xl:h-[500px] flex items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="max-w-4xl xl:max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 xl:gap-16 text-center w-full">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex-1">
            <div className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-white mb-2 xl:mb-4">{stat.value}</div>
            <div className="text-base sm:text-lg md:text-xl xl:text-2xl text-white">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default AboutStats;