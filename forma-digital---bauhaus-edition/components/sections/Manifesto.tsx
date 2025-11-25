import React from 'react';
import { motion } from 'framer-motion';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-34 bg-[#111111] text-[#F4F4F0] relative overflow-hidden">
       {/* Golden Ratio Sidebar Accent: ~38.2% width */}
       <div className="absolute top-0 right-0 w-[38.2%] h-full bg-[#1A73E8] opacity-10 skew-x-12 origin-top-right"></div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Main Headline - 7 columns (~58%) */}
          <div className="md:col-span-7">
            <motion.h2 
              initial={{ opacity: 0, x: -55 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display font-black text-5xl md:text-7xl lg:text-8xl mb-13 tracking-tighter leading-[0.95]"
            >
              WE REJECT <br/>
              <span className="text-[#D93025]">ORNAMENT.</span> <br/>
              WE EMBRACE <br/>
              <span className="text-[#F9AB00]">PROPORTION.</span>
            </motion.h2>
          </div>

          {/* Supporting Text - 5 columns (~42%) */}
          <div className="md:col-span-5 pt-5 md:pt-13 md:pl-8 border-l border-gray-800">
            <motion.p 
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-light leading-relaxed mb-8 opacity-90"
            >
              In a digital landscape cluttered with noise, we return to the fundamentals. Our approach removes the superfluous to reveal the essential structure of your brand's value.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl font-light leading-relaxed opacity-90"
            >
              We believe marketing is not decoration—it is engineering. Every campaign is built on a grid of data, creativity, and the golden mean.
            </motion.p>
          </div>
        </div>

        <div className="mt-21 grid grid-cols-2 md:grid-cols-4 gap-5 border-t border-gray-700 pt-13">
            {[
                { label: "Functionality", val: "1.618" },
                { label: "Clarity", val: "100%" },
                { label: "Structure", val: "∞" },
                { label: "Impact", val: "ϕ" }
            ].map((stat, i) => (
                <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 21 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="text-center md:text-left"
                >
                    <div className="text-4xl font-bold font-display text-[#F9AB00] mb-2">{stat.val}</div>
                    <div className="uppercase tracking-widest text-sm text-gray-400">{stat.label}</div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;