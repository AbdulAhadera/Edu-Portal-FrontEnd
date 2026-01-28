import BaseHeader from "../../components/BaseHeader.tsx";
import StudentCourseCard from "../../components/StudentCourseCard.tsx";

export interface CourseCard {
    id: string;
    title: string;
    description: string;
    instructor: string;
    duration: string;
    image: string;
}

const StudentCourse: React.FC = () => {
    return (
        <div>
            <BaseHeader
                heading="My Courses"
                text="Continue learning and track your progress"
            />

            <div className="">
                <StudentCourseCard />
            </div>
        </div >

    )
}

export default StudentCourse;