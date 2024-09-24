// src/components/atoms/button/type.ts

export interface ButtonProps {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode; // Important to use ReactNode for children
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
  }
  