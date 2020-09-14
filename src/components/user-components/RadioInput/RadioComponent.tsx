import React, { useContext } from "react";
import { Radio } from "@material-ui/core";
import { AppContext } from "../../../Context/App.context";
import RadioImg from "./Radio.png";

interface Props {
  id: any;
}

const RadioComponent: React.FC<Props> = () => {
  const {
    state: { edit },
  } = useContext(AppContext);
  const typeToShow = () => {
    if (!edit)
      return (
        <div>
          <Radio style={{ width: "20px", height: "20px" }} color="primary" />
        </div>
      );
    else return <img src={RadioImg} height="20px" width="20px" alt="" />;
  };

  return typeToShow();
};

export default RadioComponent;
