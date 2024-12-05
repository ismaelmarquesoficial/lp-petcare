import React from 'react';
import { cn } from '@/utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      "glass-effect p-8 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/10",
      className
    )}>
      {children}
    </div>
  );
}