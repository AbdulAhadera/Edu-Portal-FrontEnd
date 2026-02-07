import type { ButtonProps } from "./BaseType";

const Button = ({
  text,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  loading = false,
  startIcon,
  endIcon,
}: ButtonProps) => {
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
