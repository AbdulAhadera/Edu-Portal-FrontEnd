import { Award, TrendingUp, BarChart3 } from "lucide-react";
import GradeCard from "../../components/GradeCard.tsx";
import BaseHeader from "../../components/BaseHeader.tsx";

const StudentGrade: React.FC = () => {
  return (
    <div>
      <BaseHeader
        heading="Grades & Performance"
        text="Track your Grade and Performance"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {/* Overall Grade */}
        <div className="bg-linear-to-br from-blue-600 to-blue-700 p-4 rounded-sm text-white shadow-sm border border-white/10 flex flex-col justify-center overflow-hidden">
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-xs font-medium uppercase tracking-wide">
                Overall Grade
              </p>
              <p className="text-3xl font-bold leading-none mt-1">A+</p>
            </div>

            <Award
              size={100}
              className="absolute -bottom-12 -right-10 text-blue-100 opacity-30"
            />
          </div>
        </div>

        {/* Improvements */}
        <div className="bg-linear-to-br from-emerald-500 to-emerald-600 p-4 rounded-sm text-white shadow-sm border border-white/10 flex flex-col justify-center overflow-hidden">
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-xs font-medium uppercase tracking-wide">
                Improvements
              </p>
              <p className="text-3xl font-bold leading-none mt-1">6.00%</p>
            </div>

            <TrendingUp
              size={120}
              className="absolute -bottom-18 -right-6 text-emerald-100 opacity-30"
            />
          </div>

          <p className="text-emerald-100/80 text-[10px] mt-2 font-medium">
            This Term: A
          </p>
        </div>

        {/* Avg Test Score */}
        <div className="bg-linear-to-br from-orange-500 to-orange-600 p-4 rounded-sm text-white shadow-sm border border-white/10 flex flex-col justify-center overflow-hidden">
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-xs font-medium uppercase tracking-wide">
                Avg Test Score
              </p>
              <p className="text-3xl font-bold leading-none mt-1">68%</p>
            </div>

            <Award
              size={100}
              className="absolute -bottom-12 -right-10 text-orange-100 opacity-30"
            />
          </div>

          <p className="text-orange-100/80 text-[10px] mt-2 font-medium">
            Out of 100
          </p>
        </div>
      </div>

      <div>
        <GradeCard />
      </div>
    </div>
  );
};

export default StudentGrade;
