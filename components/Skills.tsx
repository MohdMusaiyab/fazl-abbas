"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tools = [
  {
    name: "Final Cut Pro",
    specialty: "Advanced Timeline Control & Cinematic Flow",
    description: "Expertise in high-speed magnetic timeline workflows and 4K proxy-based editing.",
    icon: "🎞️",
    tag: "Primary_NLE",
    color: "#ff0000"
  },
  {
    name: "Adobe Premiere Pro",
    specialty: "Professional Broadcast & Social Sequences",
    description: "Crafting precise, multi-cam edits with deep integration into CC pipelines.",
    icon: "🎬",
    tag: "Industry_Standard",
    color: "#a855f7"
  },
  {
    name: "Adobe Photoshop",
    specialty: "Visual Assets & Thumbnail Architecture",
    description: "Designing high-impact key visuals and complex compositing for video assets.",
    icon: "🖼️",
    tag: "Graphic_Design",
    color: "#3b82f6"
  },
  {
    name: "V Mix",
    specialty: "Live Production & Broadcast Mixing",
    description: "Professional live streaming control, multi-source switching, and technical direction.",
    icon: "📡",
    tag: "Live_Broadcast",
    color: "#22c55e"
  }
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative bg-[#050505] py-32 px-6 md:px-24 overflow-hidden border-t border-white/5"
    >
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

      {/* SECTION HEADER - Centered & Premium */}
      <div className="relative z-20 mb-24 flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] w-12 bg-red-600" />
          <span className="text-red-600 font-mono text-[10px] tracking-[0.5em] uppercase">
             Toolchain_v2
          </span>
          <div className="h-[1px] w-12 bg-red-600" />
        </div>
        <h2 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter text-white leading-none">
          Skills
        </h2>
      </div>

      {/* BENTO GRID OF SKILLS */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8 }}
            className="group relative"
          >
            {/* CARD BACKGROUND */}
            <div className="relative h-full bg-white/[0.02] border border-white/5 p-8 md:p-12 backdrop-blur-md overflow-hidden transition-all duration-700 group-hover:bg-white/[0.04] group-hover:border-white/10 shadow-2xl">
              
              {/* INTERACTIVE GLOW */}
              <div 
                className="absolute -inset-1 opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-2xl pointer-events-none"
                style={{ backgroundColor: tool.color }}
              />

              {/* TOP BAR / METADATA */}
              <div className="flex justify-between items-start mb-10">
                <span className="text-[3rem] md:text-[4rem] opacity-20 filter grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                   {tool.icon}
                </span>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2 mb-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                     <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">{tool.tag}</span>
                  </div>
                  <span className="text-[8px] font-mono text-white/10 uppercase tracking-[0.4em]">Hardware_Acc_On</span>
                </div>
              </div>

              {/* CONTENT */}
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-red-500 transition-colors duration-500">
                  {tool.name}
                </h3>
                <p className="text-red-600/60 font-mono text-[10px] uppercase tracking-[0.2em] mb-6">
                  {tool.specialty}
                </p>
                <p className="text-white/40 text-base md:text-lg leading-relaxed font-light transition-colors duration-500 group-hover:text-white/70">
                  {tool.description}
                </p>
              </div>

              {/* CARD ACCENT LINE */}
              <div 
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1]"
                style={{ backgroundColor: tool.color }}
              />

              {/* DECORATIVE CORNER */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-white/5 group-hover:border-white/20 transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* BACKGROUND LABEL */}
      <div className="absolute bottom-10 right-10 text-[10vw] font-black text-white/[0.01] uppercase select-none pointer-events-none italic">
        EDITORIAL
      </div>
    </section>
  );
};

export default Skills;