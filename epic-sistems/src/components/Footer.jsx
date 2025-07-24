import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src="/logo.svg" alt="Epic Sistems Logo" className="h-8" />
            </a>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-epic-blue-start">Servicios</a></li>
              <li><a href="#portfolio" className="hover:text-epic-blue-start">Portafolio</a></li>
              <li><a href="#testimonials" className="hover:text-epic-blue-start">Testimonios</a></li>
              <li><a href="#contact" className="hover:text-epic-blue-start">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-epic-blue-start">Facebook</a>
              <a href="#" className="hover:text-epic-blue-start">Twitter</a>
              <a href="#" className="hover:text-epic-blue-start">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; 2024 Epic Sistems. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
