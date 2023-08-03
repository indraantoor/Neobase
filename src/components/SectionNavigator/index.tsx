import React, { ReactNode } from "react";

interface ISectionNavigatorProps {
  back?: boolean;
  forward?: boolean;
  content: ReactNode;
}

const SectionNavigator = ({
  back = true,
  content,
  forward,
}: ISectionNavigatorProps) => {
  return (
    <div
      style={{
        padding: "10px 5px",
        display: "flex",
        gap: "20px",
      }}
    >
      {back ? (
        <div
          style={{
            cursor: "pointer",
          }}
        >
          Arrow
        </div>
      ) : null}
      <div
        style={{
          maxWidth: "100%",
          overflow: "auto",
        }}
      >
        {content}
      </div>
      {forward ? (
        <div
          style={{
            cursor: "pointer",
          }}
        >
          Arrow
        </div>
      ) : null}
    </div>
  );
};

export default SectionNavigator;
