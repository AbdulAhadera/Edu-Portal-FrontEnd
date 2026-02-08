import React, { useState } from "react";
import type { FileUploadInputProps } from "./BaseType";

const FileUploadInput: React.FC<FileUploadInputProps> = ({
  label,
  error,
  onChange,
  containerClassName = "",
  dropzoneClassName = "",
}) => {
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <div className={`flex flex-col w-full ${containerClassName}`}>
      {label && (
        <label className="mb-1 text-sm font-medium text-text-muted">
          {label}
        </label>
      )}

      <label
        className={`
          flex items-center justify-center
          border border-dashed rounded-sm cursor-pointer
          text-sm transition
          hover:bg-gray-50
          ${dropzoneClassName}
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
          onChange={(e) => {
            const file = e.target.files?.[0] ?? null;
            setFileName(file?.name ?? null);
            onChange?.(file);
          }}
        />
      </label>

      {error && <span className="mt-1 text-xs text-danger">{error}</span>}
    </div>
  );
};

export default FileUploadInput;
