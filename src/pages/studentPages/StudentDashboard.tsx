import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/baseComponents/Button";
import CardPrimary from "../../components/cards/CardPrimary";
import {
  studentDashboardStats,
  announcementsData,
  studentAssignments,
} from "../../data/mockData";
import BaseHeader from "../../components/BaseHeader";
import AnnoucementSection from "../../components/AnnoucementSection";

const StudentDashboard: React.FC = () => {
  const navigate = useNavigate();

  // Filter incomplete assignments
  const incompleteAssignments = studentAssignments.filter(
    (a) => a.status === "Pending" || a.status === "Late",
  );

  return (
    <div className="">
      {/* Welcome Section */}
      <BaseHeader
        heading="Welcome Back, Ahad"
        text="Continue learning and track your progress"
      />

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
        {studentDashboardStats.map((card) => (
          <CardPrimary key={card.id} data={card} />
        ))}
      </div>

      {/* Announcements & Incomplete Assignments */}
      <div className="flex flex-col md:flex-row gap-3">
        {/* Announcements */}
        <AnnoucementSection />

        {/* Incomplete Assignments */}
        <div className="bg-card p-3 rounded-sm border border-ui-border shadow-sm w-full md:w-1/3">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-text-main">
              Incomplete Assignments
            </h3>
            <Button
              text="View All"
              className="max-w-fit text-primary hover:underline"
              onClick={() => navigate("assignments")}
            />
          </div>

          <div className="space-y-2 max-h-88 overflow-y-auto hide-scrollbar">
            {incompleteAssignments.map((a) => (
              <div
                key={a.id}
                className={`flex flex-col p-3 rounded-sm border ${
                  a.status === "Late"
                    ? "border-red-400 bg-red-50 dark:bg-red-900/20"
                    : "border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-semibold text-text-main">
                    {a.assignmentTitle}
                  </p>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      a.status === "Late"
                        ? "bg-red-600 text-white"
                        : "bg-yellow-600 text-white"
                    }`}
                  >
                    {a.status}
                  </span>
                </div>
                <p className="text-xs text-text-muted">
                  Course: {a.courseTitle} | Deadline: {a.deadline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
