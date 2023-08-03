import React from "react";
import { Bar } from "react-chartjs-2";
import { chartDemoData } from "../../chartDemoData";
import "chart.js/auto";

export const BarChart = () => {
  return (
    <Bar
      data={{
        labels: chartDemoData.map((data) => data.month.toUpperCase()),
        datasets: [
          {
            label: "Session Count",
            data: chartDemoData.map((data) => data.sessions),
            backgroundColor: ["#6e9cdd"],
            barThickness: 25,
          },
        ],
      }}
      height={100}
    />
  );
};
