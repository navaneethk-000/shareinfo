import { Button } from "@radix-ui/themes";
import { action_key_icon } from "../../../assets/assets";
import { useState } from "react";

export const ExpandBtn = () => {
  //State for button
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
    // Add your button's main functionality here
  };
  return (
    <div>
      <Button
        variant="surface"
        id="paddingbtn"
        className={`bordershadow flex items-center transition-all duration-300 ease-in-out ${
          expanded ? "w-full" : "w-fit"
        }`}
        onClick={handleClick}
      >
        <img src={action_key_icon} alt="img" />
        <span
          className={`text-[#a3a29b] font-bold ml-2 overflow-hidden transition-all duration-700 ease-in-out ${
            expanded ? "w-auto opacity-100" : "w-0 opacity-0"
          }`}
        >
          Search for a Domain
        </span>
      </Button>
      {/* <input
        type="search"
        id="paddingbtn"
        className={`bordershadow flex items-center transition-all duration-300 ease-in-out ${
          expanded ? "w-full" : "w-fit"
        }`}
        onClick={handleClick}
      /> */}
    </div>
  );
};
