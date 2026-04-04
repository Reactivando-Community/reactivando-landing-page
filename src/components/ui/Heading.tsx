import React, { HTMLAttributes, ElementType } from 'react';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Heading({ level = 1, className = '', children, ...props }: HeadingProps) {
  const Tag = `h${level}` as ElementType;
  
  // High-contrast editorial typography
  const baseClasses = 'font-display font-black tracking-tight text-surface_tint';
  
  const sizes = {
    1: 'text-5xl md:text-7xl mb-6',
    2: 'text-4xl md:text-5xl mb-4',
    3: 'text-3xl md:text-4xl mb-3',
    4: 'text-2xl md:text-3xl mb-2',
    5: 'text-xl md:text-2xl mb-2',
    6: 'text-lg md:text-xl mb-1',
  };

  return (
    <Tag className={`${baseClasses} ${sizes[level]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
