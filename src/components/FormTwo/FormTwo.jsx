import { useNavigate } from 'react-router-dom'
import { figma } from '../../assets/assets'
import './FormTwo.css'

function FormTwo() {

    const navigate = useNavigate()


  return (
    <div className="f2-main">
      <div className="expertise-domain">
        <div className="expertise-dropdown">
            <label htmlFor="">Expertise Domain’s</label>
            <select name="" id="f2-dropdown">
                <option className="dropdown-list" value="text" id="dropdown-placeholder">Find Your Expertise Domain here</option>
                <option className="dropdown-list" value="text">ui/ux design</option>
                <option className="dropdown-list" value="text">ui/ux design</option>
                <option className="dropdown-list" value="text">ui/ux design</option>
                <option className="dropdown-list" value="text">ui/ux design</option>
                <option className="dropdown-list" value="text">ui/ux design</option>
            </select>
        </div>
        <div className="domain-container">
            <div className="domain-item">Project Management</div>
            <div className="domain-item">Project Management</div>
            <div className="domain-item">Project Management</div>
            <div className="domain-item">Project Management</div>
            <div className="domain-item">Project Management</div>
            <div className="domain-item">Project Management</div>
        </div>

      </div>
      <div className="expertise-software-container">
        <div className="expertise-software">
            <label htmlFor="">Expertise software’s</label>
            <select name="" id="f2-dropdown">
                <option className="dropdown-list" value="text" id="dropdown-placeholder">Find Your Expertise Domain here</option>
                <option className="dropdown-list" value="text">ui/ux design</option>
                <option className="dropdown-list" value="text">ui/ux design</option>
                <option className="dropdown-list" value="text">ui/ux design</option>
                <option className="dropdown-list" value="text">ui/ux design</option>
                <option className="dropdown-list" value="text">ui/ux design</option>
            </select>
        </div>
        <div className="software-icons-container">
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
        {/* <button id="continue-btn" onClick={()=>navigate("/Profile9")}>Continue</button> */}
        {/* Temporarily navigated to profile9 */}
      </div>
    </div>
  )
}

export default FormTwo
