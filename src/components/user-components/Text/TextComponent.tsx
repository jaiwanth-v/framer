import React from "react";

interface Props {
  id: any;
}

const TextComponent: React.FC<Props> = () => {
  return (
    <div>
      {/* <TextField label="Text" /> */}
      <span>Hello</span>
    </div>
  );
};

export default TextComponent;
