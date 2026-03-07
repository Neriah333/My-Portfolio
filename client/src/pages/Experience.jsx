import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap, Github, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const allItems = [
    {
      type: "Experience",
      title: "Frontend Developer",
      company: "Aquila Cyber",
      period: "2025 — PRESENT",
      description: "Architecting security-centric interfaces and real-time monitoring systems.",
      tasks: [
        "Optimized React component render cycles",
        "Secure state management with Context API/Redux",
        "Developed reusable UI component library"
      ],
      tools: ['React', 'TypeScript', 'Tailwind', 'Redux'],
      media: ["/demo.mp4", "/demo1.mp4"]
    },
    {
      type: "Experience",
      title: "BackEnd Developer",
      company: "VGBM Tech Innovations",
      period: "Feb 2026 — Present",
      description: "Developing scalable backend infrastructure for logistics and moving services.",
      tasks: [
        "Implemented secure User Authentication and RBAC",
        "Designed optimized MySQL database schemas",
        "Developed RESTful API endpoints"
      ],
      tools: ['Node.js', 'Express', 'MySQL', 'Postman'],
      links: {
        github: "https://github.com/Neriah333/MoversPadi_",
        docs: "https://api-docs.example.com"
      },
      media: ["/bookstore1.mp4", "/bookstore2.mp4"]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [mediaIndex, setMediaIndex] = useState(0);

  useEffect(() => {
    setMediaIndex(0);
  }, [activeIndex]);

  const currentItem = allItems[activeIndex];

  return (
    <section id="work" className="py-24 px-6 bg-slate-950 text-slate-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl font-black text-white uppercase tracking-widest">Work_Log</h2>
          <div className="flex gap-4">
            <button onClick={() => setActiveIndex((p) => (p - 1 + allItems.length) % allItems.length)} className="p-3 bg-white/5 hover:bg-blue-600 rounded-full transition"><ChevronLeft /></button>
            <button onClick={() => setActiveIndex((p) => (p + 1) % allItems.length)} className="p-3 bg-white/5 hover:bg-blue-600 rounded-full transition"><ChevronRight /></button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeIndex} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Info */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-3xl font-black text-blue-500">{currentItem.title}</h3>
              <p className='border border-blue-500 rounded-full px-4 py-1 text-xs text-center inline-block'>{currentItem.company} | <span>{currentItem.period}</span></p>
              <p className="text-slate-400">{currentItem.description}</p>
              
              <ul className="space-y-2">
                {currentItem.tasks.map((task, i) => (
                  <li key={i} className="flex gap-2 text-sm"><Zap size={14} className="text-blue-500 mt-1 shrink-0" /> {task}</li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/5">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {currentItem.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded text-[11px] font-mono text-slate-300 uppercase">{tool}</span>
                  ))}
                </div>
              </div>

              {currentItem.links && (
                <div className="flex gap-6 pt-2">
                  {currentItem.links.github && <a href={currentItem.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-mono text-blue-400 hover:text-white transition"><Github size={16} /> CODE</a>}
                  {currentItem.links.docs && <a href={currentItem.links.docs} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-mono text-blue-400 hover:text-white transition"><ExternalLink size={16} /> DOCS</a>}
                </div>
              )}
            </div>

            {/* Right: Media */}
            <div className="lg:col-span-8 relative group">
              <div className="bg-black rounded-xl border border-white/10 overflow-hidden aspect-video relative flex items-center">
                <AnimatePresence mode="wait">
                  <motion.video key={`${activeIndex}-${mediaIndex}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} src={currentItem.media[mediaIndex]} className="w-full h-full object-cover" controls />
                </AnimatePresence>
                {currentItem.media.length > 1 && (
                  <>
                    <button onClick={(e) => { e.stopPropagation(); setMediaIndex((p) => (p - 1 + currentItem.media.length) % currentItem.media.length); }} className="absolute left-2 p-2 bg-black/60 backdrop-blur rounded-full hover:bg-blue-600 transition"><ChevronLeft size={16} /></button>
                    <button onClick={(e) => { e.stopPropagation(); setMediaIndex((p) => (p + 1) % currentItem.media.length); }} className="absolute right-2 p-2 bg-black/60 backdrop-blur rounded-full hover:bg-blue-600 transition"><ChevronRight size={16} /></button>
                  </>
                )}
              </div>
              <div className="mt-3 text-center text-[10px] font-mono text-slate-600 tracking-widest uppercase">Media {mediaIndex + 1} / {currentItem.media.length}</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;