import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 34); // Fibonacci 34
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Philosophy', href: '#manifesto' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${scrolled ? 'py-5' : 'py-8'}`}>
      <div className="container mx-auto px-5 md:px-8">
        <nav className={`relative flex items-center justify-between bg-white border-2 border-black p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all ${scrolled ? 'bg-opacity-95 backdrop-blur-sm' : 'bg-opacity-100'}`}>
          
          {/* Logo - Golden Ratio Composition */}
          <div className="flex items-center gap-3 z-50">
            {/* The Circle diameter (34px) vs Square (21px) approximates 1.618 */}
            <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute w-[34px] h-[34px] bg-[#D93025] rounded-full border-2 border-black z-10"></div>
                <div className="absolute w-[21px] h-[21px] bg-[#1A73E8] border-2 border-black -ml-4 mt-4 z-20"></div>
            </div>
            <span className="font-display font-black text-2xl tracking-tighter ml-1">FORMA</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-13">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="font-bold uppercase tracking-wide text-sm hover:text-[#D93025] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D93025] transition-all duration-300 group-hover:w-[61.8%]"></span>
              </a>
            ))}
            {/* Golden Ratio Button: 34px Horizontal padding / 13px Vertical padding */}
            <a href="#contact" className="bg-black text-white px-[34px] py-[13px] font-bold uppercase tracking-wider hover:bg-[#F9AB00] hover:text-black transition-colors border-2 border-black">
              Start Project
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={34} /> : <Menu size={34} />}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.618 }}
                className="fixed top-0 right-0 w-full h-screen bg-[#F4F4F0] border-l-4 border-black z-40 flex flex-col justify-center items-center gap-8 md:hidden"
              >
                {navLinks.map((link) => (
                  <a 
                    key={link.label} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-display font-black text-5xl uppercase tracking-tighter hover:text-[#D93025]"
                  >
                    {link.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;