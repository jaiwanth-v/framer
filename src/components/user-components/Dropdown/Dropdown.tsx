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
  const { options, value } = item;
  const [label, setLabel] = useState<any>(value || 0);
  const typeToShow = () => {
    console.log(label);
    if (!edit)
      return (
        <div>
          {options ? (
            options.length && (
              <>
                <Select
                  value={label}
                  variant="outlined"
                  className="select-dropdown"
                  onChange={(
                    e: React.ChangeEvent<{
                      name?: string | undefined;
                      value: unknown;
                    }>
                  ) => setLabel(e.target.value)}
                >
                  <MenuItem value={label} disabled>
                    {" "}
                    {label}{" "}
                  </MenuItem>
                  <MenuItem value={options[0]}> {options[0]} </MenuItem>
                  <MenuItem value={options[1]}> {options[1]} </MenuItem>
                  <MenuItem value={options[2]}> {options[2]} </MenuItem>
                  <MenuItem value={options[3]}> {options[3]} </MenuItem>
                </Select>
              </>
            )
          ) : (
            <Select
              variant="outlined"
              className="select-dropdown"
              value={label}
            >
              <MenuItem value={label} disabled>
                Placeholder
              </MenuItem>
            </Select>
          )}
        </div>
      );
    else
      return (
        <div className="input-container">
          <img
            className="input-edit"
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
