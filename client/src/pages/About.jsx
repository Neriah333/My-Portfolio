import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-start bg-white dark:bg-gray-900 px-8 py-20"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        {/* Section Heading with Accent Line */}
        <div className="mb-5">
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white">
            About Me
          </h3>
          <div className="h-1 w-20 bg-blue-400 mt-2 rounded-full"></div>
        </div>

        {/* Intro Text */}
        <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-medium mb-6">
          Hello, I’m <span className="text-slate-800 dark:text-blue-400 font-bold underline decoration-2 underline-offset-4">Pheobe Nyawanda</span>
        </p>

        {/* Description Body */}
        <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
          <p>
            I enjoy turning <span className="text-blue-400 dark:text-white font-semibold">complex problems</span> into simple, efficient, and scalable solutions. 
            I bridge the gap between robust backend logic and intuitive frontend experiences.
          </p>
          <p>
            Beyond coding, I value continuous learning and collaboration. I believe that 
            technology is most powerful when it’s used to solve <span className="text-blue-400 dark:text-white font-semibold">real-world problems</span>.
          </p>
        </div>

        {/* Stylish Tagline / Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 border-l-4 border-gray-100 dark:border-gray-800 italic text-gray-500 dark:text-gray-400"
        >
          <p className="text-xl font-serif">
            "#Learning is a continuous journey and technology is the perfect playground."
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}