import React, { useState, useEffect } from 'react';

const PortfolioItem: React.FC<{ imageUrl: string, category: string, title: string }> = ({ imageUrl, category, title }) => (
    <div className={`group relative overflow-hidden rounded-lg`}>
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-end p-6">
            <p className="text-brand-light text-sm font-semibold uppercase tracking-wider">{category}</p>
            <h3 className="text-white text-xl font-bold">{title}</h3>
        </div>
    </div>
);

const Portfolio: React.FC = () => {
  const portfolioData = [
    { imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80', category: 'Cafetería', title: 'Branding para Redes' },
    { imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80', category: 'Coach de Vida', title: 'Paquete de Contenido Mensual' },
    { imageUrl: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&q=80', category: 'Tienda de Ropa', title: 'Campaña de Lanzamiento' },
    { imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=600&q=80', category: 'Fitness', title: 'Historias Interactivas' },
    { imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4b248a?auto=format&fit=crop&w=600&q=80', category: 'Startup Tecnológica', title: 'Contenido Educativo' },
    { imageUrl: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80', category: 'Decoración', title: 'Catálogo Visual' },
  ];

  const categories = ['Todos', ...Array.from(new Set(portfolioData.map(item => item.category)))];

  const [activeFilter, setActiveFilter] = useState('Todos');
  const [filteredItems, setFilteredItems] = useState(portfolioData);

  useEffect(() => {
    if (activeFilter === 'Todos') {
      setFilteredItems(portfolioData);
    } else {
      setFilteredItems(portfolioData.filter(item => item.category === activeFilter));
    }
  }, [activeFilter, portfolioData]);

  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark">Nuestro Trabajo Habla por Sí Mismo</h2>
          <p className="mt-4 text-lg text-neutral-medium max-w-2xl mx-auto">Creamos contenido que no solo se ve bien, sino que también funciona.</p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 mb-12">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 ${activeFilter === category ? 'bg-brand-primary text-white shadow-md' : 'bg-gray-100 text-neutral-medium hover:bg-brand-light'}`}
                >
                    {category}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 md:gap-6">
            {filteredItems.map((item, index) => (
                <PortfolioItem key={`${item.title}-${index}`} {...item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;