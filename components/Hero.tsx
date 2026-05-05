// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-sport-obsidian pt-20">
      
      {/* Dark Sporty Background with Grid overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle grid pattern to feel like a tech dashboard */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 right-0 h-full w-2/3 bg-gradient-to-bl from-sport-cyan/10 via-sport-volt/5 to-transparent clip-path-polygon-[10%_0,100%_0,100%_100%,0_100%]"></div>
        {/* Neon Speed Lines */}
        <div className="absolute top-1/4 -left-20 h-[2px] w-96 -rotate-45 bg-gradient-to-r from-transparent via-sport-cyan to-transparent opacity-50"></div>
        <div className="absolute top-1/3 -left-10 h-[2px] w-64 -rotate-45 bg-gradient-to-r from-transparent via-sport-volt to-transparent opacity-50"></div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-6 lg:flex-row">
        
        {/* Left: Aggressive Text */}
        <motion.div
          initial={{ opacity: 0, x: -50, skewX: -5 }}
          animate={{ opacity: 1, x: 0, skewX: 0 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          className="flex w-full flex-col items-center text-center lg:w-[55%] lg:items-start lg:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-sm border-l-4 border-sport-volt bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-widest text-sport-volt backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse-fast rounded-full bg-sport-volt shadow-[0_0_8px_#ccff00]"></span>
            Live Performance Tracking
          </div>
          
          <h1 className="mb-6 text-5xl font-black uppercase italic leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
            Dominate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sport-volt to-sport-cyan">
              Performance
            </span>
            <br /> With Data.
          </h1>
          
          <p className="mb-10 max-w-lg text-lg font-medium text-slate-400 lg:text-xl">
            The ultimate centralized ecosystem built for velocity. Streamline match management, track live attendance, and inject actionable analytics into your workflow.
          </p>
          
          <div className="flex w-full flex-col gap-4 sm:flex-row lg:w-auto">
            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}/login`}
              className="group relative flex items-center justify-center overflow-hidden rounded-sm bg-sport-volt px-8 py-4 text-sm font-black uppercase tracking-wider text-sport-obsidian transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(204,255,0,0.5)]"
            >
              Get Started
            </Link>
            <Link
              href="#overview"
              className="flex items-center justify-center rounded-sm border-2 border-white/20 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-sport-cyan hover:text-sport-cyan"
            >
              Explore System
            </Link>
          </div>
        </motion.div>

        {/* Right: Dark Mode Dashboard Cards */}
        <div className="relative hidden h-[600px] w-full lg:flex lg:w-[45%] items-center justify-center">
          
          <div className="absolute w-72 h-72 bg-sport-cyan/20 rounded-full blur-[100px]"></div>

          {/* Card 1: Live Match */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-20 right-4 glass-card p-5 rounded-2xl w-64 border-l-4 border-l-sport-volt shadow-2xl"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase">Live Match</span>
              <span className="h-2 w-2 rounded-full bg-sport-volt animate-ping"></span>
            </div>
            <div className="flex justify-between items-center font-black italic text-2xl text-white">
              <span>HOME</span>
              <span className="text-sport-volt">2 - 1</span>
              <span>AWAY</span>
            </div>
            <div className="mt-3 text-xs font-bold text-sport-cyan">78' • Possession: 64%</div>
          </motion.div>

          {/* Card 2: Performance Metrics */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-1/2 -translate-y-1/2 left-0 glass-card p-6 rounded-2xl w-72 shadow-2xl z-10"
          >
            <h4 className="text-sm font-bold text-white uppercase mb-4 tracking-wider">Athlete Metrics</h4>
            <div className="space-y-4">
              {[
                { label: 'Sprint Speed', val: '92%', color: 'bg-sport-volt', shadow: 'shadow-[0_0_10px_#ccff00]' },
                { label: 'Stamina', val: '85%', color: 'bg-sport-cyan', shadow: 'shadow-[0_0_10px_#00f0ff]' },
                { label: 'Accuracy', val: '78%', color: 'bg-white', shadow: 'shadow-[0_0_10px_#ffffff]' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-slate-400">{stat.label}</span>
                    <span className="text-white">{stat.val}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: stat.val }}
                      transition={{ duration: 1, delay: 0.8 + (i * 0.2) }}
                      className={`h-full ${stat.color} ${stat.shadow} rounded-full`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Attendance Alert */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-24 right-10 glass-card p-4 rounded-xl flex items-center gap-4 shadow-2xl border-b-2 border-b-sport-cyan"
          >
            <div className="h-10 w-10 rounded-full bg-sport-cyan/20 flex items-center justify-center text-sport-cyan">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-bold text-white">Attendance Synced</div>
              <div className="text-xs text-slate-400">24/24 Present Today</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}