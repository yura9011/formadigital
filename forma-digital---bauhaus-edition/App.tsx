import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Manifesto from './components/sections/Manifesto';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#D93025] origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Contact />
      </main>

      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display font-black text-2xl tracking-tighter">
            FORMA DIGITAL
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Bauhaus Marketing Edition. Less is More.
          </div>
          <div className="flex gap-4">
             {['Instagram', 'Twitter', 'LinkedIn'].map(social => (
                 <a key={social} href="#" className="uppercase text-xs tracking-widest hover:text-[#F9AB00] transition-colors">{social}</a>
             ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;