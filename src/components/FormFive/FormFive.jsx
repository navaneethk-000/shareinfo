import { useNavigate } from "react-router-dom";
import { careerImg, figma, profilePic } from "../../assets/assets";
import "./FormFive.css";
function FormFive() {

    const navigate = useNavigate()

  return (
    <div className="f12-main">
      <div className="profile-infos">
        <img src={profilePic} alt="" className="profile-pic" />
        <div className="profile-name-container">
          <div className="name-display">
            <label htmlFor="">First Name</label>
            <div className="profile-name">Akshay</div>
          </div>
          <div className="name-display">
            <label htmlFor="">Middle Name</label>
            <div className="profile-name">Ashokan</div>
          </div>
          <div className="name-display">
            <label htmlFor="">Last Name</label>
            <div className="profile-name">Pothan</div>
          </div>
        </div>

        <div className="profile-expertise">
            <label htmlFor="">Your Expertise Sectors</label>
            <div className="expertise-sectors">
                <div className="expertise-sector">
                    Project Management
                </div>
                <div className="expertise-sector">
                    Project Management
                </div>
                <div className="expertise-sector">
                    Project Management
                </div>
                <div className="expertise-sector">
                    Project Management
                </div>
                <div className="expertise-sector">
                    Project Management
                </div>
                <div className="expertise-sector">
                    Project Management
                </div>
            </div>
        </div>

        <div className="profile-software">
            <label htmlFor="">Your Expertise Software's</label>
            <div className="profile-software-items">
            <div className="software-icons">
                <img src={figma} alt="" id="software-icon"/>
                <p>Figma</p>
            </div>
            <div className="software-icons">
                <img src={figma} alt="" id="software-icon"/>
                <p>Figma</p>
            </div>
            <div className="software-icons">
                <img src={figma} alt="" id="software-icon"/>
                <p>Figma</p>
            </div>
            <div className="software-icons">
                <img src={figma} alt="" id="software-icon"/>
                <p>Figma</p>
            </div>
            <div className="software-icons">
                <img src={figma} alt="" id="software-icon"/>
                <p>Figma</p>
            </div>
            <div className="software-icons">
                <img src={figma} alt="" id="software-icon"/>
                <p>Figma</p>
            </div>
            <div className="software-icons">
                <img src={figma} alt="" id="software-icon"/>
                <p>Figma</p>
            </div>
            <div className="software-icons">
                <img src={figma} alt="" id="software-icon"/>
                <p>Figma</p>
            </div>
            </div>

            <div className="career-journey">
                <label htmlFor="">Your Career Journey Map</label>
            <div className="profile-career-journey">

            <div className="career-card">
              <div className="career-imgage">
                <img src={careerImg} alt="" id="career-img" />
              </div>
              <div className="career-info">
                <h1>UI/UX Designer Head</h1>
                <p id="career-company-name">Imiot Inc.</p>
                <p>August 2023 - Present (01 Months)</p>
              </div>
            </div>

            <div className="career-card">
              <div className="career-imgage">
                <img src={careerImg} alt="" id="career-img" />
              </div>
              <div className="career-info">
                <h1>UI/UX Designer Head</h1>
                <p id="career-company-name">Imiot Inc.</p>
                <p>August 2023 - Present (01 Months)</p>
              </div>
            </div>

            <div className="career-card">
              <div className="career-imgage">
                <img src={careerImg} alt="" id="career-img" />
              </div>
              <div className="career-info">
                <h1>UI/UX Designer Head</h1>
                <p id="career-company-name">Imiot Inc.</p>
                <p>August 2023 - Present (01 Months)</p>
              </div>
            </div>

            </div>
            <div className="qualification-proof">
                <label htmlFor="">Proof of Qualification</label>
                <div className="proof">
                    UIUX Certification.pdf
                    <div className="green-tick">
                        ✓
                    </div>
                </div>
            </div>
            <div className="confirmFinal-btn-container">
                <button id="changes-btn">Need Changes</button>
                <button onClick={()=>navigate("/SplashSubmit")}>Confirm & Submit</button>
            </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default FormFive;
