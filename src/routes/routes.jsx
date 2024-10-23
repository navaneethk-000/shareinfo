import { createBrowserRouter } from "react-router-dom";
import { Splash } from "../pages/Splash/Splash";
import { SignUp } from "../pages/SignUp/SignUp";
import { Profile7 } from "../pages/Profile7/Profile7";
import { Profile9 } from "../pages/Profile9/Profile9";
import { Profile12 } from "../pages/Profile12/Profile12";
import { SplashSubmit } from "../pages/SplashSubmit/SplashSubmit";
import { Home } from "../DashBoard/DashBoardPages/Home/Home";
import { MyDomain } from "../DashBoard/DashBoardComponents/MyDomain/MyDomain";
import { MyCourses } from "../DashBoard/DashBoardComponents/MyCourses/MyCourses";
import { AddNewCource } from "../DashBoard/DashBoardComponents/AddNewCource/AddNewCource";
import { CourseModulesList } from "../DashBoard/DashBoardComponents/CourseModulesList/CourseModulesList";
import { AddLessonsSelectModule } from "../DashBoard/DashBoardComponents/AddLessonsSelectModule/AddLessonsSelectModule";
import { LessonSelectedModule } from "../DashBoard/DashBoardComponents/LessonSelectedModule/LessonSelectedModule";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/profile7",
    element: <Profile7 />,
  },
  {
    path: "/Profile9",
    element: <Profile9 />,
  },
  {
    path: "/Profile12",
    element: <Profile12 />,
  },
  {
    path: "/SplashSubmit",
    element: <SplashSubmit />,
  },
  {
    path: "*",
    element: "No Page",
  },
  //Dashboard starts
  {
    path: "/Home",
    element: <Home />,
    children: [
      {
        path:"mycontainer",
        element: (
          <div id="my-container">
            <MyDomain />
            <MyCourses />
          </div>
        ),
      },
      {
        path:"addnewcourse",
        element:<AddNewCource/>
      },
      {
        path:"coursemoduleslist",
        element:<CourseModulesList/>,
      },
      {
        path:"AddLessonsSelectModule",
        element:<AddLessonsSelectModule/>,
      },
      {
        path:"LessonSelectedModule",
        element:<LessonSelectedModule/>,
      },
    ],
  },
]);
