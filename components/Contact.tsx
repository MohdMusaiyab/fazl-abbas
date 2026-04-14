"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Youtube, Twitter, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-[#050505] py-32 px-6 md:px-24 overflow-hidden border-t border-white/5">
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-red-600 font-mono text-[10px] tracking-[0.5em] uppercase block mb-4">
            {"//"} Ready_For_Collaboration
          </span>
          <h2 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter text-white mb-8">
            Get in <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>Touch</span>
          </h2>
          <p className="text-white/40 text-xl md:text-2xl leading-relaxed italic max-w-2xl mx-auto">
            Available for professional video editing, digital news sequences, and creative productions. Let&apos;s build your narrative.
          </p>
        </motion.div>

        {/* EMAIL & PHONE ACTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24 flex flex-col items-center gap-8"
        >
          <a 
            href="mailto:fazlrizvi7860@gmail.com"
            className="group relative inline-flex items-center gap-6 bg-white px-12 py-6 overflow-hidden transition-all hover:bg-red-600 active:scale-95 w-full md:w-auto mt-4"
          >
            <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-black group-hover:text-white transition-colors duration-300 flex items-center gap-3">
              fazlrizvi7860@gmail.com <Mail size={18} />
            </span>
          </a>

          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">Direct_Dial</span>
            <a href="tel:+917505997401" className="text-2xl md:text-4xl font-black text-white hover:text-red-600 transition-colors tracking-tighter">
              +91 7505997401
            </a>
          </div>
        </motion.div>

        {/* SOCIAL LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            { icon: <Twitter size={20} />, label: "Twitter", link: "#" },
            { icon: <Youtube size={20} />, label: "YouTube", link: "#" },
            { icon: <Linkedin size={20} />, label: "LinkedIn", link: "https://www.linkedin.com/in/fazl-abbas-8601122a9/" },
            { icon: <Github size={20} />, label: "GitHub", link: "#" },
          ].map((social, i) => (
            <motion.a 
              key={i}
              href={social.link}
              target="_blank"
              whileHover={{ y: -5 }}
              className="group p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.05] hover:border-white/20 transition-all flex flex-col items-center gap-4"
            >
              <div className="text-white/20 group-hover:text-red-600 transition-colors duration-300">
                {social.icon}
              </div>
              <span className="text-[9px] font-mono uppercase tracking-widest text-white/30 group-hover:text-white transition-colors duration-300">
                {social.label}
              </span>
            </motion.a>
          ))}
        </div>

        {/* LOCATION & FOOTER INFO */}
        <div className="flex flex-col items-center gap-6 pt-16 border-t border-white/5">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em] flex items-center gap-2 mb-2">
              <MapPin size={12} className="text-red-600" /> Current_Base
            </span>
            <span className="text-sm md:text-base text-white/80 font-medium tracking-tight">
              New Delhi, India // <span className="text-white/30">Available Worldwide</span>
            </span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;