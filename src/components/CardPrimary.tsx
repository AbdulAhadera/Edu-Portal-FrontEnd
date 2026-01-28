
interface CardPrimaryProps {
  data: {
    id: string;
    title: string;
    value: string | number;
    icon: React.ElementType; // Better for Lucide components
    iconColor: string;
    bgColor: string;
  }
}

const CardPrimary = ({ data }: CardPrimaryProps) => {
  const Icon = data.icon;

  return (
    <div className="bg-card rounded-sm p-4 shadow-sm border border-ui-border transition-colors">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-text-muted text-sm font-medium">{data.title}</p>
          <p className="text-3xl font-bold text-text-main mt-1">{data.value}</p>
        </div>

        <div className={`mt-5 p-2 ${data.bgColor} rounded-sm`}>
          <Icon className={data.iconColor} size={24} />
        </div>
      </div>
    </div>
  )
}

export default CardPrimary;