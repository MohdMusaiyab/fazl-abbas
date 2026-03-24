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
  { name: "Home", href: "#home", icon: <Home size={20} /> },
  { name: "Media", href: "#projects", icon: <Layers size={20} /> },
  { name: "System", href: "#skills", icon: <Cpu size={20} /> },
  { name: "History", href: "#experience", icon: <Briefcase size={20} /> },
  { name: "Contact", href: "#contact", icon: <MessageSquare size={20} /> },
];

const Navbar = () => {
  return (
    <>
      {/* --- DESKTOP TOP NAV --- */}
      <nav className="fixed top-0 left-0 w-full z-[100] hidden md:flex justify-between items-center px-12 py-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full flex items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-white">
            System_v4.0
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-auto flex gap-1 bg-black/40 backdrop-blur-xl border border-white/10 p-1 rounded-full"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-6 py-2 text-[9px] font-mono uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/5 rounded-full transition-all"
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
          <button className="bg-red-600 text-white px-6 py-2 text-[9px] font-mono font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            Hire_Editor
          </button>
        </motion.div>
      </nav>

      {/* --- MOBILE BOTTOM DOCK --- */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] md:hidden w-[90%] max-w-sm">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-2 flex justify-around items-center shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex flex-col items-center gap-1 p-3 text-white/40 hover:text-red-500 transition-colors"
            >
              {link.icon}
              <span className="text-[8px] font-mono uppercase tracking-tighter">
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
