"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, AlertTriangle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 overflow-hidden relative">
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05),transparent_70%)]" />

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Error Monitor UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-black/60 border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl"
        >
          {/* Header */}
          <div className="h-8 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">
              System_Error // code_404
            </span>
          </div>

          {/* Main Display */}
          <div className="p-12 md:p-20">
            <motion.div
              animate={{ 
                textShadow: [
                  "2px 0 0 rgba(255,0,0,0.5), -2px 0 0 rgba(0,255,255,0.5)",
                  "-2px 0 0 rgba(255,0,0,0.5), 2px 0 0 rgba(0,255,255,0.5)",
                  "2px 0 0 rgba(255,0,0,0.5), -2px 0 0 rgba(0,255,255,0.5)"
                ]
              }}
              transition={{ repeat: Infinity, duration: 0.2 }}
            >
              <h1 className="text-8xl md:text-9xl font-black italic text-white tracking-widest leading-none mb-4">
                404
              </h1>
            </motion.div>
            
            <div className="flex items-center justify-center gap-2 mb-8">
              <AlertTriangle size={16} className="text-red-600" />
              <p className="text-red-600 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                Media_Offline // File_Not_Found
              </p>
            </div>

            <p className="text-white/40 text-sm md:text-base mb-12 max-w-md mx-auto italic">
              The sequence you are looking for has been moved, deleted, or is currently out of render range.
            </p>

            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 bg-white text-black font-bold py-3 px-8 rounded-full uppercase tracking-widest text-[10px] transition-all hover:bg-red-600 hover:text-white"
              >
                <Home size={14} />
                Return_Home_Dir
              </motion.button>
            </Link>
          </div>

          {/* Footer Bar */}
          <div className="h-10 border-t border-white/5 flex items-center justify-between px-4 text-[8px] font-mono text-white/20 uppercase tracking-widest">
            <span>Lat: 12.2958° N</span>
            <span>Lon: 76.6394° E</span>
            <div className="flex items-center gap-2">
              <Terminal size={10} />
              <span>Root_Access_Required</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Glitch Elements */}
      <div className="absolute top-1/4 -left-10 w-40 h-px bg-red-600/20 blur-sm" />
      <div className="absolute bottom-1/3 -right-10 w-60 h-px bg-red-600/10 blur-sm" />
    </div>
  );
}
