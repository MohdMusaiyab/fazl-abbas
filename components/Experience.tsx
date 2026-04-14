"use client";

import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section 
      id="experience"
      className="relative bg-[#050505] py-32 md:py-48 px-6 md:px-24 overflow-hidden border-t border-white/5"
    >
      {/* SECTION HEADER - Centered */}
      <div className="relative z-20 mb-16 md:mb-28 flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[1px] w-8 md:w-12 bg-red-600" />
          <span className="text-red-600 font-mono text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase">
             Career_Path
          </span>
          <div className="h-[1px] w-8 md:w-12 bg-red-600" />
        </div>
        <h2 className="text-6xl sm:text-7xl md:text-9xl font-black uppercase italic tracking-tighter text-white leading-none">
          Experience
        </h2>
      </div>

      {/* SINGLE CLEAN EXPERIENCE CARD - Centered & Focused */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="group relative w-full"
        >
          {/* Metadata Bar */}
          <div className="flex items-center gap-4 mb-6 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
            <span className="font-mono text-[10px] text-white uppercase tracking-[0.3em]">
              01 // Current_Role
            </span>
            <div className="h-[1px] flex-grow bg-white/10" />
            <span className="font-mono text-[10px] text-red-600 uppercase font-bold tracking-widest">
              Ongoing
            </span>
          </div>

          {/* The Card */}
          <div className="relative bg-white/[0.02] border border-white/5 p-6 sm:p-10 md:p-16 backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/10 transition-all duration-700 shadow-2xl">
            {/* Minimalist Accent */}
            <div className="absolute top-0 left-0 w-1.5 h-0 group-hover:h-full bg-red-600 transition-all duration-700 ease-[0.16,1,0.3,1]" />
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-2">
                  Video Editor
                </h3>
                <p className="text-red-500 font-mono text-sm md:text-lg uppercase tracking-[0.2em]">
                  NMF News
                </p>
              </div>
              <div className="text-left md:text-right">
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                  New Delhi, India
                </span>
              </div>
            </div>

            <p className="text-white/40 text-lg sm:text-xl md:text-2xl leading-relaxed font-light mb-12 max-w-4xl italic group-hover:text-white/80 transition-colors duration-500">
              "Specializing in digital news editing, breaking news videos, and social media content with quick turnaround time."
            </p>

            <div className="flex flex-wrap gap-2 md:gap-4">
              {[
                "Final Cut Pro", 
                "Adobe Premiere Pro", 
                "Adobe Photoshop", 
                "V Mix",
                "Digital News", 
                "Breaking News", 
                "Social Media"
              ].map((tag) => (
                <motion.span 
                  key={tag} 
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(220, 38, 38, 0.4)",
                    borderColor: "rgba(220, 38, 38, 0.6)"
                  }}
                  className="cursor-default text-[9px] md:text-xs font-mono px-4 md:px-5 py-2 md:py-2.5 bg-white/5 border border-white/10 text-white/30 uppercase tracking-[0.15em] md:tracking-[0.2em] transition-all duration-300 hover:text-white hover:bg-red-600/10 whitespace-nowrap"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Subtle Static Symbol */}
            <div className="absolute top-8 right-8 w-8 h-8 opacity-5 group-hover:opacity-20 transition-opacity">
              <div className="w-full h-full border border-white rounded-full flex items-center justify-center font-mono text-[10px] text-white">
                REC
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* BACKGROUND DECOR - Simplified */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 text-[15vw] font-black text-white/[0.01] uppercase select-none pointer-events-none italic vertical-text">
        Editorial
      </div>
      
      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
};

export default Experience;