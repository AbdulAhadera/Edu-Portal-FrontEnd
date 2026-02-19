/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from "react";
import type { FieldValues } from "react-hook-form";

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
  required?: boolean;
  wrapperClassName?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any; // from react-hook-form
}

export interface FileUploadInputProps {
  label?: string;
  error?: string;
  required?: boolean;
  onChange?: (file: File | null) => void; // either file either null
  containerClassName?: string;
  className?: string;
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
 
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export type FieldConfig = {
  name: string;
  label: string;
  type?: "text" | "email" | "number" | "datetime-local" | "file" | string;
  placeholder?: string;
  required?: boolean;
};

export type BaseFormProps = {
  fields: FieldConfig[];
  defaultValues?: Record<string, any>;
  onSubmit: (data: FieldValues) => void;
  submitButtonText: string;
};
