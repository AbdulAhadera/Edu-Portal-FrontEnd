import React, { forwardRef } from "react";
import type { BaseInputProps } from "./BaseType";

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    {
      label,
      error,
      className = "",
      wrapperClassName = "",
      type = "text",
      ...rest
    },
    ref,
  ) => {
    return (
      <div className={`flex flex-col ${wrapperClassName}`}>
        {label && (
          <label className="text-sm font-medium text-text-muted">
            {label}
          </label>
        )}

        <input
          ref={ref}
          type={type}
          className={`
            rounded-sm border text-sm
            transition focus:outline-none focus:ring-2 focus:ring-primary
            ${error ? "border-danger" : "border-ui-border"}
            ${className}
          `}
          {...rest}
        />

        {error && <span className="mt-1 text-xs text-danger">{error}</span>}
      </div>
    );
  },
);

export default BaseInput;
