import React from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  children, 
  className, 
  variant = 'primary',
  size = 'md',
  ...props 
}: ButtonProps) {
  const baseStyles = "font-semibold rounded-full transition-all duration-300 transform hover:scale-105";
  
  const variants = {
    primary: "bg-emerald-500 hover:bg-emerald-600 text-white hover:shadow-emerald-500/25",
    secondary: "bg-gray-700 hover:bg-gray-600 text-white"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}