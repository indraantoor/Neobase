import React, { ReactNode } from "react";

interface ISectionSelectorProps {
  sectionName: string;
  selected: boolean;
  icon: ReactNode;
  sectionId: Number;
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
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "13px",
        border: selected
          ? "1px solid #0075E4"
          : "1px solid rgba(255,255,255,0.1)",
        borderRadius: "10px",
        cursor: "pointer",
      }}
      onClick={() => changeSelectedSection(sectionId)}
    >
      <div
        style={{
          display: "flex",
          gap: "5px",
        }}
      >
        <span
          style={{
            color: selected ? "#0075E4" : "#555659",
          }}
        >
          {icon}
        </span>
        <span
          style={{
            color: selected ? "white" : "#555659",
          }}
        >
          {sectionName}
        </span>
      </div>
      <div
        style={{
          color: selected ? "white" : "#555659",
        }}
      >
        {">"}
      </div>
    </div>
  );
};

export default SectionSelector;
