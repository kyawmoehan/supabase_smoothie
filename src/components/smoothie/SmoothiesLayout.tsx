import React from "react";

const SmoothiesLayout = ({ children }: { children: JSX.Element[] | null }) => {
  return <div className="grid grid-cols-4 gap-x-10 gap-y-5">{children}</div>;
};

export default SmoothiesLayout;
