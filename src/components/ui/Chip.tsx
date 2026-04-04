import React, { HTMLAttributes } from 'react';

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'innovation';
}

export function Chip({ variant = 'default', className = '', children, ...props }: ChipProps) {
  const baseClasses = 'inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full';
  
  const variants = {
    default: 'bg-secondary_container text-on_secondary_container',
    innovation: 'bg-tertiary_fixed_dim text-on_tertiary_fixed',
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
}
