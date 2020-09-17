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
            id={`${id}1`}
            inputProps={{
              style: {
                height: `${document.getElementById(id)!.offsetHeight - 20}px`,
              },
            }}
            style={{
              width: document.getElementById(id)?.offsetWidth,
            }}
            placeholder={`${label() || "Placeholder"}`}
            className={`input-textfield ${id} `}
          />
        </div>
      );
    else
      return (
        <div className="input-container">
          <div
            className="input-edit resizable d-flex align-items-center"
            style={{
              width: document.getElementById(`${id}1`)?.offsetWidth || "180px",
              height: document.getElementById(`${id}1`)?.offsetHeight || "50px",
            }}
            id={id}
          >
            <div className="centered-placeholder ml-1">
              {label() || "Placeholder"}
            </div>
          </div>
        </div>
      );
  };
  return typeToShow();
};

export default InputComponent;
