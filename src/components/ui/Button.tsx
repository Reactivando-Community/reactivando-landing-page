import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-full px-6 py-3 font-sans font-semibold transition-all duration-300 transform hover:-translate-y-1';
  
  const variants = {
    primary: 'bg-gradient-primary text-on_primary shadow-glass hover:shadow-ambient',
    secondary: 'bg-surface_container_highest border border-border_ghost text-on_surface hover:bg-surface_container hover:border-border_ghost_hover',
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
