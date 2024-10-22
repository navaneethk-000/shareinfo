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
                <div className="splash-title font-bold">
                    <h1>ShareInfo</h1>
                    <h2>TrainerHub</h2>
                </div>
                <div className="text-center w-[266px] text-[10px] font-semibold">
                    <h2 className="font-extrabold text-[18px] text-[#260446]">Guide, Earn, Grow</h2>
                    <p className="text-[10px] text-[#260446]">Be a <span>ShareInfo</span> Trainer, Interact with 10000+ Aspirants <br />If you are an Expert in Tech,<br />
                    Complete Your Trainer Verification Now!</p>
                </div>
            </div>
            <div className="splash-btn-container">
                <p>Let’s begin the Next Era of <span>Collaborative Learning!</span></p>
                {/* <button className="splash-btn" onClick={()=>navigate("/SignUp")}>Create Profile</button> */}
                <button className="w-[396px] h-fit rounded-[30px] flex-shrink bg-[#414ECA] text-white text-[18px]" onClick={()=>navigate("/SignUp")}>Create Profile</button>
            </div>
        </div>
    </div>
  )
}
