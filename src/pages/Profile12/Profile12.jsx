import { signUpTitle } from "../../assets/assets";
import FormFive from "../../components/FormFive/FormFive";
import "./Profile12.css";

function Profile12() {
  return (
    <div className="pro12-container">
      <div className="pro12-main">
        <div className="step-indicator">
          <img src={signUpTitle} alt="" />
          <h1>Review Profile Verification</h1>
          <p>Aspirants Definitely Inspire with Your Career Abilities</p>
        </div>
        <FormFive />
      </div>
    </div>
  );
}

export default Profile12;
