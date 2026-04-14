"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  Briefcase,
  Cpu,
  MessageSquare,
  Layers,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home", icon: <Home size={24} /> },
  { name: "Experience", href: "#experience", icon: <Briefcase size={24} /> },
  { name: "Projects", href: "#projects", icon: <Layers size={24} /> },
  { name: "Skills", href: "#skills", icon: <Cpu size={24} /> },
  { name: "Contact", href: "#contact", icon: <MessageSquare size={24} /> },
];

const Navbar = () => {
  return (
    <>
      {/* --- DESKTOP TOP NAV --- */}
      <nav className="fixed top-0 left-0 w-full z-[100] hidden md:flex justify-between items-center px-14 py-8 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto bg-black/40 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-full flex items-center gap-4"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
          <span className="text-[11px] font-mono font-bold tracking-[0.3em] uppercase text-white">
            System_v4.0
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-auto flex gap-2 bg-black/40 backdrop-blur-xl border border-white/10 p-1.5 rounded-full"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-8 py-2.5 text-[10px] font-mono uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto"
        >
          {/* Hire_Editor button removed as requested */}
        </motion.div>
      </nav>

      {/* --- MOBILE BOTTOM DOCK --- */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] md:hidden w-[92%] max-w-md">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-3 flex justify-around items-center shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex flex-col items-center gap-1.5 p-3.5 text-white/40 hover:text-red-500 transition-colors"
            >
              {link.icon}
              <span className="text-[9px] font-mono uppercase tracking-tighter">
                {link.name}
              </span>
            </a>
          ))}
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
