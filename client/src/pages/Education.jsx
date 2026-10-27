import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const educationData = [
  {
    school: "Kabarak University",
    degree: "Bachelor of Business and Information Technology",
    year: "2021 - 2025",
    desc: "Focus: Systems analysis, database architecture, and web engineering.",
    icon: <GraduationCap size={20} />
  },
  {
    school: "Power Learn Project Africa",
    degree: "Software Development",
    year: "2025",
    desc: "Focus: Full-stack MERN development, Python, and SQL workflows.",
    icon: <BookOpen size={20} />
  },
  { 
    school: "AWS",
    degree: "Cloud Practitioner",
    year: "Dec 2025",
    desc: "Focus: Cloud infrastructure deployment, security, and scalability.",
    icon: <Award size={20} />
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-8 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          
          <h2 className="text-4xl font-black tracking-tighter">FOUNDATION.</h2>
        </div>

        <div className="grid gap-6">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group flex gap-6 p-6 rounded-2xl bg-muted border border-border hover:border-blue-500/30 transition-all"
            >
              <div className="mt-1 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-foreground transition-colors">
                {edu.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">{edu.degree}</h3>
                <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-muted-foreground font-mono">
                  <span>{edu.school}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-blue-600 dark:text-blue-400">{edu.year}</span>
                </div>
                {edu.desc && (
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed max-w-xl">
                    {edu.desc}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}