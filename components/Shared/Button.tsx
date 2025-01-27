import React, { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, className = "", children, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`button ${className} ${disabled ? "bg-gray-400 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
