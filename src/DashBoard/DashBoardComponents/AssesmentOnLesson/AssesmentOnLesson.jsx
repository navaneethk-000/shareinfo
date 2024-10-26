import { Link1Icon } from "@radix-ui/react-icons";
import { Separator, Text } from "@radix-ui/themes";
import { courseIcon, deployed } from "../../../assets/assets";
import { useNavigate } from "react-router-dom";
import DescriptionIcon from "@mui/icons-material/Description";
import AnalyticsIcon from "@mui/icons-material/Analytics";

import AdsClickIcon from "@mui/icons-material/AdsClick";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export const AssesmentOnLesson = () => {
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
        <Text className="font-bold mt-3">Assessment Name</Text>
        <div className="bordershadow flex gap-3">
          <AnalyticsIcon className="text-[#F31919]" />
          <Text>Assessment Bundled Roadmap to be a UIUX Designer L1</Text>
        </div>
        <div className="flex gap-5">
          <div className="w-[317px] flex flex-col gap-3">
            <div className="bordershadow flex gap-3 w-full">
              <AnalyticsIcon className="text-[#F31919]" />
              <Text>Assessment Question 3</Text>
            </div>
            <div className="bordershadow flex gap-3 w-full">
              <AnalyticsIcon className="text-[#F31919]" />
              <Text>Assessment Question 3</Text>
            </div>
            <div className="bordershadow flex gap-3 w-full">
              <AnalyticsIcon className="text-[#F31919]" />
              <Text>Assessment Question 3</Text>
            </div>
            <div className="bordershadow flex gap-3 w-full">
              <AnalyticsIcon className="text-[#F31919]" />
              <Text>Assessment Question 3</Text>
            </div>
            <div className="bordershadow flex gap-3 w-full">
              <AnalyticsIcon className="text-[#F31919]" />
              <Text>Assessment Question 3</Text>
            </div>
            <div className="bordershadow flex gap-3 w-full">
              <AnalyticsIcon className="text-[#F31919]" />
              <Text>Assessment Question 3</Text>
            </div>
            <div className="bordershadow flex gap-3 w-full">
              <AnalyticsIcon className="text-[#F31919]" />
              <Text>Assessment Question 3</Text>
            </div>
            <div className="bordershadow flex gap-3 w-full">
              <AnalyticsIcon className="text-[#F31919]" />
              <Text>Assessment Question 3</Text>
            </div>
            <div className="bordershadow flex gap-3 w-full">
              <AnalyticsIcon className="text-[#F31919]" />
              <Text>Assessment Question 8</Text>
            </div>
            <div>
                <button id="assesment-btn" onClick={()=>navigate('/Home/LessonsWithAssessment')}>Save & Add Assessment</button>
            </div>
          </div>
          <div className="w-full">
            <div className="bordershadow flex gap-3 w-[317px]">
              <AnalyticsIcon className="text-[#F31919]" />
              <Text>Assessment Question 10</Text>
            </div>
            <div className="flex flex-col gap-1">
              <Text className="font-bold mt-3">Assessment Name</Text>
              <div className="bordershadow flex gap-3 w-full h-[60px] items-center">
                <DescriptionIcon className="text-[#34A853]" />
                <Text>Assessment Bundled Roadmap to be a UIUX Designer L1</Text>
              </div>
              <Text>MCQ Chocices</Text>
              <div className="flex flex-col gap-2">
                <Text>Choices</Text>
                <div className="flex gap-2">
                    <div className="flex gap-1 bordershadow w-fit">
                        <AdsClickIcon className="text-[#E6C100]"/>
                        <Text>User Research</Text>
                    </div>
                    
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Text>Correct Choice</Text>
                <div className="flex gap-2">
                    <div className="flex gap-1 bordershadow w-[207px]">
                        <img src={deployed} alt="" />
                        <Text>Choose from list</Text>
                    </div>    
                </div>
                <Text className="font-bold mt-3">Hint</Text>
              <div className="bordershadow flex gap-3 w-full h-[60px] items-center">
                <DescriptionIcon className="text-[#414ECA]" />
                <Text>Focus on the core skills required to design the interface and user experience, not necessarily the content that goes within it.</Text>
              </div>
              <div className="flex gap-4 w-[450px] mt-6">
                <button className="cancel-btn w-full">Cancel</button>
                <button className="assesment-btn w-full font-bold">Add to Assessment Pool</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
