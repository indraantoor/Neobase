import React, { ReactNode } from "react";

interface ISectionSelectorProps {
  sectionName: string;
  selected: boolean;
  icon: ReactNode;
  sectionId: number;
  changeSelectedSection: Function;
}

const SectionSelector = ({
  sectionName,
  selected = false,
  icon,
  sectionId,
  changeSelectedSection,
}: ISectionSelectorProps) => {
  return (
    <div
      className={`flex justify-between p-3 ${
        selected ? "border border-blue-500" : "border border-white/10"
      } rounded cursor-pointer`}
      onClick={() => changeSelectedSection(sectionId)}
    >
      <div className="flex gap-5 items-center">
        <span
          className={`p-1 rounded-full text-${
            selected ? "blue-500" : "gray-600"
          } bg-${selected ? "blue-500" : "gray-600"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
            />
          </svg>
        </span>
        <span className={`text-${selected ? "white" : "gray-600"}`}>
          {sectionName}
        </span>
      </div>
      <div className={`text-${selected ? "white" : "gray-600"}`}>{">"}</div>
    </div>
  );
};

export default SectionSelector;
