"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectData = [
  {
    id: "CLIP_01",
    title: "Urban Rhythm",
    client: "Nike // Commercial",
    duration: "00:00:45:12",
    resolution: "4K RAW",
    codec: "ProRes 422",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
    category: "Commercial",
  },
  {
    id: "CLIP_02",
    title: "Midnight Soul",
    client: "Music Video",
    duration: "00:03:15:00",
    resolution: "6K",
    codec: "R3D",
    thumbnail: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop",
    category: "Narrative",
  },
  {
    id: "CLIP_03",
    title: "The Catalyst",
    client: "Short Film",
    duration: "00:12:40:24",
    resolution: "4K",
    codec: "H.265",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
    category: "Documentary",
  },
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="bg-[#050505] py-24 px-6 md:px-24">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
        <div>
          <span className="text-red-600 font-mono text-[10px] tracking-[0.4em] uppercase">
            BIN_01_SELECTED_CUTS
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-white">
            Media <span className="text-transparent stroke-white" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>Pool</span>
          </h2>
        </div>
        <div className="flex gap-4">
          {["All", "Commercial", "Narrative", "Music Video"].map((cat) => (
            <button key={cat} className="text-[9px] font-mono uppercase tracking-widest text-white/30 hover:text-white transition-colors border border-white/10 px-3 py-1 hover:bg-white/5">
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {projectData.map((project) => (
          <motion.div
            key={project.id}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative aspect-[16/10] overflow-hidden bg-neutral-900 border border-white/5 cursor-none"
          >
            {/* THUMBNAIL */}
            <motion.div
              className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url(${project.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay for B&W Effect */}
              <div className="absolute inset-0 bg-black/40 grayscale group-hover:grayscale-0 group-hover:bg-transparent transition-all duration-500" />
            </motion.div>

            {/* TOP METADATA BAR */}
            <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/80 backdrop-blur-md px-2 py-1 border border-white/10">
                <span className="text-[9px] font-mono text-white/80 tracking-tighter uppercase">
                  {project.id} {"//"} {project.codec}
                </span>
              </div>
              <div className="bg-red-600 px-2 py-1">
                <span className="text-[9px] font-mono text-white font-bold tracking-tighter">
                  {project.duration}
                </span>
              </div>
            </div>

            {/* CENTER PLAY ICON (Hover only) */}
            <AnimatePresence>
              {hoveredId === project.id && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center z-20"
                >
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-white/5">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* BOTTOM INFO */}
            <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="overflow-hidden">
                <motion.span className="block text-[10px] font-mono text-red-500 uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {project.client}
                </motion.span>
              </div>
              <h3 className="text-2xl font-black uppercase italic text-white tracking-tighter leading-none group-hover:text-red-500 transition-colors">
                {project.title}
              </h3>
              
              <div className="mt-4 h-px w-0 group-hover:w-full bg-white/20 transition-all duration-700" />
              <div className="mt-2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">RES: {project.resolution}</span>
                <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest underline underline-offset-4 cursor-pointer hover:text-white">View Project</span>
              </div>
            </div>

            {/* VIGNETTE GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          </motion.div>
        ))}
      </div>

      {/* FOOTER INFO */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center font-mono text-[9px] text-white/20 uppercase tracking-[0.5em]">
        <span>Total Items: 12</span>
        <span className="animate-pulse text-white/40 italic">Scroll to Load More Assets</span>
        <span>Storage: 82% Full</span>
      </div>
    </section>
  );
};

export default Projects;