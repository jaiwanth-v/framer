import React, { useState } from "react";
import { Checkbox } from "@material-ui/core";

interface Props {
  id: any;
}

const CheckboxComponent: React.FC<Props> = () => {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <Checkbox
        color="default"
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
    </div>
  );
};

export default CheckboxComponent;
