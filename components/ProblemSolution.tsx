
import React from 'react';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-brand-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const ProblemSolution: React.FC = () => {
  const painPoints = [
    "¿Te falta tiempo para crear contenido de calidad?",
    "¿Sientes que tus redes no lucen profesionales?",
    "¿La constancia en publicaciones es un desafío para ti?",
  ];

  return (
    <section id="problema" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark">Tu presencia online, simplificada.</h2>
          <p className="mt-4 text-lg text-neutral-medium max-w-2xl mx-auto">Entendemos los desafíos de gestionar redes sociales. Por eso, te ofrecemos una solución directa.</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-neutral-dark">Los Retos Comunes</h3>
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="bg-red-100 p-1.5 rounded-full mt-1">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
                <p className="text-neutral-medium text-lg">{point}</p>
              </div>
            ))}
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-neutral-dark mb-4">La Solución: <span className="text-brand-primary">Forma Digital</span></h3>
            <p className="text-neutral-medium mb-6">Nos encargamos del diseño y la estrategia de tu contenido para que tú te enfoques en tu negocio.</p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3"><CheckIcon /> <span>Contenido atractivo y profesional.</span></li>
              <li className="flex items-center space-x-3"><CheckIcon /> <span>Planificación y consistencia.</span></li>
              <li className="flex items-center space-x-3"><CheckIcon /> <span>Ahorro de tiempo y recursos.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
