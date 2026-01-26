
interface ButtonProps {
    text: string
    onClick?: () => void
}

const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <div
            className="w-full mt-4 text-center bg-primary text-button font-medium py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors pointer-cursor"
            onClick={onClick}
        >
            {text}
        </div>
    )
}

export default Button