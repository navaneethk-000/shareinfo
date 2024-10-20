import './Otp.css'
import { useEffect, useRef, useState } from 'react'
import './Otp.css'
import { useNavigate } from 'react-router-dom'

export const Otp = ({length = 4,onOtpSubmit = ()=>{}}) => {

  // Navigate to profile page aster otp validation
    const navigate = useNavigate()
    const[storeOtp, setStoreOtp] = useState(new Array(length).fill(""))
    const inputRefs = useRef([])

    useEffect(()=>{
      if(inputRefs.current[0]){
        inputRefs.current[0].focus()
      }
    },[])

    console.log(inputRefs)
    // const length = 4;
    // const [otp,setOtp] = useState(new Array(length).fill(""))
    const handleChange =(index,e)=>{
      const value = e.target.value;

      //Move to next input if the current input is filled
      if(value && index < length - 1 && inputRefs.current[index + 1]){
        inputRefs.current[index + 1].focus()
      }
      if(isNaN(value)) return

      const newOtp = [...storeOtp]
      //To allow only one input
      newOtp[index] = value.substring(value.length - 1)
      setStoreOtp(newOtp)

      //submit trigger
      const combinedOtp = newOtp.join("");
      if(combinedOtp.length === length) onOtpSubmit(combinedOtp); 
    }
    
    

    const handleClick =()=>{}
    //backspace on otp
    const handleKeyDown =(index, e)=>{
      if(e.key==="Backspace" && !storeOtp[index] && index>0 && inputRefs.current[index-1]){
        inputRefs.current[index - 1].focus()
      }
    } 

  return (
    <div className='otp '>
      <div className="otp-container">
        <h4>Enter Your Secret Code</h4>
        <h5>We’ve shared a 4 Digit Secret code in your mail <a href="email">xxxxxxxxxpothan@imiot.co.in</a></h5>
        <div className="otp-input-container">
        {
            storeOtp.map((value,index)=>{
                return <input
                        key={index}
                        type='text'
                        ref={(input)=>{inputRefs.current[index] = input}}

                        value={value}
                        onChange={(e)=>handleChange(index,e)}
                        onClick={()=>handleClick(index)}
                        onKeyDown={(e)=>handleKeyDown(index,e)}
                        className='otp-input'
                        />
            })
        }
        </div>
        <p id='resent-otp'>Resend Code in <span>00:90</span> Seconds</p>
        <div id='validate'>
          {/* <button onClick={()=>navigate("/DemoPg")} className="validate-btn">Validate</button> */}
          <button onClick={()=>navigate("/Profile7")} className="validate-btn">Validate</button>
          <p>Facing issue while Validation <a href="#">Connect us?</a></p>
        </div>

      </div>
    </div> 
  )
}
