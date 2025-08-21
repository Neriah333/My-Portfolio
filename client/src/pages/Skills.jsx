import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVite,
  SiMysql,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "Database Management", icon: <FaDatabase className="text-purple-500" /> },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <FaGitAlt className="text-gray-800 dark:text-gray-200" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
        { name: "Vite", icon: <SiVite className="text-purple-400" /> },
        { name: "JWT Authentication", icon: <SiJavascript className="text-yellow-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 px-6 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        Skills
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 shadow-md rounded-xl p-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: false }}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              {skillGroup.category}
            </h3>
            <ul className="space-y-3">
              {skillGroup.items.map((skill, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
