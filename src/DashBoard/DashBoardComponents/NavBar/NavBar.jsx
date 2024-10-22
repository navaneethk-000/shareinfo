import { Flex, Separator, Text } from "@radix-ui/themes"
import { action_key_gray, action_key_icon, highlight_mouse_cursor, keyboard_double_arrow_right, notunrd, starIcon } from "../../../assets/assets"
import { PlusIcon } from "@radix-ui/react-icons"
import './NavBar.css'
import { useNavigate } from "react-router-dom"

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div className="navbar-main">
    <div className="navbar-one">
      <Flex gap={"4"} className="ml-4 navbar-container">
        <div className="nav-item">
          <img src={highlight_mouse_cursor} alt="img" />
          <Text>ShareInfo for Trainers</Text>
        </div>
        <div className="nav-item">
          <img src={keyboard_double_arrow_right} alt="img" />
          <Text>ShareInfo for Trainers</Text>
        </div>
      </Flex>
    </div>
    <Separator size="4" />
    <div className="navbar-one">
      <Flex gap={"4"} className="ml-4 navbar-container">
        <div className="nav-item">
          <img src={action_key_icon} alt="img" />
          <Text>Home</Text>
        </div>
        <div className="nav-item">
          <img src={starIcon} alt="img" />
          <Text>Free Courses</Text>
        </div>
        <div className="nav-item">
          <img src={starIcon} alt="img" />
          <Text>Premium Courses</Text>
        </div>
      </Flex>
      <Flex gap={"5"}>
        {/* <Button onClick={()=>navigate('/Home/addnewcourse')} className="apply-btn" color="gray" variant="surface" highContrast >
          <PlusIcon color="green" /> Add New Course
        </Button> */}
        <button className="apply-btn flex gap-3" onClick={()=>navigate('/Home/addnewcourse')}>
          <PlusIcon className="text-green-600" /> Add New Course
        </button>
            <img src={action_key_gray} alt="" />
            <img src={notunrd} alt="" />       
      </Flex>
    </div>
    <Separator size="4" />
  </div>
  )
}
