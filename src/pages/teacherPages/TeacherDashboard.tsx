import AnnoucementSection from "../../components/AnnoucementSection";
import BaseHeader from "../../components/BaseHeader";
import CardPrimary from "../../components/cards/CardPrimary";
import { teacherDashboardStats } from "../../data/mockData";

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
        <AnnoucementSection />
      </div>
    </div>
  );
};

export default TeacherDashboard;
