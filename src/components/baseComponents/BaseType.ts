import type { ReactNode } from "react";

export interface ButtonProps {
  text?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  wrapperClassName?: string;
}


export interface FileUploadInputProps {
  label?: string;
  error?: string;
  onChange?: (file: File | null) => void; // either file either null
  containerClassName?: string;
  dropzoneClassName?: string;
}
