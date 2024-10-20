import { Flex, Separator, Theme } from "@radix-ui/themes";
import "./Home.css";
import { NavBar } from "../../DashBoardComponents/NavBar/NavBar";
import { SideBar } from "../../DashBoardComponents/SideBar/SideBar";
import { MyDomain } from "../../DashBoardComponents/MyDomain/MyDomain";
import { MyCourses } from "../../DashBoardComponents/MyCourses/MyCourses";

export const Home = () => {
  return (
    <Theme appearance="dark">
      <div>
        <Flex  height={"100dvh"}>
          <div style={{position: 'sticky', top:'0'}}>
          <SideBar />

          </div>
          <Separator size={"4"} orientation="vertical" />
          <Flex  width={"100%"} direction={"column"}>
            <div style={{position: 'sticky', top:'0'}}>
            <NavBar />

            </div>

            <div id="outlet" style={{height:'calc(100vh - 122px)', overflow:'scroll', padding:'20px'}}>
            <MyDomain/>
            <MyCourses/>

            </div>
            
          </Flex>
        </Flex>
      </div>
    </Theme>
  );
};

{
  /* <Flex direction={"row"}>
        <div style={{ position: "sticky", top: "0px", height: "100dvh" }}>
          <SideBar />
        </div>

        <Flex className="navbar-div" direction={"column"} gap={"2"}>
          <div style={{ position: "sticky", top: "0px" }}>
            <NavBar />
          </div>
        </Flex>
        <Separator orientation={"vertical"} />
      </Flex> */
}

{
  /* <Flex direction={"column"} height={'100vh'}>
<div style={{position: 'sticky', top: 0, height:65, zIndex:1000}}>
  <NavBar/>
</div>
<Flex>
  <Flex style={{
    position:'sticky',
    top:65,
    zIndex: 1000,
    height:'calc( 100vh - 65px)'
  }}>
    <SideBar/>
    <Separator size={"4"} orientation={'vertical'}/>
  </Flex>
</Flex>
</Flex> */
}
