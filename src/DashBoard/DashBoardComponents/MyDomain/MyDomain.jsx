import { Flex } from "@radix-ui/themes/dist/cjs/index.js";
import "./MyDomain.css";  
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import FilterListIcon from "@mui/icons-material/FilterList";
import { courseIcon } from "../../../assets/assets";

export const MyDomain = () => {
  return (
    <div className="my-domain-container">
      <div className="my-container">
        <div className="my">
          <div className="my-items">
            <StarBorderIcon color="inherit" />
            <p>My Domains</p>
          </div>
          <div className="see-all">
            <ClearAllIcon />
            <p>See All</p>
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
                <img src={courseIcon} alt="" />
                <p>{item.title}</p>
              </div>
            </div>
            <div className="card-container" id="course-number">
              <div className="coursecard-main">
                <img src={courseIcon} alt="" />
                <p>{item.course_number}</p> 
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
              <AppRegistrationIcon color="primary" />
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
    course_number: "01 Courses",
    aspirants_number: "10880 Aspirants",
    updated: "Last Updated on March 5, 2023",
  },
  {
    title: "DevOps",
    course_number: "05 Courses",
    aspirants_number: "10000 Aspirants",
    updated: "Last Updated on October 5, 2023",
  },
  {
    title: "Project Management",
    course_number: "151 Courses",
    aspirants_number: "108840 Aspirants",
    updated: "Last Updated on April 25, 2023",
  },
  {
    title: "User Research",
    course_number: "11 Courses",
    aspirants_number: "108 Aspirants",
    updated: "Last Updated on December 15, 2023",
  },
  {
    title: "UI/UX",
    course_number: "01 Courses",
    aspirants_number: "10880152 Aspirants",
    updated: "Last Updated on March 19, 2023",
  },
];
