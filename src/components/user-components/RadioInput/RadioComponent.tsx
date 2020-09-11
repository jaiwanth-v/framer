import React from "react";
import { Radio } from "@material-ui/core";

interface Props {
  id: any;
}

const RadioComponent: React.FC<Props> = () => {
  return (
    <div>
      <Radio />
    </div>
  );
};

export default RadioComponent;
