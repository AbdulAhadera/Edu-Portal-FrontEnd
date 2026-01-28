interface BaseHeaderProps {
    heading: string;
    text?: string; // make it optional if sometimes you won't pass text
}

const BaseHeader: React.FC<BaseHeaderProps> = ({ heading, text }) => {
    return (
        <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
                {heading}
            </h1>
            <p className="text-text-muted mt-1">
                {text}
            </p>
        </div>
    )
}

export default BaseHeader