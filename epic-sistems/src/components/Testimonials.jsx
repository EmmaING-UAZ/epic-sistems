import React from 'react';

const testimonials = [
  {
    quote: 'Epic Sistems transformó nuestra visión en una realidad digital. Su equipo es profesional, ágil y muy talentoso.',
    author: 'Juan Pérez',
    company: 'CEO de Tech Solutions',
  },
  {
    quote: 'El proceso de desarrollo fue transparente y eficiente. Estamos muy contentos con el resultado final.',
    author: 'María García',
    company: 'Directora de Marketing de Innovate Corp',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="text-gray-800 font-bold">{testimonial.author}</p>
              <p className="text-gray-500">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
