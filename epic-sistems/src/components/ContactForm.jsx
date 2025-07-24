import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Contáctanos</h2>
        <div className="max-w-lg mx-auto">
          <form className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre</label>
              <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-epic-blue-start" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Correo Electrónico</label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-epic-blue-start" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensaje</label>
              <textarea id="message" rows="4" className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-epic-blue-start"></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-epic-blue-start to-epic-blue-end text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition duration-300"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
