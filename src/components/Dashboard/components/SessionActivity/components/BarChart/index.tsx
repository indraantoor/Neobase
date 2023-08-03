import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useFetchMockData } from "../../../../../../hooks/useFetchMockData";

export const BarChart = () => {
  const { data: mockData, isLoading, isError } = useFetchMockData();

  if (isLoading) {
    return <h2 className="px-5 py-6">Loading...</h2>;
  }

  if (isError) {
    return (
      <h2 className="px-5 py-6">
        Something went wrong. Please try again after some time
      </h2>
    );
  }

  const SESSION_ACTIVITY = mockData?.data?.sessionActivity || [];

  return (
    <Bar
      data={{
        labels: SESSION_ACTIVITY?.map((data) => data.month.toUpperCase()),
        datasets: [
          {
            label: "Session Count",
            data: SESSION_ACTIVITY?.map((data) => data.sessions),
            backgroundColor: ["#6e9cdd"],
            barThickness: 25,
          },
        ],
      }}
      height={100}
    />
  );
};
