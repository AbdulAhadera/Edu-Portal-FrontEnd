import { useState, useMemo } from "react";
import DataTable from "../../components/DataTable.tsx";
import { courses, studentAssignments } from "../../data/mockData";
import Input from "../../components/Input.tsx";
import type { AssignmentData } from "../../types/index.ts";
import BaseHeader from "../../components/BaseHeader.tsx";
import Button from "../../components/baseComponents/Button.tsx";

// defining columns here.

// Columns definition for Assignment DataTable
const assignmentColumns = [
  // Serial / assignment number
  {
    header: "No",
    key: "assignNo",
  },

  // Assignment title
  {
    header: "Title",
    key: "assignmentTitle",
  },

  // Assignment deadline
  {
    header: "Deadline",
    key: "deadline",
  },

  // Status column with colored badge
  {
    header: "Status",
    key: "status",
    render: (value: AssignmentData["status"]) => (
      <span
        className={`py-1 rounded-full text-xs font-medium ${
          value === "Graded"
            ? "bg-green-500/10 text-green-500 px-4"
            : value === "Submitted"
              ? "bg-blue-500/10 text-blue-500 px-2"
              : value === "Late"
                ? "bg-red-500/10 text-red-500 px-6"
                : "bg-yellow-500/10 text-yellow-500 px-3"
        }`}
      >
        {value}
      </span>
    ),
  },

  // Submission column
  {
    header: "Submission",
    key: "addedSubmission", // maps to AssignmentData
    render: (_: any, row: AssignmentData) => {
      // 1: Already submitted? Show "Download Submission" link
      if (row.addedSubmission) {
        return (
          <a
            href={row.addedSubmission}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm font-medium hover:underline"
          >
            Download Submission
          </a>
        );
      }

      // 2: Not submitted? Show file upload input
      return (
        <label className="cursor-pointer rounded-full text-sm font-medium">
          Upload
          <Input
            type="file"
            className="hidden" // keeps the actual input invisible
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                handleUpload(row.id, file); // your upload handler
              }
            }}
          />
        </label>
      );
    },
  },

  // Remarks / comments column
  {
    header: "Remarks",
    key: "comments",
  },

  // Assignment Solution column
  {
    header: "Solution",
    key: "assignmentSolution",
    render: (_: any, row: AssignmentData) => (
      <a
        href={row.assignmentSolution}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-card px-2 py-1 rounded-none text-xs font-medium hover:bg-blue-600 transition"
      >
        View Solution
      </a>
    ),
  },
];

const handleUpload = (assignmentId: string, file: File) => {
  console.log("Uploading for:", assignmentId, file);

  // here we will:
  // 1. API call
  // 2. update state
};

const StudentAssignment: React.FC = () => {
  // default: first course selected
  const [selectedCourseId, setSelectedCourseId] = useState<number>(
    courses[0].id,
  );

  // filter assignments based on selected course
  const filteredAssignments = useMemo(
    () =>
      studentAssignments.filter(
        (assignment) => assignment.courseId === selectedCourseId,
      ),
    [selectedCourseId],
  );

  return (
    <div>
      {/* Heading */}
      <BaseHeader
        heading="Assignments"
        text=" Track and submit your assignments"
      />

      {/* Horizontal scrollable courses */}
      <div className="mb-6 overflow-x-auto hide-scrollbar">
        <div className="flex gap-3 min-w-max pb-2">
          {courses.map((course) => (
            <Button
              key={course.id}
              onClick={() => setSelectedCourseId(course.id)}
              className={`px-4 py-2 rounded-sm text-sm font-medium whitespace-nowrap transition ${
                selectedCourseId === course.id
                  ? "bg-primary text-white"
                  : "bg-card border border-ui-border text-text-muted hover:bg-ui-hover"
              }`}
              text={course.title}
            />
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-card">
        <DataTable<AssignmentData>
          rows={filteredAssignments}
          columns={assignmentColumns}
        />
      </div>
    </div>
  );
};

export default StudentAssignment;
