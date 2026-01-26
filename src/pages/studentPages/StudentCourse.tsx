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
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-text-main  sm:text-3xl">My Courses</h1>
                <p className="text-text-muted mt-1">Continue learning and track your progress</p>
            </div>

            <div className="">
                <StudentCourseCard />
            </div>
        </div >

    )
}

export default StudentCourse;