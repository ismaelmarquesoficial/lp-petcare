import React from 'react';
import { Card } from './ui/Card';
import { SectionTitle } from './ui/SectionTitle';
import { benefits } from '@/constants/benefits';

export function Benefits() {
  return (
    <div className="bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle highlight="nosso serviço">
          Por que escolher nosso serviço?
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <benefit.icon className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}