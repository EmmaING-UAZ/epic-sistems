import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-epic-blue-start to-epic-blue-end text-white pt-32 pb-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Transformando Ideas en Soluciones Digitales</h1>
        <p className="text-xl mb-8">Creamos software a la medida para impulsar tu negocio.</p>
        <a
          href="#contact"
          className="bg-white text-epic-blue-start font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300"
        >
          Contáctanos
        </a>
      </div>
    </section>
  );
};

export default Hero;
