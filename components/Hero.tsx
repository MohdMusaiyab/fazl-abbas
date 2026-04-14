"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [time, setTime] = useState("00:00:00:00");

  // Real-time Timecode (Symmetrical Balance)
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const frames = Math.floor(now.getMilliseconds() / 41);
      const ts = `${String(now.getHours()).padStart(2, "0")}:${String(
        now.getMinutes(),
      ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}:${String(
        frames,
      ).padStart(2, "0")}`;
      setTime(ts);
    }, 41);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 12;
      const y = (clientY / window.innerHeight - 0.5) * 12;

      gsap.to(".hero-bg", {
        x,
        y,
        duration: 1.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#050505] text-white flex items-center justify-center"
    >
      {/* --- BACKGROUND IMAGE (Centered & Treated) --- */}
      <div className="hero-bg absolute inset-0 scale-110">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale-[0.2]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_90%)]" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* --- TECH OVERLAY (Centered UI) --- */}
      <div className="absolute inset-8 md:inset-16 pointer-events-none z-20 flex flex-col justify-between items-center border border-white/5">
        <div className="w-full flex justify-between p-6">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
            <span className="text-[9px] font-mono tracking-[0.3em] text-white/40">
              REC MODE: 4K LOG
            </span>
          </div>
          <span className="text-[9px] font-mono tracking-[0.3em] text-white/40 uppercase">
            Scene: 001 // Take: 08
          </span>
        </div>

        <div className="w-full flex justify-between p-6 items-end">
          <span className="text-[9px] font-mono tracking-[0.3em] text-white/40 uppercase">
            ISO 400 // 24FPS
          </span>
          <div className="font-mono text-[10px] text-white/60 tracking-[0.2em]">
            TC {time}
          </div>
        </div>
      </div>

      {/* --- MAIN CENTERED CONTENT --- */}
      <div className="relative z-30 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <h1 className="text-[13vw] md:text-[10vw] font-black leading-[0.75] tracking-tighter uppercase italic flex flex-col items-center">
            <span className="block translate-x-[-5%] md:translate-x-[-10%]">CUT.</span>
            <span
              className="block text-transparent opacity-100"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.6)" }}
            >
              EDIT.
            </span>
            <span className="block translate-x-[5%] md:translate-x-[10%] underline decoration-red-600 decoration-[4px] md:decoration-[8px] underline-offset-[8px] md:underline-offset-[12px]">
              CREATE.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-xs md:text-sm text-white/50 max-w-lg font-light tracking-[0.05em] leading-relaxed uppercase"
          >
            Hello, I&apos;m <span className="text-white font-medium">Fazl Abbas Rizvi</span>. <br />
            Creative Video Editor crafting high-impact content for social media, YouTube, and brands. <br />
            Expert in storytelling, motion graphics, and cinematic pacing.
          </motion.p>
        </motion.div>
      </div>

      {/* --- SCANNING LINE (Subtle Texture) --- */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* SIDE DATA INDICATORS */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-1 text-[8px] tracking-widest text-white/10 uppercase vertical-text">
        0% ——— 100% RENDER
      </div>
    </section>
  );
}
