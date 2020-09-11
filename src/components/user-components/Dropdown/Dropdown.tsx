import React, { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";

interface Props {
  id: any;
}

const DropdownComponent: React.FC<Props> = () => {
  const [value, setValue] = useState<any>(10);
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
};

export default DropdownComponent;
