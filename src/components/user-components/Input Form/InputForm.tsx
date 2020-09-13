import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { AppContext } from "../../../Context/App.context";
import SVG from "./Input.svg";

interface Props {
  id: any;
}

const InputComponent: React.FC<Props> = () => {
  const {
    state: { edit },
  } = useContext(AppContext);
  const typeToShow = () => {
    if (!edit)
      return (
        <div>
          <TextField variant="outlined" />
        </div>
      );
    else return <img src={SVG} alt="" width="100px" />;
  };
  return typeToShow();
};

export default InputComponent;
