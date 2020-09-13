import React, { useContext } from "react";
import { AppContext } from "../../../Context/App.context";

interface Props {
  id: any;
}

interface ItemType {
  type: string;
  id: any;
  value: string;
}

const HeadingComponent: React.FC<Props> = ({ id }) => {
  const { state } = useContext(AppContext);
  const heading = () => {
    const requiredItem: ItemType = state.items.filter(
      (item: any) => item.id === id
    )[0];
    return requiredItem.value;
  };
  return (
    <div>
      <h1>{heading() || "This is a heading"}</h1>
    </div>
  );
};

export default HeadingComponent;
