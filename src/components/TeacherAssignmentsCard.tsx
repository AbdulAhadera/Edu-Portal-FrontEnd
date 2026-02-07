import React from "react";
import { FileText, Clock, CheckCircle, AlertCircle, XCircle, Upload } from "lucide-react";
import { teacherAssignments } from "../../src/data/mockData";
import Button from "./baseComponents/Button";

const TeacherAssignmentsCard: React.FC = () => {
    return (
        <div className="grid grid-cols-1 gap-6">
            {teacherAssignments.map((assignment) => (
                <div
                    key={assignment.id}
                    className="bg-card rounded-sm border border-ui-border p-4"
                >
                    <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary-muted rounded-sm flex items-center justify-center">
                                <FileText className="w-6 h-6 text-primary" />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-text-main">
                                    {assignment.title}
                                </h3>
                                <p className="text-sm text-text-muted mt-1">
                                    {assignment.class}
                                </p>

                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-text-muted" />
                                    <span className="text-sm text-text-muted">
                                        Due: {new Date(assignment.dueDate).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <Button
                            text="Edit"
                            className="text-primary text-sm font-medium hover:opacity-80 transition"
                        />
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-4 gap-4 mt-2">
                        <div className="bg-primary-muted rounded-sm p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <CheckCircle className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-primary">
                                    Submitted
                                </span>
                            </div>
                            <p className="text-2xl font-bold text-text-main">
                                {assignment.submitted}
                            </p>
                            <p className="text-xs text-text-muted mt-1">
                                out of {assignment.totalSubmissions}
                            </p>
                        </div>

                        <div className="bg-ui-hover rounded-sm p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <AlertCircle className="w-4 h-4 text-text-main" />
                                <span className="text-sm font-medium text-text-main">
                                    Late
                                </span>
                            </div>
                            <p className="text-2xl font-bold text-text-main">
                                {assignment.late}
                            </p>
                            <p className="text-xs text-text-muted mt-1">
                                submissions
                            </p>
                        </div>

                        <div className="bg-danger/10 rounded-sm p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <XCircle className="w-4 h-4 text-danger" />
                                <span className="text-sm font-medium text-danger">
                                    Missing
                                </span>
                            </div>
                            <p className="text-2xl font-bold text-text-main">
                                {assignment.missing}
                            </p>
                            <p className="text-xs text-text-muted mt-1">
                                students
                            </p>
                        </div>

                        <div className="bg-primary-muted rounded-sm p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <CheckCircle className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-primary">
                                    Graded
                                </span>
                            </div>
                            <p className="text-2xl font-bold text-text-main">
                                {assignment.graded}
                            </p>
                            <p className="text-xs text-text-muted mt-1">
                                out of {assignment.submitted}
                            </p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 mt-2 pt-2  border-t border-ui-border">
                        <Button
                            text="View Submissions"
                            className="flex-1 bg-button-primary-bg text-button px-4 py-2 rounded-sm font-medium hover:opacity-90 transition"
                        />

                        <Button
                            text="Download All"
                            className="px-4 py-2 border border-ui-border rounded-sm font-medium text-text-main hover:bg-ui-hover transition"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeacherAssignmentsCard;
