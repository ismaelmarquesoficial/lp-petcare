import React from 'react';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Stats />
      <Benefits />
      <Testimonials />
    </div>
  );
}

export default App;