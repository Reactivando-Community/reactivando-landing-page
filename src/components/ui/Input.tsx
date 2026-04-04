import React, { InputHTMLAttributes } from 'react';

export function Input({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input 
      className={`bg-surface_container_lowest border border-border_ghost rounded-xl px-4 py-3 text-on_surface placeholder-on_surface_variant outline-none transition-all duration-300 focus:bg-surface_container_highest focus:border-border_ghost_hover focus:shadow-ambient ${className}`}
      {...props}
    />
  );
}
