import BaseHeader from "../../components/BaseHeader"
import Button from "../../components/baseComponents/Button";
import CardPrimary from "../../components/cards/CardPrimary";
import { teacherDashboardStats } from "../../data/mockData";
import { announcementsData } from "../../data/mockData";


const TeacherDashboard: React.FC = () => {
    return (
        <div>
            <BaseHeader
                heading="Welcome Back, Abdul Ahad"
                text="Here's an overview of your teaching dashboard"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
                {teacherDashboardStats.map((card) => (
                    <CardPrimary key={card.id} data={card} />
                ))}
            </div>


            <div className="flex flex-col md:flex-row gap-3">
                <div className="bg-card p-3 rounded-sm border border-ui-border shadow-sm w-full lg:w-2/3">
                    <div className="flex justify-between">
                        <h3 className="text-xl font-semibold text-text-main mb-3">Announcements</h3>
                        <Button
                            text="Post an Announcement"
                            className="text-primary hover:underline mb-4"
                        />
                    </div>



                    <div className="space-y-2">
                        {announcementsData.map((data) => {
                            const Icon = data.icon;

                            // Determine colors based on type
                            const typeColors = {
                                warning: { bg: "bg-yellow-50", text: "text-yellow-600" },
                                info: { bg: "bg-blue-50", text: "text-blue-600" },
                                danger: { bg: "bg-red-50", text: "text-red-600" },
                            };

                            const colors = typeColors[data.type] || { bg: "bg-gray-100", text: "text-gray-600" };

                            return (
                                <div
                                    key={data.id}
                                    className="flex items-start gap-3 p-2 rounded-sm hover:bg-ui-hover"
                                >
                                    <div className={`p-1.5 rounded-md border border-ui-border ${colors.bg}`}>
                                        <Icon className={`w-6 h-6 ${colors.text}`} />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-0.5">
                                            <p className="text-md font-semibold text-text-main">{data.title}</p>
                                            {data.isNew && (
                                                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary text-white font-semibold">
                                                    NEW
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-text-muted leading-snug">{data.message}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherDashboard;