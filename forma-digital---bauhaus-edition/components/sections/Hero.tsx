import React from 'react';
import { motion } from 'framer-motion';
import BauhausShape from '../ui/BauhausShape';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-34 pb-21 overflow-hidden border-b-2 border-black">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '34px 34px' }}>
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
        
        {/* Text Content - Approx 58% width (7/12 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
             {/* Fibonacci decorative line */}
            <div className="absolute -left-8 top-0 h-full w-1 bg-[#F9AB00] hidden md:block"></div>

            <div className="inline-block bg-[#F9AB00] border-2 border-black px-[21px] py-[8px] mb-8 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
              <span className="font-bold uppercase tracking-[0.2em] text-xs">Form Follows Function</span>
            </div>
            
            {/* Golden Typography Scale */}
            <h1 className="font-display font-black text-6xl md:text-8xl lg:text-[7rem] leading-[0.95] tracking-tighter mb-8 text-black">
              DESIGN <br/>
              {/* Indentation: 89px on Desktop, 0 on Mobile */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D93025] to-[#D93025] decoration-clone ml-0 md:ml-[89px]">IS</span> <br/>
              LOGIC
            </h1>
            
            <p className="text-xl md:text-2xl font-medium max-w-full md:max-w-[89%] lg:max-w-[61.8%] mb-13 leading-relaxed pl-2">
              We deconstruct complexity to build brands that stand the test of time. A marketing agency built on geometric precision and the divine proportion.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              {/* Buttons using Golden Ratio Padding: 34px X / 21px Y approx 1.618 */}
              <button className="bg-black text-white px-[34px] py-[21px] font-bold uppercase tracking-wider hover:bg-[#D93025] transition-colors border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 duration-200">
                Explore Work
              </button>
              <button className="bg-white text-black px-[34px] py-[21px] font-bold uppercase tracking-wider hover:bg-[#F4F4F0] transition-colors border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] duration-200">
                Philosophy
              </button>
            </div>
          </motion.div>
        </div>

        {/* Visual Composition - Approx 42% width (5/12 cols) */}
        {/* Using Exact Fibonacci numbers for shape sizes: 377, 233, 144, 89 */}
        <div className="lg:col-span-5 relative h-[610px] hidden lg:block border-l-2 border-black bg-[#F4F4F0]/50 backdrop-blur-sm overflow-hidden">
            {/* The arrangement attempts to guide the eye in a Golden Spiral */}
            
            {/* 1. Largest Element (377px) */}
            <BauhausShape type="circle" color="#D93025" size={377} className="top-[55px] -right-[89px] mix-blend-multiply opacity-90" delay={0.2} />
            
            {/* 2. Second Element (233px) */}
            <BauhausShape type="square" color="#1A73E8" size={233} className="bottom-[89px] left-[34px] mix-blend-multiply opacity-90" delay={0.4} />
            
            {/* 3. Third Element (144px) */}
            <BauhausShape type="triangle" color="#F9AB00" size={144} className="top-[144px] left-[55px] mix-blend-multiply" rotation={15} delay={0.6} />
            
            {/* 4. Fourth Element (89px) */}
            <BauhausShape type="semicircle" color="#111111" size={89} className="bottom-[55px] right-[55px]" rotation={-45} delay={0.8} />

            {/* 5. Smallest Element (55px) */}
            <BauhausShape type="quartercircle" color="#111111" size={55} className="top-[233px] right-[144px]" rotation={90} delay={1.0} />
            
            {/* Golden Rectangle Frame Overlay */}
            <div className="absolute top-[89px] left-[55px] w-[233px] h-[377px] border border-black opacity-20 pointer-events-none"></div>
            <div className="absolute top-[89px] left-[55px] w-[233px] h-[233px] border-b border-black opacity-20 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;