import { useNavigate } from 'react-router-dom'
import { signUpTitle, submitGif } from '../../assets/assets'
import './SplashSubmit.css'


export const SplashSubmit = () => {
  const navigate = useNavigate()
  return (
    <div className="pro12-container-splash">
      <div className="pro12-main splashsubmit-main">  
        <div className="step-indicator">
          <img src={signUpTitle} alt="" />
          <h1>Successfully Submitted for Verification</h1>
          <p>Our Support team will Connect You via Mail and Call for the Verification Shortly!</p>
        </div>
        <div className="submit-tick">
            <img src={submitGif} alt="Success"id='submitGif' />
        </div>
        <button onClick={()=>{navigate("/Home")}}  className="exploreshareinfo">Explore ShareInfo</button>
      </div>
    </div>
  )
}