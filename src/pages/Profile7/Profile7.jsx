import { useState } from "react";
import { signUpTitle } from "../../assets/assets";
import FormOne from "../../components/FormOne/FormOne";
import FormTwo from "../../components/FormTwo/FormTwo";
import "./Profile7.css";
function Profile7() {

  // const [form,setForm] = useState("FormOne")

  return (
    <div className="pro7-container">
      <div className="pro7-main">
        <div className="step-indicator">
          <img src={signUpTitle} alt="" />
          <h1>Complete Your Trainer Account</h1>
          <p>Few More Step Ahead to Connect Promising Aspirants</p>
          <FormOne/>
          {/* {form === "FormOne" && <FormOne/>}
          {form === "FormTwo" && <FormTwo/>}
          <button onClick={()=>setForm("FormTwo")}>Click it</button> */}
        </div>
        
      </div>
    </div>
  );
}

export default Profile7;
