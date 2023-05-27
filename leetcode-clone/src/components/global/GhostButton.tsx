import React from 'react';

type GhostButtonProps = {
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset'; // New prop for button type
  children: React.ReactNode;
};

const GhostButton: React.FC<GhostButtonProps> = ({ onClick, className,
    type = 'button',
     children }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`text-sm font-medium text-gray-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default GhostButton;