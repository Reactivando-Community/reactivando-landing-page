import React, { HTMLAttributes } from 'react';

export function Card({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={`bg-surface_container_low rounded-xl p-8 border-none transition-transform duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
