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


export interface Column<T, K extends keyof T = keyof T> {
  key: K;
  header: string;
  render?: (value: T[K], row: T) => React.ReactNode;
  nowrap?: boolean;
}

export interface DataTableProps<T> {
  rows: T[];
  columns?: Column<T>[];
  className: string;
}