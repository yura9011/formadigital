
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-dark leading-tight mb-4">
          Contenido profesional para tus redes. <br />
          <span className="text-brand-primary">Cero estrés.</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-medium max-w-3xl mx-auto mb-8">
          Diseñamos paquetes de publicaciones listos para usar, ayudando a pequeños negocios a mantener una presencia digital coherente y atractiva.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#servicios" className="w-full sm:w-auto bg-brand-primary text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-brand-secondary transition-transform transform hover:scale-105">
            Ver Paquetes
          </a>
          <a href="#como-funciona" className="w-full sm:w-auto bg-transparent border-2 border-neutral-dark text-neutral-dark font-bold text-lg px-8 py-4 rounded-lg hover:bg-neutral-dark hover:text-white transition-all">
            Cómo Funciona
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
