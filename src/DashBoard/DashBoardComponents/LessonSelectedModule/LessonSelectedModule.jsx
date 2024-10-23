import AdsClickIcon from "@mui/icons-material/AdsClick";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Separator, Text } from "@radix-ui/themes";
import { courseIcon } from "../../../assets/assets";
import { useNavigate } from "react-router-dom";
import { Link1Icon } from "@radix-ui/react-icons";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';




export const LessonSelectedModule = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col gap-2 bordershadow">
        <div className="flex gap-2">
          <div className="flex gap-6 items-center">
            <AdsClickIcon className="text-green-500" />
            <Text className="font-bold">All Courses</Text>
          </div>
          <div className="bordershadow bg-[#23262B] flex gap-2 ">
            <KeyboardDoubleArrowRightIcon className="text-[#414ECA]" />
            <Text className="btn font-bold" onClick={() => navigate(-1)}>
              Create New Course
            </Text>
          </div>
          <div className="bordershadow bg-[#23262B] flex gap-2 ">
            <KeyboardDoubleArrowRightIcon className="text-[#414ECA]" />
            <Text className="font-bold" onClick={() => navigate(-1)}>
              Modules & Lessons
            </Text>
          </div>
        </div>
        <Separator className="mt-3 mb-3" size={"4"} />
        <div className="flex gap-3 items-center mt-4">
          <div className="coursecard-main" id="domainlisted">
            <img src={courseIcon} alt="" />
            <p>ui/ux</p>
          </div>
          ||
          <div className="bordershadow w-fit">
            Introduction to UI/UX for Beginners
          </div>
          ||
          <div className="bordershadow flex gap-3 w-fit">
            <Link1Icon className="text-[#077BD8]" />
            <Text>
              Introduction to UI/UX for Beginners with Basic Tools & Concepts
            </Text>
          </div>
        </div>
        
      </div>
      <Text className="font-bold mt-3">Module Integrated Lessons</Text>
      <div>
        <div>
            <DragIndicatorIcon className="text-[#414ECA]"/>
            <div className="bordershadow w-fit">
                01
            </div>
            <div className="flex flex-col">
                <p>Lesson Type</p>
                <div className="bordershadow flex gap-1 w-[180px]">
                    <VideoLibraryIcon className="text-[#077BD8]"/>
                    <p>Video</p>
                </div>
            </div>
            
        </div>
      </div>
      
    </>
  );
};