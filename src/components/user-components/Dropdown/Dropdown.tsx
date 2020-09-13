import React, { useContext, useState } from "react";
import { MenuItem, Select } from "@material-ui/core";
import { AppContext } from "../../../Context/App.context";
import SVG from "./Dropdown.svg";

interface Props {
  id: any;
}

const DropdownComponent: React.FC<Props> = () => {
  const {
    state: { edit },
  } = useContext(AppContext);

  const [value, setValue] = useState<any>(10);

  const typeToShow = () => {
    if (!edit)
      return (
        <div>
          <Select
            value={value}
            variant="outlined"
            fullWidth
            onChange={(
              e: React.ChangeEvent<{
                name?: string | undefined;
                value: unknown;
              }>
            ) => setValue(e.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
      );
    else return <img src={SVG} alt="" width="100px" />;
  };
  return typeToShow();
};

export default DropdownComponent;
