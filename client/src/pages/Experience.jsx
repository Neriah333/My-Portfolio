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
        
        {/* Header Section with Work Number & Progress Bar */}
        <div className="mb-16">
          <div className="flex justify-between items-end mb-6">
            <div className="space-y-1">
              <h2 className="text-3xl font-black text-white uppercase tracking-widest">Work_Log</h2>
              <AnimatePresence mode="wait">
                <motion.p 
                  key={activeIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="text-blue-500 font-mono text-sm"
                >
                  {String(activeIndex + 1).padStart(2, '0')} / {String(allItems.length).padStart(2, '0')}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setActiveIndex((p) => (p - 1 + allItems.length) % allItems.length)} 
                className="p-3 bg-white/5 hover:bg-blue-600 rounded-full transition group"
              >
                <ChevronLeft className="group-hover:scale-110 transition-transform" />
              </button>
              <button 
                onClick={() => setActiveIndex((p) => (p + 1) % allItems.length)} 
                className="p-3 bg-white/5 hover:bg-blue-600 rounded-full transition group"
              >
                <ChevronRight className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${((activeIndex + 1) / allItems.length) * 100}%` }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeIndex} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            className="grid lg:grid-cols-12 gap-8 items-start"
          >
            
            {/* Left: Info */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <h3 className="text-3xl font-black text-blue-500 mb-2">{currentItem.title}</h3>
                <p className='border border-blue-500/30 bg-blue-500/5 rounded-full px-4 py-1 text-[10px] text-center inline-block font-mono uppercase tracking-wider'>
                  {currentItem.company} | <span className="text-slate-400">{currentItem.period}</span>
                </p>
              </div>

              <p className="text-slate-400 leading-relaxed">{currentItem.description}</p>
              
              <ul className="space-y-3">
                {currentItem.tasks.map((task, i) => (
                  <li key={i} className="flex gap-3 text-sm items-start">
                    <Zap size={14} className="text-blue-500 mt-1 shrink-0" /> 
                    <span className="text-slate-300">{task}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/5">
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] mb-4">Core_Stack</p>
                <div className="flex flex-wrap gap-2">
                  {currentItem.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded text-[11px] font-mono text-slate-300 uppercase">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {currentItem.links && (
                <div className="flex gap-6 pt-4">
                  {currentItem.links.github && (
                    <a href={currentItem.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-mono text-blue-400 hover:text-white transition tracking-widest">
                      <Github size={14} /> GITHUB_REPO
                    </a>
                  )}
                  {currentItem.links.docs && (
                    <a href={currentItem.links.docs} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-mono text-blue-400 hover:text-white transition tracking-widest">
                      <ExternalLink size={14} /> LIVE_DOCS
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Right: Media Section */}
            <div className="lg:col-span-8 relative group">
              <div className="bg-black rounded-xl border border-white/10 overflow-hidden aspect-video relative flex items-center shadow-2xl shadow-blue-900/10">
                <AnimatePresence mode="wait">
                  <motion.video 
                    key={`${activeIndex}-${mediaIndex}`} 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    src={currentItem.media[mediaIndex]} 
                    className="w-full h-full object-cover" 
                    controls 
                  />
                </AnimatePresence>
                
                {currentItem.media.length > 1 && (
                  <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setMediaIndex((p) => (p - 1 + currentItem.media.length) % currentItem.media.length); }} 
                      className="p-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full hover:bg-blue-600 transition"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setMediaIndex((p) => (p + 1) % currentItem.media.length); }} 
                      className="p-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full hover:bg-blue-600 transition"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </div>
              <div className="mt-4 flex justify-between items-center px-2">
                <div className="h-[1px] flex-1 bg-white/5 mr-4" />
                <div className="text-[10px] font-mono text-slate-600 tracking-[0.3em] uppercase whitespace-nowrap">
                  View {mediaIndex + 1} / {currentItem.media.length}
                </div>
                <div className="h-[1px] flex-1 bg-white/5 ml-4" />
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;