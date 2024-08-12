
import React from 'react';
type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'button', className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`font-medium rounded-lg text-sm px-5 py-2.5 text-center ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
