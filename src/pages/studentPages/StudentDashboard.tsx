import CardPrimary from "../../components/CardPrimary";
import { dashboardStats } from "../../data/mockData";

const StudentDashboard: React.FC = () => {

  return (

    <div className="">
      <div className="mx-2 mb-2">
        <h1 className="text-2xl font-bold text-text-main dark sm:text-3xl">Welcome back, Alex!</h1>
        <p className="text-text-muted my-1 hidden sm:block">Here's what's happening with your courses today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardStats.map((card) => (
          <CardPrimary key={card.id} data={card} />
        ))}
      </div>

      <div className="bg-card my-4 p-3 rounded-lg border border-ui-border shadow-sm">
        <p className="text-lg font-semibold text-text-main">In Progress Development</p>
      </div>

    </div>
  )
}

export default StudentDashboard;