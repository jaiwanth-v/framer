import React, { useContext, memo } from "react";
import { Button } from "@material-ui/core";
import { AppContext } from "../../../Context/App.context";
import "./Button.scss";
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
        <>
          <div className="translucent">
            <div>Anything</div>
          </div>
          <svg className="button">
            <filter id="blur">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </svg>
        </>
      );
    else return <Button variant="contained">Hello</Button>;
  };
  return <>{typeToReturn()}</>;
};

export default memo(ButtonComponent);
