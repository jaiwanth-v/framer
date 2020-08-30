import React from "react";
import Image from "./image.jpg";
interface Props {}

const ImageComponent: React.FC<Props> = () => {
  return (
    <div>
      <img src={Image} alt="" width="200px" />
    </div>
  );
};

export default ImageComponent;
