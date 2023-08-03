import React from "react";
import Table from "./Table";

const SessionHistory = () => {
  return (
    <div
      style={{
        background: "#0D121A",
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
        <h2>Session History</h2>
      </div>
      <Table />
    </div>
  );
};

export default SessionHistory;
