import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.tsx";

import {
  TeacherDashboard,
  TeacherClasses,
  TeacherAssignment,
  TeacherGrades,
  TeacherNotifications,
  TeacherResources,
  TeacherAttendance,
  TeacherHomework,
  LoadingState,
  TeacherProfile,
} from "./pages/index.ts";

import {
  StudentCourse,
  StudentDashboard,
  StudentAssignment,
  StudentGrade,
  StudentAttendance,
  StudentResource,
  StudentFeedback,
  StudentNotifications,
  StudentHomework,
  StudentAccount,
  StudentProfile,
} from "./pages/index.ts";

import { SignIn } from "./pages/index.ts";

const Router: React.FC = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/" element={<SignIn />} />

      {/* Student Routes */}
      <Route path="/student" element={<Layout role="student" />}>
        <Route path="" element={<StudentDashboard />} />
        <Route path="mycourse" element={<StudentCourse />} />
        <Route path="assignments" element={<StudentAssignment />} />
        <Route path="grades" element={<StudentGrade />} />
        <Route path="attendance" element={<StudentAttendance />} />
        <Route path="resources" element={<StudentResource />} />
        <Route path="feedback" element={<StudentFeedback />} />
        <Route path="notifications" element={<StudentNotifications />} />
        <Route path="homework" element={<StudentHomework />} />
        <Route path="profile" element={<StudentProfile />} />
        <Route path="accounts" element={<StudentAccount />} />
      </Route>

      {/* Teacher Routes */}
      <Route path="/teacher" element={<Layout role="teacher" />}>
        <Route path="" element={<TeacherDashboard />} />
        <Route path="classes" element={<TeacherClasses />} />
        <Route path="assignments" element={<TeacherAssignment />} />
        <Route path="grades" element={<TeacherGrades />} />
        <Route path="notifications" element={<TeacherNotifications />} />
        <Route path="resources" element={<TeacherResources />} />
        <Route path="attendance" element={<TeacherAttendance />} />
        <Route path="homework" element={<TeacherHomework />} />
        <Route path="profile" element={<TeacherProfile />} />
        <Route path="loading" element={<LoadingState />} />
      </Route>

      <Route path="/admin" element={<Layout role="admin" />} />
    </Routes>
  );
};

export default Router;
