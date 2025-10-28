
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import Packages from './components/Packages';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {

  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
        const anchor = (event.target as HTMLElement).closest('a[href^="#"]');
        if (!anchor) return;
        
        const href = anchor.getAttribute('href');
        
        // Prevenir el salto brusco del navegador
        event.preventDefault();

        if (href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        } else {
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
        document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Packages />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;