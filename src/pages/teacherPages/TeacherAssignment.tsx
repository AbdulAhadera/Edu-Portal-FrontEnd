import React, { useState } from "react";
import BaseHeader from "../../components/BaseHeader";
import TeacherAssignmentsCard from "../../components/TeacherAssignmentsCard";
import BaseModal from "../../components/baseComponents/BaseModal";
import BaseForm from "../../components/baseComponents/BaseForm";
import type { FieldConfig } from "../../components/baseComponents/BaseType";
import Button from "../../components/baseComponents/Button";

const uploadAssignmentfields: FieldConfig[] = [
  {
    name: "title",
    label: "Assignment Title",
    required: true,
    placeholder: "Enter assignment title",
  },
  {
    name: "description",
    label: "Assignment Description",
    placeholder: "Enter assignment description",
  },
  {
    name: "file",
    label: "Upload Assignment File",
    type: "file",
    required: true,
  },
  {
    name: "dueTime",
    label: "Due Time",
    type: "datetime-local",
    required: true,
  },
  {
    name: "totalMarks",
    label: "Total Marks",
    type: "number",
    required: true,
    placeholder: "Total Marks",
  },
];

const TeacherAssignment: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(true);
    console.log("Modal opened");
  };

  const handleFormSubmit = (data: any) => {
    console.log("Form data received:", data);
    const formData = new FormData();
    for (let key in data) {
      if (data[key] instanceof FileList) {
        formData.append(key, data[key][0]); // first file
      } else {
        formData.append(key, data[key]);
      }
    }
    console.log("FormData ready:", formData);
    setIsModalOpen(false); // modal close
  };

  return (
    <div>
      <div className="flex justify-between">
        <BaseHeader
          heading="Assignments"
          text="Create and manage student assignments"
        />
        <Button
          onClick={handleModal}
          text="Create Assignment"
          className="bg-primary my-6 px-4 text-button rounded-sm"
        />
      </div>

      <BaseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <BaseForm
          fields={uploadAssignmentfields}
          onSubmit={handleFormSubmit}
          submitButtonText="Create Assignment"
        />
      </BaseModal>

      <TeacherAssignmentsCard />
    </div>
  );
};

export default TeacherAssignment;
