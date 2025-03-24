import React from "react";

const ProgressBar = ({ step }) => {
  return (
    <div
      className={`progress-bar h-full ${
        step > 0 && step <= 4 ? "bg-green-700" : ""
      }`}
      style={{ width: `${(step / 3) * 100}%` }}
    ></div>
  );
};

export default ProgressBar;
