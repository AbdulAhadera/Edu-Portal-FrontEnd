import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className, ...rest }) => {
    return (
        <div className="flex flex-col w-full">
            {label && (
                <label className="mb-1 text-sm font-medium text-text-muted">
                    {label}
                </label>
            )}
            <input
                className={`border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${error ? "border-danger" : "border-ui-border"} ${className}`}
                {...rest}
            />
            {error && <span className="text-sm text-danger mt-1">{error}</span>}
        </div>
    );
};

export default Input;