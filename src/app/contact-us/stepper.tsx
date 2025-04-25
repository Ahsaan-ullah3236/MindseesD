"use client"
import React from "react";

interface Step {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  active: boolean;
}

interface StepperProps {
  steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  return (
    <div className=" p-2">
      
      <div className="">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-start">
            {/* Step number and connector */}
            <div className="flex flex-col items-center mr-4">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center 
                ${step.active ? 'bg-blue-600 text-white' : 
                  step.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}
                font-semibold`}>
                {step.completed ? (
                    <div className="h-4 w-4 rounded-3xl text-white bg-white flex justify-center items-center">
                    <div className="h-3 w-3 rounded-3xl text-white bg-green-500 ">

                    </div>
                    </div>
               
                ) : (
                  step.id
                )}
              </div>
              {index !== steps.length - 1 && (
                <div className={`w-0.5 h-16 ${step.completed ? 'bg-yellow-200' : 'bg-gray-200'}`}></div>
              )}
            </div>
            
            {/* Step content */}
            <div className={`  ${index === steps.length - 1 ? 'pb-0' : ''}`}>
              <h3 className={`text-[17px] font-normal text-white`}>
                {step.title}
              </h3>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;