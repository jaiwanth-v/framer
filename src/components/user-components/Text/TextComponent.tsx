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

const TextComponent: React.FC<Props> = ({ id }) => {
  const { state } = useContext(AppContext);
  const text = () => {
    const requiredItem: ItemType = state.items.filter(
      (item: any) => item.id === id
    )[0];
    return requiredItem.value;
  };
  return (
    <div>
      <span>{text() || "This is a sample text"}</span>
    </div>
  );
};

export default TextComponent;
