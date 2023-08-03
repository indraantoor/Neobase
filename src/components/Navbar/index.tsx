import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        height: "70px",
        borderBottom: "1px solid rgba(255,255,255,0.2)",
        padding: "10px 0",
        margin: "0 2%",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>IMAGE</div>
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <div>
            <h2>NodeMoniker</h2>
            <p>Myaddresstest</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <button>Start Node</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
