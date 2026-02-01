import React from "react";
import BaseHeader from "../../components/BaseHeader";
import TeacherAssignmentsCard from "../../components/TeacherAssignmentsCard";
// import { teacherAssignments } from "../../src/data/mockData";


const TeacherAssignment: React.FC = () => {
    return (
        <div>
            <BaseHeader
                heading="Assignments"
                text="Create and manage student assignments"
            />

            <TeacherAssignmentsCard />
        </div>
    )
}

export default TeacherAssignment