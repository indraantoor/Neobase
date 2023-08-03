import React from "react";
import SectionNavigator from "../SectionNavigator";

const Sidebar = () => {
  return (
    <aside
      style={{
        background: "green",
      }}
    >
      <SectionNavigator content={<h2>Instance Name</h2>} />
      Sidebar
    </aside>
  );
};

export default Sidebar;
