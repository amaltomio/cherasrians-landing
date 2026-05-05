// components/Stats.tsx
export default function Stats() {
  const stats = [
    { value: "Multi", label: "Sport Support" },
    { value: "< 50ms", label: "Real-Time Sync" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "End-to-End", label: "Encrypted Data" },
  ];

  return (
    <section id="stats" className="py-20 px-6">
      <div className="mx-auto max-w-5xl rounded-3xl bg-slate-900 px-8 py-16 shadow-2xl relative overflow-hidden">
        {/* Subtle interior glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center relative z-10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white md:text-4xl mb-2">{stat.value}</span>
              <span className="text-sm font-medium text-slate-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}