// components/SystemDetails.tsx
"use client";

import { motion, Variants } from "framer-motion";

export default function SystemDetails() {
  
  // Explicitly typed as Variants to fix the TypeScript error
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="relative bg-sport-obsidian overflow-hidden">
      
      {/* 1. SYSTEM OVERVIEW & SPORTS */}
      <section id="overview" className="py-24 px-6 relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-4xl font-black uppercase italic tracking-tight text-white mb-6">One Platform.<br/><span className="text-sport-cyan">Total Control.</span></h2>
            <p className="text-lg text-slate-400 mb-8 font-medium">A purpose-built management system delivering real-time bidirectional synchronization. Dashboards update instantly—no refreshing required.</p>
            
            <div className="space-y-4">
              {['Coach Dashboard: Full oversight on analytics and scheduling.', 'Student Portal: Track personal growth and attendance.', 'Exco Control: High-level facility and match administration.'].map((role, i) => (
                <div key={i} className="flex items-center gap-4 glass-card p-4 rounded-xl border-l-2 border-l-sport-volt">
                  <div className="h-8 w-8 rounded bg-sport-volt/10 flex items-center justify-center text-sport-volt shrink-0 font-black">{i+1}</div>
                  <p className="font-semibold text-white">{role}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div id="sports" className="glass-card p-10 rounded-2xl bg-gradient-to-br from-sport-carbon to-sport-obsidian border border-white/10 shadow-[0_0_40px_rgba(0,240,255,0.05)] relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 border-[40px] border-sport-cyan/10 rounded-full"></div>
            
            <h3 className="text-2xl font-black uppercase italic mb-8 relative z-10 text-white">Configurable Disciplines</h3>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {['Football', 'Volleyball', 'Badminton', 'Netball', 'Sepak Takraw'].map((sport) => (
                <div key={sport} className="bg-white/5 px-4 py-3 rounded-lg border border-white/10 backdrop-blur-sm font-semibold tracking-wide text-slate-300 hover:text-sport-volt hover:border-sport-volt/50 transition-colors">
                  {sport}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE MODULES - EYE-CATCHING REDESIGN */}
      <section id="modules" className="diagonal-section bg-sport-carbon py-32 px-6 text-white relative z-20">
        {/* Ambient background glow for the section */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-sport-cyan/5 blur-[150px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black uppercase italic tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Core Modules</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Booking", desc: "Instant facility reservations & real-time court availability.", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
              { title: "Schedule", desc: "Conflict-free training calendars with automated alerts.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Attendance", desc: "QR code and manual presence tracking for all rosters.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Matches", desc: "Live score, foul tracking, and advanced stat recording.", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
            ].map((mod, i) => (
               <div key={i} className="group relative overflow-hidden bg-[#0a0a0a] border-t-2 border-t-sport-cyan border-x border-b border-white/5 p-8 rounded-2xl hover:border-t-sport-volt transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(204,255,0,0.2)]">
                  
                  {/* Massive background watermark number */}
                  <div className="absolute -right-6 -bottom-6 text-9xl font-black italic text-white/5 group-hover:text-sport-volt/10 transition-colors pointer-events-none">
                    0{i+1}
                  </div>

                  {/* Icon Container */}
                  <div className="h-14 w-14 bg-gradient-to-br from-sport-cyan/20 to-transparent rounded-xl border border-sport-cyan/30 flex items-center justify-center mb-8 text-sport-cyan group-hover:scale-110 group-hover:text-sport-volt group-hover:border-sport-volt/50 transition-all">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mod.icon} />
                    </svg>
                  </div>
                  
                  <h4 className="text-2xl font-black uppercase italic mb-3 text-white group-hover:text-sport-volt transition-colors relative z-10">{mod.title}</h4>
                  <p className="text-slate-400 font-medium leading-relaxed relative z-10">{mod.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS FLOW - "KINETIC WAVE" REDESIGN */}
      <section id="how-it-works" className="py-40 px-6 bg-sport-obsidian relative overflow-hidden">
        
        {/* Subtle grid background to look like a tactical board */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl relative z-10">
           <h2 className="text-5xl font-black uppercase italic tracking-tight text-center text-white mb-28">The Performance Pipeline</h2>
           
           <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true, margin: "-100px" }}
             className="flex flex-col lg:flex-row justify-between items-center relative"
           >
             {/* Base Connecting Line */}
             <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -z-10 -translate-y-1/2 overflow-hidden rounded-full">
                {/* Animated "Data Stream" flowing through the line */}
                <motion.div 
                  className="w-full h-full bg-gradient-to-r from-transparent via-sport-cyan to-transparent opacity-70"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                />
             </div>

             {[
               { step: "Phase 1", label: "Booking" },
               { step: "Phase 2", label: "Schedule" },
               { step: "Phase 3", label: "Attendance" },
               { step: "Phase 4", label: "Performance" },
               { step: "Phase 5", label: "Match Stats" },
             ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants} 
                  // Stagger the items up and down for a "playbook" or "heartbeat" look
                  className={`group flex flex-col items-center w-full lg:w-auto my-6 lg:my-0 ${i % 2 === 0 ? 'lg:-translate-y-10' : 'lg:translate-y-10'}`}
                >
                   {/* Glowing Node */}
                   <div className="relative w-24 h-24 rounded-full bg-sport-obsidian flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
                     {/* Outer animated ring */}
                     <div className="absolute inset-0 rounded-full border-2 border-dashed border-sport-cyan/40 animate-[spin_10s_linear_infinite] group-hover:border-sport-volt group-hover:animate-[spin_5s_linear_infinite]"></div>
                     {/* Inner solid ring */}
                     <div className="absolute inset-2 rounded-full bg-sport-carbon border border-sport-cyan shadow-[0_0_20px_rgba(0,240,255,0.2)] group-hover:border-sport-volt group-hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] transition-colors duration-300"></div>
                     
                     <span className="relative font-black text-3xl text-white group-hover:text-sport-volt transition-colors z-20">
                       {i+1}
                     </span>
                   </div>

                   {/* Text Labels */}
                   <div className="mt-8 text-center bg-sport-obsidian/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                     <div className="text-sport-cyan font-black text-xs tracking-[0.2em] uppercase group-hover:text-sport-volt transition-colors">{item.step}</div>
                     <div className="text-white font-black text-xl uppercase italic mt-1">{item.label}</div>
                   </div>
                </motion.div>
             ))}
           </motion.div>
        </div>
      </section>

    </div>
  );
}