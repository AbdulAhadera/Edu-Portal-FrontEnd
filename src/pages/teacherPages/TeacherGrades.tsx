import type React from "react"
import { useState, useMemo } from "react";
import BaseHeader from "../../components/BaseHeader";
import { teacherClasses, studentsData } from "../../data/mockData";
import DataTable from "../../components/DataTable";

const TeacherGrades: React.FC = () => {

    const studentColumns = [
        {
            header: "Name",
            key: "name",
        },
        {
            header: "Performance",
            key: "performance",
        },
        {
            header: "Roll No",
            key: "roll",
        },
        {
            header: "Grade",
            key: "grade",
        }
    ];


    const [selectedClass, setSelectedClass] = useState<string>(
        teacherClasses[0].name
    );

    // filter assignments based on selected course

    const filteredClasses = useMemo(
        () =>
            studentsData.filter(
                (stdClass) => stdClass.class === selectedClass
            ),
        [selectedClass]
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
                            key={cls.name}
                            onClick={() => setSelectedClass(cls.name)}
                            className={`px-4 py-2 rounded-sm text-sm font-medium whitespace-nowrap transition ${fil}
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
                <DataTable
                    rows={filteredClasses}
                    columns={studentColumns}
                />
            </div>

        </div>
    )
}

export default TeacherGrades;