import type React from "react";

const LoadingState: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-3">
        <div className="h-8 w-48 bg-ui-border rounded animate-pulse"></div>
        <div className="h-4 w-96 bg-ui-border rounded animate-pulse"></div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-card border border-ui-border rounded-lg p-5 animate-pulse"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1 space-y-3">
                <div className="h-4 w-20 bg-ui-border rounded"></div>
                <div className="h-6 w-16 bg-ui-border rounded"></div>
              </div>
              <div className="w-10 h-10 bg-primary-muted rounded-lg flex-shrink-0"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left - Announcements */}
        <div className="lg:col-span-2 bg-card border border-ui-border rounded-lg p-6 space-y-4 animate-pulse">
          <div className="h-6 w-40 bg-ui-border rounded"></div>
          
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-3 pb-4 border-b border-ui-border last:border-0">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-ui-border rounded-full flex-shrink-0"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-48 bg-ui-border rounded"></div>
                  <div className="h-3 w-full bg-ui-border rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Incomplete Assignments */}
        <div className="bg-card border border-ui-border rounded-lg p-6 space-y-3 animate-pulse">
          <div className="h-6 w-32 bg-ui-border rounded"></div>
          
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-2 p-3 border border-ui-border rounded">
              <div className="h-4 w-full bg-ui-border rounded"></div>
              <div className="h-3 w-24 bg-ui-border rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingState;