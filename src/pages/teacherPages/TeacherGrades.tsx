import type React from "react"
import { useState } from "react";
import BaseHeader from "../../components/BaseHeader";
import { teacherClasses, teacherDashboardStats } from "../../data/mockData";
import DataTable from "../../components/DataTable";

const TeacherGrades: React.FC = () => {


    const [selectedClass, setSelectedClass] = useState<number>(
        teacherClasses[0].id
    );

    return (
        <div>
            <BaseHeader
                heading="Gradebook"
                text="View and manage student grades"
            />

            <div className="mb-6 overflow-x-auto hide-scrollbar">
                <div className="flex gap-3 min-w-max pb-2">
                    {teacherClasses.map((cls) => (
                        <button
                            key={cls.id}
                            onClick={() => setSelectedClass(cls.id)}
                            className={`px-4 py-2 rounded-sm text-sm font-medium whitespace-nowrap transition ${selectedClass === cls.id
                                ? "bg-primary text-white"
                                : "bg-card border border-ui-border text-text-muted hover:bg-ui-hover"
                                }`}
                        >
                            {cls.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-card">
                {/* <DataTable<AssignmentData>
                    rows={filteredAssignments}
                    columns={assignmentColumns}
                /> */}
            </div>

        </div>
    )
}

export default TeacherGrades;