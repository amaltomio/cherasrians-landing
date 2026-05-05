// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "System Overview", href: "#overview" },
  { name: "Modules", href: "#modules" },
  { name: "How It Works", href: "#how-it-works" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-3" : "bg-transparent py-5"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        
        <Link href="#home" className="flex items-center gap-2 z-50">
          <svg className="h-8 w-8 text-sport-volt" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <span className="text-xl font-extrabold tracking-tight text-white italic">
            CherasRians<span className="text-sport-cyan"> Athletes Pro</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-1 rounded-full bg-white/5 px-3 py-1.5 backdrop-blur-md border border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`relative px-4 py-2 text-sm font-semibold transition-colors ${active === link.name ? 'text-sport-obsidian' : 'text-slate-300 hover:text-white'}`}
            >
              {active === link.name && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 z-[-1] rounded-full bg-sport-volt shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="https://cheras-rians-athlete-pro.vercel.app/login"
            className="rounded-full bg-sport-cyan px-6 py-2.5 text-sm font-black tracking-wide text-sport-obsidian shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-transform hover:scale-105"
          >
            Login
          </Link>
        </div>

      </div>
    </header>
  );
}