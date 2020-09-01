import React, { useEffect } from "react";
import Image from "./image.jpg";
import $ from 'jquery';
import 'jqueryui';
interface Props {}

const ImageComponent: React.FC<Props> = () => {

  return (
    <div >
      <img className = 'resizable ui-widget-content' src={Image} alt="" width="200px" />
    </div>
  );
};

export default ImageComponent;
