import { useState, useMemo } from "react";
import BaseHeader from "../../components/BaseHeader";
import {
  teacherHomework,
  teacherClass,
  studentsData,
} from "../../data/mockData";
import Button from "../../components/Button";
import DataTable from "../../components/DataTable";
import { CheckCircle2, CircleDashed } from "lucide-react";

const TeacherHomework: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<string>(
    teacherClass[0].name,
  );

  // Pehle check karo is class mein kaunse homeworks hain,
  // phir pehla wala default select karlo
  const classHomeworks = useMemo(
    () => teacherHomework.filter((hw) => hw.class === selectedClass),
    [selectedClass],
  );

  const [selectedHwId, setSelectedHwId] = useState<number | null>(null);

  // Jab class change ho, automatically pehla homework select ho jaye
  useMemo(() => {
    if (classHomeworks.length > 0) setSelectedHwId(classHomeworks[0].id);
  }, [classHomeworks]);

  const currentHw = classHomeworks.find((h) => h.id === selectedHwId);

  // Table Columns as per your requirement
  const columns = [
    {
      header: "Student Name",
      key: "name",
      render: (_: string, row: string) => (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-text-main   ">
              {row.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>

          <p className="text-text-maintext-md font-medium"> {row.name}</p>
        </div>
      ),
    },
    {
      header: "Roll No",
      key: "roll",
      render: (val: any) => (
        <span className="text-text-muted text-sm">{val}</span>
      ),
    },
    {
      header: "Status",
      key: "isDone",
      render: (_: any, row: any) => (
        <div
          className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${
            row.isDone ? "text-green-600" : "text-yellow-600"
          }`}
        >
          {row.isDone ? (
            <CheckCircle2 className="w-4 h-4" />
          ) : (
            <CircleDashed className="w-4 h-4" />
          )}
          {row.isDone ? "Done" : "Not Done"}
        </div>
      ),
    },
  ];

  // Rows logic: Is class ke students + unka is specific homework ka status
  const rows = useMemo(() => {
    const students = studentsData.filter((s) => s.class === selectedClass);
    return students.map((s) => ({
      ...s,
      isDone: currentHw?.completedStudents.includes(s.name) || false,
    }));
  }, [selectedClass, currentHw]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <BaseHeader
          heading="Homework Control"
          text="Review submissions and manage student accountability"
        />
        <Button text="Give homework" className="bg-primary my-6 px-4" />
      </div>

      {/* 1. Class Selection (Your Standard) */}
      <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
        {teacherClass.map((cls) => (
          <Button
            key={cls.name}
            onClick={() => setSelectedClass(cls.name)}
            text={cls.name}
            className={`px-4 py-2 rounded-sm text-sm font-medium whitespace-nowrap transition 
              ${
                selectedClass === cls.name
                  ? "bg-primary text-white"
                  : "bg-card border border-ui-border text-text-muted hover:bg-ui-hover"
              }`}
          />
        ))}
      </div>

      {/* 2. Homework/Subject Selection (Specific to the class) */}
      <div>
        <div className="flex flex-wrap gap-2">
          {classHomeworks.map((hw) => (
            <button
              key={hw.id}
              onClick={() => setSelectedHwId(hw.id)}
              className={`px-4 py-2 rounded-sm border text-left transition-all 
                ${
                  selectedHwId === hw.id
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "border-ui-border bg-card hover:border-text-muted"
                }`}
            >
              <p
                className={`text-sm font-semibold ${selectedHwId === hw.id ? "text-primary" : "text-text-main"}`}
              >
                {hw.title}
              </p>
              <p className="text-[10px] text-text-muted mt-1 font-medium italic">
                Due: {hw.dueDate}
              </p>
            </button>
          ))}
        </div>
      </div>

      <p className="text-md font-bold text-primary bg-primary/10 px-2 py-1 rounded-sm">
        Total Done: {currentHw?.completedStudents.length} / {rows.length}
      </p>
      <div className="bg-card border border-ui-border rounded-sm overflow-hidden">
        <DataTable rows={rows} columns={columns} />
      </div>
    </div>
  );
};

export default TeacherHomework;
