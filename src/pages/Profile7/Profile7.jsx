import { useState } from "react";
import { signUpTitle } from "../../assets/assets";
import FormOne from "../../components/FormOne/FormOne";
import FormTwo from "../../components/FormTwo/FormTwo";
import "./Profile7.css";
import TitleOne from "../../components/TitleOne/TitleOne";
import StepperContent from "../StepperContent/StepperContent";
import FormThree from "../../components/FormThree/FormThree";
import FormFour from "../../components/FormFour/FormFour";
import FormFive from "../../components/FormFive/FormFive";
import TitleTwo from "../../components/TitleTwo/TitleTwo";
function Profile7() {

  const CheckoutSteps = [
    {
      title:"One",
      Component:()=> <FormOne/>,
      Components:()=> <TitleOne/>,
    },
    {
      title: "Two",
      Component:()=> <FormTwo/>,
      Components:()=> <TitleOne/>,
    },
    {
      title: "Three",
      Component:()=> <FormThree/>,
      Components:()=> <TitleTwo/>,
    }, 
    {
      title: "Four",
      Component:()=> <FormFour/>,
      Components:()=> <TitleTwo/>,
    }, 
    {
      title: "Five",
      Component:()=> <FormFive/>,
      Components:()=> <TitleTwo/>,
    },
  ]

  return (
       <div className="stepper-page-container">
        {/* <TitleOne/>
        <FormOne /> */}
        <StepperContent stepsConfig={CheckoutSteps}/>
        <div className="next-btn">
          {/* <button>Next</button> */}
        </div>
       </div>
  );
}

export default Profile7;





























// <div className="pro7-container">
    //   <div className="pro7-main">
    //     <div className="step-indicator">
    //       <img src={signUpTitle} alt="" />
    //       <h1>Complete Your Trainer Account</h1>
    //       <p>Few More Step Ahead to Connect Promising Aspirants</p>
    //       <FormOne/>
    //       {/* {form === "FormOne" && <FormOne/>}
    //       {form === "FormTwo" && <FormTwo/>}
    //       <button onClick={()=>setForm("FormTwo")}>Click it</button> */}
    //     </div>
        
    //   </div>
    // </div>
