import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Fish Marketing Cooperative System",
      description:
        "A desktop application to manage fish inventory, sales, and transactions for lakeside cooperatives. Built with Express, React, and MongoDB.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing my projects, education, and skills. Designed with React and Tailwind CSS for a modern, responsive feel.",
      tech: ["React", "TailwindCSS"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-12 px-6 bg-gray-200 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        Projects
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-blue-400">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-500 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
