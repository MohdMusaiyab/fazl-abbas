"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Youtube, Twitter, Linkedin, Github, Cpu } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "New Project Inquiry",
    message: "",
  });

  const handleExport = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:your-email@example.com?subject=${encodeURIComponent(
      formData.subject + " from " + formData.name
    )}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section className="relative bg-[#050505] py-32 px-6 md:px-24 overflow-hidden border-t border-white/5">
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-20" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* LEFT: EXPORT CONFIGURATION (The Form) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/[0.02] border border-white/10 p-8 rounded-xl backdrop-blur-sm shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="text-red-600" size={20} />
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em]">
              Module: Render_Settings_v2.0
            </span>
          </div>

          <form onSubmit={handleExport} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Project_Name (Name)</label>
                <input 
                  type="text" 
                  required
                  placeholder="Untitled_Project"
                  className="w-full bg-black border border-white/5 p-3 text-sm text-white focus:border-red-600 outline-none transition-colors"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Output_Format (Subject)</label>
                <select 
                  className="w-full bg-black border border-white/5 p-3 text-sm text-white focus:border-red-600 outline-none transition-colors appearance-none"
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                >
                  <option>Commercial_Edit</option>
                  <option>Narrative_Short</option>
                  <option>Music_Video</option>
                  <option>System_Collaboration</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Production_Brief (Message)</label>
              <textarea 
                rows={5}
                required
                placeholder="Enter scene details or project requirements..."
                className="w-full bg-black border border-white/5 p-4 text-sm text-white focus:border-red-600 outline-none transition-colors resize-none"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button 
              type="submit"
              className="group relative w-full bg-white text-black font-bold py-4 uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 overflow-hidden hover:bg-red-600 hover:text-white transition-all duration-300 active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Start Export <Send size={14} />
              </span>
            </button>
          </form>
        </motion.div>

        {/* RIGHT: OUTPUT DESTINATIONS (Socials) */}
        <div className="flex flex-col justify-between py-4">
          <div>
            <span className="text-red-600 font-mono text-[10px] tracking-[0.4em] uppercase block mb-2">
              {"//"} Output_Destinations
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white mb-8">
              Get in <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>Touch</span>
            </h2>
            <p className="text-white/40 text-lg leading-relaxed max-w-sm italic">
              Available for freelance sequences and full-scale productions. Let&apos;s build the narrative together.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-12">
            {[
              { icon: <Twitter size={18} />, label: "X / Twitter", link: "https://x.com/yourhandle" },
              { icon: <Youtube size={18} />, label: "YouTube", link: "#" },
              { icon: <Linkedin size={18} />, label: "LinkedIn", link: "#" },
              { icon: <Github size={18} />, label: "GitHub", link: "#" },
            ].map((social, i) => (
              <a 
                key={i}
                href={social.link}
                target="_blank"
                className="group p-4 border border-white/5 bg-white/[0.01] hover:bg-white/5 hover:border-white/20 transition-all flex items-center gap-4"
              >
                <div className="text-white/40 group-hover:text-red-600 transition-colors">
                  {social.icon}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col gap-1">
            <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.4em]">Current_Location</span>
            <span className="text-xs text-white/60 font-medium">Mysuru, Karnataka, India // 12.2958° N, 76.6394° E</span>
          </div>
        </div>
      </div>

      {/* FOOTER LABEL */}
      <div className="mt-32 text-center">
        <span className="text-[15vw] font-black text-white/[0.02] uppercase leading-none select-none pointer-events-none italic">
          Deliverable
        </span>
      </div>
    </section>
  );
};

export default Contact;