import { useState, useMemo } from "react";
import type React from "react";
import BaseHeader from "../../components/BaseHeader";
import Button from "../../components/Button";
import DataTable from "../../components/DataTable";
import { teacherClass, studentAttendance } from "../../data/mockData";
import type {
  AttendanceRecord,
  AttendanceStatus,
  SubjectStudent,
  TStudentAttendance,
} from "../../types";

// ------------------- Component -------------------
const TeacherAttendance: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<string>(
    teacherClass[0].name,
  );
  const [attendanceData, setAttendanceData] =
    useState<TStudentAttendance[]>(studentAttendance);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0],
  );

  // ------------------- Get today's attendance status -------------------
  const getTodayStatus = (attendance: AttendanceRecord[]) => {
    const today = new Date().toISOString().split("T")[0];
    return attendance.find((a) => a.date === today)?.status || "present";
  };

  // ------------------- Mark attendance for a student -------------------
  const markDailyAttendance = (roll: string, status: AttendanceStatus) => {
    const today = new Date().toISOString().split("T")[0];

    setAttendanceData((prev) =>
      prev.map((student) => {
        if (student.roll !== roll) return student;

        const filteredAttendance = student.attendance.filter(
          (a) => a.date !== today,
        );

        return {
          ...student,
          attendance: [...filteredAttendance, { date: today, status }],
        };
      }),
    );
  };

  // ------------------- Save attendance (demo / API) -------------------
  const handleSaveAttendance = () => {
    const today = selectedDate;

    const dataToSave = filteredStudents.map((student) => {
      const status =
        student.attendance.find((a) => a.date === today)?.status || "absent";
      return {
        roll: student.roll,
        name: student.name,
        class: student.class,
        date: today,
        status,
      };
    });

    console.log("Attendance for", today, dataToSave);

    // TODO: Replace with API call
    // fetch("/api/attendance/save", { method: "POST", body: JSON.stringify(dataToSave) })
  };

  // ------------------- Columns for DataTable -------------------
  const attendanceColumns = [
    {
      header: "Student Name",
      key: "name",
      render: (_: string, row: SubjectStudent) => (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-text-main">
              {row.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <p className="text-text-main text-md font-medium">{row.name}</p>
        </div>
      ),
    },
    {
      header: "Roll No",
      key: "roll",
    },
    {
      header: "Status",
      key: "attendance",
      render: (_: object, row: TStudentAttendance) => {
        const status = getTodayStatus(row.attendance);

        const statusClasses: Record<AttendanceStatus, string> = {
          present: "bg-green-500/80 border border-green-700 text-white",
          late: "bg-yellow-500/80 border border-yellow-600 text-white",
          absent: "bg-red-500/80 border border-red-700 text-white",
        };

        return (
          <div className="flex gap-2">
            {(["present", "late", "absent"] as AttendanceStatus[]).map((s) => (
              <Button
                key={s}
                text={s === "present" ? "P" : s === "late" ? "L" : "A"}
                className={`px-3 py-1 rounded text-text-main ${
                  status === s ? statusClasses[s] : "bg-card text-text-main"
                }`}
                onClick={() => markDailyAttendance(row.roll, s)}
              />
            ))}
          </div>
        );
      },
    },
  ];

  // ------------------- Filter students by selected class -------------------
  // ------------------- Filter students by selected class -------------------
  const filteredStudents = useMemo(
    () => filterStudentsByClass(attendanceData, selectedClass),
    [attendanceData, selectedClass],
  );  

  // ------------------- Render -------------------
  return (
    <div>
      <BaseHeader
        heading="Attendance"
        text="Track and manage student attendance"
      />

      {/* Class Selection Buttons */}
      <div className="mb-6 overflow-x-auto hide-scrollbar">
        <div className="flex gap-3 min-w-max pb-2">
          {teacherClass.map((cls) => (
            <Button
              key={cls.name}
              text={cls.name}
              onClick={() => setSelectedClass(cls.name)}
              className={`px-4 py-2 rounded-sm text-sm font-medium whitespace-nowrap transition ${
                selectedClass === cls.name
                  ? "bg-primary text-white"
                  : "bg-card border border-ui-border text-text-muted hover:bg-ui-hover"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-card pt-2 shadow-sm">
        <div className="w-full flex justify-between px-2 pb-2">
          <Button
            text="Save Attendance"
            className="px-8 py-2 bg-primary text-white"
            onClick={handleSaveAttendance}
          />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700"
          />
        </div>
        <DataTable rows={filteredStudents} columns={attendanceColumns} />
      </div>
    </div>
  );
};

export default TeacherAttendance;
