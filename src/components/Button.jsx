import React from "react";
import { data, steps } from "../data";

const Button = ({ step, setStep, setMessage, setIsCompleted, isCompleted }) => {
  const handlePrevStep = () => {
    setStep((prevStep) => {
      if (prevStep < steps.length + 1 && isCompleted) {
        setIsCompleted(false);
        return prevStep;
      } else {
        return prevStep - 1;
      }
    });
    setMessage(data[step - 1]);
  };

  const handleNextStep = () => {
    setStep((prev) => {
      if (prev + 1 === data.length - 1) {
        setIsCompleted(true);
        return prev;
      } else {
        return prev + 1;
      }
    });
    setMessage(data[step + 1]);
  };
  return (
    <div className="mt-5">
      <button
        className="px-4 py-2 bg-gray-300 rounded-lg text-xl font-normal mr-16 disabled:cursor-not-allowed disabled:opacity-25"
        onClick={handlePrevStep}
        disabled={step === 0}
      >
        Previous
      </button>
      <button
        className="px-4 py-2 bg-gray-300 rounded-lg text-xl font-normal disabled:cursor-not-allowed disabled:opacity-25"
        onClick={handleNextStep}
        disabled={isCompleted}
      >
        {step == 3 ? "Finish" : "Next"}
      </button>
    </div>
  );
};

export default Button;
