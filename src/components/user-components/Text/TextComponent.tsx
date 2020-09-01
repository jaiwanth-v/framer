import React from "react";
import { TextField } from "@material-ui/core";
import { Resizable, ResizableBox } from "react-resizable";

interface Props {}

const TextComponent: React.FC<Props> = () => {
  return (
    <ResizableBox width={200} height={200} maxConstraints={[300, 300]}>
      <div>
        {/* <TextField label="Text" /> */}
        <span>Hello</span>
      </div>
    </ResizableBox>
  );
};

export default TextComponent;
