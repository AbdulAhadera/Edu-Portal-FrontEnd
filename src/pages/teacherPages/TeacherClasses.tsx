import BaseHeader from "../../components/BaseHeader";
import { BookOpen, Users, TrendingUp } from "lucide-react";
import { teacherClass } from "../../data/mockData";
import Button from "../../components/baseComponents/Button";

const TeacherClasses: React.FC = () => {
    return (
        <div>
            <BaseHeader
                heading="My Classes"
                text="Manage your assigned classes and student groups"
            />

            {/* Classes Grid */}
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teacherClass.map((cls) => {
                    const performance = Math.floor(Math.random() * 15) + 75;

                    return (
                        <div
                            key={cls.id}
                            className="bg-card rounded-sm border border-ui-border p-4 shadow-sm"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary-muted rounded-sm flex items-center justify-center">
                                        <BookOpen className="w-6 h-6 text-primary" />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-text-main">
                                            {cls.name}
                                        </h3>
                                        <p className="text-sm text-text-muted">
                                            {cls.section}
                                        </p>
                                    </div>
                                </div>

                                <Button
                                    text="View"
                                    className="text-primary text-sm font-medium hover:opacity-80"
                                />
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="bg-primary-muted rounded-sm p-3">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Users className="w-4 h-4 text-primary" />
                                        <span className="text-sm font-medium text-primary">
                                            Students
                                        </span>
                                    </div>
                                    <p className="text-2xl font-bold text-text-main">
                                        {cls.students}
                                    </p>
                                </div>

                                <div className="bg-ui-hover rounded-sm p-3">
                                    <div className="flex items-center gap-2 mb-1">
                                        <TrendingUp className="w-4 h-4 text-text-main" />
                                        <span className="text-sm font-medium text-text-main">
                                            Performance
                                        </span>
                                    </div>
                                    <p className="text-2xl font-bold text-text-main">
                                        {performance}%
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-3 mt-4 pt-3 border-t border-ui-border">
                                <Button
                                    text="View Details"
                                    className="flex-1 bg-button-primary-bg text-button px-4 py-2 rounded-sm font-medium hover:opacity-90 transition"
                                />
                                <Button
                                    text="Students"
                                    className="px-4 py-2 border border-ui-border rounded-sm font-medium text-text-main hover:bg-ui-hover transition"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TeacherClasses;
