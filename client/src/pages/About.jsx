import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react"; // Ensure these are imported

export default function About() {
  const image = "/images/myImage.png";

  return (
    <section id="about" className="relative min-h-[70vh] flex items-center bg-slate-950 px-8 py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT COLUMN: TILTED IMAGE WITH GEOMETRIC FRAMES */}
        <div className="relative flex justify-center items-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[450px] h-[450px] border border-blue-500/30 rounded-[40px]"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[400px] h-[400px] border border-blue-500/20 rounded-[30px] rotate-45"
          />

          <motion.div 
            animate={{ rotate: -10 }} 
            className="w-80 h-80 bg-slate-900 border-4 border-slate-800 shadow-2xl relative overflow-hidden rounded-[30px]"
          >
            <img 
              src={image} 
              alt="Pheobe Nyawanda" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
            />
          </motion.div>
        </div>

        {/* Right Column: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-none">
            PROFILE
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            Hello, I’m <span className="text-white font-bold underline decoration-blue-500 underline-offset-8">Pheobe Nyawanda</span>. 
            As a Full Stack Developer and AWS Cloud Practitioner, I specialize in architecting systems that are as 
            robust on the backend as they are seamless on the front.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
             <div className="p-4 border-l border-white/10">
               <div className="text-2xl font-bold text-white">2+ Years</div>
               <div className="text-slate-500 text-sm font-mono uppercase">Experience</div>
             </div>
             <div className="p-4 border-l border-white/10">
               <div className="text-2xl font-bold text-white">AWS Certified</div>
               <div className="text-slate-500 text-sm font-mono uppercase">Cloud Practitioner</div>
             </div>
          </div>

          {/* Action Buttons & Socials */}
          <div className="flex items-center gap-6 mt-10">
            <a 
              href="https://1drv.ms/b/c/a157ce8fb268e1aa/IQDzNFJnXeuaSa070X8kX1b4AckXlZs02m5UkEXWwdV5BAo?e=WR8oKd" 
              target="_blank" 
              className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              VIEW CV
            </a>

            <div className="flex gap-4 text-slate-500">
              <a href="https://github.com/Neriah333" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/pheobenyawanda59263630a/" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
                <Linkedin size={24} />
              </a>
              <a href="mailto:pheobenyawanda@gmail.com" className="hover:text-blue-500 transition">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}