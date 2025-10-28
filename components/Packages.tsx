
import React from 'react';

const CheckIcon = () => (
    <svg className="w-5 h-5 text-brand-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

interface PackageProps {
    name: string;
    description: string;
    features: string[];
    price?: string;
    popular?: boolean;
}

const PackageCard: React.FC<PackageProps> = ({ name, description, features, price, popular }) => (
    <div className={`relative border rounded-xl p-8 flex flex-col ${popular ? 'border-brand-primary ring-2 ring-brand-primary bg-white' : 'border-gray-200 bg-neutral-light/50'}`}>
        {popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Más Popular</div>}
        <h3 className="text-2xl font-bold text-neutral-dark">{name}</h3>
        <p className="text-neutral-medium mt-2 mb-6">{description}</p>
        <ul className="space-y-4 mb-8 flex-grow">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start"><CheckIcon /><span>{feature}</span></li>
            ))}
        </ul>
        {price && <div className="text-4xl font-extrabold text-neutral-dark mb-1">{price}<span className="text-base font-medium text-neutral-medium">/mes</span></div>}
        <a href="#contacto" className={`w-full text-center mt-6 font-bold py-3 rounded-lg transition-all ${popular ? 'bg-brand-primary text-white hover:bg-brand-secondary' : 'bg-white text-brand-primary border border-brand-primary hover:bg-brand-primary hover:text-white'}`}>
            Lo Quiero
        </a>
    </div>
);

const Packages: React.FC = () => {
    const packagesData = [
        {
            name: "Paquete Esencial",
            description: "Para empezar con una presencia sólida y profesional.",
            features: [
                "12 publicaciones para feed",
                "20 stories mensuales",
                "Diseño de plantillas personalizadas",
                "Análisis básico de hashtags",
                "Reunión de estrategia mensual"
            ],
        },
        {
            name: "Paquete Crecimiento",
            description: "Ideal para negocios que buscan expandir su alcance e interacción.",
            features: [
                "20 publicaciones para feed",
                "40 stories mensuales + 4 Reels",
                "Diseño de plantillas y animaciones",
                "Análisis avanzado de hashtags y competencia",
                "2 reuniones de estrategia mensuales",
                "Soporte prioritario"
            ],
            popular: true,
        },
        {
            name: "Paquete Personalizado",
            description: "Una solución a medida para necesidades específicas y objetivos ambiciosos.",
            features: [
                "Contenido y volumen a definir",
                "Gestión de campañas de anuncios",
                "Reportes de rendimiento detallados",
                "Consultoría estratégica continua",
                "Todo lo del plan Crecimiento y más"
            ],
        }
    ];

    return (
        <section id="servicios" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark">Planes Flexibles para tu Negocio</h2>
                    <p className="mt-4 text-lg text-neutral-medium max-w-2xl mx-auto">Elige el paquete que impulse tu marca al siguiente nivel.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {packagesData.map((pkg, index) => (
                        <PackageCard key={index} {...pkg} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;
