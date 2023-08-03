import React, { useState } from "react";
import DurationSelector from "./components/DurationSelector";
import { BarChart } from "./components/BarChart";

const SessionActivity = () => {
  return (
    <div className="bg-gray-900 border border-white/10 rounded">
      <div className="flex justify-between p-5">
        <h2 className="text-xl font-bold">Session Activity</h2>
        <div>
          <DurationSelector />
        </div>
      </div>

      <div className="p-5">
        <BarChart />
      </div>
    </div>
  );
};

export default SessionActivity;
