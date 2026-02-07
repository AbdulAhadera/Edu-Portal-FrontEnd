import type { ReactNode } from "react";

export interface ButtonProps {
  text?: string; // agar sirf icon bhi use karna ho
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}
