import "./Profile7.css";
import {TitleOne} from "../../components/TitleOne/TitleOne";
import {StepperContent} from "../StepperContent/StepperContent";
import {TitleTwo} from "../../components/TitleTwo/TitleTwo";
import { FormFive } from "../../components/FormFive/FormFive";
import { FormFour } from "../../components/FormFour/FormFour";
import { FormFirst } from "../../components/FormFirst/FormFirst";
import { FormThree } from "../../components/FormThree/FormThree";
import { FormOne } from "../../components/FormOne/FormOne";


export const Profile7 = () => {

  const CheckoutSteps = [
    {
      title:"One",
      Component:()=> <FormOne/>,
      Components:()=> <TitleOne/>,
    },
    {
      title: "Two",
      Component:()=> <FormFirst/>,
      // Component:()=> <FormTwo/>,
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
        <StepperContent stepsConfig={CheckoutSteps}/>
        <div className="next-btn">
          {/* <button>Next</button> */}
        </div>
       </div >
  )
}
