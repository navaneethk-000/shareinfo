import { signUpTitle, submitGif } from '../../assets/assets'
import './SplashSubmit.css'

const SplashSubmit = () => {
  return (
    <div className="pro12-container-splash">
      <div className="pro12-main splashsubmit-main">  
        <div className="step-indicator">
          <img src={signUpTitle} alt="" />
          <h1>Review Profile Verification</h1>
          <p>Aspirants Definitely Inspire with Your Career Abilities</p>
        </div>
        <div className="submit-tick">
            <img src={submitGif} alt="Success"id='submitGif' />
            
        </div>
        <button className="exploreshareinfo">Explore ShareInfo</button>
      </div>
    </div>
  )
}

export default SplashSubmit
