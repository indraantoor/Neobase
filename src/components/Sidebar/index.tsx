import React, { useState } from "react";
import SectionNavigator from "../SectionNavigator";
import AddressInfo from "./components/AddressInfo";
import SectionSelector from "./components/SectionSelector";

const Sidebar = () => {
  const [selectedSection, setSelectedSection] = useState<number>(0);

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

  const changeSelectedSection = (selectedSectionIndex: number) => {
    setSelectedSection(selectedSectionIndex);
    return;
  };

  return (
    <aside className="flex flex-col">
      <SectionNavigator
        content={<h2 className="text-xl font-bold">Instance Name</h2>}
      />
      <div className="bg-gray-900 p-4 flex-1 border border-white/10 rounded space-y-4">
        <AddressInfo />
        <div className="space-y-2">
          {sections.map((section, index) => (
            <SectionSelector
              selected={index === selectedSection}
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
