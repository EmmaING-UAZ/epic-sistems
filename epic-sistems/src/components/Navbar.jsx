import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img src="/logo.svg" alt="Epic Sistems Logo" className="h-8" />
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-gray-600 hover:text-epic-blue-start">Servicios</a>
          <a href="#portfolio" className="text-gray-600 hover:text-epic-blue-start">Portafolio</a>
          <a href="#testimonials" className="text-gray-600 hover:text-epic-blue-start">Testimonios</a>
          <a href="#contact" className="text-gray-600 hover:text-epic-blue-start">Contacto</a>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-gray-600 hover:text-epic-blue-start focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
