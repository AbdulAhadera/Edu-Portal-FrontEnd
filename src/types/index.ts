import type { JSX } from "react";


export type UserRole = 'student' | 'teacher' | 'admin';

export type LayoutItem = {
    id: string;
    label: string;
    icon: React.ComponentType;
};

export type DashboardCard = {
    id: string;
    title: string;
    value: string | number;
    icon: React.ComponentType;
    iconColor: string;
    bgColor: string;
};

export type CourseCardData = {
    id: number;
    title: string;
    description: string;
    instructor: string;
    duration: string;
    image: string;
    barColor: string;
    courseMaterial?: object;
};

export type AssignmentData = {
    id: string;
    assignNo: number;
    courseId: number;
    courseTitle: string;
    assignmentTitle: string;
    assignmentSolution: string;
    addedSubmission?: string | null;
    marksObtained?: number | null;
    comments?: string | null;
    deadline: string;
    extendedDeadline?: string;
    status: 'Pending' | 'Submitted' | 'Late' | 'Graded';
};

export type AttendanceStatus = 'present' | 'absent' | undefined;

export type Column<T> = {
    header: string | number;
    key?: keyof T;
    render?: (value: any, row: T) => JSX.Element;
};

export type DataTableProps<T> = {
    rows: T[];
    columns?: Column<T>[];
};

export type DropdownOption = {
    label: string;
    value: string | number;
};

export type DropdownProps = {
    options: DropdownOption[];
    value?: string | number;          // currently selected value
    onChange: (value: string | number) => void;
    placeholder?: string;
    className?: string;               // optional tailwind / custom styling
};

export type Homework = {
    id: number;
    subject: string;
    title: string;
    description: string;
    assignedDate: string;
    dueDate: string;
    status: 'pending' | 'completed' | 'overdue';
    attachments: string[];
};

export type SubjectStudent = {
    id: number;
    rollNo: string;
    name: string;
    marks: number;
};
