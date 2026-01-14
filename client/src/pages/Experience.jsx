import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'; // Using lucide-react for icons

const Experience = () => {
  const experiences = [
    {
      company: "Aquila Cyber",
      role: "Frontend Developer",
      period: "Jan 2025 - Present",
      description: "Leading the frontend development of security-focused web applications, ensuring high performance and a seamless user experience.",
      tasks: [
        "Developing responsive dashboards using React.js and Tailwind CSS for real-time threat monitoring.",
        "Collaborating with backend engineers to integrate RESTful APIs and WebSocket connections for live data streaming.",
        "Optimizing application performance, reducing initial load times by 40% through code-splitting and lazy loading.",
        "Implementing rigorous UI/UX standards to ensure accessibility (WCAG) across all security tools."
      ],
      results: [
        "Successfully launched a centralize analytics portal used by 50+ enterprise clients.",
        "Improved user engagement by 25% through the implementation of a more intuitive navigation system.",
        "Reduced frontend bug reports by 30% by introducing comprehensive unit testing with Vitest/Jest."
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 text-gray-300 font-sans" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 flex items-center gap-4">
          <Briefcase className="text-blue-400" size={32} />
          Work Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-blue-400/30">
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-1 shadow-[0_0_10px_#60a5fa]"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight">{exp.role}</h3>
                  <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400 mt-2 md:mt-0 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                  <Calendar size={14} />
                  {exp.period}
                </div>
              </div>

              <p className="mb-6 text-slate-900 italic">
                {exp.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Tasks */}
                <div>
                  <h4 className="text-slate-900 font-semibold mb-4 flex items-center gap-2">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-800 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0"></span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results / Achievement Card */}
                <div className="bg-slate-800 p-6 rounded-xl border border-blue-400/20 animate-float shadow-[0_20px_40px_-15px_rgba(96,165,250,0.3)]">
                  <h4 className="text-blue-400 font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle2 size={18} />
                    Achievement
                  </h4>
                  <ul className="space-y-3">
                    {exp.results.map((result, i) => (
                      <li key={i} className="text-sm font-medium text-gray-200">
                        • {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;