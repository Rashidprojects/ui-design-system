// src/components/atoms/typography/type.ts

export interface TypographyProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
    children: React.ReactNode;
    className?: string;
  }
  