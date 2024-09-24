import React from 'react';
import { CardProps } from './type';

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`shadow-md rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};
