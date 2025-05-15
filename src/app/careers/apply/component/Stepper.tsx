// components/Stepper.tsx
import React from 'react';

type Step = 'Basic Information' | 'Education' | 'Experience';

interface StepperProps {
  currentStep: number;
}

const steps: Step[] = ['Basic Information', 'Education', 'Experience'];

export const StepperApply: React.FC<StepperProps> = ({ currentStep }) => {
  console.log("currentStep",currentStep)
  return (
    <div className="w-full px-4 mt-4 mb-16">
      <div className="relative flex items-center justify-between">
        {/* Progress Line */}
        <div className="absolute top-1/2 left-0 w-full h-[12px] bg-gray-200 rounded-full -translate-y-1/2 z-0" />

        {steps.map((step, index) => (
          <div key={step} className="z-10 ">
            {index===0 &&  <div
              className={`w-7 h-7 rounded-full border-4 mt-6 border-green-500 bg-white`}
            />}
            <div className={`text-sm ${index === 0 ? 'mt-0' : 'mt-13'}`}>{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
