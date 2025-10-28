import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre-nosotros" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
              alt="Equipo de Forma Digital" 
              className="rounded-xl shadow-2xl object-cover w-full h-full"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark">El Toque Humano Detrás de la Estrategia Digital</h2>
            <p className="mt-6 text-lg text-neutral-medium">
              Somos un estudio independiente con una misión clara: ayudar a pequeños negocios y emprendedores a brillar en el mundo digital.
            </p>
            <p className="mt-4 text-neutral-medium">
              Creemos que una gran presencia en redes sociales no debería ser un lujo inalcanzable. Combinamos diseño, estrategia y una profunda comprensión de tu marca para crear contenido que conecta y convierte. Detrás de Forma Digital hay personas reales apasionadas por ver crecer tu negocio.
            </p>
            <a href="#contacto" className="mt-8 inline-block bg-brand-primary text-white font-bold px-8 py-3 rounded-lg hover:bg-brand-secondary transition-all">
                Conoce más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;