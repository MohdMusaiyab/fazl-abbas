"use client";

import React from "react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const videoEditingSkills = [
  {
    category: "NLE Mastery",
    icon: "🎬",
    tools: [
      { 
        name: "Adobe Premiere Pro", 
        level: 95, 
        specialty: "Multi-cam editing • Timeline optimization",
        yearsExp: "8+ years",
        color: "#9B4DFF"
      },
      { 
        name: "DaVinci Resolve", 
        level: 92, 
        specialty: "Color grading • Fairlight audio",
        yearsExp: "5+ years",
        color: "#FF6B4A"
      },
      { 
        name: "Final Cut Pro", 
        level: 85, 
        specialty: "Magnetic timeline • Proxy workflow",
        yearsExp: "6+ years",
        color: "#5E5CE6"
      },
    ]
  },
  {
    category: "Motion Graphics",
    icon: "✨",
    tools: [
      { 
        name: "After Effects", 
        level: 90, 
        specialty: "Motion graphics • Expressions",
        yearsExp: "7+ years",
        color: "#00A3FF"
      },
      { 
        name: "Cinema 4D", 
        level: 78, 
        specialty: "3D motion graphics • Mograph",
        yearsExp: "4+ years",
        color: "#2C9BFF"
      },
      { 
        name: "Fusion", 
        level: 82, 
        specialty: "Node-based compositing",
        yearsExp: "3+ years",
        color: "#FF8C42"
      },
    ]
  },
  {
    category: "Audio Suite",
    icon: "🎧",
    tools: [
      { 
        name: "Adobe Audition", 
        level: 88, 
        specialty: "Audio restoration • Mastering",
        yearsExp: "6+ years",
        color: "#FFD966"
      },
      { 
        name: "Logic Pro", 
        level: 82, 
        specialty: "Sound design • Scoring",
        yearsExp: "5+ years",
        color: "#FF9F4A"
      },
      { 
        name: "iZotope RX", 
        level: 86, 
        specialty: "Noise reduction • Dialogue clean-up",
        yearsExp: "4+ years",
        color: "#4A9EFF"
      },
    ]
  },
  {
    category: "Color Science",
    icon: "🎨",
    tools: [
      { 
        name: "DaVinci Resolve", 
        level: 94, 
        specialty: "Color grading • LUT creation",
        yearsExp: "6+ years",
        color: "#FF6B4A"
      },
      { 
        name: "Color Finale", 
        level: 80, 
        specialty: "Color correction • Looks",
        yearsExp: "3+ years",
        color: "#4A9EFF"
      },
      { 
        name: "FilmConvert", 
        level: 85, 
        specialty: "Film emulation • Grain management",
        yearsExp: "4+ years",
        color: "#FFD966"
      },
    ]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#050505] py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Clean Background - Matching Original */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-red-950/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] pointer-events-none" />
      
      {/* SECTION HEADER - Compact & Responsive */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16 lg:mb-20"
      >
        <div className="flex items-center gap-3 mb-3 md:mb-4">
          <div className="h-px w-8 md:w-12 bg-red-600" />
          <span className="text-red-600 font-mono text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase">
            {`//`} Editing_Workflow
          </span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase italic tracking-tighter leading-[1.1]">
          <span className="text-white">Post</span>
          <br className="sm:hidden" />
          <span className="text-white">Production</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400" 
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}>
            Arsenal
          </span>
        </h2>
      </motion.div>

      {/* TOOLS GRID - Optimized for all screens */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8"
      >
        {videoEditingSkills.map((category, catIdx) => (
          <motion.div
            key={category.category}
            variants={itemVariants}
            className="flex flex-col"
          >
            {/* Category Header - Compact */}
            <div className="flex justify-between items-end border-b border-white/10 pb-2 mb-4 md:mb-6">
              <div className="flex items-center gap-2">
                <span className="text-lg md:text-xl">{category.icon}</span>
                <span className="text-[9px] md:text-[10px] font-mono text-white/50 uppercase tracking-wider">
                  {category.category}
                </span>
              </div>
              <span className="text-[7px] md:text-[8px] font-mono text-green-500/60">
                ACTIVE
              </span>
            </div>

            {/* Tools List - Compact spacing */}
            <div className="space-y-4 md:space-y-5">
              {category.tools.map((tool, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="group relative bg-white/[0.02] border border-white/10 rounded-lg p-3 md:p-4 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20"
                >
                  {/* Status LED - Smaller on mobile */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-red-600 shadow-[0_0_4px_red] animate-pulse" />
                    <div className="w-1 h-1 rounded-full bg-red-600" />
                  </div>

                  {/* Tool Header - Responsive typography */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0 mb-2">
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-tight text-white/80 group-hover:text-white transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-[9px] md:text-[10px] text-white/40 font-mono mt-0.5 line-clamp-1">
                        {tool.specialty}
                      </p>
                    </div>
                    <span className="text-[8px] md:text-[9px] font-mono text-white/30 uppercase tracking-tighter whitespace-nowrap">
                      {tool.yearsExp}
                    </span>
                  </div>

                  {/* Proficiency Bar - Optimized */}
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${tool.level}%` } : {}}
                      transition={{ duration: 1, delay: catIdx * 0.1 + idx * 0.05 }}
                      className="h-full rounded-full relative"
                      style={{
                        background: `linear-gradient(90deg, ${tool.color}, ${tool.color}cc)`,
                      }}
                    >
                      {/* Shimmer Effect - Subtle */}
                      <div className="absolute inset-0 bg-white/20 w-6 skew-x-12 animate-[shimmer_2s_infinite]" />
                    </motion.div>
                  </div>

                  {/* Expertise Tags - Compact & Scrollable on mobile */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {tool.specialty.split(" • ").map((tag, tagIdx) => (
                      <motion.span
                        key={tagIdx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.2, delay: catIdx * 0.1 + idx * 0.05 + tagIdx * 0.03 }}
                        className="text-[8px] md:text-[9px] px-1.5 md:px-2 py-0.5 rounded-full bg-white/5 text-white/40 font-mono tracking-wider whitespace-nowrap"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Performance Index - Compact */}
                  <div className="flex justify-between items-center mt-3 pt-1 border-t border-white/5">
                    <span className="text-[7px] md:text-[8px] font-mono text-white/30 uppercase tracking-wider">
                      Proficiency
                    </span>
                    <span className="text-[9px] md:text-[10px] font-mono font-bold text-white/70">
                      {tool.level}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Simple Creative Divider - Minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 md:mt-16 lg:mt-20 flex justify-center items-center gap-3"
      >
        <div className="h-px w-8 bg-red-600/40" />
        <div className="flex items-center gap-1.5">
          <div className="w-1 h-1 rounded-full bg-red-500/60" />
          <span className="text-[8px] md:text-[9px] font-mono text-white/30 tracking-[0.2em] uppercase">
            Ready for the edit bay
          </span>
          <div className="w-1 h-1 rounded-full bg-red-500/60" />
        </div>
        <div className="h-px w-8 bg-red-600/40" />
      </motion.div>

      {/* Minimal Floating Decor */}
      <div className="absolute -left-8 bottom-10 rotate-90 text-[8px] md:text-[9px] font-mono text-white/5 tracking-[0.5em] uppercase whitespace-nowrap pointer-events-none">
        Editing_Workflow_v2.0
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(300%) skewX(-12deg);
          }
        }
        
        /* Optimized scrolling for mobile */
        @media (max-width: 640px) {
          .line-clamp-1 {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default Skills;