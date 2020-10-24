/*eslint-disable*/
import React, { useContext, useState } from "react";
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
    return (
      <div className="input-container">
        <div className={`${edit && "input-edit"} resizable d-flex`} id={id}>
          {edit ? (
            <div className="p-2 ">{label() || "Placeholder"}</div>
          ) : (
            <TextField
              multiline
              variant="outlined"
              style={{ width: "inherit" }}
              id={`${id}1`}
              placeholder={`${label() || "Placeholder"}`}
              className={`input-textfield ${id} `}
            />
          )}
        </div>
      </div>
    );
  };
  return typeToShow();
};

export default InputComponent;
