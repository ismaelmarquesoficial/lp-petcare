import React from 'react';
import { Stethoscope } from 'lucide-react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gray-900 py-20 px-4 flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-float">
          <Stethoscope className="w-20 h-20 text-emerald-400 mx-auto mb-8" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Cuidamos do seu Pet, <span className="text-emerald-400">Onde e Quando</span> Você Precisar!
        </h1>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Consultas veterinárias online com profissionais qualificados, para garantir a saúde e o bem-estar do seu amigo de quatro patas sem sair de casa.
        </p>
        <Button size="lg">
          Agende sua Consulta Agora
        </Button>
        <p className="text-gray-400 mt-4">
          Seu pet merece o melhor cuidado. Clique e fale com um veterinário em minutos!
        </p>
      </div>
    </div>
  );
}