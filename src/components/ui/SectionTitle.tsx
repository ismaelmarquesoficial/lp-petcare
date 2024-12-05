import React from 'react';
import { cn } from '@/utils/cn';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  highlight?: string;
}

export function SectionTitle({ children, className, highlight }: SectionTitleProps) {
  if (!highlight) {
    return (
      <h2 className={cn("text-4xl font-bold text-center text-white mb-16", className)}>
        {children}
      </h2>
    );
  }

  const [before, after] = children.toString().split(highlight);

  return (
    <h2 className={cn("text-4xl font-bold text-center text-white mb-16", className)}>
      {before}
      <span className="text-emerald-400">{highlight}</span>
      {after}
    </h2>
  );
}