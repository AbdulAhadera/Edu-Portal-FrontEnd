import type React from "react";
const LoadingState: React.FC = () => {

  return (
    <div>
      <div className="bg-gray-200 w-full py-17 rounded-sm animate-pulse"></div>
      <div className="flex gap-3 my-4">
        <div className="bg-gray-200 py-60 w-full lg:w-2/3"></div>
        <div className="bg-gray-200  w-1/3 py-40 opacity-0 lg:opacity-100"></div>
      </div>
    </div>
  );
};

export default LoadingState;
