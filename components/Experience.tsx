"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: "01",
    role: "System Engineer Trainee",
    company: "Infosys",
    location: "Mysore, India",
    period: "2026 - Present",
    track: "V1",
    description: "Architecting scalable backend solutions and mastering enterprise-grade system design.",
    tags: ["Java", "Spring Boot", "System Design"],
  },
  {
    id: "02",
    role: "React Intern",
    company: "Lightning Technologies",
    location: "Remote",
    period: "2025 - 2026",
    track: "V2",
    description: "Developed high-performance UI components using Next.js and optimized rendering cycles.",
    tags: ["Next.js", "GSAP", "Tailwind"],
  },
  {
    id: "03",
    role: "Full Stack Developer",
    company: "Freelance / Projects",
    location: "Global",
    period: "2024 - 2025",
    track: "A1",
    description: "Built 'NearH' and 'MessBazaar', focusing on real-time data and seamless UX/UI.",
    tags: ["MERN", "Socket.io", "Redux"],
  },
];

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#050505] py-24 overflow-hidden border-t border-white/5"
    >
      {/* SECTION HEADER */}
      <div className="px-8 md:px-24 mb-16 flex justify-between items-end">
        <div>
          <span className="text-red-600 font-mono text-xs tracking-[0.3em] uppercase block mb-2">
             Sequence_02
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
            History<span className="text-white/20">.log</span>
          </h2>
        </div>
        <div className="hidden md:block font-mono text-[10px] text-white/20 tracking-widest text-right">
          TOTAL_DURATION: 04:00:00:00 <br />
          FPS: 24.00
        </div>
      </div>

      {/* THE TIMELINE TRACKS */}
      <div className="relative flex flex-col gap-4">
        {/* Playhead (Red Vertical Line) */}
        <div className="absolute left-8 md:left-24 top-0 bottom-0 w-[1px] bg-red-600/50 z-20">
          <div className="sticky top-1/2 w-3 h-3 -left-[6px] bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.8)]" />
        </div>

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-16 md:pl-40 pr-8 group"
          >
            {/* Track Indicator (V1, V2, etc) */}
            <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 font-mono text-[10px] text-white/20 rotate-[-90deg]">
              {exp.track}
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-6 md:p-10 transition-all duration-500 group-hover:bg-white/[0.05] group-hover:border-white/20 relative overflow-hidden">
              {/* Animated Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/[0.03] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-mono text-red-500 tracking-widest uppercase">
                      [{exp.period}]
                    </span>
                    <div className="h-[1px] w-8 bg-white/20" />
                    <span className="text-[10px] font-mono text-white/40 uppercase">
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-white/40 text-sm mt-1 font-medium tracking-wide">
                    {exp.company}
                  </p>
                </div>

                <div className="max-w-md text-sm text-white/60 leading-relaxed font-light">
                  {exp.description}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[9px] font-mono px-2 py-1 border border-white/10 text-white/40 uppercase tracking-tighter"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* BOTTOM DECORATION */}
      <div className="mt-20 px-8 md:px-24 flex items-center gap-4 opacity-20">
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="font-mono text-[8px] tracking-[0.5em] uppercase whitespace-nowrap">
          End of Sequence
        </div>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>

      {/* BACKGROUND WATERMARK */}
      <div className="absolute -bottom-10 -right-10 text-[20vw] font-black text-white/[0.02] pointer-events-none uppercase italic leading-none">
        Exp.
      </div>
    </section>
  );
};

export default Experience;