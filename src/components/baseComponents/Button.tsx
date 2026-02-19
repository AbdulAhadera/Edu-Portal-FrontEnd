import React from "react";
import type { ButtonProps } from "./BaseType";

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button", // default for normal buttons
  className = "",
  disabled = false,
  loading = false,
  startIcon,
  endIcon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        cursor-pointer
        ${disabled || loading ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {loading && <span className="animate-spin">⏳</span>}
      {startIcon && <span>{startIcon}</span>}
      {text}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};

export default Button;
