import React from 'react';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'primary' }) => {
  const baseClass = 'px-4 py-2 rounded font-semibold ';
  const classNames = type === 'primary'
    ? `${baseClass} bg-blue-500 text-white hover:bg-blue-600`
    : `${baseClass} bg-gray-500 text-white hover:bg-gray-600`;

  return (
    <button onClick={onClick} className={classNames}>
      {label}
    </button>
  );
};

export default Button;
