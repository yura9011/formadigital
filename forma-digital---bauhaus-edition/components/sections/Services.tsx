import React from 'react';
import { Layout, BarChart, PenTool, Globe, LucideIcon, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, color, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[13px_13px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 flex flex-col justify-between"
      // Maintain a vertical golden rectangle feel roughly
      style={{ minHeight: '377px' }} 
    >
      <div className={`absolute top-0 left-0 w-full h-[13px] ${color}`}></div>
      
      <div className="pt-8">
        <div className="flex justify-between items-start mb-8">
            <div className={`p-5 border-2 border-black rounded-full ${color.replace('bg-', 'bg-opacity-20 ')}`}>
                <Icon size={34} className="stroke-1 text-black" />
            </div>
            <span className="font-display font-bold text-6xl text-gray-100 group-hover:text-gray-200 transition-colors duration-300 absolute right-5 top-8 -z-10">0{index + 1}</span>
        </div>
        
        <h3 className="font-display font-bold text-3xl mb-5 tracking-tight">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-8 max-w-[89%]">{description}</p>
      </div>

      <a href="#" className="inline-flex items-center font-bold uppercase tracking-wider hover:underline gap-2 group-hover:gap-3 transition-all mt-auto self-start">
        Learn More <ArrowUpRight size={21} />
      </a>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Digital Strategy",
      description: "Foundational blueprints for market penetration. We analyze, plan, and architect your route to dominance.",
      icon: Layout,
      color: "bg-[#D93025]"
    },
    {
      title: "Brand Systems",
      description: "Visual identities constructed from the ground up. Logos, typography, and color theory that communicate function.",
      icon: PenTool,
      color: "bg-[#1A73E8]"
    },
    {
      title: "Performance",
      description: "Data-driven campaigns engineered for maximum efficiency. We measure, refine, and optimize constantly.",
      icon: BarChart,
      color: "bg-[#F9AB00]"
    },
    {
      title: "Web Architecture",
      description: "Interfaces designed for human interaction. Clean code, accessible layouts, and seamless user journeys.",
      icon: Globe,
      color: "bg-[#111111]"
    }
  ];

  return (
    <section id="services" className="py-21 bg-[#F4F4F0] relative border-t-2 border-black">
      {/* Golden Grid Overlay */}
      <div className="absolute left-[61.8%] top-0 bottom-0 w-px bg-black opacity-10 hidden md:block"></div>
      <div className="absolute top-[38.2%] left-0 right-0 h-px bg-black opacity-10 hidden md:block"></div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="mb-21 max-w-[61.8%]">
          <h2 className="font-display font-black text-6xl md:text-7xl mb-8 tracking-tighter">
            OUR <br /> MODULES
          </h2>
          <div className="h-[13px] w-[89px] bg-[#D93025]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-13">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;