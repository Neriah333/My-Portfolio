import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const statsData = [
    { number: 150, label: "CUPS OF COFFEE" },
    { number: 50, label: "PROJECTS" },
    { number: 20, label: "CLIENTS" },
    { number: 5, label: "PARTNERS" },
  ];

  // This hook detects when the section enters the viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation only happens once
    threshold: 0.4,    // Starts when 30% of the section is visible
  });

  return (
    <section 
      ref={ref} // Attach the observer here
      className="relative w-full mb-20 py-24 px-6 md:px-12 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url('/images/bg3.jpg')`,
      }}
    >
      {/* Dark Teal Overlay */}
      <div className="absolute inset-0 bg-[#081b29] opacity-85 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="text-white text-5xl md:text-6xl font-bold mb-4">
                {/* If inView is true, start counting from 0 to stat.number.
                   Otherwise, show 0.
                */}
                {inView ? (
                  <CountUp end={stat.number} duration={2.5} />
                ) : (
                  "0"
                )}
                {/* Optional: Add a '+' if you want like 150+ */}
              </span>
              <div className="h-[2px] w-8 bg-blue-400 mb-4 opacity-50"></div>
              <p className="text-gray-300 text-xs md:text-sm tracking-[0.4em] font-medium uppercase leading-loose">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;