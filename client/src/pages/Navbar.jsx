import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["About", "Skills", "Services", "Work", "Education"];

  return (
    <nav className=" mt-10 mb-10 fixed top-0 w-full z-50 px-6 py-6 flex justify-center">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-slate-950/80 backdrop-blur-md border border-white/10 px-8 py-4 rounded-full flex gap-8 items-center shadow-2xl"
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

        {/* CTA Button */}
        <a 
          href="#contact" 
          className="ml-4 px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded-full hover:bg-blue-700 transition"
        >
          CONTACT
        </a>
      </motion.div>
    </nav>
  );
}