import { Flex } from "@radix-ui/themes/dist/cjs/index.js";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import FilterListIcon from "@mui/icons-material/FilterList";
import { courseIcon } from "../../../assets/assets";
import AdsClickIcon from '@mui/icons-material/AdsClick';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './MyCourses.css'

export const MyCourses = () => {
  return (
    <div className="my-domain-container">
      <div className="my-container">
        <div className="my">
          <div className="my-items">
            <StarBorderIcon color="inherit" />
            <p>My Courses</p>
          </div>
          <div className="see-all">
            <ClearAllIcon />
            <p>See All Courses</p>
          </div>
        </div>
        <div className="my-filter-container">
          <div className="filter">
            <p>Filter</p>
            <FilterListIcon color="error" />
          </div>
          <div className="filter">
            <p>Sort</p>
            <SwapVertIcon color="error" />
          </div>
        </div>
      </div>

      {domainCardData.map((item) => (
        <div className="my-cards-container" key={item.id}>
          <div className="my-cards">
            <div className="card-container">
              <div className="coursecard-main">
                <img src={courseIcon} alt=""/>
                <p>{item.title}</p>
              </div>
            </div>
            <div className="card-container" id="course-description">
              <div className="coursecard-main">
                <AdsClickIcon color="success"/>
                <p>{item.course_description}</p>
              </div>
            </div>
            <div className="card-container price-container">
              <div className="coursecard-main">
                <CurrencyRupeeIcon color="warning"/>
                <p>{item.course_fee}</p>
              </div>
            </div>
            <div className="card-container price-container" >
              <div className="coursecard-main">
                <img src={courseIcon} alt="" />
                <p>{item.module_count} Modules</p>
              </div>
            </div>
            <div className="card-container">
              <div className="coursecard-main">
                <Diversity2Icon color="primary" />
                <p>{item.aspirants_number}</p>
              </div>
            </div>
          </div>
          
          <Flex direction={"column"} gap={"3"} align={"end"}>
            <div className="last-updated">
              <p>{item.updated}</p>
              <AppRegistrationIcon color="primary"/>
            </div>
          </Flex>
        </div>
      ))}
    </div>
  );
};

const domainCardData = [
  {
    title: "UI/UX", 
    course_description: "Roadmap to be a UIUX Designer a UIUX Designer",
    course_fee: "25999/-",
    module_count: "14",
    aspirants_number: "10880 Aspirants",
    updated: "Last Updated on March 5, 2023",
  },
  {
    title: "DevOps",
    course_description: "Roadmap to be a UIUX Designer",
    course_fee: "25999/-",
    module_count: "14",
    aspirants_number: "10000 Aspirants",
    updated: "Last Updated on October 5, 2023",
  },
  {
    title: "Project Management",
    course_description: "Roadmap to be a UIUX Designer",
    course_fee: "25999/-",
    module_count: "14",
    aspirants_number: "108840 Aspirants",
    updated: "Last Updated on April 25, 2023",
  },
  {
    title: "User Research",
    course_description: "Roadmap to be a UIUX Designer",
    course_fee: "25999/-",
    module_count: "14",
    aspirants_number: "108 Aspirants",
    updated: "Last Updated on December 15, 2023",
  },
  {
    title: "UI/UX",
    course_description: "Roadmap to be a UIUX Designer",
    course_fee: "25999/-",
    module_count: "14",
    aspirants_number: "10880152 Aspirants",
    updated: "Last Updated on March 19, 2023",
  },
];
