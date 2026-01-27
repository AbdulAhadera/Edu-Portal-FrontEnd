interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

const Button = ({ text, onClick, type = "button" }: ButtonProps) => {
    return (
        <button
            type={type}            // ✅ now TS is happy
            onClick={onClick}
            className="w-full mt-4 text-center bg-primary text-button font-medium py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors cursor-pointer"
        >
            {text}
        </button>
    );
};

export default Button;