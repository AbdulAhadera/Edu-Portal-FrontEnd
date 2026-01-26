import {
    LayoutDashboard,
    UserCheck,
    GraduationCap,
    FolderOpen,
    BookOpen,
    Users,
    Shield,
    Settings,
    FileText,
    Calendar,
    MessageSquare,
    BarChart3,
    ClipboardList,
    Library,
    CheckSquare,
    ClipboardCheck,
    BookCopy
} from "lucide-react";

// --- Types ---

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


//  --- Interfaces ---
export interface AttendanceRecord {
    date: string;
    status: AttendanceStatus;
}

// --- Data Constants ---
export const attendanceData: AttendanceRecord[] = [
    { date: '2026-01-01', status: 'present' },
    { date: '2026-01-02', status: 'present' },
    { date: '2026-01-03', status: 'absent' },
    { date: '2026-01-05', status: 'present' },
    { date: '2026-01-06', status: 'present' },
    { date: '2026-01-07', status: 'absent' },
    { date: '2026-01-08', status: 'present' },
    { date: '2026-01-09', status: 'present' },
    { date: '2026-01-10', status: 'present' },
    { date: '2026-01-12', status: 'absent' },
    { date: '2026-01-13', status: 'present' },
    { date: '2026-01-14', status: 'present' },
    { date: '2026-01-15', status: 'present' },
    { date: '2026-01-16', status: 'present' },
    { date: '2026-01-17', status: 'absent' },
    { date: '2026-01-19', status: 'present' },
    { date: '2026-01-20', status: 'present' },
    { date: '2026-01-21', status: 'present' },
    { date: '2026-01-22', status: 'present' },
    { date: '2026-01-23', status: 'absent' },
    { date: '2026-01-24', status: 'absent' },
    { date: '2026-01-26', status: 'present' },
    { date: '2026-01-27', status: 'present' },
    { date: '2026-01-28', status: 'present' },
    { date: '2026-01-29', status: 'present' },
    { date: '2026-01-30', status: 'present' },
];

export const studentAssignments: AssignmentData[] = [
    // --- MATHEMATICS (101) ---
    {
        id: "asgn-101-1",
        assignNo: 1,
        courseId: 101,
        courseTitle: "Mathematics",
        assignmentTitle: "Calculus - Integration Limits",
        assignmentSolution: "https://pdfobject.com/pdf/sample.pdf",
        addedSubmission: "https://pdfobject.com/pdf/sample.pdf",
        marksObtained: 85,
        comments: "Excellent logic!",
        deadline: "2026-02-01",
        status: "Late",
    },
    {
        id: "asgn-101-2",
        assignNo: 2,
        courseId: 101,
        courseTitle: "Mathematics",
        assignmentTitle: "Linear Algebra - Matrix Multiplication",
        assignmentSolution: "https://pdfobject.com/pdf/sample.pdf",
        addedSubmission: null,
        marksObtained: null,
        comments: null,
        deadline: "2026-02-15",
        status: "Pending",
    },
    {
        id: "asgn-101-3",
        assignNo: 3,
        courseId: 101,
        courseTitle: "Mathematics",
        assignmentTitle: "Probability & Statistics",
        assignmentSolution: "https://pdfobject.com/pdf/sample.pdf",
        addedSubmission: "https://pdfobject.com/pdf/sample.pdf",
        marksObtained: 78,
        comments: null,
        deadline: "2026-01-10",
        status: "Graded",
    },

    // --- ENGLISH LITERATURE (102) ---
    {
        id: "asgn-102-1",
        assignNo: 1,
        courseId: 102,
        courseTitle: "English Literature",
        assignmentTitle: "Poetry Analysis - Shakespeare",
        assignmentSolution: "https://pdfobject.com/pdf/sample.pdf",
        addedSubmission: null,
        marksObtained: null,
        comments: null,
        deadline: "2026-02-10",
        status: "Pending",
    },
    {
        id: "asgn-102-2",
        assignNo: 2,
        courseId: 102,
        courseTitle: "English Literature",
        assignmentTitle: "The Victorian Era Prose",
        assignmentSolution: "https://pdfobject.com/pdf/sample.pdf",
        addedSubmission: "https://pdfobject.com/pdf/sample.pdf",
        marksObtained: null,
        comments: null,
        deadline: "2026-01-30",
        status: "Submitted",
    },
    {
        id: "asgn-102-3",
        assignNo: 3,
        courseId: 102,
        courseTitle: "English Literature",
        assignmentTitle: "Modernism in Fiction",
        assignmentSolution: "https://pdfobject.com/pdf/sample.pdf",
        addedSubmission: null,
        marksObtained: null,
        comments: null,
        deadline: "2026-03-05",
        status: "Pending",
    },

    // --- COMPUTER SCIENCE (103) ---
    {
        id: "asgn-103-1",
        assignNo: 1,
        courseId: 103,
        courseTitle: "Computer Science",
        assignmentTitle: "HTML & CSS Fundamentals",
        assignmentSolution: "https://pdfobject.com/pdf/sample.pdf",
        addedSubmission: "https://pdfobject.com/pdf/sample.pdf",
        marksObtained: 95,
        comments: null,
        deadline: "2026-01-05",
        status: "Graded",
    },
    {
        id: "asgn-103-2",
        assignNo: 2,
        courseId: 103,
        courseTitle: "Computer Science",
        assignmentTitle: "React Hooks & State Management",
        assignmentSolution: "https://pdfobject.com/pdf/sample.pdf",
        addedSubmission: "https://pdfobject.com/pdf/sample.pdf",
        marksObtained: null,
        comments: "Awaiting review",
        deadline: "2026-01-25",
        status: "Submitted",
    },
    {
        id: "asgn-103-3",
        assignNo: 3,
        courseId: 103,
        courseTitle: "Computer Science",
        assignmentTitle: "Node.js API Development",
        assignmentSolution: "https://pdfobject.com/pdf/sample.pdf",
        addedSubmission: null,
        marksObtained: null,
        comments: null,
        deadline: "2026-02-20",
        status: "Pending",
    },
    {
        id: "asgn-103-4",
        assignNo: 4,
        courseId: 103,
        courseTitle: "Computer Science",
        assignmentTitle: "Database Design - Normalization",
        assignmentSolution: "https://pdfobject.com/pdf/sample.pdf",
        addedSubmission: null,
        marksObtained: null,
        comments: null,
        deadline: "2026-03-10",
        status: "Pending",
    },

    // --- COMPUTER FUNDAMENTALS (104) ---
    {
        id: "asgn-104-1",
        assignNo: 1,
        courseId: 104,
        courseTitle: "Computer Fundamentals",
        assignmentTitle: "Introduction to Computer Hardware",
        assignmentSolution: "https://pdfobject.com/pdf/sample.pdf",
        addedSubmission: null,
        marksObtained: null,
        comments: null,
        deadline: "2026-02-05",
        status: "Pending",
    },
    {
        id: "asgn-104-2",
        assignNo: 2,
        courseId: 104,
        courseTitle: "Computer Fundamentals",
        assignmentTitle: "Operating Systems Basics",
        assignmentSolution: "https://pdfobject.com/pdf/sample.pdf",
        addedSubmission: "https://pdfobject.com/pdf/sample.pdf",
        marksObtained: null,
        comments: null,
        deadline: "2026-01-28",
        status: "Submitted",
    },
    {
        id: "asgn-104-3",
        assignNo: 3,
        courseId: 104,
        courseTitle: "Computer Fundamentals",
        assignmentTitle: "Input & Output Devices",
        assignmentSolution: "https://pdfobject.com/pdf/sample.pdf",
        addedSubmission: null,
        marksObtained: null,
        comments: null,
        deadline: "2026-03-01",
        status: "Pending",
    },

    // --- SOCIAL STUDIES (105) ---
    {
        id: "asgn-105-1",
        assignNo: 1,
        courseId: 105,
        courseTitle: "Social Studies",
        assignmentTitle: "Ancient Civilizations Overview",
        assignmentSolution: "https://pdfobject.com/pdf/sample.pdf",
        addedSubmission: null,
        marksObtained: null,
        comments: null,
        deadline: "2026-02-08",
        status: "Pending",
    },
    {
        id: "asgn-105-2",
        assignNo: 2,
        courseId: 105,
        courseTitle: "Social Studies",
        assignmentTitle: "Geography: Maps & Regions",
        assignmentSolution: "https://pdfobject.com/pdf/sample.pdf",
        addedSubmission: "https://pdfobject.com/pdf/sample.pdf",
        marksObtained: 81,
        comments: null,
        deadline: "2026-01-18",
        status: "Graded",
    },
    {
        id: "asgn-105-3",
        assignNo: 3,
        courseId: 105,
        courseTitle: "Social Studies",
        assignmentTitle: "Civic Responsibilities",
        assignmentSolution: "https://pdfobject.com/pdf/sample.pdf",
        addedSubmission: null,
        marksObtained: null,
        comments: null,
        deadline: "2026-03-12",
        status: "Pending",
    },

    // --- ISLAMIC STUDIES (106) ---
    {
        id: "asgn-106-1",
        assignNo: 1,
        courseId: 106,
        courseTitle: "Islamic Studies",
        assignmentTitle: "Seerah of Prophet Muhammad (PBUH)",
        assignmentSolution: "https://pdfobject.com/pdf/sample.pdf",
        addedSubmission: "https://pdfobject.com/pdf/sample.pdf",
        marksObtained: 88,
        comments: null,
        deadline: "2026-01-10",
        status: "Graded",
    },
    {
        id: "asgn-106-2",
        assignNo: 2,
        courseId: 106,
        courseTitle: "Islamic Studies",
        assignmentTitle: "Ethics in Islam",
        assignmentSolution: "https://pdfobject.com/pdf/sample.pdf",
        addedSubmission: null,
        marksObtained: null,
        comments: null,
        deadline: "2026-02-12",
        status: "Pending",
    },
    {
        id: "asgn-106-3",
        assignNo: 3,
        courseId: 106,
        courseTitle: "Islamic Studies",
        assignmentTitle: "History of Prophets",
        assignmentSolution: "https://pdfobject.com/pdf/sample.pdf",
        addedSubmission: null,
        marksObtained: null,
        comments: null,
        deadline: "2026-01-20",
        status: "Late",
    },
];

export const courses: CourseCardData[] = [
    {
        id: 101,
        title: "Mathematics Basic",
        description: "Strengthen core math skills including arithmetic, fractions, and problem solving.",
        instructor: "Mr. Ahmed",
        duration: "10 weeks",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904",
        barColor: "bg-blue-500",
    },
    {
        id: 102,
        title: "English Grammar & Writing",
        description: "Learn grammar rules, sentence structure, and basic essay writing.",
        instructor: "Ms. Sarah",
        duration: "8 weeks",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8",
        barColor: "bg-green-500",
    },
    {
        id: 103,
        title: "General Science",
        description: "Introduction to physics, chemistry, and biology concepts for school students.",
        instructor: "Dr. Ali",
        duration: "9 weeks",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
        barColor: "bg-red-500",
    },
    {
        id: 104,
        title: "Computer Fundamentals",
        description: "Understand basic computer operations, hardware, and software.",
        instructor: "Mr. Bilal",
        duration: "6 weeks",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        barColor: "bg-yellow-500",
    },
    {
        id: 105,
        title: "Social Studies",
        description: "Learn about history, geography, and civic responsibilities.",
        instructor: "Ms. Ayesha",
        duration: "7 weeks",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
        barColor: "bg-purple-500",
    },
    {
        id: 106,
        title: "Islamic Studies",
        description: "Basic teachings, ethics, and history of Islam.",
        instructor: "Mufti Hassan",
        duration: "6 weeks",
        image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae",
        barColor: "bg-teal-500",
    },
];

export const dashboardStats: DashboardCard[] = [
    {
        id: "enrolledCourses",
        title: "Enrolled Courses",
        value: 5,
        icon: BookCopy,
        iconColor: "text-blue-600",
        bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
        id: "pendingAssignments",
        title: "Pending Assignments",
        value: 2,
        icon: ClipboardList,
        iconColor: "text-orange-600",
        bgColor: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
        id: "performance",
        title: "Performance",
        value: "85%",
        icon: BarChart3,
        iconColor: "text-green-600",
        bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
        id: "attendance",
        title: "Attendance",
        value: "92%",
        icon: UserCheck,
        iconColor: "text-purple-600",
        bgColor: "bg-purple-50 dark:bg-purple-900/20"
    }
];

// Role-based Sidebar Navigation
export const roleSideBarItems: Record<UserRole, LayoutItem[]> = {
    student: [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        { id: "mycourse", label: "My Courses", icon: BookCopy },
        { id: "assignments", label: "Assignments", icon: ClipboardList },
        { id: "quizzes", label: "Quizzes", icon: ClipboardCheck },
        { id: "grades", label: "Grades", icon: BarChart3 },
        { id: "attendance", label: "Attendance", icon: CheckSquare },
        { id: "resources", label: "Resources", icon: Library },
        { id: "discussions", label: "Discussions", icon: MessageSquare },
        { id: "calendar", label: "Calendar", icon: Calendar },
        { id: "feedback", label: "Feedback", icon: FileText }
    ],
    teacher: [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'classes', label: 'Classes', icon: BookOpen },
        { id: 'assignments', label: 'Assignments', icon: FileText },
        { id: 'quizzes', label: 'Quizzes', icon: ClipboardList },
        { id: 'grades', label: 'Grades', icon: GraduationCap },
        { id: 'attendance', label: 'Attendance', icon: CheckSquare },
        { id: 'discussions', label: 'Discussions', icon: MessageSquare },
        { id: 'calendar', label: 'Calendar', icon: Calendar },
        { id: 'resources', label: 'Resources', icon: FolderOpen },
    ],
    admin: [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'users', label: 'User Management', icon: Users },
        { id: 'courses', label: 'Course Management', icon: BookOpen },
        { id: 'academics', label: 'Academic Overview', icon: BarChart3 },
        { id: 'roles', label: 'Roles & Permissions', icon: Shield },
        { id: 'reports', label: 'Reports & Logs', icon: FileText },
        { id: 'settings', label: 'System Settings', icon: Settings },
    ]
};