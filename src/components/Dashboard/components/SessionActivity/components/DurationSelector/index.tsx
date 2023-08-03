import React from "react";

const DurationSelector = () => {
  const durations = ["1D", "1M", "1Y"];
  return (
    <div className="flex gap-2">
      {durations.map((duration, index) => (
        <div
          key={duration}
          className={`cursor-pointer ${
            index + 1 === durations.length ? "bg-blue-500" : "bg-gray-900"
          } px-2 py-1 rounded text-sm ${
            index + 1 === durations.length ? "text-white" : "text-gray-600"
          }`}
        >
          {duration}
        </div>
      ))}
    </div>
  );
};

export default DurationSelector;
