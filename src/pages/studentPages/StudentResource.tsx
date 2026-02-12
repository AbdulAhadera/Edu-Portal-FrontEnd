import React, { useState } from "react";
import { courses } from "../../data/mockData";
import DataTable from "../../components/DataTable";
import Button from "../../components/baseComponents/Button";
import { useResources } from "../../hooks/useResources";
import BaseHeader from "../../components/BaseHeader";

const courseResourceColumns = [
  { key: "title", header: "Title" },
  { key: "addDate", header: "Added Date" },
  {
    key: "url",
    header: "Download Resource",
    render: (value: string) => (
      <a
        href={value}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Access Resource
      </a>
    ),
  },
];

const StudentResource: React.FC = () => {
  const [selectedCourseId, setSelectedCourseId] = useState<number>(
    courses[0].id,
  );

  const { data, loading, error } = useResources();

  const filteredResources = data
    ? data.filter((r) => r.courseId === selectedCourseId)
    : [];

  return (
    <div>
      <div className="mb-6">
        <BaseHeader
          heading="Resource Library"
          text="Access study materials and extra resources"
        />
      </div>

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

      <div className="bg-card">
        
        {error && <div className="p-6 text-center text-red-500">{error}</div>}
        {loading ? (
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
        ) : (
          <DataTable
            rows={filteredResources}
            columns={courseResourceColumns}
            className="px-2 py-3"
          />
        )}
      </div>
    </div>
  );
};

export default StudentResource;
