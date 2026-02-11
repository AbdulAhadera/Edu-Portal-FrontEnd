import type React from "react";
import { useAnnouncements, type Announcement } from "../hooks/useAnnouncements";
import { TriangleAlert } from "lucide-react";

const AnnoucementSection: React.FC = () => {
  const { data: announcements, loading, error } = useAnnouncements();

  const categoryMap = {
    info: { bg: "bg-blue-50", text: "text-blue-600" },
    warning: { bg: "bg-yellow-50", text: "text-yellow-600" },
    danger: { bg: "bg-red-50", text: "text-red-600" },
    success: { bg: "bg-green-50", text: "text-green-600" },
    alert: { bg: "bg-red-50", text: "text-red-600" },
  };

  if (loading)
    return (
      <div className="bg-card p-3 rounded-sm border border-ui-border shadow-sm w-full md:w-2/3 flex justify-center items-center">
        <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (error)
    return (
      <div className="bg-card p-3 rounded-sm border border-ui-border shadow-sm w-full md:w-2/3 flex justify-center items-center">
        <div className="flex flex-col items-center">
          <TriangleAlert
            size={48}
            className="bg-red-200/30 p-1 rounded-sm text-red-500"
          />
          <p className="text-text-muted">Error Loading Announcements</p>
        </div>
      </div>
    );

  if (!announcements?.length)
    return (
      <div className="bg-card p-3 rounded-sm border border-ui-border shadow-sm w-full md:w-2/3 flex justify-center items-center">
        <p className="text-text-muted">No Announcements</p>
      </div>
    );

  return (
    <div className="bg-card p-3 rounded-sm border border-ui-border shadow-sm w-full md:w-2/3">
      <h3 className="text-xl font-semibold text-text-main mb-3">
        Announcements
      </h3>

      <div className="space-y-2">
        {announcements.map((data) => {
          const colors = categoryMap[data.category || "info"];
          const Icon = data.icon; // optional, can render default if needed

          return (
            <div
              key={data.id}
              className="flex items-start gap-3 p-2 rounded-sm hover:bg-ui-hover"
            >
              {Icon && (
                <div
                  className={`p-1.5 rounded-md border border-ui-border ${colors.bg}`}
                >
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
              )}

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-md font-semibold text-text-main">
                    {data.title}
                  </p>
                  {!data.read && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary text-white font-semibold">
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-sm text-text-muted leading-snug">
                  {data.message}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnnoucementSection;
