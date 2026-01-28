
import { Award, TrendingUp } from "lucide-react";
import GradeCard from "../../components/GradeCard.tsx";
import BaseHeader from "../../components/BaseHeader.tsx";


const StudentGrade: React.FC = () => {

    return (
        <div>
            <BaseHeader
                heading="Grades & Performance"
                text="Track your Grade and Performance"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-linear-to-br from-blue-500 to-blue-600 rounded-sm p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-blue-100">Overall Grade</p>
                        <Award size={24} />
                    </div>
                    <p className="text-4xl font-bold">A+</p>
                </div>

                <div className="bg-linear-to-br from-green-500 to-green-600 rounded-sm p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-green-100">Improvements</p>
                        <TrendingUp size={24} />
                    </div>
                    <p className="text-4xl font-bold">6.00 %</p>
                    <p className="text-green-100 text-sm mt-2">This Term: A</p>
                </div>

                <div className="bg-linear-to-br from-orange-500 to-orange-600 rounded-sm p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-orange-100">Avg Test Score</p>
                        <Award size={24} />
                    </div>
                    <p className="text-4xl font-bold">68 %</p>
                    <p className="text-orange-100 text-sm mt-2">Out of 100</p>
                </div>
            </div>

            <div>
                <GradeCard />
            </div>

        </div>
    )
}

export default StudentGrade