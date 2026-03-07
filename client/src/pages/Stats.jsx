import React from 'react';
import bgImage from '../../images/bg3.jpg';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Stats = () => {
  const statsData = [
    { number: 150, label: "CUPS OF COFFEE", suffix: "+" },
    { number: 10, label: "PROJECTS", suffix: "" },
    { number: 2, label: "CLIENTS", suffix: "" },
    { number: 2, label: "PARTNERS", suffix: "" },
  ];

  // Lowered threshold to 0.2 to ensure it triggers even on smaller screens
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  return (
    <section 
      ref={ref} 
      className="relative w-full py-24 px-6 md:px-12 bg-fixed bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/80 to-slate-950/90 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-blue-500/40 transition-all duration-500 group"
            >
              <div className="text-white text-5xl md:text-6xl font-black tracking-tighter mb-2">
                {/* The key={inView} is critical: it forces the component to 
                  re-mount and play the animation when the user scrolls down.
                */}
                {inView ? (
                  <CountUp 
                    key={inView ? "playing" : "static"}
                    start={0}
                    end={stat.number} 
                    duration={3} 
                    suffix={stat.suffix}
                    useEasing={true}
                  />
                ) : (
                  "0"
                )}
              </div>

              {/* Animated accent line that grows on hover */}
              <div className="h-[2px] w-8 bg-blue-500 mb-4 group-hover:w-16 transition-all duration-500"></div>

              <p className="text-slate-400 text-[10px] md:text-xs tracking-[0.4em] font-bold uppercase leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;