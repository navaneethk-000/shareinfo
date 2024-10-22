import { Button, Separator, Text } from "@radix-ui/themes";
import "./AddNewCource.css";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { ExpandBtn } from "../ExpandBtn/ExpandBtn";
import LinkIcon from "@mui/icons-material/Link";
import { courseIcon } from "../../../assets/assets";
import { UploadIcon } from "@radix-ui/react-icons";
export const AddNewCource = () => {
  return (
    <div className="flex flex-col gap-2 bordershadow mb-2">
      <div className="flex gap-6 items-center">
        <div className="flex gap-2">
          <AdsClickIcon className="text-green-500" />
          <Text className="font-bold">All Courses</Text>
        </div>
        <div className="bordershadow bg-[#23262B] flex gap-2 ">
          <KeyboardDoubleArrowRightIcon className="text-[#414ECA]" />
          <Text className="font-bold">Create New Course</Text>
        </div>
      </div>
      <div className="mt-[20px] flex flex-col gap-2 font-bold">
        <label htmlFor="text" className="text-[16px]">
          Course Title:
        </label>
        <input
          placeholder="Course Title..."
          type="text"
          className="w-full bg-[#141518] rounded-[10px] bordershadow bg-[#141518]"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="text" className="text-[12px]">
          Course Domain:
        </label>
        <div className="flex gap-3">
          <ExpandBtn />
          <div className="coursecard-main" id="domainlisted">
            <img src={courseIcon} alt="" />
            <p>Data Science</p>
          </div>
          <div className="coursecard-main" id="domainlisted">
            <img src={courseIcon} alt="" />
            <p>ui/ux</p>
          </div>
          <div className="coursecard-main" id="domainlisted">
            <img src={courseIcon} alt="" />
            <p>Python Django</p>
          </div>
        </div>

        <input className="bordershadow mt-2" type="file" name="" />
      </div>
      <div className="mt-[20px] flex flex-col gap-2 font-bold">
        <label htmlFor="text" className="text-[12px]">
          Course Description:
        </label>
        <input
          placeholder="Course Title..."
          type="text"
          className="w-full bg-[#141518] rounded-[10px] bordershadow bg-[#141518]"
        />
      </div>

      <div className="flex gap-3 mb-3">
        <div className="mt-[20px] flex flex-col gap-2 font-bold">
          <label htmlFor="text" className="text-[12px]">
            Course Display Price:
          </label>
          <input
            placeholder="Enter the Price in INR."
            type="text"
            className="w-full bg-[#141518] rounded-[10px] bordershadow bg-[#141518]"
          />
        </div>
        <div className="mt-[20px] flex flex-col gap-2 font-bold">
          <label htmlFor="text" className="text-[12px]">
            Actual Selling Price:
          </label>
          <input
            placeholder="Enter the Price in INR."
            type="text"
            className="w-full bg-[#141518] rounded-[10px] bordershadow bg-[#141518]"
          />
        </div>
      </div>
      <div className="flex gap-[10px]">
        <div className="flex gap-3">
          <div className="bordershadow flex gap-2 w-fit">
            <LinkIcon className="text-[#414ECA]" />
            <Text className="text-[#8B8B8B]">Software Name</Text>
          </div>
          <div className="bordershadow flex gap-2 w-fit">
            <UploadIcon className="text-[#414ECA]" />
            <Text className="text-[#8B8B8B]">Software Name</Text>
          </div>
        </div>
        <Separator size={"4"} orientation={"vertical"}/>
        <div className="flex gap-3">
          <div className="bordershadow flex gap-2 w-fit">
            <LinkIcon className="text-[#414ECA]" />
            <Text className="text-[#8B8B8B]">Software Name</Text>
          </div>
          <div className="bordershadow flex gap-2 w-fit">
            <UploadIcon className="text-[#414ECA]" />
            <Text className="text-[#8B8B8B]">Software Name</Text>
          </div>
        </div>
      </div>
      <div className="rounded-[10px] mt-4 mb-2  ">
        <Button className="w-{159px] h-[36px] bg-[#414ECA]">Create & Next</Button>
      </div>
     
    </div>
  );
};
