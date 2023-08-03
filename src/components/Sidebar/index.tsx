import React, { useState } from "react";
import SectionNavigator from "../SectionNavigator";
import AddressInfo from "./components/AddressInfo";
import SectionSelector from "./components/SectionSelector";

const Sidebar = () => {
  const [selectedSection, setSelectedSection] = useState<Number>(0);

  const sections = [
    {
      sectionName: "Node Overview",
      icon: "Icon 1",
    },
    {
      sectionName: "DVPN Earnings",
      icon: "Icon 2",
    },
  ];

  const changeSelectedSection = (selectedSectionIndex: Number) => {
    setSelectedSection(selectedSectionIndex);
    return;
  };

  return (
    <aside
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SectionNavigator content={<h2>Instance Name</h2>} />
      <div
        style={{
          background: "#0D1119",
          padding: "10px 15px",
          flexGrow: 1,
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <AddressInfo />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {sections.map((section, index) => (
            <SectionSelector
              selected={index == selectedSection ? true : false}
              sectionName={section.sectionName}
              icon={<div>{section.icon}</div>}
              key={section.sectionName}
              changeSelectedSection={changeSelectedSection}
              sectionId={index}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
