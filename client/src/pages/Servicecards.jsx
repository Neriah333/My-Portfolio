import React from 'react';
import { Monitor, Server, CreditCard, Database, Cloud, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const serviceData = [
    {
      title: "Full-Stack Development",
      desc: "Building seamless, responsive frontend experiences and robust backend architectures that scale.",
      icon: <Monitor size={24} />,
    },
    {
      title: "Enterprise Solutions",
      desc: "Designing large-scale systems like E-commerce platforms tailored for business growth.",
      icon: <Code2 size={24} />,
    },
    {
      title: "Payment Systems",
      desc: "Secure integration of local gateways including M-Pesa.",
      icon: <CreditCard size={24} />,
    },
    {
      title: "Database Architecture",
      desc: "Optimizing data flow and storage using high-performance MySQL and MongoDB environments.",
      icon: <Database size={24} />,
    },
    { 
      title: "Cloud Infrastructure",
      desc: "Leveraging AWS to deploy scalable, secure, and highly-available cloud-native applications.",
      icon: <Cloud size={24} />,
    },
    { 
      title: "API Design & DevOps",
      desc: "Crafting clean RESTful APIs and automating deployment pipelines for rapid delivery.",
      icon: <Server size={24} />,
    }
  ];

  return (
    <section id="services" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter">
            WHAT I CAN <span className="text-muted-foreground">DO.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-2xl bg-muted border border-border 
                         hover:bg-blue-500 transition-all duration-300"
            >
              {/* Icon Container - Icon background becomes more solid or changes on hover */}
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 
                            group-hover:bg-white group-hover:text-blue-500 transition-colors duration-300">
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-foreground font-bold text-lg mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground text-sm leading-relaxed font-light transition-colors duration-300">
                {item.desc}
              </p>

              {/* Subtle Decorative Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;