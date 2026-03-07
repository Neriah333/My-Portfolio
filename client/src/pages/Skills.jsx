import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiPostman, SiVite, SiMysql, SiTypescript, SiFigma } from "react-icons/si";

const skillData = [
  { category: "Frontend", items: [
    { name: "React", icon: <FaReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
  ]},
  { category: "Backend", items: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Database", icon: <FaDatabase /> },
  ]},
  { category: "Tools", items: [
    { name: "Git/GitHub", icon: <FaGitAlt /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Vite", icon: <SiVite /> },
  ]},
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">EXPERTISE </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-1 gap-10">
          {skillData.map((group, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all"
            >
              <h3 className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-6">{group.category}</h3>
              <div className="flex flex-wrap gap-4">
                {group.items.map((skill, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900 border border-white/5 text-slate-300 hover:text-white hover:border-blue-500/30 transition-all cursor-default"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-sm font-medium tracking-tight">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}