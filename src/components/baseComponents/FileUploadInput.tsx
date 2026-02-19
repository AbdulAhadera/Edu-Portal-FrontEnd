import React, { useState } from "react";
import type { FileUploadInputProps } from "./BaseType";
import type { UseFormRegisterReturn } from "react-hook-form";

interface RHFFileUploadInputProps extends FileUploadInputProps {
  register?: UseFormRegisterReturn;
}

const FileUploadInput: React.FC<RHFFileUploadInputProps> = ({
  label,
  error,
  required = false,
  onChange,
  containerClassName = "",
  className,
  register,
}) => {
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <div className={`flex flex-col w-full ${containerClassName}`}>
      {label && (
        <label className="mb-1 text-sm font-medium text-text-main">
          {label} {required && <span className="ml-1 text-danger">*</span>}
        </label>
      )}

      <label
        className={`
          flex items-center justify-center
          border border-dashed rounded-sm cursor-pointer
          text-sm transition
          hover:bg-ui-hover
          text-text-muted
          
        `}
      >
        {fileName ? (
          <span className="text-text-primary truncate px-2">{fileName}</span>
        ) : (
          <span className="text-text-muted">Click to upload file</span>
        )}

        <input
          type="file"
          hidden
          {...(register ? register : {})} // ← RHF binding
          onChange={(e) => {
            const file = e.target.files?.[0] ?? null;
            setFileName(file?.name ?? null);
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            register?.onChange && register.onChange(e); // trigger RHF
            onChange?.(file);
          }}
        />
      </label>

      {error && <span className="mt-1 text-xs text-danger">{error}</span>}
    </div>
  );
};

export default FileUploadInput;
