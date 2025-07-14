// app/components/about/AboutStats.tsx
const stats = [
    { value: '600+', label: 'Students Enrolled' },
    { value: '200+', label: 'Registered Instructors' },
    { value: '100%', label: 'Success Rates' },
  ];
  
  const AboutStats = () => (
    <section className="bg-[#ff8521] py-8 sm:py-10 xl:py-16 h-auto sm:h-[396px] xl:h-[500px] flex items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="max-w-4xl xl:max-w-6xl mx-auto w-full text-center">
        <h3 className="text-[26px] font-bold text-white mb-10 text-center w-full">
          Delivering Measurable Impact in Online Education
        </h3>
        <div className="flex flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 xl:gap-16 w-full">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center">
              <div className="text-[48px] font-bold text-white mb-1 xl:mb-2">{stat.value}</div>
              <div className="text-[18px] text-white opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default AboutStats;