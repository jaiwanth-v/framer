import React, { useContext, memo } from "react";
import { Button } from "@material-ui/core";
import { AppContext } from "../../../Context/App.context";

interface Props {}

const ButtonComponent: React.FC<Props> = () => {
  const { state } = useContext(AppContext);
  return (
    <div>
      <Button className="resizable" variant="contained">
        Hello
      </Button>
    </div>
  );
};

export default memo(ButtonComponent);
