// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#050505] py-12 px-6 border-t border-white/10 relative z-20">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-8 md:flex-row">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <svg className="h-6 w-6 text-sport-volt" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <span className="text-lg font-black italic tracking-tight text-white">
            CherasRians <span className="text-sport-cyan"> Athletes Pro</span>
          </span>
        </div>

        {/* Center: System Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-slate-500">
          <Link href="#" className="hover:text-sport-volt transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-sport-cyan transition-colors">Terms of Service</Link>
          <Link href="mailto:support@cherasrians.my" className="hover:text-white transition-colors">Contact Support</Link>
        </div>

        {/* Right: Copyright */}
        <div className="text-slate-600 text-sm font-semibold text-center md:text-right">
          &copy; {new Date().getFullYear()} Athletes Pro System.<br className="md:hidden" /> All rights reserved.
        </div>
      </div>
    </footer>
  );
}