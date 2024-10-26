import { UploadIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";
import { useRef, useState } from "react";

export const CustomFileUpload = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
      <div className="w-[223px]">
        <input type="text" name="" id="" />
        <TextField.Root
          size={"3"}
          placeholder="Upload File"
          value={fileName}
          onClick={handleUploadClick}
          className="readonlytextinput"
          style={{ cursor: "pointer" }}
        >
          <TextField.Slot>
            <UploadIcon className="text-[#F31919]" />
          </TextField.Slot>
        </TextField.Root>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
          readOnly
          className="cursor-none"
        />
      </div> 
    
  );
};