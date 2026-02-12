import { useMemo } from "react";
import type { AssignmentData } from "../types";
import type { Column } from "../components/baseComponents/BaseType";

export function useAssignmentDataTable({
  assignments,
  selectedCourseId,
}: {
  assignments: AssignmentData[];
  selectedCourseId: number;
}) 
{
  const filteredAssignments = useMemo(
    () => assignments.filter((a) => a.courseId === selectedCourseId),
    [assignments, selectedCourseId],
  );

  const columns: Column<AssignmentData>[] = useMemo(
    () => [
      { header: "No", key: "assignNo" },
      { header: "Title", key: "assignmentTitle" },
      { header: "Deadline", key: "deadline" },
      {
        header: "Status",
        key: "status",
        render: (value) => {
          const color =
            value === "Graded"
              ? "bg-green-500/10 text-green-500 px-4"
              : value === "Submitted"
                ? "bg-blue-500/10 text-blue-500 px-2"
                : value === "Late"
                  ? "bg-red-500/10 text-red-500 px-6"
                  : "bg-yellow-500/10 text-yellow-500 px-3";

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
        render: (_: any, row) =>
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
        render: (_: any, row) => (
          <a
            href={row.assignmentSolution}
            className="bg-blue-500 text-white px-2 py-1 rounded-xs text-xs"
          >
            View Solution
          </a>
        ),
      },
    ],
    [],
  );

  return { filteredAssignments, columns };
}
