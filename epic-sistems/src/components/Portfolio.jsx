import React from 'react';

const projects = [
  {
    image: 'https://via.placeholder.com/400x300',
    title: 'Proyecto Uno',
    category: 'Desarrollo Web',
  },
  {
    image: 'https://via.placeholder.com/400x300',
    title: 'Proyecto Dos',
    category: 'Desarrollo Móvil',
  },
  {
    image: 'https://via.placeholder.com/400x300',
    title: 'Proyecto Tres',
    category: 'Diseño UI/UX',
  },
    {
    image: 'https://via.placeholder.com/400x300',
    title: 'Proyecto Cuatro',
    category: 'Desarrollo Web',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Nuestro Portafolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{project.title}</h3>
                <p className="text-gray-600">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
