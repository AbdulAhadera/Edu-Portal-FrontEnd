import Button from "./baseComponents/Button.tsx";
import RangeBar from "../components/RangeBar.tsx";
import { courses } from "../../src/data/mockData.ts";
import { useState } from "react";


const StudentCourseCard: React.FC = () => {


    const courseDetailsModal = () => {
        
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
                <div
                    key={course.id}
                    className="bg-card rounded-sm shadow-sm border border-ui-hover overflow-hidden hover:shadow-md transition-shadow"
                >
                    <img
                        src={course.image}
                        className="w-full h-36 object-cover"
                    />
                    <div className="p-3">
                        <h3 className="text-xl font-bold text-text-main mb-2">{course.title}</h3>
                        <p className="text-text-muted text-sm mb-4">{course.instructor}</p>
                        <RangeBar percent={55} text="Progress" />

                        <Button
                            text="View Course"
                            onClick={courseDetailsModal}
                            className="bg-primary w-full text-button font-medium rounded-sm py-2"
                        />

                    </div>
                </div>
            ))}

        </div >
    )
}

export default StudentCourseCard;