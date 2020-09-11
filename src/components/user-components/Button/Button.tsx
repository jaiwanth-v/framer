import React, { useContext, memo } from "react";
import { Button } from "@material-ui/core";
import { AppContext } from "../../../Context/App.context";

interface Props {
  id: any;
}

const ButtonComponent: React.FC<Props> = () => {
  const { state } = useContext(AppContext);
  console.log(state);
  const typeToReturn = (): React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > => {
    if (state.edit)
      return (
        <div
          style={{
            backgroundColor: "grey",
            position: "absolute",
            top: "",
            left: 0,
            right: 0,
            bottom: 0,
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Button
        </div>
      );
    else return <Button variant="contained">Hello</Button>;
  };
  return <div>{typeToReturn()}</div>;
};

export default memo(ButtonComponent);
