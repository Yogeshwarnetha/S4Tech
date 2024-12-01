
const stats = [
  { value: '98%', label: 'Client Satisfaction' },
  { value: '250+', label: 'Projects Delivered' },
  { value: '15+', label: 'Years Experience' },
  { value: '24/7', label: 'Support Available' },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fadeIn animation-delay-1000">
      {stats.map((stat,) => (
        <div 
          key={stat.label}
          className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
        >
          <div className="text-3xl sm:text-4xl font-bold text-black mb-3">{stat.value}</div>
          <div className="text-black-200 text-sm sm:text-base">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;