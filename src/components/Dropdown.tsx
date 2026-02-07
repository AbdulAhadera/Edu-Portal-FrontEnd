import React from "react";
import type { DropdownProps } from "../types/index.ts";

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange, placeholder = "Select...", className }) => {
    return (
        <select
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value)}
            className={`border bg-card text-text-main rounded-sm px-3 py-2 focus:outline-none focus:ring ${className ?? ""}`}
        >
            <option
            className="text-text-main"
                value="" disabled>{placeholder}</option>
            {options.map((opt) => (
                <option
                    className="text-text-main"
                    key={opt.value} value={opt.value}
                >
                    {opt.label}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;