import React, { useState } from "react";
import DataTable from "../../components/DataTable";
import { useAssignments } from "../../hooks/useAssignment";
import { courses } from "../../data/mockData";
import BaseHeader from "../../components/BaseHeader";
import Button from "../../components/baseComponents/Button";
import type { AssignmentData } from "../../types";

const StudentAssignment: React.FC = () => {
  const [selectedCourseId, setSelectedCourseId] = useState(courses[0].id);

  // Loader hook
  const { data, loading, error } = useAssignments();

  // Filter assignments by selected course
  const filteredAssignments: AssignmentData[] = data
    ? data.filter((a) => a.courseId === selectedCourseId)
    : [];

  // Columns definition (fixed)
  const columns = [
    { header: "No", key: "assignNo" },
    { header: "Title", key: "assignmentTitle" },
    { header: "Deadline", key: "deadline" },
    {
      header: "Status",
      key: "status",
      render: (value: string) => {
        const statusStyles: Record<string, string> = {
          Graded: "bg-green-500/10 text-green-500 px-4",
          Submitted: "bg-blue-500/10 text-blue-500 px-2",
          Late: "bg-red-500/10 text-red-500 px-6",
          Pending: "bg-yellow-500/10 text-yellow-500 px-3",
        };
        const color = statusStyles[value] ?? statusStyles.Pending;
        return (
          <span className={`py-1 rounded-full text-xs font-medium ${color}`}>
            {value}
          </span>
        );
      },
    },
    {
      header: "Submission",
      key: "addedSubmission",
      render: (_: any, row: AssignmentData) =>
        row.addedSubmission ? (
          <a href={row.addedSubmission} className="text-primary underline">
            Download Submission
          </a>
        ) : (
          <span className="text-text-main">Not submitted</span>
        ),
    },
    { header: "Remarks", key: "comments" },
    {
      header: "Solution",
      key: "assignmentSolution",
      render: (_: any, row: AssignmentData) => (
        <a
          href={row.assignmentSolution}
          className="bg-blue-500 text-white px-2 py-1 rounded-xs text-xs"
        >
          View Solution
        </a>
      ),
    },
  ];

  return (
    <div>
      <BaseHeader
        heading="Assignments"
        text="Track and submit your assignments"
      />

      {/* Course Selector */}
      <div className="mb-6 overflow-x-auto hide-scrollbar">
        <div className="flex gap-3 min-w-max pb-2">
          {courses.map((course) => (
            <Button
              key={course.id}
              text={course.title}
              onClick={() => setSelectedCourseId(course.id)}
              className={`px-4 py-2 rounded-sm text-sm font-medium whitespace-nowrap transition ${
                selectedCourseId === course.id
                  ? "bg-primary text-white"
                  : "bg-card border border-ui-border text-text-muted hover:bg-ui-hover"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-card">
        {loading && (
          <div className="p-4 border-2 border-ui-border rounded-sm">
            <div className="space-y-2 animate-pulse">
              {Array.from({ length: 3 }).map((_, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-4 gap-4">
                  {Array.from({ length: 4 }).map((_, colIndex) => (
                    <div
                      key={colIndex}
                      className="h-8 bg-gray-300 rounded"
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
        {error && <div className="p-6 text-center text-red-500">{error}</div>}
        {!loading && !error && (
          <DataTable
            rows={filteredAssignments}
            columns={columns}
            className="px-2 py-3"
          />
        )}
      </div>
    </div>
  );
};

export default StudentAssignment;
