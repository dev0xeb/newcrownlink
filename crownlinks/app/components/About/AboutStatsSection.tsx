// app/components/about/AboutStats.tsx
const stats = [
    { value: '600+', label: 'Students Enrolled' },
    { value: '200+', label: 'Registered Instructors' },
    { value: '100%', label: 'Success Rates' },
  ];
  
  const AboutStats = () => (
    <section className="bg-[#ff8521] py-10 h-auto sm:h-[396px] flex items-center">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <div className="text-5xl font-bold text-white px-8 sm:px-28">{stat.value}</div>
            <div className="text-white text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default AboutStats;