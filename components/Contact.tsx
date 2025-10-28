
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="bg-brand-primary py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">¿Listo para Empezar?</h2>
          <p className="mt-4 text-lg text-brand-light max-w-2xl mx-auto">Completa el formulario y nos pondremos en contacto contigo para transformar tu presencia digital.</p>
        </div>
        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-dark">Nombre</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" placeholder="Tu Nombre Completo" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-dark">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" placeholder="tu@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-dark">Mensaje</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-brand-primary hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary">
                Enviar Mensaje
              </button>
            </div>
          </form>
          <div className="mt-8 text-center">
            <p className="text-neutral-medium">O escríbenos directamente a:</p>
            <a href="mailto:hola@formadigital.com" className="font-semibold text-brand-primary hover:text-brand-secondary">hola@formadigital.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
