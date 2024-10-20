// import { signUpTitle } from "../../assets/assets";
// import "./TitleOne.css";
// function TitleOne() {
//   return (
//     <>
//       <div className="step-indicator titleone-container">
//         <img src={signUpTitle} alt="" />
//         <h1>Complete Your Trainer Account</h1>
//         <p>Few More Step Ahead to Connect Promising Aspirants</p>
//         {/* {form === "FormOne" && <FormOne/>}
//           {form === "FormTwo" && <FormTwo/>}
//           <button onClick={()=>setForm("FormTwo")}>Click it</button> */}
//       </div>
//     </>
//   );
// }

// export default TitleOne;


import { signUpTitle } from '../../assets/assets'

export const TitleOne = () => {
  return (
    <>
      <div className="step-indicator titleone-container">
        <img src={signUpTitle} alt="" />
        <h1>Complete Your Trainer Account</h1>
        <p>Few More Step Ahead to Connect Promising Aspirants</p>
      </div>
    </>
  )
}
