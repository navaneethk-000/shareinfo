import { useNavigate } from "react-router-dom";
import { careerImg } from "../../assets/assets";
import "./FormThree.css";


export const FormThree = () => {
  const navigate = useNavigate()
  return (
    <div className="f3-main">
      <div className="f3-name-field">
        <div className="f3-name">
          <div className="f3-name-input">
            <label htmlFor="">Role Name</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Role Name here"
            />
          </div>
          <div className="f3-name-input">
            <label htmlFor="">Company Name</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Role Name here"
            />
          </div>
          <div className="f3-name-input">
            <label htmlFor="">Sector/Domain</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Role Name here"
            />
          </div>
        </div>
        <div className="f3-input-field-container">
          <div className="workDuration-container">
            <label htmlFor="">From</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Select Your Start Date"
            />
          </div>
          <div className="workDuration-container">
            <label htmlFor="">From</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Select Your Start Date"
            />
          </div>
          <div className="checkbox-container">
            <input type="checkbox" name="" id="checkbox" />
            <label htmlFor="">Currently Working</label>
          </div>

          <div className="addMore-btn">
            <button>Add More</button>
          </div>
        </div>
        <div className="career-journey">
          <label htmlFor="">Your Career Journey Map</label>
          <div className="career-card-container">

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
          {/* <button onClick={()=>navigate("/FormFour")}>Confirm & Continue</button> */}
        </div>
      </div>
    </div>
  )
}
