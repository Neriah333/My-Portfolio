import React from 'react';
// Import icons from react-icons (e.g., Lucide or FontAwesome)
import { Monitor, Server, Smartphone, CreditCard, Database, Brain } from 'lucide-react';

const Services = () => {
  const serviceData = [
    {
      title: "WEB DEVELOPMENT & MAINTENANCE",
      desc: "Designing, creating frontend and backend of websites and maintaining already existing web applications.",
      icon: <Monitor size={30} />,
      color: "bg-blue-500"
    },
    {
      title: "SOFTWARE DEVELOPMENT",
      desc: "Designing and building large-scale software applications like ecommerce, CRM, ERP.",
      icon: <Server size={30} />,
      color: "bg-red-500"
    },
    {
      title: "PAYMENT INTEGRATION",
      desc: "Implementing payment gateways like Mpesa, PayPal & Stripe.",
      icon: <CreditCard size={30} />,
      color: "bg-purple-500"
    },
    {
      title: "DATABASE MANAGEMENT",
      desc: "Database development and management using MySQL and MongoDB.",
      icon: <Database size={30} />,
      color: "bg-teal-500"
    },
    { 
      title: "CLOUD SERVICES",
      desc: "Deploying and managing cloud infrastructure using AWS.",
      icon: <Server size={30} />,
      color: "bg-orange-500"
    }
    
  ];

  return (
    <section className="py-10 px-6 bg-gray-50 mb-20">
      <h2 className="text-3xl font-bold font-serif text-left mb-12 py-10 text-gray-800">
        What I can do
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10">
        {serviceData.map((item, index) => (
          <div key={index} className="relative bg-white p-8 pt-16 shadow-lg text-center flex flex-col items-center group transition-transform hover:-translate-y-2">

            
            
            {/* Hexagon Icon Header */}
            <div className={`absolute -top-12 w-24 h-24 flex items-center justify-center text-white ${item.color} shadow-xl`} 
                 style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
              {item.icon}
            </div>

            {/* Content */}
            <h3 className="text-sm font-bold tracking-widest mb-6 uppercase text-slate-800 leading-snug">
              {item.title}
            </h3>
            <div className="w-12 h-[1px] bg-gray-200 mb-6"></div>
            <p className="text-gray-500 font-serif text-sm font-light leading-relaxed">
              {item.desc}
            </p>
            
            {/* Colored Bottom Border Hook */}
            <div className={`absolute bottom-0 left-0 w-full h-1 ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;