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
    <div>
      <p style={{ maxWidth: "600px", width: "500px" }}>
        {paragraph() ||
          "A vigilante is just a man lost in scramble for his own gratification. He can be destroyed or locked up. But if you make yourself more than just a man, if you devote yourself to an ideal and if they can’t stop you then you become something else entirely. Legend, Mr Wayne."}
      </p>
    </div>
  );
};

export default TextComponent;
