import React, { useContext } from "react";
import { AppContext } from "../../../Context/App.context";
import "./Paragraph.scss";

interface Props {
  id: any;
}

interface ItemType {
  type: string;
  id: any;
  value: string;
}

const Paragraph: React.FC<Props> = ({ id }) => {
  const { state } = useContext(AppContext);
  const paragraph = () => {
    const requiredItem: ItemType = state.items.filter(
      (item: any) => item.id === id
    )[0];
    return requiredItem.value;
  };

  return (
    <div>
      <div
        id={id}
        className="resizable"
        style={{
          maxWidth: "1000px",
          width: "300px",
          maxHeight: "1000px",
          minWidth: "100px",
          overflow: "hidden",
        }}
      >
        <p contentEditable>
          {paragraph() ||
            "Sometimes I'll start a sentence and I don't even know where it's going and along the way it becomes a paragraph."}
        </p>
      </div>
    </div>
  );
};

export default Paragraph;
