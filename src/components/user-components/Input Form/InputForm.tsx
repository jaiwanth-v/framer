import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { AppContext } from "../../../Context/App.context";
import "./Input.scss";
import Image from "./Input.png";

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
            label={`${label() || ""}`}
            className="input-textfield"
            // variant=""
          />
        </div>
      );
    else return <img className="input-edit " src={Image} alt="" />;
  };
  return typeToShow();
};

export default InputComponent;
