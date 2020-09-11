import React, { useContext } from "react";
import { Radio } from "@material-ui/core";
import { AppContext } from "../../../Context/App.context";
import RadioSVG from "./Radio.svg";

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
          <Radio color="primary" />
        </div>
      );
    else return <img src={RadioSVG} width="50px" alt="" />;
  };

  return typeToShow();
};

export default RadioComponent;
