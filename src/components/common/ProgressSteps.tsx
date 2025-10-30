"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface Step {
  label: string;
  number: number;
}

interface ProgressStepsProps {
  currentStep: number;
}

const steps: Step[] = [
  { number: 1, label: "Vault Type" },
  { number: 2, label: "Basic Information" },
  { number: 3, label: "Tribute" },
  { number: 4, label: "Theme" },
  { number: 5, label: "Review" },
];

const ProgressSteps: React.FC<ProgressStepsProps> = ({ currentStep }) => {
  return (
    <div className="flex items-center justify-center w-full space-x-4 md:space-x-6 mb-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-medium transition-all duration-300",
                currentStep === step.number
                  ? "border-[#2E6458] bg-[#2E6458] text-white"
                  : currentStep > step.number
                  ? "border-[#2E6458] bg-[#2E6458]/20 text-[#2E6458]"
                  : "border-gray-300 text-gray-400"
              )}
            >
              {step.number}
            </div>
            <p
              className={cn(
                "text-xs mt-2",
                currentStep === step.number
                  ? "text-[#2E6458] font-semibold"
                  : "text-gray-500"
              )}
            >
              {step.label}
            </p>
          </div>

          {index < steps.length - 1 && (
            <div
              className={cn(
                "w-10 md:w-16 h-[2px] mx-2 transition-all duration-300",
                currentStep > step.number ? "bg-[#2E6458]" : "bg-gray-300"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressSteps;
