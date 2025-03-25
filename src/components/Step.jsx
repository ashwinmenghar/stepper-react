import React from "react";
import { steps } from "../data";

const Step = ({ step, isCompleted }) => {
  return (
    <>
      {steps.map((stepName, index) => {
        const isActive = step >= index + 1 || isCompleted;
        const isCurrent = step === index;
        const stepClass = isActive
          ? "bg-green-400 text-white"
          : isCurrent
          ? "bg-blue-700 text-white"
          : "bg-gray-300 text-black";

        return (
          <div
            className="flex flex-col justify-center items-center flex-1"
            key={stepName}
          >
            <div
              className={`border-2 border-black ${stepClass} h-10 w-10 rounded-full flex justify-center items-center cursor-pointer`}
            >
              {isActive ? <span>&#10003;</span> : index + 1}
            </div>
            <p>{stepName}</p>
          </div>
        );
      })}
    </>
  );
};

export default Step;
