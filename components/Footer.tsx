
import React from 'react';

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-dark text-neutral-light">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white">
              Forma<span className="text-brand-primary">Digital</span>
            </a>
            <p className="text-sm text-gray-400 mt-1">&copy; {new Date().getFullYear()} Forma Digital. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon/></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
