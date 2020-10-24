import React, { useContext } from "react";
import Image from "./image.png";
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
        style={{ width: "156px", height: "126px" }}
        id={`${id}1`}
        className="ui-widget-content resizable"
        src={ImageSrc() || Image}
        alt=""
      />
    </div>
  );
};

export default ImageComponent;
