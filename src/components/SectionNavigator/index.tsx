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
    <div className="px-5 py-5 flex gap-5">
      {back && (
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </div>
      )}
      <div className="max-w-full overflow-auto">{content}</div>
      {forward && (
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default SectionNavigator;
