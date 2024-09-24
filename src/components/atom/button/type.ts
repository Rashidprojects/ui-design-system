// src/components/atoms/button/type.ts

export interface ButtonProps {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }
  