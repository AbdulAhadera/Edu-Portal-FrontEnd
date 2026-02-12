import React, { useState } from "react";
import DataTable from "../../components/DataTable";
import { useAssignmentDataTable } from "../../hooks/useAssignmentDataTable";
import { studentAssignments, courses } from "../../data/mockData";
import BaseHeader from "../../components/BaseHeader";
import Button from "../../components/baseComponents/Button";

const StudentAssignment: React.FC = () => {
  const [selectedCourseId, setSelectedCourseId] = useState(courses[0].id);

  const { filteredAssignments, columns } = useAssignmentDataTable({
    assignments: studentAssignments,
    selectedCourseId,
  });

  return (
    <div>
      <BaseHeader heading="Assignments" text="Track and submit your assignments" />

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

      <div className="bg-card">
        <DataTable rows={filteredAssignments} columns={columns} className="px-2 py-3" />
      </div>
    </div>
  );
};

export default StudentAssignment;