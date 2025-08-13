import React from "react";

export default function Education() {
  const educationData = [
    {
      school: "Power Learn Project Africa",
      degree: "Software Development",
      year: "2025 - Present",
      description:
        "Focused on web development, Python, MySQL, and MERN Stack.",
    },
    {
      school: "Kabarak University",
      degree: "Bachelor of Business and Information Technology",
      year: "2021 - 2025",
      description:
        "Studied operating systems, system analysis and design, web development, and database systems.",
    },
  ];

  return (
    <section
      id="education"
      className="py-12 px-6 bg-gray-200 dark:bg-gray-900"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        Education
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {educationData.map((edu, index) => (
          <article
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {edu.degree}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {edu.school} • {edu.year}
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {edu.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
