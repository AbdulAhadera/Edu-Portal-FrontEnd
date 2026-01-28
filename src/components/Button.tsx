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
            className={`w-full mt-4 text-center bg-primary text-button font-medium py-2 px-4 rounded-sm hover:bg-primary-dark transition-colors cursor-pointer ${className}`} >
            {text}
        </button>
    );
};

export default Button;