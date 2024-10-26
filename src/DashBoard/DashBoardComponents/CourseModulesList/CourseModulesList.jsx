import { Button, Separator, Text } from "@radix-ui/themes";
import "./CourseModulesList.css";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { courseIcon } from "../../../assets/assets";
import { Modulelist } from "../../DashboardCards/Modulelist/Modulelist";
import { PlusIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

export const CourseModulesList = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className="flex flex-col gap-2 bordershadow mb-2">
        <div className="flex gap-2">
          <div className="flex gap-6 items-center">
            <AdsClickIcon className="text-green-500" />
            <Text className="font-bold">All Courses</Text>
          </div>
          <div className="bordershadow bg-[#23262B] flex gap-2 ">
            <KeyboardDoubleArrowRightIcon className="text-[#414ECA]" />
            <Text className="btn font-bold"onClick={()=>navigate(-1)}>Create New Course</Text>
          </div>
          <div className="bordershadow bg-[#23262B] flex gap-2 ">
            <KeyboardDoubleArrowRightIcon className="text-[#414ECA]" />
            <Text className="btn font-bold"onClick={()=>navigate(-1)}>Modules & Lessons</Text>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <div className="coursecard-main" id="domainlisted">
            <img src={courseIcon} alt="" />
            <p>ui/ux</p>
          </div>
          <div className="bordershadow w-fit">
            Introduction to UI/UX for Beginners
          </div>
        </div>
        <Separator className="mt-3 mb-3" size={"4"} />
        <div className="flex flex-col gap-3">
          <Text className="font-bold">Modules</Text>
          <Modulelist />
          <Separator className="mt-3 mb-3" size={"4"} />
          <Modulelist />
          <Separator className="mt-3 mb-3" size={"4"} />

          <button id="addnewbtn">
            <div className="flex gap-2 ">
              <PlusIcon className="text-[#077BD8]" />
              Add New Module
            </div>
          </button>
        </div>
      </div>
      <div className="rounded-[10px] mt-4 mb-2  ">
        <Button onClick={()=>navigate("/Home/AddLessonsSelectModule")} className="w-{159px] h-[36px] bg-[#414ECA]">
          Create & Next
        </Button>
      </div>
      
    </>
  );
};