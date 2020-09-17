import React, { useContext, useState } from "react";
import { MenuItem, Select } from "@material-ui/core";
import { AppContext } from "../../../Context/App.context";
import DropdownImg from "./Dropdowns.png";
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
  var { options, value } = item;
  // eslint-disable-next-line no-redeclare
  var [value, setValue] = useState<string>(value || "Placeholder");
  const typeToShow = () => {
    if (!edit)
      return (
        <div>
          {options ? (
            options.length && (
              <>
                <Select
                  value={value || "Placeholder"}
                  variant="outlined"
                  className="select-dropdown"
                  onChange={(
                    e: React.ChangeEvent<{
                      name?: string | undefined;
                      value: any;
                    }>
                  ) => setValue(e.target.value)}
                >
                  <MenuItem value={value || "Placeholder"} disabled>
                    {value || "Placeholder"}
                  </MenuItem>
                  {options.map((option) =>
                    option !== "" ? (
                      <MenuItem value={option}> {option} </MenuItem>
                    ) : null
                  )}
                </Select>
              </>
            )
          ) : (
            <Select
              variant="outlined"
              className="select-dropdown"
              value={value || "Placeholder"}
            >
              <MenuItem value={value || "Placeholder"} disabled>
                Placeholder
              </MenuItem>
            </Select>
          )}
        </div>
      );
    else
      return (
        <div className="dropdown-container">
          <img
            className="dropdown-edit"
            height="30px"
            style={{ borderRadius: "4px" }}
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
