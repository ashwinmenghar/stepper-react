import React from "react";
import { steps } from "../data";

const Step = ({ step, isCompleted }) => {
  return (
    <>
      {steps.map((stepName, index) => (
        <div
          className="flex flex-col justify-center items-center flex-1"
          key={stepName}
        >
          <div
            className={`border-2 border-black
                      ${
                        step >= index + 1 || isCompleted
                          ? "bg-green-400 text-white"
                          : step == index
                          ? "bg-blue-700 text-white"
                          : "bg-gray-300 text-black"
                      } h-10 w-10 rounded-full flex justify-center items-center cursor-pointer`}
          >
            {step >= index + 1 || isCompleted ? (
              <span>&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <p>{stepName}</p>
        </div>
      ))}
    </>
  );
};

export default Step;
