import type React from "react";
import { useState } from "react";
import BaseHeader from "../../components/BaseHeader";
import Button from "../../components/Button";
import { teacherClass, teacherResources } from "../../data/mockData";
import { FileText, Eye, Download, Calendar } from "lucide-react";

const TeacherResources: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<string>(
    teacherClass[0].name,
  );

  const filteredResources = teacherResources.filter(
    (res) => res.class === selectedClass,
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {filteredResources.map((res) => (
          <div
            key={res.id}
            className="group bg-card border border-ui-border rounded-sm p-5 shadow-sm hover:shadow-md"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-primary-muted rounded-sm">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-text-muted bg-ui-hover px-2 py-1 rounded-sm">
                {res.type}
              </span>
            </div>

            <h3 className="font-bold text-text-main text-lg leading-tight mb-1">
              {res.title}
            </h3>

            <div className="text-text-muted mb-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 " />
                <p className="text-xs">Uploaded: {res.uploadDate}</p>
              </div>
              <p className="text-xs">Total Downloads: {res.downloads}</p>
            </div>

            <div className="flex gap-3">

            {/* Make a More Reusebale Button */}
              
              <button className="flex-1 flex items-center justify-center gap-2 bg-primary text-white text-sm font-medium py-2.5 rounded-sm hover:opacity-90 transition-opacity cursor-pointer">
                <Eye className="w-4 h-4" />
                View
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 border border-ui-border text-text-main text-sm font-medium py-2.5 rounded-sm hover:bg-ui-hover transition-colors cursor-pointer">
                <Download className="w-4 h-4" />
                Docs
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherResources;
