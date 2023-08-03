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
  const isPositiveGrowth = growthValue.startsWith("+");
  return (
    <div className="bg-gray-900 w-full flex flex-col p-5 h-150 border border-white/10 rounded">
      <div className="flex justify-between">
        <div className="font-bold">{title}</div>
        {growthValue && (
          <div
            style={{
              color: isPositiveGrowth ? "green" : "red",
            }}
          >
            {growthValue}%
          </div>
        )}
      </div>
      <div className="text-xl flex-grow flex items-center">{value}</div>
    </div>
  );
};

export default SessionInformation;
