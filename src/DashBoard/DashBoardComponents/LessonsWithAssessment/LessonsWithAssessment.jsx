import AdsClickIcon from "@mui/icons-material/AdsClick";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import {
  
  Dialog,
  
  Separator,
  Text,
  TextField,
} from "@radix-ui/themes";
import { courseIcon } from "../../../assets/assets";
import { useNavigate } from "react-router-dom";
import { Link1Icon } from "@radix-ui/react-icons";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { CustomFileUpload } from "../../DashboardCards/CustomFileUpload/CustomFileUpload";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useState } from "react";
import { AuthenticationPopup } from "../../DashboardCards/AuthenticationPopup/AuthenticationPopup";

export const LessonsWithAssessment = () => {
  
  const [model, setModel] = useState(false);
  const toggleModal = () => {
    setModel(!model);
  };
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col gap-5 mb-8">
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
              <Text className="btn font-bold" onClick={() => navigate(-1)}>
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
        <div className="flex flex-col mb-4">
          <div className="flex items-end gap-[20px]">
            <DragIndicatorIcon className="text-[#414ECA]" />
            <div className="bordershadow w-fit">01</div>
            <div className="flex flex-col">
              <p className="mb-2">Lesson Type</p>
              <div className="bordershadow flex gap-2 w-[180px]">
                <VideoLibraryIcon className="text-[#077BD8]" />
                <p>Video</p>
              </div>
            </div>

            <TextField.Root
              className="bordershadow w-[602px] h-[20px]"
              size={"3"}
              color=""
              placeholder="Deep Live into UI Research"
            >
              <TextField.Slot>
                <AdsClickIcon className="text-[#3A0070]" />
              </TextField.Slot>
            </TextField.Root>
            <TextField.Root
              className="bordershadow w-[128px]"
              type="number"
              size={"3"}
              color=""
              placeholder="00:15:00"
            >
              <TextField.Slot>
                <AccessTimeIcon className="text-[#E6C100]" />
              </TextField.Slot>
            </TextField.Root>

            <CustomFileUpload />
          </div>
          <div className="flex items-end gap-[20px]">
            <DragIndicatorIcon className="text-[#414ECA]" />
            <div className="bordershadow w-fit">01</div>
            <div className="flex flex-col">
              <p className="mb-2">Lesson Type</p>
              <div className="bordershadow flex gap-2 w-[180px]">
                <VideoLibraryIcon className="text-[#077BD8]" />
                <p>Video</p>
              </div>
            </div>

            <TextField.Root
              className="bordershadow w-[602px] h-[20px]"
              size={"3"}
              color=""
              placeholder="Deep Live into UI Research"
            >
              <TextField.Slot>
                <AdsClickIcon className="text-[#3A0070]" />
              </TextField.Slot>
            </TextField.Root>
            <TextField.Root
              className="bordershadow w-[128px]"
              size={"3"}
              color=""
              placeholder="00:15:00"
            >
              <TextField.Slot>
                <AccessTimeIcon className="text-[#E6C100]" />
              </TextField.Slot>
            </TextField.Root>

            <CustomFileUpload />
          </div>
          <div className="flex items-end gap-[20px]">
            <DragIndicatorIcon className="text-[#414ECA]" />
            <div className="bordershadow w-fit">01</div>
            <div className="flex flex-col">
              <p className="mb-2">Lesson Type</p>
              <div className="bordershadow flex gap-2 w-[180px]">
                <VideoLibraryIcon className="text-[#077BD8]" />
                <p>Video</p>
              </div>
            </div>

            <TextField.Root
              className="bordershadow w-[602px] h-[20px]"
              size={"3"}
              color=""
              placeholder="Deep Live into UI Research"
            >
              <TextField.Slot>
                <AdsClickIcon className="text-[#3A0070]" />
              </TextField.Slot>
            </TextField.Root>
            <TextField.Root
              className="bordershadow w-[128px]"
              type="number"
              size={"3"}
              color=""
              placeholder="00:15:00"
            >
              <TextField.Slot>
                <AccessTimeIcon className="text-[#E6C100]" />
              </TextField.Slot>
            </TextField.Root>

            <CustomFileUpload />
          </div>
          <div className="flex items-end gap-[20px]">
            <DragIndicatorIcon className="text-[#414ECA]" />
            <div className="bordershadow w-fit">01</div>
            <div className="flex flex-col">
              <p className="mb-2">Lesson Type</p>
              <div className="bordershadow flex gap-2 w-[180px]">
                <VideoLibraryIcon className="text-[#077BD8]" />
                <p>Video</p>
              </div>
            </div>

            <TextField.Root
              className="bordershadow w-[602px] h-[20px]"
              size={"3"}
              color=""
              placeholder="Deep Live into UI Research"
            >
              <TextField.Slot>
                <AdsClickIcon className="text-[#3A0070]" />
              </TextField.Slot>
            </TextField.Root>
            <TextField.Root
              className="bordershadow w-[128px]"
              size={"3"}
              color=""
              placeholder="00:15:00"
            >
              <TextField.Slot>
                <AccessTimeIcon className="text-[#E6C100]" />
              </TextField.Slot>
            </TextField.Root>

            <CustomFileUpload />
          </div>
        </div>

        <button className="w-fit p-2">+ Add More</button>
      </div>
      <div className="flex gap-5 w-[450px]">
        <button className="assesment-button bg-[#23262B]">Save as Draft</button>

        <div>
          <Dialog.Root>
            <Dialog.Trigger>
              <button
                //   onClick={() => navigate("/Home/AssesmentOnLesson")}
                className="assesment-button bg-[#414ECA]"
                id="btnwidth"
                onClick={toggleModal}
              >
                Save & Add Assessment
              </button>
            </Dialog.Trigger>
            <Dialog.Content>
              <AuthenticationPopup />
            </Dialog.Content>
          </Dialog.Root>
        </div>
      </div>
    </div>
  );
};
