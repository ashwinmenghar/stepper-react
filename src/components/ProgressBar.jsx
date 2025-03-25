import React from "react";

const ProgressBar = ({ step }) => {
  const progressWidth = Math.min((step / 3) * 100, 100);
  const progressBarClass = step > 0 && step <= 4 ? "bg-green-700" : "";

  return (
    <div
      className={`progress-bar h-full ${progressBarClass}`}
      style={{ width: `${progressWidth}%` }}
    ></div>
  );
};

export default ProgressBar;
