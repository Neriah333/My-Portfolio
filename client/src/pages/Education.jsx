import React from "react";

export default function Education() {
  const educationData = [
    {
      school: "Kabarak University",
      degree: "Bachelor of Business and Information Technology",
      year: "2021 - 2025",
      description:
        "Studied operating systems, system analysis and design, web development, and database systems.",
        
    },
    {
      school: "Power Learn Project Africa",
      degree: "Software Development",
      year: "Feb 2025 - Dec 2025",
      description:
        "Focused on web development, Python, MySQL, and MERN Stack.",
    },
    { school: "AWS",
      degree: "AWS Cloud Practitioner",
      year: "Issued Dec 2025",

    }
  ];

  return (
    <section
      id="education"
      className="mt-8 py-12 px-6 bg-white dark:bg-slate-900"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        Education and Certifications
      </h2>
      <div className="max-w-2xl mx-auto space-y-6">
        {educationData.map((edu, index) => (
          <article
            key={index}
            className="bg-slate-300 dark:bg-gray-800 shadow-md rounded-xl p-5 border border-gray-200 dark:border-gray-700"
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
