import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Make sure to install lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["About", "Skills", "Services", "Work", "Education"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:py-6 flex justify-center pointer-events-none">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-slate-950/80 backdrop-blur-md border border-white/10 px-4 md:px-8 py-3 md:py-4 rounded-full flex gap-4 md:gap-8 items-center shadow-2xl pointer-events-auto"
      >
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-slate-400 hover:text-white font-mono text-[10px] uppercase tracking-widest transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CONTACT Button (Always Visible) */}
        <a 
          href="#contact" 
          className="px-4 py-2 bg-blue-600 text-white text-[10px] font-bold rounded-full hover:bg-blue-700 transition"
        >
          CONTACT
        </a>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="absolute top-20 left-0 right-0 mx-auto w-[90%] bg-slate-900 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 items-center md:hidden shadow-2xl"
            >
              {links.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-blue-500 font-mono text-sm uppercase tracking-widest py-2"
                >
                  {link}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}