import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Github,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const allItems = [
    {
      type: "Project",
      title: "Frontend Developer",
      company: "Rock Technologies",
      period: "2026",
      description:
        "Designed and developed a responsive corporate website for a network solutions and ICT infrastructure provider, showcasing its services, products, and contact information.",
      tasks: [
        "Developed responsive website layouts using React and Tailwind CSS",
        "Implemented an interactive hero image carousel and reusable UI components",
        "Created services, products, statistics, contact, and footer sections",
        "Implemented responsive navigation and interactive contact elements"
      ],
      tools: ["React", "JavaScript", "Tailwind CSS", "Vite", "Lucide React"],
      links: {
        github: "https://github.com/Neriah333/rocktechnologies",
        live: "https://rocktechnologies.vercel.app"
      },
      media: [
        {
          type: "image",
          src: "/rocktechnologies-demo.png"
        }
      ]
    },

    {
      type: "Experience",
      title: "Frontend Developer",
      company: "Aquila Cyber",
      period: "2025",
      description:
        "Architecting cybersecurity community platforms and implementing real-time monitoring systems for threat awareness, learning and collaboration.",
      tasks: [
        "Optimized React component render cycles",
        "Implemented secure state management with Context API/Redux",
        "Developed reusable UI component libraries"
      ],
      tools: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      links: {},
      media: [
        {
          type: "video",
          src: "/demo.mp4"
        },
        {
          type: "video",
          src: "/demo1.mp4"
        }
      ]
    },

    {
      type: "Experience",
      title: "Backend Developer",
      company: "VGBM Tech Innovations",
      period: "Feb 2025",
      description:
        "Developing scalable backend infrastructure for logistics and moving services that connects users with service providers such as dispatch riders, truck drivers, and towing operators on demand.",
      tasks: [
        "Implemented secure user authentication and role-based access control",
        "Designed optimized MySQL database schemas",
        "Developed RESTful API endpoints"
      ],
      tools: ["Node.js", "Express", "MySQL", "Postman"],
      links: {
        github: "https://github.com/Neriah333/MoversPadi_",
        docs: "https://api-docs.example.com"
      },
      media: [
        {
          type: "video",
          src: "/demo2.mp4"
        }
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [mediaIndex, setMediaIndex] = useState(0);

  useEffect(() => {
    setMediaIndex(0);
  }, [activeIndex]);

  const currentItem = allItems[activeIndex];
  const currentMedia = currentItem.media[mediaIndex];

  const previousItem = () => {
    setActiveIndex(
      (previous) => (previous - 1 + allItems.length) % allItems.length
    );
  };

  const nextItem = () => {
    setActiveIndex(
      (previous) => (previous + 1) % allItems.length
    );
  };

  const previousMedia = (e) => {
    e.stopPropagation();

    setMediaIndex(
      (previous) =>
        (previous - 1 + currentItem.media.length) % currentItem.media.length
    );
  };

  const nextMedia = (e) => {
    e.stopPropagation();

    setMediaIndex(
      (previous) => (previous + 1) % currentItem.media.length
    );
  };

  return (
    <section
      id="work"
      className="py-24 px-6 bg-background text-muted-foreground"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="mb-16">

          <div className="flex justify-between items-end mb-6">

            <div className="space-y-1">

              <h2 className="text-3xl font-black text-foreground uppercase tracking-widest">
                Work_Log
              </h2>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="text-blue-500 font-mono text-sm"
                >
                  {String(activeIndex + 1).padStart(2, '0')} /{" "}
                  {String(allItems.length).padStart(2, '0')}
                </motion.p>
              </AnimatePresence>

            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">

              <button
                onClick={previousItem}
                aria-label="Previous experience"
                className="p-3 bg-muted hover:bg-blue-600 hover:text-white rounded-full transition group"
              >
                <ChevronLeft className="group-hover:scale-110 transition-transform" />
              </button>

              <button
                onClick={nextItem}
                aria-label="Next experience"
                className="p-3 bg-muted hover:bg-blue-600 hover:text-white rounded-full transition group"
              >
                <ChevronRight className="group-hover:scale-110 transition-transform" />
              </button>

            </div>

          </div>

          {/* Progress Bar */}
          <div className="w-full h-[1px] bg-border relative overflow-hidden">

            <motion.div
              className="absolute top-0 left-0 h-full bg-blue-500"
              initial={{ width: 0 }}
              animate={{
                width: `${((activeIndex + 1) / allItems.length) * 100}%`
              }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 15
              }}
            />

          </div>

        </div>

        {/* Main Content */}
        <AnimatePresence mode="wait">

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid lg:grid-cols-12 gap-8 items-start"
          >

            {/* Left: Information */}
            <div className="lg:col-span-4 space-y-6">

              <div>

                {/* Dynamic Type Label */}
                <p className="mb-2 text-xs font-mono uppercase tracking-widest text-blue-500">
                  {currentItem.type}
                </p>

                <h3 className="text-3xl font-black text-blue-500 mb-2">
                  {currentItem.title}
                </h3>

                <p className="border border-blue-500/30 bg-blue-500/5 rounded-full px-4 py-1 text-[10px] text-center inline-block font-mono uppercase tracking-wider">
                  {currentItem.company} |{" "}
                  <span className="text-muted-foreground">
                    {currentItem.period}
                  </span>
                </p>

              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {currentItem.description}
              </p>

              {/* Tasks */}
              <ul className="space-y-3">

                {currentItem.tasks.map((task, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm items-start"
                  >
                    <Zap
                      size={14}
                      className="text-blue-500 mt-1 shrink-0"
                    />

                    <span className="text-muted-foreground">
                      {task}
                    </span>
                  </li>
                ))}

              </ul>

              {/* Technology Stack */}
              <div className="pt-6 border-t border-border">

                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4">
                  Core_Stack
                </p>

                <div className="flex flex-wrap gap-2">

                  {currentItem.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-muted border border-border rounded text-[11px] font-mono text-muted-foreground uppercase"
                    >
                      {tool}
                    </span>
                  ))}

                </div>

              </div>

              {/* Project Links */}
              {currentItem.links && (
                <div className="flex flex-wrap gap-6 pt-4">

                  {currentItem.links.github && (
                    <a
                      href={currentItem.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] font-mono text-blue-600 dark:text-blue-400 hover:text-foreground transition tracking-widest"
                    >
                      <Github size={14} />
                      GITHUB_REPO
                    </a>
                  )}

                  {currentItem.links.live && (
                    <a
                      href={currentItem.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] font-mono text-blue-600 dark:text-blue-400 hover:text-foreground transition tracking-widest"
                    >
                      <ExternalLink size={14} />
                      LIVE_WEBSITE
                    </a>
                  )}

                  {currentItem.links.docs && (
                    <a
                      href={currentItem.links.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] font-mono text-blue-600 dark:text-blue-400 hover:text-foreground transition tracking-widest"
                    >
                      <ExternalLink size={14} />
                      API_DOCS
                    </a>
                  )}

                </div>
              )}

            </div>

            {/* Right: Media Section */}
            <div className="lg:col-span-8 relative group">

              <div className="bg-black rounded-xl border border-border overflow-hidden aspect-video relative flex items-center shadow-2xl shadow-blue-900/10">

                <AnimatePresence mode="wait">

                  <motion.div
                    key={`${activeIndex}-${mediaIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full"
                  >

                    {currentMedia.type === "video" ? (

                      <video
                        src={currentMedia.src}
                        className="w-full h-full object-cover"
                        controls
                      />

                    ) : (

                      <img
                        src={currentMedia.src}
                        alt={`${currentItem.company} project preview`}
                        className="w-full h-full object-contain"
                      />

                    )}

                  </motion.div>

                </AnimatePresence>

                {/* Media Navigation */}
                {currentItem.media.length > 1 && (

                  <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">

                    <button
                      onClick={previousMedia}
                      aria-label="Previous media"
                      className="p-2 bg-black/60 backdrop-blur-md border border-border rounded-full hover:bg-blue-600 transition"
                    >
                      <ChevronLeft size={16} />
                    </button>

                    <button
                      onClick={nextMedia}
                      aria-label="Next media"
                      className="p-2 bg-black/60 backdrop-blur-md border border-border rounded-full hover:bg-blue-600 transition"
                    >
                      <ChevronRight size={16} />
                    </button>

                  </div>

                )}

              </div>

              {/* Media Counter */}
              <div className="mt-4 flex justify-between items-center px-2">

                <div className="h-[1px] flex-1 bg-muted mr-4" />

                <div className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase whitespace-nowrap">
                  View {mediaIndex + 1} / {currentItem.media.length}
                </div>

                <div className="h-[1px] flex-1 bg-muted ml-4" />

              </div>

            </div>

          </motion.div>

        </AnimatePresence>

      </div>
    </section>
  );
};

export default Experience;