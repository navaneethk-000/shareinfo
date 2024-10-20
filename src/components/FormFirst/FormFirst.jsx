import { useNavigate } from "react-router-dom";
import './FormFirst.css'
export const FormFirst = () => {
    const navigate = useNavigate()
  return (
    <div className="name-container">
      <div className="name-field">
        <div className="name">
          <label htmlFor="">Middle Name</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Your Middle Name here!"
          />
        </div>
        <div className="name">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Your First Name here!"
          />
        </div>
        <div className="name">
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Your Last Name here!"
          />
        </div>
      </div>
      <div className="bio-container">
        <label htmlFor="">Bio Summary</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Eg: With a proven track record in tech mentoring, I excel in guiding individuals to reach their full potential in the tech industry. My expertise lies in  providing tailored guidance and support to help mentees develop their skills and achieve their career goals. I am passionate about sharing my knowledge and experience to empower others in the ever-evolving tech landscape."
        />
      </div>

      <div className="profile-img-upload">
        <div>
          <label id="profile-img-label" htmlFor="">Profile Image</label>
          <div className="img-upload-container">
            <input
              className="image-uploader"
              type="file"
              name="image"
              placeholder="Click here to upload your Profile Image"
            />
          </div>
        </div>
        {/* <div className="next-btn">
          <button onClick={()=>navigate("/Profile12")}>Next</button>
        </div> */}
      </div>
    </div>
  )
}
