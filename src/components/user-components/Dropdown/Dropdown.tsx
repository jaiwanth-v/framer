import React, { useContext, useState } from "react";
import { MenuItem, Select } from "@material-ui/core";
import { AppContext } from "../../../Context/App.context";
import SVG from "./Dropdown.png";

interface Props {
  id: any;
}

interface ItemType {
  type: string;
  id: any;
  options: Array<string>;
}

const DropdownComponent: React.FC<Props> = ({ id }) => {
  const {
    state: { edit, items },
  } = useContext(AppContext);

  const [value, setValue] = useState<any>(10);
  const options: any = (function () {
    const requiredItem: ItemType = items.filter(
      (item: any) => item.id === id
    )[0];
    return requiredItem.options;
  })();
  console.log(options);
  const typeToShow = () => {
    if (!edit)
      return (
        <div>
          <Select
            value={value}
            variant="outlined"
            style={{ width: "100px", height: "30px" }}
            onChange={(
              e: React.ChangeEvent<{
                name?: string | undefined;
                value: unknown;
              }>
            ) => setValue(e.target.value)}
          >
            <MenuItem value={options[0]}> {options[0]} </MenuItem>
            <MenuItem value={options[1]}> {options[1]} </MenuItem>
            <MenuItem value={options[2]}> {options[2]} </MenuItem>
            <MenuItem value={options[3]}> {options[3]} </MenuItem>
          </Select>
        </div>
      );
    else
      return (
        <img
          src={SVG}
          alt="Dropdown"
          style={{ borderRadius: "4px" }}
          height="30px"
          width="100px"
        />
      );
  };
  return typeToShow();
};

export default DropdownComponent;
