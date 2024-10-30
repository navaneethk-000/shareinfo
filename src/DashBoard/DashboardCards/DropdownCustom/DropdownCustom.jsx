import { useState } from "react";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { FileTextIcon } from "@radix-ui/react-icons";

export const DropdownCustom = () => {
  const options = [
    { label: "Video", icon: <VideoLibraryIcon className="text-[#077BD8]" /> },
    { label: "Document", icon: <FileTextIcon className="text-[#F31919]" /> },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block items-start">
      <button
        onClick={toggleDropdown}
        className="bordershadow w-[180px] h-[40px]  gap-4"
      >
       <div className="flex gap-1 mr-24">
       {selectedOption.icon}
       {selectedOption.label}
       </div>
      </button>
      {isOpen && (
        <div className="absolute left-0 bordershadow w-[180px] bg-gray-950 flex h-[38.99px]">
          {options.map((option) => (
            <div
              key={option.label}
              onClick={() => handleOptionClick(option)}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-900"
            >
              {option.icon}
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
