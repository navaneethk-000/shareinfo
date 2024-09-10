import { useState } from 'react';
import './Stepper.css'

function Stepper({stepsConfig = []}) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, stepsConfig.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <div className="stepper-container">
      <div className="stepper-steps">
        {stepsConfig.map((step, index) => (
          <div
            key={step}
            className={`stepper-step ${index === currentStep ? 'active' : ''}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="stepper-progress">
        <div
          className="stepper-progress-active"
          style={{ width: `${(currentStep + 1) / stepsConfig.length * 100}%` }}
        ></div>
      </div>
      <div className="stepper-buttons">
        <button
          className="stepper-button"
          onClick={handlePrevious}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          className="stepper-button"
          onClick={handleNext}
          disabled={currentStep === stepsConfig .length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Stepper;