import React, { useState } from "react";
import {
    courses
} from "../../data/mockData";
import DataTable from "../../components/DataTable";

const courseResourceColumns = [
    { key: "title", header: "Title" },
    { key: "addDate", header: "Added Date" },
    {
        key: "url", header: "Download Resource",
        render: (value: string) => (
            <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Access Resource
            </a>
        )
    }
]

const StudentResource: React.FC = () => {

    const [selectedCourseId, setSelectedCourseId] = useState<number>(
        courses[0].id
    );

    const selectedCourse = courses.find(course => course.id === selectedCourseId);
    const courseMaterials = selectedCourse?.courseMaterial || [];

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-text-main">Resource Library</h1>
                <p className="text-text-muted mt-1">
                    Access study materials and extra resources
                </p>
            </div>

            <div className="mb-6 overflow-x-auto hide-scrollbar">
                <div className="flex gap-3 min-w-max pb-2">
                    {courses.map((course) => (
                        <button
                            key={course.id}
                            onClick={() => setSelectedCourseId(course.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition ${selectedCourseId === course.id
                                ? "bg-primary text-white"
                                : "bg-card border border-ui-border text-text-muted hover:bg-ui-hover"
                                }`}
                        >
                            {course.title}
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-card">
                <DataTable
                    rows={courseMaterials}
                    columns={courseResourceColumns}
                />
            </div >

        </div>
    )
}

export default StudentResource;