import { useNavigate } from "react-router-dom";
import { signUpTitle } from "../../assets/assets";
import "./SignUp.css";
import { useState } from "react";
import Otp from "../../components/OTP/Otp";
function SignUp() {

  // const navigate = useNavigate();
  const [showOtpInput,setShowOtpInput] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const handlePhoneNumber = (event)=>{
    setPhoneNumber(event.target.value )
  }
  const handlePhoneSubmit = (event)=>{
    event.preventDefault()

    //Phone validation
    const regex = /[^0-9]/g;
    if(phoneNumber.length < 10 || regex.test(phoneNumber)){
      alert("Invalid Phone Number")
      return;
    }
    
    //Call by API
    //show otp field
    setShowOtpInput(true)


  }

  const onOtpSubmit = (otp)=>{
    console.log("Sign in Successful",otp)
  }

  return (
    <div className="login-main">
      <div className="login-title">
        <img src={signUpTitle} alt="" />
      </div>
      <div className="login-container">
        <h1>Create Your Trainer Account</h1>
        <p>One-Step Ahead to Connect Promising Aspirants</p>


        {!showOtpInput?
          <form onSubmit={handlePhoneSubmit} action="" className="login-inputs">
          <div>
            <label htmlFor="">E-Mail ID</label>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Your E-Mail here!"
            />
          </div>
          <div>
            <label htmlFor="">Mobile Number</label>
            <input
              type="text"
              name=""
              value={phoneNumber}
              onChange={handlePhoneNumber}
              id=""
              placeholder="Enter Your Mobile Number here!"
            />
          </div>
          <div className="login-now">
            <p>
              Already Have an Account? <a href="#">Login Now!</a>
            </p>
          </div>
          <div className="continue-btn">
            <button type="submit">Continue</button>
          </div>
        </form>:<Otp length={4} onOtpSubmit={onOtpSubmit}/>
        }
  
        <div className="login-inputs"></div>
        <div className="terms-container">
          <p>
            By Clicking Continue You are agreeing all our Terms & Conditions and
            user Guidelines By Clicking Continue You are agreeing all our
          </p>
          <h2>
            Facing issue while Sign up <a href="#">Connect us?</a>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
