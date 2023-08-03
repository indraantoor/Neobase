import React from "react";

const DurationSelector = () => {
  const durations = ["1D", "1M", "1Y"];
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
      }}
    >
      {durations.map((duration, index) => (
        <div
          key={duration}
          style={{
            cursor: "pointer",
            background: index + 1 == durations.length ? "#0075E4" : "#1E1B24",
            padding: "2px 6px",
            borderRadius: "5px",
            color: index + 1 == durations.length ? "white" : "#555659",
          }}
        >
          {duration}
        </div>
      ))}
    </div>
  );
};

export default DurationSelector;
