import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["About", "Skills", "Services", "Work", "Education"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-6 flex justify-center pointer-events-none">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-slate-950/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex items-center gap-6 shadow-2xl pointer-events-auto"
      >
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-slate-400 hover:text-white font-mono text-xs uppercase tracking-widest transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <a 
          href="#contact" 
          className="px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded-full hover:bg-blue-700 transition"
        >
          CONTACT
        </a>

        {/* Mobile Toggle (Right Side) */}
        <button 
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Dimming Effect */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Right-Aligned Dropdown */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-24 right-4 w-48 bg-slate-900 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 items-end shadow-2xl z-50 md:hidden"
            >
              {links.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-blue-500 font-mono text-sm uppercase tracking-widest"
                >
                  {link}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}