import AdsClickIcon from "@mui/icons-material/AdsClick";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Button, Separator, Text } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import { courseIcon } from "../../../assets/assets";
import { Link1Icon } from "@radix-ui/react-icons";

export const AddLessonsSelectModule = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col gap-2 bordershadow mb-2">
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
            <Text className="font-bold"onClick={() => navigate(-1)}>Modules & Lessons</Text>
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
        </div>
        <Text className="font-bold mt-3">
          Modules{" "}
          <span className="text-[#52514E]">
            (Select a Module to Add Lessons)
          </span>
        </Text>
        <div className="flex flex-col gap-3">
          <div className="lessonlist flex gap-3 w-fit">
            <Link1Icon className="text-[#077BD8]" />
            <Text>
              Introduction to UI/UX for Beginners with Basic Tools & Concepts
            </Text>
          </div>
          <div className="lessonlist flex gap-3 w-fit">
            <Link1Icon className="text-[#077BD8]" />
            <Text>Introduction to UI/UX fo Concepts</Text>
          </div>
          <div className="lessonlist flex gap-3 w-fit">
            <Link1Icon className="text-[#077BD8]" />
            <Text>Introduction to UI/UXrs with Basic Tools & Concepts</Text>
          </div>
          <div className="lessonlist flex gap-3 w-fit">
            <Link1Icon className="text-[#077BD8]" />
            <Text>Introduction to s</Text>
          </div>
          <div className="lessonlist flex gap-3 w-fit">
            <Link1Icon className="text-[#077BD8]" />
            <Text>Introduction to UI/UX for Begs & Concepts</Text>
          </div>
        </div>
      </div>
      <div className="rounded-[10px] mt-4 mb-2  ">
        <Button
          onClick={() => navigate("/Home/LessonSelectedModule")}
          className="w-{159px] h-[36px] bg-[#414ECA]"
        >
          Create & Next
        </Button>
      </div>
    </div>
  );
};
