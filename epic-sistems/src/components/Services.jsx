import React from 'react';

const services = [
  {
    icon: 'ICON',
    title: 'Desarrollo Web',
    description: 'Creamos sitios web y aplicaciones web a medida, responsivas y optimizadas para el rendimiento.',
  },
  {
    icon: 'ICON',
    title: 'Desarrollo Móvil',
    description: 'Desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android.',
  },
  {
    icon: 'ICON',
    title: 'Consultoría UI/UX',
    description: 'Diseñamos interfaces de usuario intuitivas y atractivas para mejorar la experiencia de tus usuarios.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl text-epic-blue-start mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
