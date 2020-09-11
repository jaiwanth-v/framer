import React, { useState, useContext } from "react";
import { Checkbox } from "@material-ui/core";
import { AppContext } from "../../../Context/App.context";
import CheckboxSVG from "./Checkbox.svg";

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
            onChange={() => setChecked(!checked)}
            checked={checked}
          />
        </div>
      );
    else return <img src={CheckboxSVG} alt="" />;
  };
  return typeToShow();
};

export default CheckboxComponent;
