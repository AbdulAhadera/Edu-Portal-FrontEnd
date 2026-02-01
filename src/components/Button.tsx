interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
}

const Button = ({ text, onClick, type = "button", className="" }: ButtonProps) => {
    return (
        <button
            type={type}            // ✅ now TS is happy
            onClick={onClick}
            className={`text-center text-button font-medium rounded-sm cursor-pointer ${className}`} >
            {text}
        </button>
    );
};

export default Button;