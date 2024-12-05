import React from 'react';
import { Quote } from 'lucide-react';
import { Card } from './ui/Card';
import { SectionTitle } from './ui/SectionTitle';
import { testimonials } from '@/constants/testimonials';

export function Testimonials() {
  return (
    <div className="bg-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle highlight="nossos clientes">
          O que dizem nossos clientes
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <Quote className="w-12 h-12 text-emerald-400/30 absolute top-6 right-6" />
              <p className="text-gray-300 text-lg mb-6 italic leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full mr-4 object-cover ring-2 ring-emerald-400"
                />
                <div>
                  <div className="font-semibold text-white text-lg">{testimonial.author}</div>
                  <div className="text-emerald-400">{testimonial.pet}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}