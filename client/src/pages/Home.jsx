import React from "react";
import bgImage from "../../images/bg5.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      /* Reduced height: Adjusted from min-h-screen to h-[70vh] or min-h-[600px] */
      className="relative h-[75vh] min-h-[550px] flex items-center justify-center bg-slate-950 overflow-hidden"
    >
      {/* Background Image with darker, tighter overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]" />
      </div>

      {/* Main Content Card - Scaled down padding */}
      <div className="relative z-10 w-full max-w-5xl px-6">
        <div className="backdrop-blur-md bg-white/[0.01] border border-white/5 p-8 md:p-12 rounded-2xl shadow-2xl">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-blue-500 font-mono tracking-[0.2em] uppercase text-[10px] mb-3 block">
              // Portfolio 2024
            </span>
            
            <h1 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter">
              MY TECH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                HUB.
              </span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-slate-400 font-light max-w-md leading-snug">
              Turning complex code into elegant digital reality.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://1drv.ms/..."
                target="_blank"
                className="px-7 py-3 bg-blue-600 text-white rounded-lg font-bold uppercase text-[11px] tracking-widest hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20"
              >
                View My CV
              </motion.a>
              
              <div className="h-[1px] w-12 bg-slate-700 hidden sm:block"></div>
              <span className="text-slate-500 text-[10px] uppercase tracking-widest hidden sm:block">Scroll for more</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom border accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  );
}