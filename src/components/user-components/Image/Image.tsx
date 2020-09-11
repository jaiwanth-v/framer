import React, { useContext } from "react";
import Image from "./message.png";
import { AppContext } from "../../../Context/App.context";
interface Props {
  id: any;
}

interface ItemType {
  type: string;
  id: any;
  src: string;
}

const ImageComponent: React.FC<Props> = ({ id }) => {
  const { state } = useContext(AppContext);
  const ImageSrc = () => {
    const requiredItem: ItemType = state.items.filter(
      (item: any) => item.id === id
    )[0];
    return requiredItem.src;
  };

  return (
    <div>
      <img
        className="resizable ui-widget-content"
        src={ImageSrc() || Image}
        alt=""
      />
    </div>
  );
};

export default ImageComponent;
