import React from 'react';
import { Card } from './ui/Card';
import { stats } from '@/constants/stats';

export function Stats() {
  return (
    <div className="bg-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <stat.icon className="w-12 h-12 text-emerald-400 mb-6" />
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}