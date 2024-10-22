import { Flex, Separator, Theme } from "@radix-ui/themes";
import "./Home.css";
import { NavBar } from "../../DashBoardComponents/NavBar/NavBar";
import { SideBar } from "../../DashBoardComponents/SideBar/SideBar";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <Theme appearance="dark">
      <div>
        <Flex height={"100dvh"}>
          <div style={{ position: "sticky", top: "0" }}>
            <SideBar />
          </div>
          <Separator size={"4"} orientation="vertical" />
          <Flex width={"100%"} direction={"column"}>
            <div style={{ position: "sticky", top: "0" }}>
              <NavBar />
            </div>

            <div
              id="outlet"
              style={{
                height: "calc(100vh - 122px)",
                overflow: "scroll",
                padding: "20px",
              }}
            >
                <Outlet />
            </div>
          </Flex>
        </Flex>
      </div>
    </Theme>
  );
};
