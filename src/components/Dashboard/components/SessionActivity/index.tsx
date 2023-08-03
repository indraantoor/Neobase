import React from "react";
import DurationSelector from "./components/DurationSelector";

const SessionActivity = () => {
  return (
    <div
      style={{
        background: "#0D121A",
        height: "300px",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 25px",
        }}
      >
        <h2>Session Activity</h2>
        <div>
          <DurationSelector />
        </div>
      </div>
    </div>
  );
};

export default SessionActivity;
