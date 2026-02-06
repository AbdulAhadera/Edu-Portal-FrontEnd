import type React from "react";
import { useState } from "react";
import BaseHeader from "../../components/BaseHeader";
import Button from "../../components/Button";
import { teacherResources, teacherClass } from "../../data/mockData";

const TeacherResources: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<string>(
    teacherClass[0].name,
  );

  return (
    <div>
      <div className="flex justify-between">
        <BaseHeader
          heading="Resources"
          text="Manage lecture materials and study resources Upload Resource"
        />
        <Button text="Upload Resource" className="bg-primary my-6 px-4" />
      </div>

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
    </div>
  );
};

export default TeacherResources;
