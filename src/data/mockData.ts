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
    BookCopy,
    FileUserIcon,
    Megaphone,
    AlertTriangle,
    Info,
    CalendarDays
} from "lucide-react";

import type { notifications, Homework, AssignmentData, CourseCardData, DashboardCard, UserRole, LayoutItem } from "../types/index.ts"


// --- Student Data Constants ---

export const notificationData: notification[] = [
    {
        id: '1',
        type: 'assignment',
        title: 'New Assignment Posted',
        message: 'Binary Search Tree Implementation - Due Jan 28',
        date: '2026-01-24',
        read: false
    },
    {
        id: '2',
        type: 'quiz',
        title: 'Quiz Available',
        message: 'Trees and Graphs Quiz opens tomorrow',
        date: '2026-01-24',
        read: false
    },
    {
        id: '3',
        type: 'announcement',
        title: 'Course Announcement',
        message: 'Midterm Exam Schedule Posted',
        date: '2026-01-23',
        read: true
    },
    {
        id: '4',
        type: 'assignment',
        title: 'Assignment Graded',
        message: 'Responsive Portfolio Website - Grade: 92/100',
        date: '2026-01-22',
        read: true
    }
];

export const feesData = {
    monthlyFee: 5000,
    paidMonths: 6,
    pendingMonths: 1,
    currentMonth: "January 2024",
    currentMonthFee: {
        amount: 5000,
        dueDate: "2024-01-31",
        status: "unpaid",
        fine: 0
    },
    monthlyPaymentHistory: [
        {
            id: 1,
            month: "December 2023",
            date: "2023-12-20",
            amount: 5000,
            status: "Unpaid",
            transactionId: "TXN001234",
            method: "Online Payment"
        },
        {
            id: 2,
            month: "November 2023",
            date: "2023-11-25",
            amount: 5000,
            status: "paid",
            transactionId: "TXN001235",
            method: "Online Payment"
        },
        {
            id: 3,
            month: "October 2023",
            date: "2023-10-18",
            amount: 5000,
            status: "paid",
            transactionId: "TXN001236",
            method: "Bank Transfer"
        },
        {
            id: 4,
            month: "September 2023",
            date: "2023-09-22",
            amount: 5000,
            status: "paid",
            transactionId: "TXN001237",
            method: "Online Payment"
        },
        {
            id: 5,
            month: "August 2023",
            date: "2023-08-15",
            amount: 5000,
            status: "paid",
            transactionId: "TXN001238",
            method: "Online Payment"
        },
        {
            id: 6,
            month: "July 2023",
            date: "2023-07-20",
            amount: 5000,
            status: "paid",
            transactionId: "TXN001239",
            method: "Bank Transfer"
        }
    ]
};

export const homeworkData: Homework[] = [
    {
        id: 1,
        subject: "Mathematics",
        title: "Chapter 5: Quadratic Equations",
        description: "Solve all problems from Exercise 5.2 and 5.3. Show complete working for each problem.",
        assignedDate: "2024-01-20",
        dueDate: "2024-01-27",
        status: "pending",
        attachments: ["exercise_5.2.pdf", "reference_notes.pdf"]
    },
    {
        id: 2,
        subject: "English",
        title: "Essay Writing: Impact of Technology",
        description: "Write a 500-word essay on 'The Impact of Technology on Modern Education'. Include introduction, body paragraphs, and conclusion.",
        assignedDate: "2024-01-18",
        dueDate: "2024-01-25",
        status: "completed",
        attachments: []
    },
    {
        id: 3,
        subject: "Science",
        title: "Lab Report: Chemical Reactions",
        description: "Complete the lab report on acid-base reactions. Include observations, chemical equations, and conclusions.",
        assignedDate: "2024-01-15",
        dueDate: "2024-01-22",
        status: "overdue",
        attachments: ["lab_template.pdf"]
    },
    {
        id: 4,
        subject: "Social Studies",
        title: "Map Work: Indian States",
        description: "On the outline map of India, mark all states and their capitals. Color code different regions.",
        assignedDate: "2024-01-22",
        dueDate: "2024-01-29",
        status: "pending",
        attachments: ["outline_map.pdf"]
    },
    {
        id: 5,
        subject: "Hindi",
        title: "Chapter 3: Comprehension Questions",
        description: "Answer all questions from Chapter 3 in complete sentences. Write in neat handwriting.",
        assignedDate: "2024-01-19",
        dueDate: "2024-01-26",
        status: "pending",
        attachments: []
    },
    {
        id: 6,
        subject: "Computer Science",
        title: "Programming Assignment: Loops",
        description: "Write programs for all 10 problems given in the loop exercises. Submit source code and output screenshots.",
        assignedDate: "2024-01-17",
        dueDate: "2024-01-24",
        status: "completed",
        attachments: ["loop_exercises.pdf"]
    }
];

export const studentProfile = {
    name: "Abdul Ahad",
    rollNo: "02-131242-110",
    studentId: "STU001245",
    class: "10",
    section: "A",
    academicYear: "2024-2025",
    email: "02-131242-110@school.edu",
    dateOfBirth: "2005-05-01",
    gender: "Male",
    bloodGroup: "A+"
};

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
        courseMaterial: [
            { addDate: "2026-01-10", title: "Arithmetic Basics", url: "https://pdfobject.com/pdf/sample.pdf" },
            { addDate: "2026-01-12", title: "Fractions & Decimals", url: "https://pdfobject.com/pdf/sample.pdf" },
            { addDate: "2026-01-15", title: "Problem Solving Techniques", url: "https://pdfobject.com/pdf/sample.pdf" },
        ]
    },
    {
        id: 102,
        title: "English Grammar & Writing",
        description: "Learn grammar rules, sentence structure, and basic essay writing.",
        instructor: "Ms. Sarah",
        duration: "8 weeks",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8",
        barColor: "bg-green-500",
        courseMaterial: [
            { addDate: "2026-01-05", title: "Grammar Rules", url: "https://pdfobject.com/pdf/sample.pdf" },
            { addDate: "2026-01-07", title: "Sentence Structure", url: "https://pdfobject.com/pdf/sample.pdf" },
            { addDate: "2026-01-09", title: "Essay Writing Basics", url: "https://pdfobject.com/pdf/sample.pdf" },
        ]
    },
    {
        id: 103,
        title: "General Science",
        description: "Introduction to physics, chemistry, and biology concepts for school students.",
        instructor: "Dr. Ali",
        duration: "9 weeks",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
        barColor: "bg-red-500",
        courseMaterial: [
            { addDate: "2026-01-08", title: "Physics Basics", url: "https://pdfobject.com/pdf/sample.pdf" },
            { addDate: "2026-01-10", title: "Introduction to Chemistry", url: "https://pdfobject.com/pdf/sample.pdf" },
            { addDate: "2026-01-12", title: "Biology Fundamentals", url: "https://pdfobject.com/pdf/sample.pdf" },
        ]
    },
    {
        id: 104,
        title: "Computer Fundamentals",
        description: "Understand basic computer operations, hardware, and software.",
        instructor: "Mr. Bilal",
        duration: "6 weeks",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        barColor: "bg-yellow-500",
        courseMaterial: [
            { addDate: "2026-01-03", title: "Computer Basics", url: "https://pdfobject.com/pdf/sample.pdf" },
            { addDate: "2026-01-05", title: "Hardware Overview", url: "https://pdfobject.com/pdf/sample.pdf" },
            { addDate: "2026-01-07", title: "Software Fundamentals", url: "https://pdfobject.com/pdf/sample.pdf" },
        ]
    },
    {
        id: 105,
        title: "Social Studies",
        description: "Learn about history, geography, and civic responsibilities.",
        instructor: "Ms. Ayesha",
        duration: "7 weeks",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
        barColor: "bg-purple-500",
        courseMaterial: [
            { addDate: "2026-01-02", title: "History Overview", url: "https://pdfobject.com/pdf/sample.pdf" },
            { addDate: "2026-01-04", title: "Geography Basics", url: "https://pdfobject.com/pdf/sample.pdf" },
            { addDate: "2026-01-06", title: "Civic Responsibilities", url: "https://pdfobject.com/pdf/sample.pdf" },
        ]
    },
    {
        id: 106,
        title: "Islamic Studies",
        description: "Basic teachings, ethics, and history of Islam.",
        instructor: "Mufti Hassan",
        duration: "6 weeks",
        image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae",
        barColor: "bg-teal-500",
        courseMaterial: [
            { addDate: "2026-01-01", title: "Teachings of Islam", url: "https://pdfobject.com/pdf/sample.pdf" },
            { addDate: "2026-01-03", title: "Islamic Ethics", url: "https://pdfobject.com/pdf/sample.pdf" },
            { addDate: "2026-01-05", title: "History of Islam", url: "https://pdfobject.com/pdf/sample.pdf" },
        ]
    },
];

export const studentDashboardStats: DashboardCard[] = [
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

export const announcementsData = [
    {
        id: "1",
        title: "Fee deadline extended",
        message: "January fees ab 30 Jan 2026 tak submit ki ja sakti hain.",
        icon: Megaphone,
        type: "warning",
        isNew: true,
        color: "text-yellow-600",
        bgColor: "bg-yellow-50 dark:bg-yellow-500/10",
    },
    {
        id: "2",
        title: "Mid-term schedule released",
        message: "Mid-term exams ka schedule portal par upload kar diya gaya hai.",
        icon: CalendarDays,
        type: "info",
        isNew: true,
        color: "text-blue-600",
        bgColor: "bg-blue-50 dark:bg-blue-500/10",
    },
    {
        id: "3",
        title: "Library timing update",
        message: "Library ab weekdays mein 8:00 AM se 8:00 PM tak open rahegi.",
        icon: Info,
        type: "info",
        isNew: false,
        color: "text-blue-600",
        bgColor: "bg-blue-50 dark:bg-blue-500/10",
    },
    {
        id: "4",
        title: "System maintenance notice",
        message: "Portal 14 Jan ko 12:00 AM se 3:00 AM tak unavailable rahega.",
        icon: AlertTriangle,
        type: "danger",
        isNew: false,
        color: "text-red-600",
        bgColor: "bg-red-50 dark:bg-red-500/10",
    },
];


// --- Teacher Data Constant ---

export const teacherDashboardStats: DashboardCard[] = [
    {
        id: "enrolledCourses",
        title: "Enrolled Courses",
        value: 5,
        icon: BookCopy,
        iconColor: "text-blue-600",
        bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
        id: "pendingGradingAssignments",
        title: "Pending Grading Assignments",
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

export const teacherClasses = [
    { id: 1, name: 'Mathematics 101', section: 'Section A', students: 32, color: 'bg-blue-100' },
    { id: 2, name: 'Physics Advanced', section: 'Section B', students: 28, color: 'bg-green-100' },
    { id: 3, name: 'Chemistry Fundamentals', section: 'Section C', students: 30, color: 'bg-orange-100' },
    { id: 4, name: 'Biology Lab', section: 'Section A', students: 25, color: 'bg-teal-100' },
];

export const teacherAssignments = [
    {
        id: 1,
        title: 'Calculus Problem Set 3',
        class: 'Mathematics 101',
        dueDate: '2026-01-28',
        totalSubmissions: 32,
        submitted: 28,
        late: 2,
        missing: 2,
        graded: 20,
    },
    {
        id: 2,
        title: 'Newton Laws Essay',
        class: 'Physics Advanced',
        dueDate: '2026-01-30',
        totalSubmissions: 28,
        submitted: 25,
        late: 1,
        missing: 2,
        graded: 15,
    },
    {
        id: 3,
        title: 'Periodic Table Quiz',
        class: 'Chemistry Fundamentals',
        dueDate: '2026-01-25',
        totalSubmissions: 30,
        submitted: 30,
        late: 0,
        missing: 0,
        graded: 30,
    },
];





// Role-based Sidebar Navigation
export const roleSideBarItems: Record<UserRole, LayoutItem[]> = {
    student: [
        { id: "", label: "Dashboard", icon: LayoutDashboard },
        { id: "mycourse", label: "My Courses", icon: BookCopy },
        { id: "assignments", label: "Assignments", icon: ClipboardList },
        { id: "homework", label: "Daily Homework", icon: ClipboardCheck },
        { id: "grades", label: "Grades", icon: BarChart3 },
        { id: "attendance", label: "Attendance", icon: CheckSquare },
        { id: "resources", label: "Resources", icon: Library },
        { id: "accounts", label: "Accounts", icon: FileUserIcon },
        // { id: "calendar", label: "Calendar", icon: Calendar },
        { id: "feedback", label: "Feedback", icon: FileText }
    ],
    teacher: [
        { id: '', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'classes', label: 'Classes', icon: BookOpen },
        { id: 'assignments', label: 'Assignments', icon: FileText },
        { id: 'quizzes', label: 'Quizzes', icon: ClipboardList },
        { id: 'grades', label: 'Grades', icon: GraduationCap },
        { id: 'attendance', label: 'Attendance', icon: CheckSquare },
        // { id: 'discussions', label: 'Discussions', icon: MessageSquare },
        { id: "accounts", label: "Accounts", icon: FileUserIcon },
        // { id: 'calendar', label: 'Calendar', icon: Calendar },
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
        { id: "feedback", label: "Feedback", icon: FileText }
    ]
};

