import React from 'react';
import { PawPrint } from 'lucide-react';
import { Button } from './ui/Button';
import { navigationLinks } from '@/constants/navigation';

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 glass-effect">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <PawPrint className="w-8 h-8 text-emerald-400" />
            <span className="text-xl font-bold text-white">PetCare</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <Button size="sm">Login</Button>
        </div>
      </div>
    </nav>
  );
}