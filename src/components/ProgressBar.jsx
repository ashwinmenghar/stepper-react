import React from "react";

const ProgressBar = ({ step }) => {
  return (
    <>
      <div className="progress-container bg-gray-400 w-9/12 h-1 absolute top-4 -z-10">
        <div
          className={`progress-bar ${
            step > 0 && step <= 4 ? "bg-green-700" : ""
          } w-${step * 4}/12 h-full`}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
