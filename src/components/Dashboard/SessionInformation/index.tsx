import React from "react";

interface ISessionInformationProps {
  title: string;
  value: string;
  growthValue: string;
}

const SessionInformation = ({
  title,
  value,
  growthValue,
}: ISessionInformationProps) => {
  const isPositiveGrowth = growthValue.startsWith("+") ? true : false;
  return (
    <div
      style={{
        background: "#0D121A",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "20px 25px",
        height: "150px",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>{title}</div>
        {growthValue ? (
          <div
            style={{
              color: isPositiveGrowth ? "green" : "red",
            }}
          >
            {growthValue}%
          </div>
        ) : null}
      </div>
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        {value}
      </div>
    </div>
  );
};

export default SessionInformation;
