// src/components/atoms/button/Button.tsx

import React from 'react';
import { ButtonProps } from './type';

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick, className }) => {
  const baseClasses = variant === 'primary'
    ? 'bg-blue-500 hover:bg-blue-600 text-white'
    : 'bg-gray-500 hover:bg-gray-600 text-white';

  return (
    <button onClick={onClick} className={`${baseClasses} px-4 py-2 rounded ${className}`}>
      {children}
    </button>
  );
};
