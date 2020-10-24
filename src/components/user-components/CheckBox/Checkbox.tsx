import React, { useState, useContext } from "react";
import { Checkbox } from "@material-ui/core";
import { AppContext } from "../../../Context/App.context";
import CheckboxImg from "./Checkbox.png";

interface Props {
  id: any;
}

const CheckboxComponent: React.FC<Props> = () => {
  const [checked, setChecked] = useState(true);
  const {
    state: { edit },
  } = useContext(AppContext);
  const typeToShow = () => {
    if (!edit)
      return (
        <div>
          <Checkbox
            color="primary"
            style={{ width: "20px", height: "20px" }}
            onChange={() => setChecked(!checked)}
            checked={checked}
          />
        </div>
      );
    else
      return (
        <img
          src={CheckboxImg}
          style={{ borderRadius: "5px" }}
          height="20px"
          width="20px"
          alt="Checkbox"
        />
      );
  };
  return typeToShow();
};

export default CheckboxComponent;
