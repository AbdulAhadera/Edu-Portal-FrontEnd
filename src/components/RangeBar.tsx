
interface RangeBarProps {
    percent: number;
    color?: string;
    text?: string;
}

const RangeBar: React.FC<RangeBarProps> = ({ percent, text = "Progress", color = "bg-blue-500" }) => {
    const safePercent = Math.max(0, Math.min(100, percent));

    return (
        <div className="mb-2">
            <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-text-muted">{text}</span>
                <span className="text-sm font-medium text-text-main">{safePercent} %</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                    className={`${color} h-2 rounded-full transition-all`}
                    style={{ width: `${safePercent}%` }}
                ></div>
            </div>

        </div>
    )
}

export default RangeBar;