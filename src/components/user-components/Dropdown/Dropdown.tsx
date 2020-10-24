import React, { useContext, useState } from "react";
import { MenuItem, Select } from "@material-ui/core";
import { AppContext } from "../../../Context/App.context";
import DropdownImg from "./Dropdown.png";
import "./Dropdown.scss";

interface Props {
  id: any;
}

interface ItemType {
  type: string;
  id: any;
  value: string;
  options: Array<string>;
}

const DropdownComponent: React.FC<Props> = ({ id }) => {
  const {
    state: { edit, items },
  } = useContext(AppContext);

  const item: ItemType = (function () {
    const requiredItem: ItemType = items.filter(
      (item: any) => item.id === id
    )[0];
    return requiredItem;
  })();
  const { options, value } = item;
  const [label, setLabel] = useState<string>("");
  if (label !== "" && options && !options.includes(label)) setLabel("");
  const typeToShow = () => {
    if (!edit)
      return (
        <div>
          <>
            <Select
              value={label || value || "Placeholder"}
              variant="outlined"
              className="select-dropdown"
              onChange={(
                e: React.ChangeEvent<{
                  name?: string | undefined;
                  value: any;
                }>
              ) => setLabel(e.target.value)}
            >
              <MenuItem value={value || "Placeholder"}>
                {value || "Placeholder"}
              </MenuItem>
              {options &&
                options.length &&
                options.map((option, idx) =>
                  option !== "" ? (
                    <MenuItem key={idx} value={option}>
                      {option}
                    </MenuItem>
                  ) : null
                )}
            </Select>
          </>
        </div>
      );
    else
      return (
        <div className="dropdown-container">
          <img
            className="dropdown-edit"
            height="30px"
            width="100px"
            src={DropdownImg}
            alt=""
          />
          <div className="centered-placeholder-dropdown">
            {value || "Placeholder"}
          </div>
        </div>
      );
  };
  return typeToShow();
};

export default DropdownComponent;
