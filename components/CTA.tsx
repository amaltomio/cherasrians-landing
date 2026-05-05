// components/CTA.tsx
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative bg-sport-obsidian py-32 px-6 border-t border-white/5 overflow-hidden">
      
      {/* Ambient Neon Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-sport-volt/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-black uppercase italic tracking-tight text-white md:text-6xl">
          Dominate The <span className="text-sport-volt">Data.</span>
        </h2>
        <p className="mb-10 text-xl font-medium text-slate-400 max-w-2xl mx-auto">
          Equip your organization with the definitive tool for managing modern athletic workflows.
        </p>
        <Link
          href="https://app.cherasrians.my/login"
          className="inline-flex items-center justify-center rounded-sm bg-sport-volt px-10 py-5 text-lg font-black uppercase tracking-wider text-sport-obsidian shadow-[0_0_20px_rgba(204,255,0,0.4)] transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:-translate-y-1"
        >
          Access The System
          <svg className="ml-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}