import React, { forwardRef } from "react";
import type { BaseInputProps } from "./BaseType";

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    {
      label,
      error,
      className = "",
      required = false,
      wrapperClassName = "",
      type = "text",
      register,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className={`flex flex-col ${wrapperClassName}`}>
        {label && (
          <label className="text-sm font-medium text-text-main">
            {label}
            {required && <span className="ml-1 text-danger">*</span>}
          </label>
        )}

        <input
          type={type}
          {...rest}
          {...(register ?? {})} // ← register last mein spread karo
          className={`
          rounded-sm border text-sm text-text-main
          transition focus:outline-none focus:ring-2 focus:ring-primary
          placeholder:text-text-muted
          ${error ? "border-danger" : "border-ui-border"}
          ${className}
        `}
        />

        {error && <span className="mt-1 text-xs text-danger">{error}</span>}
      </div>
    );
  },
);

export default BaseInput;
