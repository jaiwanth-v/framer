import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { AppContext } from "../../../Context/App.context";
import "./Input.scss";

interface Props {
  id: any;
}

interface ItemType {
  type: string;
  id: any;
  value: string;
}

const InputComponent: React.FC<Props> = ({ id }) => {
  const {
    state: { edit, items },
  } = useContext(AppContext);
  const label = () => {
    const requiredItem: ItemType = items.filter(
      (item: any) => item.id === id
    )[0];
    return requiredItem.value;
  };
  const typeToShow = () => {
    if (!edit)
      return (
        <div>
          <TextField
            variant="outlined"
            placeholder={`${label() || "Placeholder"}`}
            className="input-textfield"
          />
        </div>
      );
    else
      return (
        <div className="input-container">
          <div className="input-edit" />
          <div className="centered-placeholder">{label() || "Placeholder"}</div>
        </div>
      );
  };
  return typeToShow();
};

export default InputComponent;
