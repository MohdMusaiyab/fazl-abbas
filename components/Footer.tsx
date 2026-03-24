"use client";

import React from "react";
import { Terminal, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6 md:px-24 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 relative z-10">
        {/* Branding & Status */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Terminal size={18} className="text-red-600" />
            <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">
              Fazl Abbas Rizvi
            </h3>
          </div>
          <p className="text-[10px] text-white/40 font-mono leading-relaxed max-w-xs uppercase tracking-widest">
            System Engineer // Video Editor // Post-Production Specialist
          </p>
        </div>

        {/* System Stats & Back to Top */}
        <div className="flex items-center gap-8">
          <div className="text-right hidden sm:block">
            <div className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">
              Status: Ready_to_Render
            </div>
            <div className="text-[9px] font-mono text-red-600 uppercase tracking-[0.3em] font-bold">
              Latency: 12ms
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-red-600 transition-all group"
          >
            <ArrowUp
              size={20}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">
          © 2026 // ALL RIGHTS RESERVED // LOGGED_IN_AS_ROOT
        </span>
        <div className="flex gap-6 opacity-40 grayscale">
          <span className="text-[8px] font-mono">ENCODED_IN_INDIA</span>
          <span className="text-[8px] font-mono">EN_US</span>
        </div>
      </div>

      {/* Decorative Large Text */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15vw] font-black text-white/[0.02] select-none pointer-events-none uppercase">
        FINISH
      </div>
    </footer>
  );
};

export default Footer;
