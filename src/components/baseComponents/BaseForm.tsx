import React from "react";
import { useForm } from "react-hook-form";
import type { BaseFormProps, FieldConfig } from "./BaseType";
import BaseInput from "./BaseInput";
import FileUploadInput from "./FileUploadInput";
import Button from "./Button";

const BaseForm: React.FC<BaseFormProps> = ({
  fields,
  defaultValues = {},
  onSubmit,
  submitButtonText,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((field: FieldConfig) => (
        <div key={field.name}>
          {field.type === "file" ? (
            <FileUploadInput
              label={field.label}
              required={field.required}
              register={register(field.name, {
                required: field.required ? `${field.label} is required` : false,
              })}
              error={errors[field.name]?.message?.toString()}
              className="w-full py-2 text-text-main border border-gray-300 rounded-sm"
            />
          ) : (
            <BaseInput
              label={field.label}
              type={field.type || "text"}
              placeholder={field.placeholder}
              required={field.required}
              register={register(field.name, {
                required: field.required ? `${field.label} is required` : false,
              })}
              error={errors[field.name]?.message?.toString()}
              className="py-1 px-2 text-text-main border border-gray-300 rounded-sm w-full"
            />
          )}
        </div>
      ))}

      {/* Button with type="submit" */}
      <Button
        type="submit"
        text={submitButtonText}
        className="bg-primary text-white font-semibold w-full py-2 rounded-sm"
      />
    </form>
  );
};

export default BaseForm;
