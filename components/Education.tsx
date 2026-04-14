"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "Masters in Mass Communication",
    status: "Appearing",
    institution: "Indira Gandhi National Open University (IGNOU)",
    year: "Ongoing",
    color: "#ff0000"
  },
  {
    degree: "Intermediate (12th)",
    status: "Completed",
    institution: "Tulsi Kanya Inter College, Ayodhya",
    year: "2021",
    color: "#a855f7"
  },
  {
    degree: "High School (10th)",
    status: "Completed",
    institution: "Amar Shaheed Ashfaq Ullah Memorial Inter College",
    year: "2016",
    color: "#3b82f6"
  }
];

const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section 
      id="education" 
      ref={containerRef}
      className="relative bg-[#050505] py-32 px-6 md:px-24 overflow-hidden border-t border-white/5"
    >
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-red-600/5 blur-[100px] pointer-events-none" />

      {/* HEADER */}
      <div className="relative z-20 mb-20 flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[1px] w-12 bg-red-600" />
          <span className="text-red-600 font-mono text-[10px] tracking-[0.5em] uppercase">
             Academic_History
          </span>
          <div className="h-[1px] w-12 bg-red-600" />
        </div>
        <h2 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter text-white leading-none">
          Education
        </h2>
      </div>

      {/* TIMELINE - Centered */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="space-y-12 md:space-y-16 flex flex-col items-center">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative w-full flex flex-col items-center text-center px-4"
            >
              <div className="relative w-full max-w-3xl">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={12} className="text-red-600" />
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{item.year}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter transition-colors group-hover:text-red-500 duration-500">
                    {item.degree}
                  </h3>
                </div>

                <div className="flex flex-col items-center gap-2 mb-8">
                  <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-white/20" />
                    <span className="text-sm md:text-lg text-red-600/80 font-mono uppercase tracking-wider">{item.institution}</span>
                  </div>
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] font-bold bg-white/5 px-4 py-1 rounded-full">
                    Status: {item.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BACKGROUND DECOR - Large Text */}
      <div className="absolute bottom-10 left-10 text-[12vw] font-black text-white/[0.01] uppercase select-none pointer-events-none italic">
        ACADEMIC
      </div>
    </section>
  );
};

export default Education;
