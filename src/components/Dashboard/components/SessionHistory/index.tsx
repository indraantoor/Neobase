import React from "react";
import Table from "./Table";

const SessionHistory = () => {
  return (
    <div className="bg-gray-900 border border-white/10 rounded">
      <div className="flex justify-between p-5">
        <h2 className="text-xl font-bold">Session History</h2>
      </div>
      <Table />
    </div>
  );
};

export default SessionHistory;
