import React from "react";
import SectionNavigator from "../SectionNavigator";
import AddressInfo from "./components/AddressInfo";

const Sidebar = () => {
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
        }}
      >
        <AddressInfo />
      </div>
    </aside>
  );
};

export default Sidebar;
