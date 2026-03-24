"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Play, FastForward, Rewind, User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aman Gupta",
    role: "Director, Cinematic Arts",
    content: "The rhythm of the edit was exactly what the story needed. Precision at its best.",
    timecode: "00:12:05:01",
    rating: "QC_PASSED",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Lead Producer, BlueMedia",
    content: "Innovative transitions and a deep understanding of pacing. A true collaborator.",
    timecode: "00:45:12:15",
    rating: "MASTER_APPROVED",
  },
  {
    id: 3,
    name: "Rohan Verma",
    role: "Marketing Head, TechFlow",
    content: "Transformed our raw footage into a high-conversion masterpiece. Highly recommended.",
    timecode: "01:05:33:09",
    rating: "FINAL_CUT",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto-play the "Review Session"
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#050505] flex items-center justify-center py-24 px-6 overflow-hidden">
      {/* --- BACKGROUND CINEMATIC LIGHT --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05),transparent_70%)]" />
      
      {/* --- REVIEW MONITOR UI --- */}
      <div className="relative w-full max-w-5xl aspect-video bg-[#0a0a0a] border border-white/10 rounded-lg shadow-2xl flex flex-col overflow-hidden">
        {/* Top Toolbar */}
        <div className="h-10 border-b border-white/5 bg-white/5 flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
              Review_Session // Client_Feedback
            </span>
          </div>
          <div className="flex gap-4 text-[9px] font-mono text-white/20 uppercase">
            <span>Vol: -12dB</span>
            <span>Bitrate: 50Mbps</span>
          </div>
        </div>

        {/* MAIN VIEWPORT */}
        <div className="flex-grow relative flex items-center justify-center p-12 overflow-hidden">
            {/* Ambient Noise/Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            {/* Testimonial Text (Subtitles) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.02, y: -10 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 text-center max-w-3xl"
              >
                <div className="flex justify-center mb-6">
                    <span className="px-3 py-1 bg-red-600 text-white font-mono text-[9px] font-bold tracking-tighter rounded">
                      {testimonials[index].rating}
                    </span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-bold italic tracking-tight text-white leading-tight mb-8">
                  &quot;{testimonials[index].content}&quot;
                </h3>

                <div className="flex flex-col items-center gap-2">
                    <p className="text-lg font-black uppercase text-white/90 italic tracking-tighter">
                        {testimonials[index].name}
                    </p>
                    <p className="text-xs font-mono text-red-500 uppercase tracking-widest">
                        {testimonials[index].role}
                    </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Corner Markers (Viewfinder Look) */}
            <div className="absolute top-6 left-6 w-4 h-4 border-l border-t border-white/20" />
            <div className="absolute top-6 right-6 w-4 h-4 border-r border-t border-white/20" />
            <div className="absolute bottom-6 left-6 w-4 h-4 border-l border-b border-white/20" />
            <div className="absolute bottom-6 right-6 w-4 h-4 border-r border-b border-white/20" />
        </div>

        {/* TIMELINE / CONTROLS */}
        <div className="h-24 border-t border-white/10 bg-black/40 backdrop-blur-md p-6 flex flex-col gap-4">
            {/* Progress Bar */}
            <div className="w-full h-1 bg-white/10 relative rounded-full overflow-hidden">
                <motion.div 
                    key={index}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="absolute inset-0 bg-red-600"
                />
            </div>
            
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <button onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="text-white/40 hover:text-white transition-colors">
                        <Rewind size={18} fill="currentColor" />
                    </button>
                    <button className="text-white">
                        <Play size={24} fill="currentColor" />
                    </button>
                    <button onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)} className="text-white/40 hover:text-white transition-colors">
                        <FastForward size={18} fill="currentColor" />
                    </button>
                </div>

                <div className="font-mono text-xs text-red-600 tracking-tighter">
                    TC {testimonials[index].timecode}
                </div>

                <div className="hidden md:flex gap-4">
                    {testimonials.map((_, i) => (
                        <div 
                            key={i} 
                            className={`w-1 h-1 rounded-full transition-all duration-300 ${i === index ? 'bg-red-600 w-4' : 'bg-white/10'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* Floating Side Note (Glassmorphism) */}
      <div className="absolute right-10 top-1/4 hidden lg:block w-64 p-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl rotate-3 shadow-2xl">
          <MessageSquare className="text-red-500 mb-3" size={20} />
          <p className="text-[10px] text-white/60 leading-relaxed font-mono">
            &quot;We need to ensure the color grade matches the emotional arc of the second act.&quot;
          </p>
          <div className="mt-4 flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <User size={12} className="text-white/40" />
              </div>
              <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest italic">Draft Note // ID: 822</span>
          </div>
      </div>
    </section>
  );
};

export default Testimonials;