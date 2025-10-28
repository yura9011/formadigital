
import React from 'react';

// Fix: Changed type from JSX.Element to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
const StepIcon: React.FC<{ icon: React.ReactElement; title: string; description: string; stepNumber: number; }> = ({ icon, title, description, stepNumber }) => (
  <div className="relative flex flex-col items-center text-center">
    <div className="absolute top-8 left-1/2 w-full border-t-2 border-dashed border-gray-300 hidden md:block" style={{ transform: 'translateX(-50%)', zIndex: -1 }}></div>
    <div className="relative flex items-center justify-center w-16 h-16 bg-brand-light text-brand-primary rounded-full mb-4 ring-8 ring-neutral-light">
      <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">{stepNumber}</span>
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-neutral-dark mb-2">{title}</h3>
    <p className="text-neutral-medium px-4">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
      title: 'Elige tu Paquete',
      description: 'Explora nuestras opciones y elige la que mejor se adapte a tus necesidades.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
      title: 'Briefing y Estrategia',
      description: 'Nos reunimos contigo para entender a fondo tu marca, tu voz y tus objetivos.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>,
      title: 'Recibe tu Contenido',
      description: 'Entregamos todo el material gráfico y los textos listos para ser publicados.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.085a2 2 0 00-1.736.93L5 10m7-10a2 2 0 002 2h2.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20" /></svg>,
      title: 'Publica con Confianza',
      description: 'Sube tu contenido fácilmente y observa cómo crece tu presencia online.'
    }
  ];

  return (
    <section id="como-funciona" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark">Nuestro Proceso Simplificado</h2>
          <p className="mt-4 text-lg text-neutral-medium max-w-2xl mx-auto">Claridad y eficiencia en cada paso. Así trabajamos para ti.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 md:gap-4 relative">
          {steps.map((step, index) => (
            <StepIcon key={index} stepNumber={index + 1} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
