import { Text } from "@radix-ui/themes";
import { useState } from "react";

export const AuthenticationPopup = () => {
  const navigate = useState()
  return (
    <div className="w-[527px] h-[240px] rounded-[30px] bg-[#141518] p-[50px] ml-3">
      <div className="flex flex-col items-center text-center  ">
        <Text className="text-[#1B94F6]">Are You Sure!</Text>
        <p className="w-[271px] flex items-center">Are You Sure Want to Publish the Module Along with Added Lessons & Assessments</p>
        <div className="flex gap-10 mt-12">
            <button className="bordershadow w-[138px] h-[36px]">Close</button>
            <button onClick={()=>navigate('')} className="bordershadow w-[200px] h-[36px] bg-[#34A853]">Save & Publish Module</button>
        </div>
      </div>
    </div>
  );
};
