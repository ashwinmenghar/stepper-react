import { useState } from "react";
import "../index.css";
import { data } from "../data";
import Step from "./Step";
import ProgressBar from "./ProgressBar";
import Button from "./Button";

function Stepper() {
  const [step, setStep] = useState(0);
  const [message, setMessage] = useState(data[0]);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <>
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-semibold text-center">Stepper</h1>

        <div className="flex items-center justify-around mt-10 relative">
          <Step step={step} isCompleted={isCompleted} />
          <div className="progress-container bg-gray-400 w-9/12 h-1 absolute top-4 -z-10">
            <ProgressBar step={step} />
          </div>
        </div>

        <div className="mt-10 flex items-center flex-col">
          <p className="text-xl font-bold">{message}</p>
          <Button
            step={step}
            setStep={setStep}
            setMessage={setMessage}
            setIsCompleted={setIsCompleted}
            isCompleted={isCompleted}
          />
        </div>
      </div>
    </>
  );
}

export default Stepper;
