import React from "react";
import bgImage from "../../images/bg5.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-12 md:px-20 
                 bg-white overflow-hidden"
    >
      {/* Background Pattern - Subtle light grey tech grid or dots */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url(${bgImage})]" />

      {/* Decorative Large Background Image (Right side like your reference) */}
      <div 
        className="absolute right-0 top-0 w-1/2 h-80 hidden lg:block bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)' 
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-8xl font-serif font-bold text-slate-900 leading-tight"
        >
          Welcome to <br />
          <span className="text-slate-800">My Tech Hub.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-slate-600 font-light max-w-md leading-relaxed"
        >
          I find joy in turning imaginations into reality using codes and designs!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10"
        >
          <button className="px-10 py-4 border-2 border-slate-900 text-slate-900 text-xs font-bold uppercase tracking-[0.3em] hover:bg-slate-900 hover:text-white transition-all duration-300">
           <a href="#projects">View CV</a>
          </button>
        </motion.div>
      </div>

      {/* Optional: Scroll Down Indicator */}
      <div className="absolute bottom-10 left-12 animate-bounce hidden md:block">
        <div className="w-[1px] h-12 bg-slate-300 mx-auto"></div>
      </div>
    </section>
  );
}