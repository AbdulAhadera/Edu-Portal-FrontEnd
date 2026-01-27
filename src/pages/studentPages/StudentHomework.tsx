import { useState } from "react";
import type { Homework } from "../../data/mockData";
import { homeworkData } from "../../data/mockData";
import { Calendar, AlertCircle, GripVertical } from "lucide-react";

const StudentHomework: React.FC = () => {
  const [items, setItems] = useState<Homework[]>(homeworkData);
  const [draggedId, setDraggedId] = useState<number | null>(null);

  // Determine status for column
  const getStatus = (h: Homework) => (h.status === "completed" ? "done" : "todo");

  // Check if homework is overdue
  const isOverdue = (h: Homework) =>
    getStatus(h) === "todo" && new Date(h.dueDate) < new Date();

  // Handle drop between columns
  const handleDrop = (targetColumn: "todo" | "done") => {
    if (!draggedId) return;
    setItems(prev =>
      prev.map(i =>
        i.id === draggedId
          ? { ...i, status: targetColumn === "done" ? "completed" : "pending" }
          : i
      )
    );
    setDraggedId(null);
  };

  const todoItems = items.filter(i => getStatus(i) === "todo");
  const doneItems = items.filter(i => getStatus(i) === "done");

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-main sm:text-3xl">
          Daily Homework
        </h1>
        <p className="text-text-muted mt-1">
          Track your homework and mark them done when completed
        </p>
      </div>

      {/* Columns */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* To Do Column */}
        <div
          className="w-full lg:w-1/2 bg-card p-4 rounded-lg space-y-3 h-auto shadow-sm"
          onDragOver={e => e.preventDefault()}
          onDrop={() => handleDrop("todo")}
        >
          <h3 className="text-xl font-bold mb-3 text-text-main">To Do</h3>
          {todoItems.map(h => (
            <div
              key={h.id}
              draggable
              onDragStart={() => setDraggedId(h.id)}
              onDragOver={e => e.preventDefault()}
              onDrop={() => handleDrop("todo")}
              className={`flex gap-3 p-3 rounded border cursor-move
                ${isOverdue(h) ? "bg-red-50 border-red-300" : "bg-card border-ui-border"}
              `}
            >
              <GripVertical className="text-text-muted mt-1" />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <span className="font-semibold">{h.title}</span>
                  {isOverdue(h) && (
                    <span className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" /> Pending
                    </span>
                  )}
                </div>
                <p className="text-sm text-text-muted">{h.subject}</p>
                <div className="flex gap-2 text-xs text-black font-semibold mt-1">
                  <Calendar className="h-3 w-3" />
                  <span>Due: {h.dueDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Done Column */}
        <div
          className="w-full lg:w-1/2 bg-primary/20 p-4 rounded-lg space-y-3 min-h-[400px] shadow-sm"
          onDragOver={e => e.preventDefault()}
          onDrop={() => handleDrop("done")}
        >
          <h3 className="text-xl font-bold mb-3 text-text-main">Done</h3>
          {doneItems.map(h => (
            <div
              key={h.id}
              draggable
              onDragStart={() => setDraggedId(h.id)}
              onDragOver={e => e.preventDefault()}
              onDrop={() => handleDrop("done")}
              className="flex gap-3 p-3 rounded border bg-white border-gray-200 cursor-move"
            >
              <GripVertical className="text-gray-400 mt-1" />
              <div className="flex-1">
                <span className="font-semibold">{h.title}</span>
                <p className="text-sm text-gray-600">{h.subject}</p>
                <div className="flex gap-2 text-xs text-gray-500 mt-1">
                  <Calendar className="h-3 w-3" />
                  <span>Due: {h.dueDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentHomework;