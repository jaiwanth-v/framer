import React, { useContext, memo } from "react";
import { Button } from "@material-ui/core";
import { AppContext } from "../../../Context/App.context";
import "./Button.scss";
interface Props {
  id: any;
}

interface ItemType {
  type: string;
  id: any;
  value: string;
}

const ButtonComponent: React.FC<Props> = ({ id }) => {
  const { state } = useContext(AppContext);
  const typeToReturn = (): React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > => {
    const val = () => {
      const requiredItem: ItemType = state.items.filter(
        (item: any) => item.id === id
      )[0];
      return requiredItem.value;
    };

    if (state.edit)
      return (
        <>
          <div className="translucent">
            <div>{val() || "Button"}</div>
          </div>
          <svg className="button">
            <filter id="blur">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </svg>
        </>
      );
    else return <Button variant="contained"> {val() || "Button"} </Button>;
  };
  return <>{typeToReturn()}</>;
};

export default memo(ButtonComponent);
