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
  const paragraph = () => {
    const requiredItem: ItemType = state.items.filter(
      (item: any) => item.id === id
    )[0];
    return requiredItem.value;
  };
  return (
    <div className="">
      <p
        className="resizable"
        style={{ maxWidth: "1000px", width: "500px", maxHeight: "1000px" }}
      >
        {paragraph() ||
          "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way."}
      </p>
    </div>
  );
};

export default TextComponent;
