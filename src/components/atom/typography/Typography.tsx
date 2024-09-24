// src/components/atoms/typography/Typography.tsx

import React from 'react';
import { TypographyProps } from './type';

export const Typography: React.FC<TypographyProps> = ({ variant, children, className }) => {
  const baseClasses = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-medium',
    p: 'text-base',
  };

  const Component = variant;

  return <Component className={`${baseClasses[variant]} ${className}`}>{children}</Component>;
};
