import React from "react";
import SessionInformation from "./components/SessionInformation";
import SessionActivity from "./components/SessionActivity";
import SessionHistory from "./components/SessionHistory";

const Dashboard = () => {
  const sessionsInformation = [
    {
      title: "Active Sessions",
      growthValue: "+12.29",
      value: "10 H",
    },
    {
      title: "Total Sessions",
      growthValue: "-2.2",
      value: "100 H",
    },
    {
      title: "Highest Active Sessions",
      growthValue: "",
      value: "10 H",
    },
    {
      title: "Active Sessions",
      growthValue: "",
      value: "12h : 31m : 2s",
    },
  ];

  return (
    <div
      style={{
        background: "orange",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "0 10px",
      }}
    >
      <div>
        <h2>Session History</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            gap: "10px",
          }}
        >
          {sessionsInformation.map((session) => (
            <SessionInformation
              title={session.title}
              growthValue={session.growthValue}
              key={session.title}
              value={session.value}
            />
          ))}
        </div>
      </div>

      <SessionActivity />
      <SessionHistory />
    </div>
  );
};

export default Dashboard;
