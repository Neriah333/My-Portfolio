import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-80 flex flex-col justify-center items-center bg-white dark:bg-gray-900 px-4 py-12"
    >
      <div className="max-w-2xl text-left">
        <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h2>
        <p className="text-gray-700 text-lg dark:text-gray-300 font-serif leading-relaxed mb-6">
          Hello, I’m <span className="text-slate-900 font-bold font-serif">Pheobe Nyawanda</span> </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          I enjoy turning complex problems into simple, efficient, and scalable solutions.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Beyond coding, I value continuous learning, collaboration, and applying technology to solve real-world problems.
           I love experimenting with new platforms and tools. 
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg font-light leading-relaxed">
          #Learning is a continuous journey and technology is the perfect playground.</p>
      </div>
    </section>
  );
}
