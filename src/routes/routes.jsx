import { createBrowserRouter } from "react-router-dom";
import Splash from "../pages/Splash/Splash";
import SignUp from "../pages/SignUp/SignUp";
import Profile7 from "../pages/Profile7/Profile7";
import Profile9 from "../pages/Profile9/Profile9";
import Profile12 from "../pages/Profile12/Profile12";
import SplashSubmit from "../pages/SplashSubmit/SplashSubmit";
import Home from "../DashBoard/DashBoardPages/Home/Home";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Splash/>
    },
    {
        path:'/SignUp',
        element:<SignUp/>
    },
    {
        path:'/profile7',
        element:<Profile7/>
    },
    {
        path:'/Profile9',
        element:<Profile9/>
    },
    {
        path:'/Profile12',
        element:<Profile12/>
    },
    {
        path:'/SplashSubmit',
        element:<SplashSubmit/>
    },
    {
        path:'*',
        element: "No Page"
    },
    {
        path:'/Home',
        element: <Home/>
    },
])