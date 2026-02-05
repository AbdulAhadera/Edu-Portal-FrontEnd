import type React from "react"
import { useState, useMemo } from "react";
import BaseHeader from "../../components/BaseHeader";
import { teacherClass, studentsData } from "../../data/mockData";
import DataTable from "../../components/DataTable";
import Button from "../../components/Button";
import type { SubjectStudent } from "../../types";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";


const TeacherGrades: React.FC = () => {

    const getPerformance = (grade: string) => {
        if (grade === "A+" || grade === "A") return "Excellent";
        if (grade === "A-" || grade === "B+") return "Good";
        return "Downfall";
    };


    const studentColumns = [
        {
            header: "Student Name",
            key: "name",
            render: (_: any, row: SubjectStudent) => (
                <div
                    className="flex items-center gap-2"
                >
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-text-main   ">
                            {row.name.split(' ').map(n => n[0]).join('')}
                        </span>
                    </div>

                    <p className="text-text-maintext-md font-medium"> {row.name}</p>
                </div>
            ),
        },
        {
            header: "Performance",
            key: "performance",
            render: (_: any, row: SubjectStudent) => {
                const performance = getPerformance(row.grade);

                return (
                    <div className="flex items-center gap-2 text-text-main font-medium">
                        {performance === "Excellent" && (
                            <TrendingUp className="w-4 h-4 text-green-600" />
                        )}

                        {performance === "Good" && (
                            <Minus className="w-4 h-4 text-yellow-500" />
                        )}

                        {performance === "Downfall" && (
                            <TrendingDown className="w-4 h-4 text-red-500" />
                        )}

                        <span>{performance}</span>
                    </div>
                );
            },
        },
        {
            header: "Roll No",
            key: "roll",
        },
        {
            header: "Grade",
            key: "grade",
            render: (_: any, row: SubjectStudent) => {
                const grade = row.grade;

                const gradeStyles =
                    grade === "A+" || grade === "A"
                        ? "bg-green-100 text-green-700 border border-green-400/50"
                        : grade === "A-" || grade === "B+"
                            ? "bg-yellow-100 text-yellow-700 border border-yellow-400/50"
                            : "bg-red-100 text-red-700 border border-red-400/50";

                return (
                    <p
                        className={` text-sm font-semibold rounded-full inline-block text-center w-12 ${gradeStyles}`}
                    >
                        {grade}
                    </p>
                );
            },
        }

    ];


    const [selectedClass, setSelectedClass] = useState<string>(
        teacherClass[0].name
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
                    {teacherClass.map((cls) => (
                        <Button
                            key={cls.name}
                            onClick={() => setSelectedClass(cls.name)}
                            className={`px-4 py-2 rounded-sm text-sm font-medium whitespace-nowrap transition 
                                 ${selectedClass === cls.name
                                    ? "bg-primary text-white"
                                    : "bg-card border border-ui-border text-text-muted hover:bg-ui-hover"}
                                    `}
                            text={cls.name}
                        />
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