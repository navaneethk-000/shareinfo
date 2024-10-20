import { useNavigate } from "react-router-dom"
import { splash_gif } from "../../assets/assets"
import './Splash.css'


export const Splash = () => {
    const navigate = useNavigate()
  return (
    <div className="splash-main">
        <div className="splash-container">
            <img src={splash_gif} alt="" />
            <div className="splash-text">
                <div className="splash-title">
                    <h1>ShareInfo</h1>
                    <h2>TrainerHub</h2>
                </div>
                <div className="splash-description">
                    <h2>Guide, Earn, Grow</h2>
                    <p>Be a <span>ShareInfo</span> Trainer, Interact with 10000+ Aspirants <br />If you are an Expert in Tech,<br />
                    Complete Your Trainer Verification Now!</p>
                </div>
            </div>
            <div className="splash-btn-container">
                <p>Let’s begin the Next Era of <span>Collaborative Learning!</span></p>
                <button className="splash-btn" onClick={()=>navigate("/SignUp")}>Create Profile</button>
            </div>
        </div>
    </div>
  )
}
