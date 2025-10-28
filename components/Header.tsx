
import React, { useState, useEffect } from 'react';

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#sobre-nosotros', label: 'Nosotros' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-neutral-dark z-50">
            Forma<span className="text-brand-primary">Digital</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-neutral-medium font-medium hover:text-brand-primary transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#contacto" className="hidden md:inline-block bg-brand-primary text-white font-semibold px-5 py-2 rounded-lg hover:bg-brand-secondary transition-all">
              Empezar
          </a>
          <button className="md:hidden text-neutral-dark z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-white md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full pt-20">
          <nav className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleLinkClick} className="text-2xl text-neutral-dark font-semibold hover:text-brand-primary transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#contacto" onClick={handleLinkClick} className="mt-12 bg-brand-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-secondary transition-all">
            Empezar
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
