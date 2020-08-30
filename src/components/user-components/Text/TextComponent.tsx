import React from "react";
import { TextField } from "@material-ui/core";

interface Props {}

const TextComponent: React.FC<Props> = () => {
  return (
    <div>
      <TextField label="Text" />
    </div>
  );
};

export default TextComponent;
