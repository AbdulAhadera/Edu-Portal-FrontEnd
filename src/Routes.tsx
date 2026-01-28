import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import {
  StudentCourse, StudentDashboard, StudentAssignment, StudentGrade, StudentAttendance, StudentResource, StudentFeedback, StudentNotifications, StudentHomework, StudentAccount, StudentProfile
} from "./pages/index.ts";

import { TeacherDashboard } from "./pages/index.ts";


const Router: React.FC = () => {
  return (

    <Routes>

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
      <Route path="/teacher" element={<Layout role="teacher" />} >
        <Route path="" element={<TeacherDashboard />} />
      </Route>

      <Route path="/admin" element={<Layout role="admin" />} />

    </Routes>
  );
};

export default Router;

