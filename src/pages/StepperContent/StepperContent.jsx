import { useState } from "react";
import './StepperContent.css'
import { useNavigate } from "react-router-dom";
import './StepperContent.css'


export const StepperContent = ({ stepsConfig = [] }) => {

  const navigate = useNavigate()
    const [currentStep, setCurrentStep] = useState(1)
    const [isComplete, setIsComplete] = useState(false)
  if (!stepsConfig.length) {
    return <></>;
  }

  const handleNext = ()=>{
    setCurrentStep(prevStep=>{
        if(prevStep===stepsConfig.length){
            setIsComplete(true) 
            return prevStep
        } else{
            return prevStep + 1
        }
    })
  }

  const handlePrev = ()=>{
    setCurrentStep(prevStep=>{
      if(prevStep>stepsConfig.length){
        setIsComplete(true)
        return prevStep
      } else{
        return prevStep - 1
      }
    })
  }

  const ActiveComponent = stepsConfig[currentStep-1].Component;
  const TitleComponent = stepsConfig[currentStep-1].Components;
  
  return (
    <>
     <TitleComponent/> 
       <div className="stepper">
         {stepsConfig.map((step, index) => {
          return (
            
            <div key={step.title} className={`step ${currentStep>index+1 || isComplete?"complete":""}
            ${currentStep===index+1 ? "active":""}`}>
              
              <div className="step-number">{
              currentStep>index+1 || isComplete? <span>&#10003;</span>:
              index + 1}</div>
              {/* <div className="step-title">{step.title}</div> */}
            </div>
          );
        })}
        <div className="progress-bar">
            <div className="progress"></div>
        </div>
      </div>

      <ActiveComponent/>

      {/* {!isComplete &&
      
       <button onClick={handleNext} >{currentStep===stepsConfig.length?"Finish": "Next"}</button>} */}
       {!isComplete &&
      <div className="page-nav">
        <button onClick={handlePrev} id="previous-btn">{currentStep===stepsConfig.length?"Need Changes":"Previous"}</button>
        <button onClick={handleNext} >{currentStep===stepsConfig.length?"Confirm & Submit": "Next"}</button>
      </div>
      }
      {
        isComplete &&
        navigate("/SplashSubmit")

      }
    </>
  )
}