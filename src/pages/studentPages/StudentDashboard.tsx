import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import CardPrimary from "../../components/CardPrimary";
import {
  studentDashboardStats,
  announcementsData,
  studentAssignments,
} from "../../data/mockData";
import BaseHeader from "../../components/BaseHeader";

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
        <div className="bg-card p-3 rounded-sm border border-ui-border shadow-sm w-full md:w-2/3">
          <h3 className="text-xl font-semibold text-text-main mb-3">
            Announcements
          </h3>

          <div className="space-y-2">
            {announcementsData.map((data) => {
              const Icon = data.icon;

              // Determine colors based on type
              const typeColors = {
                warning: { bg: "bg-yellow-50", text: "text-yellow-600" },
                info: { bg: "bg-blue-50", text: "text-blue-600" },
                danger: { bg: "bg-red-50", text: "text-red-600" },
              };

              const colors = typeColors[data.type] || {
                bg: "bg-gray-100",
                text: "text-gray-600",
              };

              return (
                <div
                  key={data.id}
                  className="flex items-start gap-3 p-2 rounded-sm hover:bg-ui-hover"
                >
                  <div
                    className={`p-1.5 rounded-md border border-ui-border ${colors.bg}`}
                  >
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-md font-semibold text-text-main">
                        {data.title}
                      </p>
                      {data.isNew && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary text-white font-semibold">
                          NEW
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-text-muted leading-snug">
                      {data.message}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

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
